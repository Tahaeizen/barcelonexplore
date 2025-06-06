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

  
  const minutes = Math.floor(decompte / 60);
  const seconds = decompte % 60;

  return (
    <span className="text-3xl md:text-4xl font-bold text-gray-900">
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </span>
  );
}
