import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function HomePage() {
  return (
    <div className={styles.homePage}>
      <h1>Hoş Geldiniz!</h1>
      <p>Lütfen görüntülemek istediğiniz listeyi seçin:</p>
      <div className={styles.links}>
        <Link to="/users">Kullanıcılar</Link>
        <Link to="/posts">Gönderiler</Link>
      </div>
    </div>
  );
}

export default HomePage;