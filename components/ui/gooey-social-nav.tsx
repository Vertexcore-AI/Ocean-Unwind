"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export function GooeySocialNav() {
  const socialLinks: SocialLink[] = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/company/ocean-unmined/",
      label: "LinkedIn"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/oceans_unmined/?hl=en",
      label: "Instagram"
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      href: "https://www.facebook.com/profile.php?id=61584388191133",
      label: "Facebook"
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      href: "https://www.youtube.com/channel/UCZybxr7BQbt1AuThLquBsJw",
      label: "YouTube"
    }
  ];

  return (
    <div className="relative inline-block">
      {/* SVG Gooey Filter */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="gooey-social-effect">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Social Icons Container with Gooey Effect */}
      <div className="flex gap-4" style={{ filter: 'url(#gooey-social-effect)' }}>
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="relative w-14 h-14 flex items-center justify-center rounded-full bg-ocean-cyan text-white hover:bg-ocean-yellow hover:text-ocean-dark transition-all duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
