import cicerraLogo from "@/assets/cicerra-logo.png";

interface LogoProps {
  className?: string;
  showScrolledStyle?: boolean;
}

export function Logo({ className = "", showScrolledStyle = false }: LogoProps) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <img
        src={cicerraLogo}
        alt="Cicerra Realty Services"
        width={440}
        height={120}
        className="h-10 sm:h-12 w-auto object-contain select-none pointer-events-none transition-transform duration-300 group-hover:scale-102"
      />
    </div>
  );
}
