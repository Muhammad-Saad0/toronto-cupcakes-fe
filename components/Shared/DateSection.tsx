"use client";

import React, { useEffect, useState } from 'react';

function DateSection() {
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            
            // Format date
            const formattedDate = now.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            setCurrentDate(formattedDate);
            
            // Format time
            const formattedTime = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            setCurrentTime(formattedTime);
        };

        // Initial update
        updateDateTime();

        // Set interval to update the time every second
        const intervalId = setInterval(updateDateTime, 1000);

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex justify-center items-center mt-40 font-averia">
            <section className="w-screen lg:w-3/4 flex flex-col items-center justify-center py-6 rounded-t-lg shadow-md shadow-[#3D0C11]">
                <h1 className="text-[#3D0C11] font-medium text-2xl cursor-default">📅 {currentDate}</h1>
                <h2 className="text-[#3D0C11] font-medium text-xl cursor-default mt-3">🕒 {currentTime}</h2>
            </section>
        </div>
    );
}

export default DateSection;
