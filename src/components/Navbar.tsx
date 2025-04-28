import { Link } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-primary font-bold text-xl">
              AI HR Interview Practice Bot
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex md:space-x-8">
              <Link to="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/profile" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Start Practice
              </Link>
              <Link to="/contact-us" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <Link to="/account" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Account
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
