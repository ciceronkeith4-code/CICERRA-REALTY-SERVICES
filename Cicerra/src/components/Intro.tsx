import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

export function Intro({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1100);
    const t2 = setTimeout(() => setPhase(2), 2400);
    const t3 = setTimeout(() => setPhase(3), 3600);
    const t4 = setTimeout(() => setVisible(false), 4400);
    const t5 = setTimeout(() => onDone(), 4900);
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, [onDone]);

  const skip = () => {
    setVisible(false);
    setTimeout(onDone, 400);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#00142A] via-[#051C3F] to-[#0A2855] text-white"
        >
          <div className="flex flex-col items-center px-6 text-center">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              style={{ originX: 0.5 }}
              className="h-px w-48 bg-gradient-to-r from-transparent via-gold to-transparent"
            />

            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={
                phase >= 1
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 16, filter: "blur(8px)" }
              }
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="mt-8 flex justify-center"
            >
              <Logo showScrolledStyle={false} />
            </motion.div>

            {/* Premium Gold Loading Bar */}
            <div className="mt-8 h-[2px] w-48 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4.0, ease: "easeInOut" }}
                className="h-full bg-gold"
              />
            </div>

            <div className="relative mt-8 h-7 w-full max-w-md overflow-hidden">
              <AnimatePresence mode="wait">
                {phase === 2 && (
                  <motion.p
                    key="t1"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.6 }}
                    className="font-display text-base italic text-gold sm:text-lg"
                  >
                    Finding More Than Homes
                  </motion.p>
                )}
                {phase === 3 && (
                  <motion.p
                    key="t2"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.6 }}
                    className="font-display text-base italic text-gold sm:text-lg"
                  >
                    Creating Better Futures
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={skip}
            className="absolute bottom-6 right-6 text-[10px] uppercase tracking-[0.3em] text-white/40 transition hover:text-gold"
          >
            Skip intro →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
