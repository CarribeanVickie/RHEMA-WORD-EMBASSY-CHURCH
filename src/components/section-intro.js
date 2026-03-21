export function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="section-intro">
      {eyebrow ? <p className="section-intro__eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
