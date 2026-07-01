import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import viberLogo from "@/assets/viber-icon.png";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Viber Floating Button */}
          <motion.a
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            href="viber://chat?number=%2B639603503659"
            className="fixed bottom-24 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#7360F2] shadow-[0_8px_30px_rgba(115,96,242,0.3)] hover:bg-[#5E4CD8] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer border border-[#7360F2]"
            aria-label="Chat on Viber"
            title="Chat on Viber"
          >
            <img
              src={viberLogo}
              alt="Viber"
              className="h-full w-full object-contain rounded-full scale-105"
            />
          </motion.a>

          {/* Back To Top Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut", delay: 0.05 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-[#1B365D]/95 hover:bg-[#12284C] dark:bg-gold dark:hover:bg-gold-soft text-white dark:text-primary shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ArrowUp className="h-5 w-5 animate-pulse" />
          </motion.button>
        </>
      )}
    </AnimatePresence>
  );
}
