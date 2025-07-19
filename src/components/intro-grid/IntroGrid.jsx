import "./IntroGrid.scss";
import { useRef } from "react";

import DesignVideo from "@/assets/videos/desinxcode.mp4";
import QuestionVideo from "@/assets/videos/question.mp4";
import WarmVideo from "@/assets/videos/warm.mp4";
import CollaborateVideo from "@/assets/videos/colaborate.mp4";

export default function IntroGrid() {
  const designRef = useRef();
  const curiosityRef = useRef();
  const warmRef = useRef();
  const collaborateRef = useRef();

  const handleHover = (ref, play) => {
    if (ref?.current) {
      play
        ? ref.current.play()
        : (ref.current.pause(), (ref.current.currentTime = 0));
    }
  };

  const cards = [
    {
      title: "Design × Code",
      video: DesignVideo,
      ref: designRef,
      text: "I merge creativity with code to craft intuitive, thoughtful digital products.",
    },
    {
      title: "Driven by Curiosity",
      video: QuestionVideo,
      ref: curiosityRef,
      text: "I chase questions, not just answers — always seeking smarter, warmer ways to build.",
    },
    {
      title: "Warm Web Experiences",
      video: WarmVideo,
      ref: warmRef,
      text: "I design digital spaces that feel like a conversation, not a transaction.",
    },
    {
      title: "Let’s Collaborate",
      video: CollaborateVideo,
      ref: collaborateRef,
      text: "Remote-friendly, detail-driven, and always up for a creative challenge.",
    },
  ];

  return (
    <section className="intro-grid-section">
      <div className="intro-grid-container">
        {cards.map((card, index) => (
          <div
            className="grid-card"
            key={index}
            onMouseEnter={() => handleHover(card.ref, true)}
            onMouseLeave={() => handleHover(card.ref, false)}
          >
            <div className="glow-border" />
            <div className="grid-card-inner">
              <h2>{card.title}</h2>
              <video
                ref={card.ref}
                className="intro-video"
                src={card.video}
                muted
                playsInline
                preload="auto"
                loop
              />
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
