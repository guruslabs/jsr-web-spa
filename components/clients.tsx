'use client';

import { useEffect, useState } from 'react';

const clients = [
  {
    name: 'MasteryHub - Software House',
    logo: 'https://i.ibb.co/DLfwwwg/masteryhub-its-logo.jpg',
  },
  {
    name: 'GurusLabs - Digital Agency',
    logo: 'https://i.ibb.co/4KyBv3S/gurus.png',
  },
  {
    name: 'Qahawat.com - E-commerce Website',
    logo: 'https://i.ibb.co/2jCqnXY/qahawat.png',
  },
];

export function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (clients.length - 3));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="clients" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Clients</h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 4)}%)`,
            }}
          >
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex-none w-1/4 px-4"
              >
                <div className="bg-background rounded-lg p-8 shadow-sm">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-24 object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}