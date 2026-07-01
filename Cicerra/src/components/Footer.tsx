import { Link } from "@tanstack/react-router";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-rail py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo showScrolledStyle={false} />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/70">
              Helping families and investors discover homes and opportunities worth coming back to —
              with trusted guidance from contract to keys.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg">Quick Links</h4>
            <span className="mt-3 block h-px w-6 bg-gold" />
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/properties" className="hover:text-gold">Properties</Link></li>
              <li><Link to="/services" className="hover:text-gold">Services</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg">Contact</h4>
            <span className="mt-3 block h-px w-6 bg-gold" />
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>Imus, Cavite, Philippines</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>+63 960 350 3659</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>cicerra.realty@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Facebook className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href="https://facebook.com/cicerrarealestateservice"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold transition-colors duration-200"
                >
                  facebook.com/cicerrarealestateservice
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/50 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1.5">
            <p>© {new Date().getFullYear()} Cicerra Realty Services. All rights reserved.</p>
            <p className="text-[10px] text-primary-foreground/45 font-semibold tracking-wider uppercase">
              RYAN JOHN S. CICERON, REB, REA | Broker PRC No. 35705 | Appraiser PRC No. 13309 | DHSUD Reg. No. 10178
            </p>
          </div>
          <p className="font-display italic text-gold/80">Finding more than homes.</p>
        </div>
      </div>
    </footer>
  );
}
