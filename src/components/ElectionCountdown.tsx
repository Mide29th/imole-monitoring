import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ElectionCountdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft: TimeLeft | null = null;

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <span className="countdown">ELECTION DAY</span>;
  }

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <span className="countdown">
      Osun Election 2026: {timeLeft.days}d : {formatNumber(timeLeft.hours)}h : {formatNumber(timeLeft.minutes)}m : {formatNumber(timeLeft.seconds)}s
    </span>
  );
};

export default ElectionCountdown;
