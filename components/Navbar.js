"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const changeTheme = () => {
    if (!mounted) return;
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <nav className="backdrop-blur-md border-b border-white/30 shadow-lg rounded w-full p-4 top-0 left-0 z-50 bg-white/60 mb-10 dark:bg-black/60">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo or title */}
        <div className="text-xl font-bold text-black dark:text-white">
          {" "}
            <Link href={"/"}>kamleshgurjarpalwas</Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-black dark:text-white font-medium text-lg">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`hover:text-blue-500 transition ${
                  pathname === item.href
                    ? "text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme toggle + mobile menu button */}
        <div className="flex items-center gap-2">
          {mounted && (
            <Button variant="ghost" size="icon" onClick={changeTheme}>
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-800" />
              )}
            </Button>
          )}

          {/* Mobile menu toggle button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-black dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-black dark:text-white" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <ul className="flex flex-col md:hidden mt-4 space-y-3 text-black dark:text-white font-medium text-base px-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`block py-2 hover:text-blue-500 transition ${
                  pathname === item.href
                    ? "text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4"
                    : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
