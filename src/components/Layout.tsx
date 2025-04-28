import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CompanyShowcase from "./CompanyShowcase";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground dark:bg-background dark:text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6 sm:px-6 lg:px-8 animate-fade-in">
        <Outlet />
      </main>
      <CompanyShowcase />
      <Footer />
    </div>
  );
};

export default Layout;
