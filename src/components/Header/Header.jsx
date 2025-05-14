import "./Header.css";

export const Header = ({header, text, backgroundColor, className }) => {
  return (
    <header className={`${className}`} style={{ backgroundColor }}>
      <h1>{header}</h1>
      <p>{text}</p>
    </header>
  )
}