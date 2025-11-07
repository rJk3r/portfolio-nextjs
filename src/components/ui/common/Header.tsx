'use client';

import Link from 'next/link';
import { CodeXml, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '../lib/utils';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "../sheet";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Main' },
    { href: '/about', label: 'About' },
    { href: '/works', label: 'Works' },
    { href: '/social', label: 'Social' },
    { href: '/achievements', label: 'Achievements' },
    { href: '/ideas', label: 'Ideas' },
  ];

  return (
    <header className="py-4 sm:py-6 border-b border-border/50 sticky top-0 bg-background/80 backdrop-blur-sm z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <CodeXml className="h-8 w-8 text-primary group-hover:animate-pulse" />
          <span className="text-xl sm:text-2xl font-headline font-semibold text-foreground group-hover:text-primary transition-colors">
            rJk3r's Realm
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname === item.href
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-label="Open main menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-background p-0">
              <SheetTitle className="sr-only">Main menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b border-border/50">
                   <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
                      <CodeXml className="h-7 w-7 text-primary" />
                      <span className="text-lg font-headline font-semibold text-foreground">
                        About rJk3r
                      </span>
                    </Link>
                  <SheetClose asChild>
                    <button
                      className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </SheetClose>
                </div>
                <nav className="flex-grow flex flex-col gap-4 p-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block px-3 py-2 rounded-md text-base font-medium",
                        pathname === item.href
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
