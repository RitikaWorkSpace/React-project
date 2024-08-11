import React, { useState, useRef, useEffect } from 'react';

const Countdown = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('August 15, 2024 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => clearInterval(interval.current);
    }, []);

  

    return (
        <div className='flex items-center gap-[10px]'>
            <div className='flex flex-col'>
                <p className={`font-intel font-[500]  text-[12px]`}>Days</p>
                <p className={`font-intel font-[700]  text-[32px]`}>{timerDays} <span className={`text-[#E07575] text-[32px] mr-[5px]`}>:</span></p>
            </div>

            <div className='flex flex-col'>
                <p className={`font-intel font-[500]  text-[12px]`}>Hours</p>
                <p className={`font-intel font-[700]  text-[32px]`}>{timerHours} <span className={`text-[#E07575] text-[32px] mr-[5px]`}>:</span></p>
            </div>

            <div className='flex flex-col'>
                <p className={`font-intel font-[500]  text-[12px]`}>Minutes</p>
                <p className={`font-intel font-[700]  text-[32px]`}>{timerMinutes} <span className={`text-[#E07575] text-[32px] mr-[5px]`}>:</span></p>
            </div>

            <div className='flex flex-col'>
                <p className={`font-intel font-[500]  text-[12px]`}>Seconds</p>
                <p className={`font-intel font-[700]  text-[32px]`}>{timerSeconds}</p>
            </div>
        </div>
    );
};

export default Countdown;
