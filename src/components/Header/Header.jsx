import { HandleExcelFile } from "../HandleExcelFile/HandleExcelFile";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} | container`}>
        <h2>Kelvion</h2>

        <div className={styles.buttons}>
          <HandleExcelFile />
        </div>
      </div>
    </header>
  );
};

export default Header;
