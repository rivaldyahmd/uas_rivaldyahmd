"use client"; // Menandakan bahwa ini adalah komponen klien

import React, { useContext } from 'react';
import { ThemeContext } from './Theme'; // Pastikan path ini sesuai dengan lokasi Theme.tsx Anda

const RiwayatPekerjaan = () => {
    const themeContext = useContext(ThemeContext);

    // Pastikan themeContext ada sebelum mengaksesnya
    if (!themeContext) {
        return null; // Menghindari kesalahan jika context tidak tersedia
    }

    const { theme } = themeContext; // Ambil tema dari context

    return (
        <div className="container mx-auto p-2 text-center pt-20">
            <h2 className={`text-3xl font-extrabold mb-8 text-center ${themeContext.themeClasses[theme].text}`}>
                Riwayat Pekerjaan
            </h2>
            <RowRiwayat kerja="Mitra Kurir" instansi="Ekspedisi" tahun="2020-2022" />
        </div>
    );
}

interface RowRiwayatProps {
    kerja: string;
    instansi: string;
    tahun: string; // Pastikan ini adalah string, bukan String
}

const RowRiwayat: React.FC<RowRiwayatProps> = (props) => {
    const themeContext = useContext(ThemeContext); // Mengambil context di sini

    // Pastikan themeContext ada sebelum mengaksesnya
    if (!themeContext) {
        return null; // Menghindari kesalahan jika context tidak tersedia
    }

    const { theme } = themeContext; // Ambil tema dari context

    return (
        <div className="border-2 border-pink-800 rounded-lg bg-orange-100 p-2 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <div className={`col-span-12 md:col-span-4 underline decoration-pink-800 decoration-4 font-semibold text-black`}>
                        {props.kerja}
                    </div>
                    <div className={`col-span-12 md:col-span-4 underline decoration-pink-800 decoration-4 font-semibold text-black`}>
                        {props.instansi}
                    </div>
                    <div className={`col-span-12 md:col-span-4 underline decoration-pink-800 decoration-4 font-semibold text-black`}>
                        {props.tahun}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RiwayatPekerjaan;
