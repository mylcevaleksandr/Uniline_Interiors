import React, { useEffect, useState } from 'react';

function ExperienceTimer() {
    const startDate = new Date('2019-01-01T00:00:00');

    const calculateElapsed = () => {
        const now = new Date();
        const diff = now.getTime() - startDate.getTime();

        // Calculate total seconds difference
        const totalSeconds = Math.floor(diff / 1000);

        // Calculate days, hours, minutes, seconds

        const days = Math.floor(totalSeconds / (24 * 3600));
        const remainderAfterDays = totalSeconds % (24 * 3600);

        const hours = Math.floor(remainderAfterDays / 3600);
        const remainderAfterHours = remainderAfterDays % 3600;

        const minutes = Math.floor(remainderAfterHours / 60);
        const seconds = remainderAfterHours % 60;

        return {days, hours, minutes, seconds };
    };

    const [time, setTime] = useState(calculateElapsed());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(calculateElapsed());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const {days, hours, minutes, seconds } = time;

    return (
        <div className="flex flex-col items-center flex-wrap ">
            <div className="text-[#c9a050] text-3xl mb-2  text-center ">
                {days} days <span className="custom-flex-class items-center text-center">{String(hours).padStart(2,'0')}:{String(minutes).padStart(2,'0')}:{String(seconds).padStart(2,'0')}</span>
            </div>
            <div className="text-white/60 text-sm tracking-wider">
                Our Experience
            </div>
        </div>
    );
}

export default ExperienceTimer;
