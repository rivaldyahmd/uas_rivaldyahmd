"use client";

import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        // Set submitted to true
        setSubmitted(true);
    };

    const handleClear = () => {
        // Reset the form fields
        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(false);
    };

    return (
        <div style={{margin: '20px', fontFamily: 'Arial, sans-serif'}}>
            {!submitted ? (
                <form>
                    <h2>Contact Form</h2>
                    <label>
                        Nama:
                        <br />
                        <input                 
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={{ color: 'black' }}
                        />
                    </label>
                    <br /><br />

                    <label>
                        Email:
                        <br />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ color: 'black' }}
                        />
                    </label>
                    <br /><br />

                    <label>
                        Pesan:
                        <br />
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            rows={4}
                            style={{width: '100%', color: 'black'}}                        />
                    </label>
                    <br /><br />

                    <button type="button" onClick={handleSubmit}>Submit</button>
                    <button type="button" onClick={handleClear}>Clear</button>
                </form>
            ) : (
                <div style={{ fontWeight: 'bold'}}>
                    Nama: {name}, Email: {email}, Pesan: {message}, data diatas akan segera di input ke database. Terimakasih!
                </div>
            )}
        </div>
    );
};

export default ContactForm;