import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 w-full bg-white">
      <nav className="px-5 py-3 flex items-center justify-between border border-white w-full">
        {/* <h1 className="text-white"></h1> */}
        <Logo />
        <button className="bg-retro py-1.5 px-4 text-white rounded-sm border-none">
          Login
        </button>
      </nav>
    </header>
  );
}
