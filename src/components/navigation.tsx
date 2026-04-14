"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import {
  GraduationCap,
  Menu,
  X,
  Search,
  Moon,
  Sun,
  User,
  ChevronDown,
  Globe,
  Heart,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/study-abroad", label: "Study Abroad" },
  { href: "/courses", label: "Courses" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Dark mode initialization
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "true" : prefersDark;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", String(newMode));
    document.documentElement.classList.toggle("dark", newMode);
  };

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close search on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex h-16 sm:h-20 items-center justify-between gap-4" role="navigation" aria-label="Main navigation">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0" aria-label="ScholarPath Home">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg"
              >
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ScholarPath
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`relative px-3 xl:px-4 py-2 text-sm font-medium transition-colors group rounded-lg ${
                      pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-[calc(100%-1rem)] transition-all duration-300"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Search */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Toggle search"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Dark Mode Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                <AnimatePresence mode="wait">
                  {darkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>

              {/* User Menu */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  aria-label="User menu"
                  aria-expanded={userMenuOpen}
                >
                  <User className="h-5 w-5" />
                </Button>

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-border bg-background shadow-xl p-2"
                    >
                      <div className="space-y-1">
                        <Link
                          href="/dashboard"
                          className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-accent transition-colors"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <User className="h-4 w-4" />
                          Dashboard
                        </Link>
                        <Link
                          href="/dashboard?tab=saved"
                          className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-accent transition-colors"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <Heart className="h-4 w-4" />
                          Saved Items
                        </Link>
                        <Link
                          href="/dashboard?tab=applications"
                          className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-accent transition-colors"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <BookOpen className="h-4 w-4" />
                          My Applications
                        </Link>
                        <div className="border-t border-border my-1" />
                        <Link
                          href="/admin/login"
                          className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-accent transition-colors text-muted-foreground"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          Admin Login
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <Link href="/study-abroad">
                <Button className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger
                  render={
                    <Button variant="ghost" size="icon" aria-label="Open menu">
                      <Menu className="h-6 w-6" />
                    </Button>
                  }
                />
                <SheetContent side="right" className="w-full sm:w-96 p-0">
                  <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between p-4 border-b border-border">
                      <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
                          <GraduationCap className="h-6 w-6" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          ScholarPath
                        </span>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                      >
                        <X className="h-6 w-6" />
                      </Button>
                    </div>

                    {/* Mobile Search */}
                    <div className="p-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search programs, scholarships..."
                          className="pl-10"
                          aria-label="Search"
                        />
                      </div>
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="flex-1 overflow-y-auto px-4 pb-4" aria-label="Mobile navigation">
                      <div className="space-y-1">
                        {navLinks.map((link, index) => (
                          <motion.div
                            key={link.href}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              className={`flex items-center px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                                pathname === link.href
                                  ? "bg-primary/10 text-primary"
                                  : "hover:bg-accent text-foreground"
                              }`}
                            >
                              {link.label}
                            </Link>
                          </motion.div>
                        ))}
                      </div>

                      <div className="border-t border-border my-4 pt-4 space-y-1">
                        <Link
                          href="/dashboard"
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 text-base rounded-xl hover:bg-accent transition-colors"
                        >
                          <User className="h-5 w-5" />
                          Dashboard
                        </Link>
                        <Link
                          href="/dashboard?tab=saved"
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 text-base rounded-xl hover:bg-accent transition-colors"
                        >
                          <Heart className="h-5 w-5" />
                          Saved Items
                        </Link>
                      </div>
                    </nav>

                    {/* Mobile CTA */}
                    <div className="p-4 border-t border-border">
                      <Link href="/study-abroad" onClick={() => setMobileOpen(false)}>
                        <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white">
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>

        {/* Search Overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl"
            >
              <div className="mx-auto max-w-3xl px-4 py-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search programs, scholarships, universities..."
                    className="pl-12 h-12 text-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    aria-label="Search ScholarPath"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                    }}
                    aria-label="Close search"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                {searchQuery && (
                  <div className="mt-4 text-sm text-muted-foreground">
                    Press Enter to search for "{searchQuery}"
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-16 sm:h-20" aria-hidden="true" />
    </>
  );
}
