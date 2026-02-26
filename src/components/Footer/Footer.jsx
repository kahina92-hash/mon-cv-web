import "./footer.scss";
import imagescceuil from "./logoFooter/Logo.png"; 

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <img src={imagescceuil} alt="Logo Kahina Saidi" className="logo-footer" />
        <p>© {year} Kahina Saidi. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
