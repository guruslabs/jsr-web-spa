'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Building2, Briefcase, PenTool, Home, User, Table, Table2, Monitor, Printer, Phone } from 'lucide-react';

const services = [
  {
    icon: User,
    title: 'Coworking Membership',
    shortDesc: 'Collaborative workspaces designed to foster networking, creativity, and productivity.',
    longDesc: 'Ccollaborative workspaces designed to foster networking, creativity, and productivity. Flexible membership plans. Networking opportunities. Access to communal areas, kitchen, and lounges.',
    image: 'https://i.ibb.co/JmjC1Jy/shared2.jpg',
  },
  {
    icon: Printer,
    title: 'Private Offices',
    shortDesc: 'Private offices tailored to your team\'s needs, with all the amenities of a modern workplace.',
    longDesc: 'Private offices tailored to your team\'s needs, with all the amenities of a modern workplace. 24/7 access. High-speed internet. Meeting rooms.',
    image: 'https://i.ibb.co/JCnRzwY/office.jpg',
  },
  {
    icon: Phone,
    title: 'Virtual Offices',
    shortDesc: 'Professional virtual office services to enhance your business presence without the need for a physical location.',
    longDesc: 'Professional virtual office services to enhance your business presence without the need for a physical location. ',
    image: 'https://i.ibb.co/WPCQyV9/cabins4.jpg',
  },
  {
    icon: Monitor,
    title: 'Meeting & Event Spaces',
    shortDesc: 'Book our stylish meeting and event spaces for client meetings, team events, or workshops.',
    longDesc: 'Book our stylish meeting and event spaces for client meetings, team events, or workshops. ',
    image: 'https://i.ibb.co/Xk8fyN5/shared5.jpg',
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