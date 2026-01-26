import { Link } from "react-router-dom";

interface LogoProps {
  isDark?: boolean;
}

export function Logo({ isDark = false }: LogoProps) {
  const logoSrc = isDark
    ? "/the_shades_logo_pack-2/Brand/Logo/Primary/the_shades_lockup_white_transparent.png"
    : "/the_shades_logo_pack-2/Brand/Logo/Primary/the_shades_lockup_black_transparent.png";

  return (
    <Link to="/" className="flex items-center">
      <img src={logoSrc} alt="The Shades" className="h-8 w-auto" />
    </Link>
  );
}
