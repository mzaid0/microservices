import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="text-xl font-bold text-zinc-50 tracking-wide">
              NOVA<span className="text-zinc-400">Services</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/services"
                className="text-zinc-300 hover:text-zinc-50 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-zinc-300 hover:text-zinc-50 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-zinc-300 hover:text-zinc-50 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="text-zinc-300 hover:text-zinc-50 hover:bg-zinc-800/50"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-zinc-50 text-zinc-900 hover:bg-zinc-200 transition-colors">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-zinc-300 hover:text-zinc-50"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}