import { Facebook, Instagram, X, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface FooterSection {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

const footerSections: FooterSection[] = [
  {
    title: "Company",
    links: [
      { name: "Moonwalkers", href: "/" },
      { name: "Moonwalkers Aero", href: "/" },
      { name: "About Us", href: "/" },
      { name: "Press & News", href: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Careers", href: "/" },
      { name: "Getting Started", href: "/" },
      { name: "For Business", href: "/" },
      { name: "Download iOS App", href: "/" },
      { name: "Download Android App", href: "/" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQs", href: "/" },
      { name: "Safety Information", href: "/" },
      { name: "Shipping & Returns", href: "/" },
      { name: "Contact Us", href: "/" },
    ],
  },
  {
    title: "Disclaimers",
    links: [
      { name: "Terms & Conditions", href: "/" },
      { name: "Privacy Policy", href: "/" },
      { name: "Accessibility", href: "/" },
      { name: "Virtual Patent Marking", href: "/" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "/" },
  { icon: Instagram, href: "/" },
  { icon: Youtube, href: "/" },
  { icon: X, href: "/" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] divide-x flex flex-col text-white">
      <div className="container divide-y flex mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-medium mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col lg:flex-row p-12 justify-between items-center space-y-4 lg:space-y-0">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="Shift Robotics" width={32} height={32} />
        </div>

        <div className="text-gray-400 text-sm">
          <span className="uppercase">
            COPYRIGHT {new Date().getFullYear()} Kitus FWI, INC.
          </span>
          <Link href="https://topographic.studio">
            <span className="uppercase">Site by Topographic Studio</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
