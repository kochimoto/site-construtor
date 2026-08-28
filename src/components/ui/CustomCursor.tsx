import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(255, 69, 0, 0)",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      height: 32,
      width: 32,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: "rgba(255, 69, 0, 0.8)",
      border: "1px solid rgba(255, 69, 0, 1)",
      height: 64,
      width: 64,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] mix-blend-difference hidden lg:flex items-center justify-center"
      variants={variants}
      animate={cursorVariant}
    >
      {cursorVariant === 'hover' && (
        <span className="text-[10px] font-bold text-white uppercase tracking-widest">
          Explorar
        </span>
      )}
    </motion.div>
  );
};

export default CustomCursor;
