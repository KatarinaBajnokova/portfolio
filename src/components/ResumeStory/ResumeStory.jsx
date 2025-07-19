import { useState } from "react";
import "./ResumeStory.scss";
import bookCover from "@/assets/images/resume.png";

export default function ResumeCardBook() {
  const [isTurningPage, setIsTurningPage] = useState(false);
  const [currentChapter, setCurrentChapter] = useState("cover");

  const handleChapterClick = (chapter) => {
    setIsTurningPage(true);
    setTimeout(() => {
      setCurrentChapter(chapter);
      setIsTurningPage(false);
    }, 800);
  };

  const handleBackClick = () => {
    setIsTurningPage(true);
    setTimeout(() => {
      setCurrentChapter("cover");
      setIsTurningPage(false);
    }, 800);
  };

  const renderBackButton = () => (
    <p className="back-button" onClick={handleBackClick}>
      ← Back to Chapters
    </p>
  );

  const renderContent = () => {
    switch (currentChapter) {
      case "education":
        return (
          <>
            <h4>Education</h4>
            <p>
              <strong>Thomas More, Mechelen (2023–2026)</strong>
            </p>
            <p>Bachelor’s in International Digital Experience Design</p>

            <p>
              <strong>Vrije Universiteit Brussel (2021–2023)</strong>
            </p>
            <p>Completed 2 years in Social Sciences</p>
            {renderBackButton()}
          </>
        );
      case "experience":
        return (
          <>
            <h4>Working Experience</h4>
            <p>
              <strong>EHPA (2024–Present)</strong> – Office Assistant
            </p>
            <p>
              <strong>WHSmith (2024)</strong> – Sales Assistant
            </p>
            <p>
              <strong>Keyence (2023–2024)</strong> – Telemarketer
            </p>
            <p>
              <strong>Atelier 29 (2022–2024)</strong> – Server/Bartender
            </p>
            {renderBackButton()}
          </>
        );
      case "certifications":
        return (
          <>
            <h4>Certifications</h4>
            <p>Cosden Solutions – React Project</p>
            <p>Adobe Illustrator & Photoshop (92learns)</p>
            <p>Google – Networking & Support Fundamentals</p>
            <p>Microsoft – Excel Specialist</p>
            {renderBackButton()}
          </>
        );
      case "languages":
        return (
          <>
            <h4>Languages</h4>
            <p>Slovak – Native</p>
            <p>Hungarian – Native</p>
            <p>Czech – Native</p>
            <p>English – Proficient</p>
            <p>French – Competent</p>
            {renderBackButton()}
          </>
        );
      case "tools":
        return (
          <>
            <h4>Tools & Technologies</h4>
            <p>• HTML, CSS, SCSS, Sass</p>
            <p>• JavaScript, React</p>
            <p>• PHP, SQLite</p>
            <p>• Figma, Adobe Illustrator</p>
            {renderBackButton()}
          </>
        );
      default:
        return (
          <>
            <h4 className="color1">My Resume Story</h4>
            <p onClick={() => handleChapterClick("education")}>✨ Education</p>
            <p onClick={() => handleChapterClick("experience")}>
              💼 Working Experience
            </p>
            <p onClick={() => handleChapterClick("certifications")}>
              📜 Certifications
            </p>
            <p onClick={() => handleChapterClick("languages")}>🌍 Languages</p>
            <p onClick={() => handleChapterClick("tools")}>
              🛠️ Tools & Technologies
            </p>
          </>
        );
    }
  };

  return (
    <div className="book-container">
      <div className={`book ${isTurningPage ? "turning" : ""}`}>
        <div className="imgBox">
          <div className="bark"></div>
          <img src={bookCover} alt="cover" />
        </div>
        <div className="details">{renderContent()}</div>
      </div>
    </div>
  );
}
