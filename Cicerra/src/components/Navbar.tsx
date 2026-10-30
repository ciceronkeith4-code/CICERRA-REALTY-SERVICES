import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";
import { adminLogout } from "@/lib/admin-client";

// All real routes; TanStack <Link> sets aria-current="page" on the active one.
const links = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Mobile menu: lock scroll, trap focus, close on Escape, restore focus on close.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = () =>
      Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? [],
      );
    focusables()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    const toggle = toggleRef.current;
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      toggle?.focus();
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const checkAuth = () => {
      if (typeof window !== "undefined") {
        setIsAdmin(sessionStorage.getItem("cicerra_admin_auth") === "true");
      }
    };
    checkAuth();
    window.addEventListener("storage", checkAuth);
    window.addEventListener("cicerra_auth_change", checkAuth);
    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("cicerra_auth_change", checkAuth);
    };
  }, []);

  useEffect(() => {
    if (!dropdownOpen) return;
    const handleClose = () => setDropdownOpen(false);
    window.addEventListener("click", handleClose);
    return () => window.removeEventListener("click", handleClose);
  }, [dropdownOpen]);

  const handleNavbarLogout = async () => {
    await adminLogout();
    window.location.href = "/";
  };

  const isHomepage = location.pathname === "/";
  const showScrolledStyle = scrolled || !isHomepage;

  return (
    <header
      className={`fixed inset-x-0 top-0 transition-all duration-500 ${open ? "z-[100]" : "z-40"
        } ${showScrolledStyle && !open
          ? "bg-[#051C3F]/95 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="container-rail flex h-16 items-center justify-between sm:h-20">
        <Link to="/" className="group">
          <Logo showScrolledStyle={showScrolledStyle} />
        </Link>

        {isAdmin ? (
          <div className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen(!dropdownOpen);
              }}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full py-1 pl-2.5 pr-3 shadow-sm hover:bg-white/10 active:scale-95 transition-all duration-200 text-left cursor-pointer select-none"
            >
              <span className="rounded-full bg-gold/15 text-gold text-[8px] uppercase tracking-wider font-bold px-1.5 py-0.5 border border-gold/30">
                Admin
              </span>
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-primary font-bold font-sans text-[9px]">
                R
              </span>
              <span className="text-xs uppercase tracking-wider font-bold text-white whitespace-nowrap">
                RYAN CICERON
              </span>
              <ChevronDown className={`h-3 w-3 text-white/60 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-1.5 w-36 rounded-xl border border-white/10 bg-[#051C3F] p-1 shadow-lg z-50"
                >
                  <button
                    type="button"
                    onClick={handleNavbarLogout}
                    className="w-full rounded-lg py-2 text-center text-[10px] font-bold uppercase tracking-widest text-red-400 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <>
            <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="group relative text-sm tracking-wide transition-colors text-white/85 hover:text-white"
                  activeProps={{ className: "text-white font-semibold" }}
                  activeOptions={{ exact: true, includeSearch: false }}
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <Link
                to="/contact"
                className="rounded-full border border-gold/70 bg-gold/10 px-5 py-2 text-xs uppercase tracking-[0.2em] text-gold backdrop-blur transition hover:bg-gold hover:text-primary-foreground"
              >
                Book a Viewing
              </Link>
            </div>

            <button
              ref={toggleRef}
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden -mr-2.5 flex h-11 w-11 items-center justify-center text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.38 }}
            className="fixed inset-0 z-50 bg-[#051C3F]/98 backdrop-blur-xl md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
              <Logo />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="-mr-2.5 flex h-11 w-11 items-center justify-center text-white hover:text-gold transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <motion.nav
              aria-label="Main"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.04 } } }}
              className="mt-16 flex flex-col items-start gap-8 px-10"
            >
              {links.map((l) => (
                <motion.div
                  key={l.label}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ ease: "easeOut", duration: 0.25 }}
                >
                  <Link
                    to={l.to}
                    activeOptions={{ exact: true, includeSearch: false }}
                    onClick={() => setOpen(false)}
                    className="font-sans text-xl uppercase tracking-[0.25em] text-white/80 hover:text-gold transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}
                transition={{ ease: "easeOut", duration: 0.25 }}
                className="mt-4"
              >
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-block rounded-full border border-gold bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary transition-all duration-300 hover:bg-transparent hover:text-white hover:border-white"
                >
                  Book a Viewing
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
