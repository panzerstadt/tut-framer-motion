import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import styles from "./D.module.css";

import useInterval from "./useInterval";

const rand = (ceiling = 10) => Math.round(Math.random() * ceiling);

const Vertical = ({ tick }) => {
  const [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    setClickCount(tick);
  }, [tick]);

  const variants = {
    zero: {
      borderRadius: 0,
      backgroundColor: "#FFFFFF",
      x: 0,
      y: 0,
      rotate: 0,
      height: 200
    },
    one: {
      borderRadius: 10,
      backgroundColor: "#F9DC5C",
      x: 0,
      y: 80,
      rotate: 30,
      height: 50
    },
    two: {
      borderRadius: rand(),
      backgroundColor: "#7F63BD",
      x: 55,
      y: 35,
      rotate: 170,
      height: 300
    },
    three: {
      borderRadius: rand(),
      backgroundColor: "#EDD3C4",
      y: 10,
      x: 30,
      rotate: 90,
      height: 100
    }
  };

  const getVariant = type => {
    type = type % Object.keys(variants).length;
    switch (type) {
      case 0:
        return "zero";
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      default:
        return "one";
    }
  };

  const handleClick = () => {
    setClickCount(p => {
      if (p >= 3) return 0;
      return p + 1;
    });
  };
  return (
    <motion.div
      className={styles.vertical}
      variants={variants}
      animate={getVariant(clickCount)}
      onClick={handleClick}
    />
  );
};

const SemiCircle = ({ tick }) => {
  const [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    setClickCount(tick);
  }, [tick]);

  const variants = {
    zero: {
      borderRadius: 0,
      x: 0,
      y: 0,
      backgroundColor: "#EDD3C4",
      rotate: 0
    },
    one: {
      borderRadius: rand(),

      backgroundColor: "#7F63BD",
      x: 0,
      y: 80,
      rotate: 100
    },
    two: {
      borderRadius: rand(),

      backgroundColor: "#E52249",
      x: 55,
      y: 35,
      rotate: -10
    },
    three: {
      borderRadius: rand(),

      backgroundColor: "#F9DC5C",
      y: 10,
      x: 30,
      rotate: -80
    }
  };

  const getVariant = type => {
    type = type % Object.keys(variants).length;
    switch (type) {
      case 0:
        return "zero";
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      default:
        return "one";
    }
  };

  const handleClick = () => {
    setClickCount(p => {
      if (p >= 3) return 0;
      return p + 1;
    });
  };
  return (
    <motion.div
      className={styles.semicircle}
      variants={variants}
      animate={getVariant(clickCount)}
      onClick={handleClick}
    />
  );
};

const Slider = () => {
  return <motion.div className={styles.slider} />;
};

const D = () => {
  const dRef = useRef();
  const [tick, setTick] = useState(0);
  const [anim, setAnim] = useState(true);
  useInterval(
    () => {
      setTick(p => p + 1);
    },
    anim ? 1200 : null
  );

  const handleMouseEnter = () => {
    setAnim(false);
  };

  const handleMouseLeave = () => {
    setAnim(true);
  };

  useEffect(() => {
    if (dRef && dRef.current) {
      const el = dRef.current;
      el.addEventListener("mouseenter", handleMouseEnter, { passive: true });
      el.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    }

    return () => {
      const el = dRef && dRef.current;
      el.removeEventListener("mouseenter", handleMouseEnter, { passive: true });
      el.removeEventListener("mouseleave", handleMouseLeave, { passive: true });
    };
  }, [dRef]);

  return (
    <>
      <div ref={dRef} className={styles.container}>
        <Vertical tick={tick} />
        <SemiCircle tick={tick} />
      </div>
      <Slider />
    </>
  );
};

export default D;
