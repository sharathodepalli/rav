import { Link } from "react-router-dom";

export function FooterLinks() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <Link
            to="/invoice-automation"
            className="text-gray-400 hover:text-white"
          >
            Invoice Automation
          </Link>
        </li>
        <li>
          <Link
            to="/invoice-automation#pricing"
            className="text-gray-400 hover:text-white"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            to="/invoice-automation#how-it-works"
            className="text-gray-400 hover:text-white"
          >
            How It Works
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-400 hover:text-white">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/privacy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/terms" className="text-gray-400 hover:text-white">
            Terms of Service
          </Link>
        </li>
      </ul>
    </div>
  );
}
