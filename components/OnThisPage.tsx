"use client";

import { useEffect, useState } from "react";

export default function OnThisPage() {
  const links = [
    { name: "Why Choose Vihaya?", href: "#why-choose" },
    { name: "Getting Started", href: "#getting-started" },
    { name: "Customize Your Event Experience", href: "#customize" },
  ];

  const [activeLink, setActiveLink] = useState("#why-choose");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        return { id, element, top: element?.getBoundingClientRect().top || 0 };
      });

      const current = sections.find(section => 
        section.top <= 100 && section.top >= -200
      );

      if (current) {
        setActiveLink(`#${current.id}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="fixed right-0 top-[6.5rem] w-64 h-[calc(100vh-6.5rem)] bg-black border-l border-[#1f1f1f] overflow-y-auto p-6">
      <h3 className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-3">
        On this page
      </h3>
      <nav className="space-y-1.5">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`block text-sm transition-colors py-1 ${
              activeLink === link.href
                ? "text-[#22c55e] font-medium"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </aside>
  );
}

