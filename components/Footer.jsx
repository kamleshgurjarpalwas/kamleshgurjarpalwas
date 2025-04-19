"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-300 dark:border-gray-700 py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Branding / Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Kamlesh Gurjar. All rights reserved.
        </p>

        {/* Navigation */}
        <div className="flex space-x-6 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/projects" className="hover:text-blue-600">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/KamleshGurjar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 text-gray-700 dark:text-gray-300 hover:text-blue-600" />
          </a>
          <a
            href="https://linkedin.com/in/kamleshgurjarpalwas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300 hover:text-blue-600" />
          </a>
        </div>
      </div>
    </footer>
  );
}
