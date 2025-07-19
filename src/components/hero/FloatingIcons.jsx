import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiSass,
  SiFigma,
  SiAdobeillustrator,
  SiGithub,
  SiPython,
  SiMicrosoftoutlook,
} from "react-icons/si";
import { TbBrandMantine } from "react-icons/tb";

import "./FloatingIcons.scss";

export default function FloatingIcons() {
  const icons = [
    { component: SiHtml5, className: "icon-1" },
    { component: SiCss3, className: "icon-2" },
    { component: SiJavascript, className: "icon-3" },
    { component: SiReact, className: "icon-4" },
    { component: SiSass, className: "icon-5" },
    { component: SiFigma, className: "icon-6" },
    { component: SiAdobeillustrator, className: "icon-7" },
    { component: SiGithub, className: "icon-8" },
    { component: TbBrandMantine, className: "icon-9" },
    { component: SiPython, className: "icon-10" },
    { component: SiMicrosoftoutlook, className: "icon-11" },
  ];

  return (
    <div className="floating-icons">
      {icons.map(({ component: Icon, className }, i) => (
        <div key={i} className={`floating-icon ${className}`}>
          <Icon />
        </div>
      ))}
    </div>
  );
}
