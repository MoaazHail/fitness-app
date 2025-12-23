import { useEffect, useState } from "react";

const RESEND_INTERVAL = 60;
const STORAGE_KEY = "otp_last_sent_at";

export function useResendOtp() {
  const [timeLeft, setTimeLeft] = useState(() => {
    const lastSent = sessionStorage.getItem(STORAGE_KEY);

    if (!lastSent) return 0;

    const diff = Math.floor(Date.now() / 1000) - Number(lastSent);
    const remaining = RESEND_INTERVAL - diff;

    return remaining > 0 ? remaining : 0;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const lastSent = sessionStorage.getItem(STORAGE_KEY);

      if (!lastSent) {
        setTimeLeft(0);
        return;
      }

      const diff = Math.floor(Date.now() / 1000) - Number(lastSent);
      const remaining = RESEND_INTERVAL - diff;

      setTimeLeft(remaining > 0 ? remaining : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const restartTimer = () => {
    const now = Math.floor(Date.now() / 1000);
    sessionStorage.setItem(STORAGE_KEY, now.toString());
    setTimeLeft(RESEND_INTERVAL);
  };

  const canSendNewCode = timeLeft === 0;

  return {
    timeLeft,
    canSendNewCode,
    restartTimer,
  };
}
