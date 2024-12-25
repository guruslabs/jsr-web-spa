'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Building2, Briefcase, PenTool, Home } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Commercial Spaces',
    shortDesc: 'Modern office spaces designed for productivity and collaboration',
    longDesc: 'Our commercial spaces are meticulously designed to foster innovation and productivity. We combine ergonomic design principles with modern aesthetics to create workspaces that inspire creativity and drive success.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
  },
  {
    icon: Home,
    title: 'Residential Projects',
    shortDesc: 'Luxury living spaces that redefine comfort',
    longDesc: 'Experience the perfect blend of luxury and comfort in our residential projects. Each space is thoughtfully crafted to create an environment that reflects your personality while maintaining the highest standards of modern living.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0',
  },
  {
    icon: PenTool,
    title: 'Interior Design',
    shortDesc: 'Bespoke interior solutions for every space',
    longDesc: 'Our interior design services transform spaces into stunning environments that perfectly balance aesthetics and functionality. We work closely with clients to create unique designs that reflect their vision and lifestyle.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
  },
  {
    icon: Briefcase,
    title: 'Project Management',
    shortDesc: 'End-to-end project execution and monitoring',
    longDesc: 'Our experienced project management team ensures seamless execution from concept to completion. We handle all aspects of the project lifecycle, maintaining the highest standards of quality and efficiency.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf',
  },
];

export function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.shortDesc}</p>
              <Button
                variant="outline"
                onClick={() => setSelectedService(service)}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedService?.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <img
              src={selectedService?.image}
              alt={selectedService?.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-muted-foreground">{selectedService?.longDesc}</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}