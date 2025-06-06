import { useEffect, useState } from "react";

export default function Timer({ compte = 60, onExpire }) {
  const [decompte, setCompte] = useState(compte);

  useEffect(() => {
    if (decompte <= 0) {
      if (onExpire) onExpire();
      return;
    }
    const intervalID = setInterval(() => {
      setCompte((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(intervalID);
  }, [decompte, onExpire]);

  const days = Math.floor(decompte / (24 * 3600));
  const hours = Math.floor((decompte % (24 * 3600)) / 3600);
  const minutes = Math.floor((decompte % 3600) / 60);
  const seconds = decompte % 60;

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-4">
        <span className="text-3xl md:text-4xl font-bold text-gray-900">{days.toString().padStart(2, '0')}</span>
        <span className="text-3xl md:text-4xl font-bold text-gray-900">{hours.toString().padStart(2, '0')}</span>
        <span className="text-3xl md:text-4xl font-bold text-gray-900">{minutes.toString().padStart(2, '0')}</span>
        <span className="text-3xl md:text-4xl font-bold text-gray-900">{seconds.toString().padStart(2, '0')}</span>
      </div>
      <div className="flex space-x-8 mt-1">
        <span className="text-xs text-gray-500 w-8 text-center">jours</span>
        <span className="text-xs text-gray-500 w-8 text-center">heures</span>
        <span className="text-xs text-gray-500 w-10 text-center">minutes</span>
        <span className="text-xs text-gray-500 w-12 text-center">secondes</span>
      </div>
    </div>
  );
}
