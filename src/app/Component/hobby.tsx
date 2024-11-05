"use client"; // Menandakan bahwa ini adalah komponen klien

import React, { useContext } from "react";
import { ThemeContext } from "./Theme"; // Pastikan path ini sesuai dengan lokasi Theme.tsx Anda

// Objek Hobi
const hobbies = [
  {
    id: 1,
    name: "Bermusik",
    image:
      "https://i.pinimg.com/236x/37/b2/c0/37b2c05cfde66aaeff30f86ed085267c.jpg",
  },
  {
    id: 2,
    name: "Seni Teater",
    image:
      "https://i.pinimg.com/236x/01/7b/d0/017bd06b394c8ea020195cada761024a.jpg",
  },
  {
    id: 3,
    name: "Membaca Novel",
    image:
      "https://i.pinimg.com/236x/55/43/13/554313d5e039f11714bda978f4352f5f.jpg",
  },
  {
    id: 4,
    name: "Menonton Film",
    image:
      "https://i.pinimg.com/736x/3b/ca/ac/3bcaac984f1384cc51de16aebed205d8.jpg",
  },
];

const Hobby = () => {
  const themeContext = useContext(ThemeContext);

  // Pastikan themeContext ada sebelum mengaksesnya
  if (!themeContext) {
    return null; // Menghindari kesalahan jika context tidak tersedia
  }

  const { theme } = themeContext; // Ambil tema dari context

  return (
    <div className={`container mx-auto p-6 text-center pt-20 ${themeContext.themeClasses[theme].background}`}>
      <h2 className={`text-3xl font-extrabold mb-8 ${themeContext.themeClasses[theme].text}`}>
        Hobby
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {hobbies.map((hobby) => (
          <div
            key={hobby.id}
            className="relative border-2 border-transparent rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={hobby.image}
              alt={hobby.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <h3 className={`text-white text-xl font-semibold`}>{hobby.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobby;
