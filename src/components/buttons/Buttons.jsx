import { Link } from "react-router-dom";
import "@/components/buttons/Buttons.scss";

export default function ContactButton({ to, children }) {
  return (
    <Link to={to} className="contact-button">
      {children}
    </Link>
  );
}
