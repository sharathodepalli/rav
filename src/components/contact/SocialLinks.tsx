import { Linkedin, Twitter, Instagram } from "lucide-react";

const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/the-shades-llc",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://twitter.com/your-handle", label: "Twitter" },
  {
    icon: Instagram,
    href: "https://instagram.com/your-handle",
    label: "Instagram",
  },
];

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
