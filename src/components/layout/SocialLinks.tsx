import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function SocialLinks() {
  return (
    <div>
      <h3 className="text-base font-semibold mb-3 text-white">Follow Us</h3>
      <div className="flex space-x-4">
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          <Twitter className="h-5 w-5" strokeWidth={1.5} />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          <Github className="h-5 w-5" strokeWidth={1.5} />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          <Linkedin className="h-5 w-5" strokeWidth={1.5} />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          <Mail className="h-5 w-5" strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
}
