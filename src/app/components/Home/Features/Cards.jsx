import style from "./features.module.css";

export const Card = ({
  stamp,
  src,
  title,
  text,
  btn,
  desc,
  className,
  href,
  children,
}) => {
  return (
    <div className={className}>
      <div>
        <div>{children}</div>
        <img src={src} alt={desc} />
        <div className={style.textContent}>
          <p>{stamp}</p>
          <h3>{title}</h3>
          <h4>{text}</h4>
          <a href={href}>{btn}</a>
        </div>
      </div>
    </div>
  );
};
