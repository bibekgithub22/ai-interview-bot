import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <footer className="bg-background border-t mt-8">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/profile" className="hover:text-primary">Start Practice</Link></li>
              <li><Link to="/contact-us" className="hover:text-primary">Contact Us</Link></li>
              <li><Link to="/account" className="hover:text-primary">Account</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4 text-sm">Get the latest updates and interview tips delivered to your inbox.</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="flex-1"
                disabled={submitted}
              />
              <Button type="submit" disabled={submitted || !email}>
                {submitted ? "Subscribed!" : "Subscribe"}
              </Button>
            </form>
          </div>

          {/* About/Brand */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-muted-foreground text-sm">
                AI HR Interview Practice Bot helps you prepare for interviews with realistic AI-driven questions and feedback. Boost your confidence and land your dream job!
              </p>
            </div>
            <div className="mt-6 text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} AI HR Interview Practice Bot. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
