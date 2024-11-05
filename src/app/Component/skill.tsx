"use client"; // Menandakan bahwa ini adalah komponen klien

import React, { useContext } from 'react';
import { ThemeContext } from './Theme'; // Pastikan path ini sesuai dengan lokasi Theme.tsx Anda

const SkillsSection = () => {
  const skills = [
    { name: "JavaScript", level: 70 },
    { name: "PHP", level: 90 },
    { name: "React", level: 65 },
    { name: "CSS", level: 70 },
    { name: "TypeScript", level: 70 },
    { name: "NextJS", level: 75 },
    { name: "Tailwind CSS", level: 70 },
  ];

  const themeContext = useContext(ThemeContext);

  // Pastikan themeContext ada sebelum mengaksesnya
  if (!themeContext) {
    return null; // Menghindari kesalahan jika context tidak tersedia
  }

  const { theme } = themeContext; // Ambil tema dari context

  return (
    <div className="container mx-auto p-2 text-center pt-20">
      <h2 className={`text-3xl font-extrabold mb-8 ${themeContext.themeClasses[theme].text}`}>
        Skills
      </h2>
      <div className="flex flex-col items-center space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="w-1/2">
            <div className="flex justify-between mb-1">
              <span className={`font-medium ${themeContext.themeClasses[theme].text}`}>{skill.name}</span>
              <span className={`font-medium ${themeContext.themeClasses[theme].text}`}>{skill.level}%</span>
            </div>
            <div className="w-full bg-pink-800 rounded-full h-4">
              <div
                className="bg-orange-100 h-4 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
