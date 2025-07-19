import { useEffect, useState } from "react";
import "@/components/hero/Hero.scss";
import ContactButton from "@/components/buttons/Buttons";
import ProfileImage from "@/assets/images/profile.png";
import FloatingIcons from "@/components/hero/FloatingIcons"; // ✅ NEW import

export default function Hero() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");

  const subtitleText =
    "part time designer, part developer, all heart.\nI build digital experiences that feel warm, curious, and quietly clever. I believe good design doesn’t just work — it feels like home.";

  useEffect(() => {
    const loadTimer = setTimeout(() => setHasLoaded(true), 100);
    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      let index = 0;
      const typeTimer = setInterval(() => {
        if (index < subtitleText.length) {
          setTypedText((prev) => prev + subtitleText.charAt(index));
          index++;
        } else {
          clearInterval(typeTimer);
        }
      }, 20);
      return () => clearInterval(typeTimer);
    }
  }, [hasLoaded]);

  return (
    <section className="hero-section">
      <FloatingIcons /> {/* ✅ Modular floating background */}
      <div className={`glow-border ${hasLoaded ? "show" : ""}`}>
        <div className={`hero-content ${hasLoaded ? "show" : ""}`}>
          <img
            className={`hero-image ${hasLoaded ? "show" : ""}`}
            src={ProfileImage}
            alt="Katarina"
          />

          <div className="hero-text">
            <div className={`hero-text-inner ${hasLoaded ? "show" : ""}`}>
              <h1 className="hero-title">
                {hasLoaded && (
                  <>
                    {"Hi, I’m ".split("").map((char, i) => (
                      <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
                        {char}
                      </span>
                    ))}
                    <span className="highlighted-name">Katarina</span>
                  </>
                )}
              </h1>
              <p className="hero-subtitle typewriter">
                {typedText.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <ContactButton to="/contact">Say Hello</ContactButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
