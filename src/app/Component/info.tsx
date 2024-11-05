"use client"; // Menandakan bahwa ini adalah komponen klien

import React, { useContext } from 'react';
import { ThemeContext } from './Theme';
import { FaMapMarkerAlt, FaRulerVertical, FaWeight, FaHeart, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const MyInfo: React.FC = () => {
   const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        return null; // Avoid errors if context is not available
    }

    const { theme, themeClasses } = themeContext;; 

  const infoData = [
    { label: 'Tempat Tanggal Lahir', value: 'Bandung, 16 Maret 2001', icon: <FaMapMarkerAlt /> },
    { label: 'Tinggi Badan', value: '173 cm', icon: <FaRulerVertical /> },
    { label: 'Berat Badan', value: '78 kg', icon: <FaWeight /> },
    { label: 'Status Pernikahan', value: 'Belum Menikah', icon: <FaHeart /> },
    { label: 'Whatsapp', value: '+6285171661603', icon: <FaWhatsapp /> },
    { label: 'Email', value: 'rivaldyahmd44@gmail.com', icon: <FaEnvelope /> }
  ];

  return (
    <div className={`container mx-auto p-2 text-center pt-20 ${themeClasses[theme].background}`}>
            <h2 className={`text-3xl font-extrabold mb-8 ${themeClasses[theme].text}`}>
        My Info
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {infoData.map((info, index) => (
          <div
            key={index}
            className={`bg-orange-100 border-2 border-pink-800 rounded-lg p-6 w-80 text-center flex flex-col items-center`}
          >
            <div className={`text-pink-800 mb-2 text-2xl`}>{info.icon}</div>
            <h3 className={`text-pink-800 font-bold mb-1`}>{info.label}</h3>
            <p className={`text-pink-900`}>{info.value}</p>
          </div>
        ))}
        </div>
      </div>
  );
};

export default MyInfo;
