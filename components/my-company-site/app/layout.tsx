export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <h1>My Company</h1>
        {/* Add navigation links here */}
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      </footer>
    </div>
  );
}