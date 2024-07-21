import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = ({ initialMinutes = 0, initialSeconds = 0 }) => {
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timer);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [minutes, seconds]);

    return (
        <div className="timer">
            <h2>Time Remaining</h2>
            <div className="time">
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>
        </div>
    );
};

export default Timer;
