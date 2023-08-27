'use client';

import moment from 'moment';
import { useEffect, useState } from 'react';

import {
  IconBreakTime,
  IconComputer,
  IconPause,
  IconPlay,
} from '@/components/Icons';

const timers = {
  work: {
    label: 'Work mode',
    value: 1500,
    icon: <IconComputer size={40} />,
  },
  break: {
    label: 'Break mode',
    value: 300,
    icon: <IconBreakTime size={40} />,
  },
};

const PomodoroTimer = () => {
  const [timer, setTimer] = useState(timers.work.value);
  const [mode, setMode] = useState(timers.work);
  const [startTimer, setStartTimer] = useState(false);

  const date = new Date(1000 * timer);
  const timeStr = moment(date).format('mm:ss');

  const toggleStartTimer = () => {
    setStartTimer(!startTimer);
  };

  const handleResetTimer = () => {
    setStartTimer(false);
    setTimer(timers.work.value);
    setMode(timers.work);
  };

  const handleMode = () => {
    setStartTimer(false);
    setTimer(mode === timers.work ? timers.break.value : timers.work.value);
    setMode(mode === timers.work ? timers.break : timers.work);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (startTimer) {
        if (timer > 0) {
          setTimer(timer - 1);
        } else if (timer === 0) {
          // Add toaster
          // console.log("Time's up");
        }

        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTimer, timer]);

  return (
    <div className='flex min-h-screen flex-col justify-center bg-[#d4eaf7]'>
      <div className='mx-auto flex min-w-[400px] max-w-md flex-col items-center justify-center gap-10 rounded-2xl border border-zinc-100 bg-zinc-100 p-10 text-center shadow-xl'>
        <p className='text-2xl font-bold text-[#00668c]'>Pomodoro Timer</p>

        {/* Timer */}
        <div className='flex aspect-square w-64 items-center justify-center rounded-full border-4 border-zinc-200'>
          <p className='text-5xl font-bold tracking-wider text-zinc-800'>
            {timeStr}
          </p>
        </div>

        {/* Mode */}
        <div className='flex flex-col items-center justify-center gap-4'>
          <p className='text-lg font-semibold text-zinc-800'>{mode.label}</p>
          <i>{mode.icon}</i>
        </div>

        {/* Play button */}
        <button
          className='flex flex-col items-center justify-center gap-2 focus:outline-none'
          onClick={toggleStartTimer}
        >
          <i className='rounded-full border border-zinc-300 bg-[#00668c] p-3 text-zinc-100'>
            {!startTimer ? <IconPlay size={48} /> : <IconPause size={48} />}
          </i>
          <span className='font-semibold tracking-widest text-[#00668c]'>
            {!startTimer ? 'Play' : 'Pause'}
          </span>
        </button>

        {/* Reset timer */}
        <div className='inline-flex gap-6'>
          <button
            className='rounded-lg bg-zinc-200 px-3 py-2 text-sm uppercase tracking-wider'
            onClick={handleResetTimer}
          >
            Reset
          </button>
          <button
            className='rounded-lg bg-zinc-200 px-3 py-2 text-sm uppercase tracking-wider'
            onClick={handleMode}
          >
            {mode === timers.work ? 'Break' : 'Work'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;

// Colors: https://aicolors.co/
// Designs: https://dribbble.com/shots/14857924-Pomodoro-Timer-App-UI
