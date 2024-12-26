import React from "react";
import { Facebook, Instagram, Linkedin, Locate, LocateIcon, MapPin, PhoneIcon } from "lucide-react";

export function Footer() {

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/jsrspaces" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/jsrspaces" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/jsrspaces" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <img
                src="https://i.ibb.co/g9TF43M/jsr-hq.png"
                alt="Company Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <span className="text-gray-400 text-sm text-center md:text-left">
                <MapPin/> 30 Asmaa Fahmi, AlGolf, Koleyet ElBanat, Heliopolis, Cairo.
            </span>
            <p className="text-gray-400 text-sm text-center md:text-left">
                <PhoneIcon/> +201040806692
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={`Follow us on ${social.name}`}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} JSR Spaces. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};