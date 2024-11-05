"use client";

import React, { useContext, useState } from 'react';
import { ThemeContext } from './Theme'; // Ensure this path matches your Theme.tsx location

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [rating, setRating] = useState(0);

    const themeContext = useContext(ThemeContext);

    // Ensure themeContext is available before accessing it
    if (!themeContext) {
        return null; // Prevent errors if context is not available
    }

    const { theme, themeClasses } = themeContext; // Extract theme and themeClasses from context

    const handleSubmit = () => {
        setSubmitted(true);
    };

    const handleClear = () => {
        setName('');
        setEmail('');
        setMessage('');
        setRating(0);
        setSubmitted(false);
    };

    const handleBack = () => {
        handleClear(); // Reset the form
    };

    return (
        <div className={`flex items-center justify-center h-screen ${themeClasses[theme].background}`}>
            <div className={`bg-orange-100 border border-pink-800 rounded-lg shadow-lg p-8 w-full max-w-md ${themeClasses[theme].text}`}>
                {!submitted ? (
                    <form className="flex flex-col">
                        <h2 className="text-3xl font-extrabold mb-8 text-black text-center">
                            Contact Form
                        </h2>
                        <label className="mb-2 text-black">
                            Nama:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="mt-1 p-2 w-full border border-gray-300 rounded focus:border-pink-800 focus:outline-none text-black"
                            />
                        </label>

                        <label className="mb-2 text-black">
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 p-2 w-full border border-gray-300 rounded focus:border-pink-800 focus:outline-none text-black"
                            />
                        </label>

                        <label className="mb-2 text-black">
                            Pesan:
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                rows={4}
                                className="mt-1 p-2 w-full border border-gray-300 rounded focus:border-pink-800 focus:outline-none text-black"
                            />
                        </label>

                        <div className="mb-4">
                            <label className="block mb-2 text-black">Rating:</label>
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span 
                                        key={star} 
                                        className={`text-2xl cursor-pointer ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                        onClick={() => setRating(star)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <button 
                                type="button" 
                                onClick={handleSubmit} 
                                className="bg-pink-800 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors"
                            >
                                Submit
                            </button>
                            <button 
                                type="button" 
                                onClick={handleClear} 
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                            >
                                Clear
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="mt-4 font-bold text-center text-black">
                        <p className="mb-2 text-2xl">Nama: {name}</p>
                        <p>Email: {email}</p>
                        <p>Pesan: {message}</p>
                        <p>Rating: {rating} ★</p>
                        <p className="mt-4">Terima Kasih atas pesan dan kesannya.</p>
                        <button 
                            type="button" 
                            onClick={handleBack} 
                            className="mt-4 bg-pink-800 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                        >
                            Kembali
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactForm;
