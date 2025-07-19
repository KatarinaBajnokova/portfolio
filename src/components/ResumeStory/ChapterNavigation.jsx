export default function ChapterNavigation({ current, total, title }) {
  return (
    <div className="chapter-nav">
      <p>
        <span>
          Chapter {current} of {total}
        </span>{" "}
        — {title}
      </p>
    </div>
  );
}
