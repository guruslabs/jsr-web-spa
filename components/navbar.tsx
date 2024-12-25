'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <span className="text-2xl font-bold">JSR Spaces</span>
          <div className="hidden md:flex space-x-8">
            {[
              ['hero', 'Home'],
              ['vision', 'Vision'],
              ['services', 'Services'],
              ['clients', 'Clients'],
              ['contact', 'Contact'],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}