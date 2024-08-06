import styles from "./Button.module.css";

export function Button({
  className = "",
  AsComponent = "button",
  theme = "",
  ...props
}) {
  return (
    <AsComponent
      className={`${styles.btn} ${styles[theme]} ${className}`}
      {...props}
    />
  );
}