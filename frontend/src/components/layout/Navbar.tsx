import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <NavLink to="/">İleti Merkezi</NavLink>
      </div>
      <button className={styles.mobileMenuButton} onClick={toggleMobileMenu} aria-label="Menüyü Aç/Kapat">
        ☰
      </button>
      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ""}`}>
        <li>
          <NavLink 
            to="/users" 
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Kullanıcılar
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/posts" 
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gönderiler
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;