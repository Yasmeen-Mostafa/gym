import footerImg from "../../assets/images/footer.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="d-flex justify-content-center py-2">
      <figure className="footer__figure mb-0 me-3 ">
        <img src={footerImg} className="img-fluid my-auto" />
      </figure>
      <h6 className="my-auto text-white">
        © 2020 ALGYM All Rights Reserved.Developed by INOVA LLC
      </h6>
    </footer>
  );
};
export default Footer;
