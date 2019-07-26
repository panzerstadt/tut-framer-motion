import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "./One.module.css";

const One = () => {
  const [toggle, setToggle] = useState(false);

  const rectVariants = {
    active: { y: 0, opacity: 1, background: "#ff00b1" },
    disabled: { y: 100, opacity: 0.5, background: "#ffefee" }
  };

  return (
    <motion.div
      onClick={() => setToggle(p => !p)}
      className={styles.rectangle}
      variants={rectVariants}
      animate={toggle ? "active" : "disabled"}
      initial={{
        y: 100,
        opacity: 0
      }}
    />
  );
};

export default One;
