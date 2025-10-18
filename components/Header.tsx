'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const Header = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Stefan Hoogers
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground/60"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-foreground/60"
              }`}
            >
              About
            </Link>
            <Link 
              href="/experience" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/experience") ? "text-primary" : "text-foreground/60"
              }`}
            >
              Experience
            </Link>
            <Link 
              href="/blog" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/blog") ? "text-primary" : "text-foreground/60"
              }`}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-foreground/60"
              }`}
            >
              Contact
            </Link>
          </nav>

          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href="https://heyloha.ai" target="_blank" rel="noopener noreferrer">
              Visit Heyloha
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;