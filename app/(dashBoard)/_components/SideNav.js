"use client";
import { File, Shield, Upload } from "lucide";
import Image from "next/image";
import React, { useState } from "react";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Upload",
      icon: Upload,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: File,
      path: "/files",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="shadow-sm h-full border-r">
      <div className="p-5 border-b">
        <Image src="/logo.svg" width={150} height={100} />
      </div>
      <div className="flex flex-col float-left">
        {menuList.map((item, index) => (
          <button
            className={`flex gap-2 p-4 px-0 hover:bg-gray-100 text-gray-500 
            ${activeIndex == index ? "bg-blue-50 text-primary" : null}`}
            onClick={() => setActiveIndex(index)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
