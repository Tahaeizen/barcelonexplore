import { useEffect, useState } from "react";
import styles from "@/components/Timer.module.css";


export default function Timer({ compte = 60, onExpire }) {
  const [decompte, setCompte] = useState(compte);

  useEffect(() => {
    if (decompte <= 0) {
      if (onExpire) onExpire();
      return; // stop if timer finished
    }
    const intervalID = setInterval(() => {
      setCompte((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(intervalID);
  }, [decompte, onExpire]);

  // Format minutes and seconds for display
  const minutes = Math.floor(decompte / 60);
  const seconds = decompte % 60;

  return (
    <div className={styles.timer}>
      Offres expire dans : {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}
