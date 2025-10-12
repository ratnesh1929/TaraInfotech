"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import React, { ReactNode } from "react";
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}
interface CountUpProps {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function GradientText({
  children,
  className = "",
  // colors = ["#eff6ff", "#3b82f6", "#1e3a8a", "#1e3a8a", "#94a3b8", "#0f172a"],
  colors = ['#3b82f6', // primary-500
  '#3b82f6', // primary-500
  '#60a5fa', // primary-400
  '#93c5fd', // primary-300
  '#94a3b8', // secondary-400
  '#cbd5e1'  // secondary-300
  ],
  animationSpeed = 8,
  showBorder = false,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };
  return (
    <div
      className={`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}
    >
      {showBorder && (
        <div
          className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
          style={{
            ...gradientStyle,
            backgroundSize: "300% 100%",
          }}
        >
          <div
            className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>
      )}
      <div
        className="inline-block relative z-2 text-transparent bg-cover animate-gradient"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundSize: "300% 100%",
        }}
      >
        {children}
      </div>
    </div>
  );
}


function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = String(direction === 'down' ? to : from);
    }
  }, [from, to, direction]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === 'function') {
        onStart();
      }

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(
        () => {
          if (typeof onEnd === 'function') {
            onEnd();
          }
        },
        delay * 1000 + duration * 1000
      );

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', latest => {
      if (ref.current) {
        const hasDecimals = maxDecimals > 0;

        const options: Intl.NumberFormatOptions = {
          useGrouping: !!separator,
          minimumFractionDigits: hasDecimals ? maxDecimals : 0,
          maximumFractionDigits: hasDecimals ? maxDecimals : 0
        };

        const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);

        ref.current.textContent = separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
      }
    });

    return () => unsubscribe();
  }, [springValue, separator, maxDecimals]);

  return <span className={className} ref={ref} />;
}

export function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const heroTexts = [
    "Web Development",
    "Mobile Applications",
    "Digital Solutions",
    "UI/UX Design",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroTexts.length]);

  // lock background scroll and handle Esc to close modal
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDemoOpen(false);
    };

    if (isDemoOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener("keydown", handleKey);
      };
    }
  }, [isDemoOpen]);

  // play/pause/reset video when modal opens/closes
  useEffect(() => {
    if (isDemoOpen) {
      videoRef.current?.play().catch(() => {
        /* autoplay may be blocked; user can use controls */
      });
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
        try {
          videoRef.current.currentTime = 0;
        } catch {}
      }
    }
  }, [isDemoOpen]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                We Build Amazing
                {/* <span className="block gradient-text"> */}
                {/* {heroTexts[currentText]} */}
                <GradientText
                  animationSpeed={10}
                  showBorder={false}
                  className="px-2"
                >
                  {heroTexts[currentText]}
                </GradientText>
                {/* </span> */}
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Transform your business with cutting-edge technology solutions.
                We deliver innovative web and mobile applications that drive
                growth and success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors group"
              >
                Get Started
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <button
                type="button"
                onClick={() => setIsDemoOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
              >
                <Play size={20} className="mr-2" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600"><CountUp to={10} />+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600"><CountUp to={10} />+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600"><CountUp to={1} /></div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full h-96 rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/hero.jpg"
                  alt="Digital Vision"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -left-8 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full opacity-20"></div>
      </div>

      {/* Demo Modal */}
      {isDemoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
          onClick={() => setIsDemoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsDemoOpen(false)}
              aria-label="Close demo"
              className="absolute -top-6 right-0 text-white bg-black bg-opacity-50 rounded-full p-2 hover:opacity-90"
            >
              ✕
            </button>

            <div className="w-full h-0 pb-[56.25%] relative">
              <video
                ref={videoRef}
                src="/Video.mp4"
                controls
                className="absolute inset-0 w-full h-full rounded-lg bg-black"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
