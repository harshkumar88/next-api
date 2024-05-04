import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
const Box = ({ children }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const isMobile = useMediaQuery("only screen and (maxn-width: 800px)");

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 1, scale: 0.8 },
  };

  const isMobileDevice = () => {
    return isMobile;
  };

  useEffect(() => {
    if (isMobileDevice()) {
      return;
    }
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial={isMobileDevice() ? "visible" : "hidden"}
      animate={control}
    >
      {children}
    </motion.div>
  );
};

export default Box;
