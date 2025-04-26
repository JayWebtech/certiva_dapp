"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "../layout/Logo";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", href: "/account/dashboard" },
    { name: "Issue Certificate", href: "/issue-certificate" },
    { name: "View Certificates", href: "/view-certificates" },
    { name: "Verification Logs", href: "/account/dashboard/verification-logs" },
    { name: "API & Integration", href: "/api-integration" },
    { name: "Settings", href: "/settings" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-[#A3FF50]"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar for Desktop */}
      <div className="hidden md:block bg-black text-white w-64 min-h-screen pl-4 pr-1 py-4 border-r border-gray-800">
        <Logo />
        <nav className="mt-10 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center p-3 transition-all duration-500 hover:bg-[#A3FF50] hover:text-black rounded"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-black bg-opacity-50 
          md:hidden 
          transition-opacity duration-300 ease-in-out
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={toggleSidebar}
      >
        <div
          className={`
            fixed left-0 top-0 w-64 h-full bg-black 
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            shadow-lg
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4">
            <span className="text-2xl font-bold text-green-500">Certiva</span>
            <button onClick={toggleSidebar} className="text-green-500">
              <X size={24} />
            </button>
          </div>
          <nav className="mt-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center p-3 hover:bg-[#A3FF50] hover:text-black rounded transition"
                onClick={toggleSidebar}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
