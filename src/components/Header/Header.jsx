import logo from "../../assets/NuKenzieLogo.png";
import styles from "./style.module.scss";

export const Header = () => {
  return (
    <div className={styles.headerBack}>
      <nav className="container">
        <img src={logo} alt="Nu Kenzie Logo" />
      </nav>
    </div>
  );
};
