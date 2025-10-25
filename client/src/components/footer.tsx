import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 bg-zinc-950/90 border-t border-zinc-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Link href="/" className="text-xl font-bold text-zinc-50 tracking-wide">
                NOVA<span className="text-zinc-400">Services</span>
              </Link>
            </div>
            <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
              A modern microservice architecture platform built with cutting-edge technologies. 
              Scalable, reliable, and designed for the future.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-zinc-400 hover:text-zinc-50 transition-colors"
                aria-label="Github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-zinc-50 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-zinc-50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-zinc-50 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-zinc-50 font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/user" className="text-zinc-400 hover:text-zinc-300 text-sm transition-colors">
                  User Management
                </Link>
              </li>
              <li>
                <Link href="/services/product" className="text-zinc-400 hover:text-zinc-300 text-sm transition-colors">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link href="/services/order" className="text-zinc-400 hover:text-zinc-300 text-sm transition-colors">
                  Order Processing
                </Link>
              </li>
              <li>
                <Link href="/services/inventory" className="text-zinc-400 hover:text-zinc-300 text-sm transition-colors">
                  Inventory System
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-zinc-50 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-zinc-300 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-zinc-400 hover:text-zinc-300 text-sm transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-zinc-400 hover:text-zinc-300 text-sm transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-zinc-300 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-400 text-sm">
              © 2025 NOVAServices. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-zinc-400 hover:text-zinc-300 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-zinc-400 hover:text-zinc-300 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}