"use client";

import foto from "../peserta.jpg";
import React from 'react';
import { useTheme } from './Theme'; // Adjust the import according to your file structure

const Hero = () => {
  const { theme, themeClasses } = useTheme(); // Use the custom hook

  return (
    <div className={`container mx-auto p-2 text-center ${themeClasses[theme].background}`}>
      <h1 className={`text-4xl font-extrabold mb-8 ${themeClasses[theme].text}`}>CV ONLINE</h1>
      <h1 className={`text-3xl font-bold ${themeClasses[theme].text}`}>Rivaldy Ahmad Maulana</h1>
      <Profile />
      <p>
        Nama saya Rivaldy Ahmad Maulana. Saya saat ini sedang menempuh pendidikan S1 di Masoem University, jurusan Sistem Informasi, dan telah mencapai semester 5. Saya memiliki minat yang kuat dalam dunia teknologi dan ingin menjadi seorang Web Developer. Selain fokus dalam perkuliahan, saya aktif dengan hobi seperti bermain game, bermusik, menonton film, dan membaca novel atau komik, yang membantu mengembangkan kreativitas dan merefresh pikiran. Saya selalu antusias belajar hal baru di bidang pemrograman dan berkomitmen untuk mengasah keterampilan teknis saya demi mencapai apa yang saya inginkan.
      </p>
      {/* Konten lainnya */}
    </div>
  );
};

const Profile = () => {
  return <img src={foto.src} alt="Rivaldy Ahmad Maulana" className="fotoku" />;
};

export default Hero;
