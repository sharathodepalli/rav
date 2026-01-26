import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/utils/cn";

interface NavLinksProps {
  className?: string;
  vertical?: boolean;
  isDark?: boolean;
}

export function NavLinks({
  className,
  vertical = false,
  isDark = false,
}: NavLinksProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { label: "Home", href: "/" },
    { label: "Invoice Automation", href: "/invoice-automation" },
    { label: "Pricing", href: "/invoice-automation#pricing" },
    { label: "Contact", href: "/contact" },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // Check if the link contains a hash
    const [path, hash] = href.split("#");

    if (hash) {
      // If we're already on the target page, just scroll
      if (location.pathname === path) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to the page, then scroll after a short delay
        e.preventDefault();
        navigate(href);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  return (
    <div
      className={cn(
        "items-center",
        vertical ? "space-y-2" : "space-x-8",
        className,
      )}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          onClick={(e) => handleClick(e, link.href)}
          className={cn(
            isDark
              ? "text-white/90 hover:text-white transition-colors"
              : "text-gray-600 hover:text-primary-600 transition-colors",
            vertical && "block px-3 py-2",
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
