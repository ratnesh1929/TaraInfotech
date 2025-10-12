// filepath: my-company-site/app/about/page.tsx
import { AboutHero } from '@/components/sections/AboutHero'
import { Team } from '@/components/sections/Team'
import { Values } from '@/components/sections/Values'

export default function AboutPage() {
  return (
    <>
      <AboutHero/>
      <Values/>
      <Team/>
    </>
  )
}