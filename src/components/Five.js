import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "./Five.module.css";

const Five = () => {
  const variants = {
    active: {
      x: 50,
      background: "#ff00b1"
    },
    disabled: {
      x: -50,
      background: "#0D00FF"
    }
  };

  const box = {
    active: {
      background: "yellow"
    },
    disabled: {
      background: "crimson"
    }
  };

  const [active, setActive] = useState(false);

  return (
    <motion.div
      variants={variants}
      animate={active ? "active" : "disabled"}
      onClick={() => setActive(p => !p)}
      className={styles.container}
    >
      {[0, 1, 2].map(value => (
        <motion.div key={value} className={styles.box} variants={box} />
      ))}
    </motion.div>
  );
};

export default Five;
