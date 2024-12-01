'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "@/app/VisitCounter.module.css";
import GlitchText from "./glitch-text";

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const response = await fetch("/api/visit");
        if (!response.ok) {
          throw new Error("Failed to fetch visit count");
        }
        const data = await response.json();
        setVisitCount(data.visitCount);
      } catch (error) {
        console.error("Error fetching visit count:", error);
        setVisitCount(null);
      }
    };

    fetchVisits();
  }, []);

  return (
    <motion.div
      className={styles.counter}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className={styles.title}>
        {/* Applying Glitch effect to the whole string */}
        {"Total Visits: ".split("").map((char, index) => (
          <GlitchText key={index} originalChar={char} />
        ))}
        {visitCount !== null
          ? visitCount
              .toString()
              .split("")
              .map((char, index) => (
                <GlitchText key={index + "visits"} originalChar={char} />
              ))
          : "Loading...".split("").map((char, index) => (
              <GlitchText key={index + "loading"} originalChar={char} />
            ))}
      </h1>
    </motion.div>
  );
};

export default VisitCounter;
