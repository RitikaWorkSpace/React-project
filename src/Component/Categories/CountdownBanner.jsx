import React, { useState, useRef, useEffect } from 'react';

const CountdownBanner = () => {
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


<div className='flex flex-col justify-center items-center rounded-full bg-white p-[10px] w-[60px] h-[60px]'>
  <p className='font-intel font-[700] text-[16px] '>{timerHours}</p>
  <p className='font-intel font-[500] text-[11px]'>Hours</p>
</div>


            <div className='flex flex-col justify-center items-center rounded-full bg-white p-[10px] w-[60px] h-[60px]'>
            <p className={`font-intel font-[700]  text-[16px]`}>{timerDays} </p>
                <p className={`font-intel font-[500]  text-[11px]`}>Days</p>

            </div>

           

            <div className='flex flex-col justify-center items-center rounded-full bg-white p-[10px] w-[60px] h-[60px] '>
            <p className={`font-intel font-[700]  text-[16px]`}>{timerMinutes} </p>
                <p className={`font-intel font-[500]  text-[11px]`}>Minutes</p>

            </div>

            <div className='flex flex-col justify-center items-center rounded-full bg-white p-[10px] w-[60px] h-[60px] '>
            <p className={`font-intel font-[700]  text-[16px]`}>{timerSeconds}</p>
                <p className={`font-intel font-[500]  text-[11px]`}>Seconds</p>
 
            </div>
        </div>
    );
};

export default CountdownBanner;
