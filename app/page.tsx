'use client';

import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Vision } from '@/components/vision';
import { Services } from '@/components/services';
import { Clients } from '@/components/clients';
import { Contact } from '@/components/contact';
import { Toaster } from '@/components/ui/sonner';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Vision />
      <Services />
      <Clients />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}