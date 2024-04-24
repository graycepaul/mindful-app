import style from "./Button.module.css";

export function Button({ name, className, type }) {
  return (
    <div className={style.container}>
      <button type={type} className={`${style.btn} ${className}`}>
        {name}
      </button>
    </div>
  );
}
