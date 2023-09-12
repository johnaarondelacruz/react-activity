import { Link } from "react-router-dom";
import "./index.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <p>© Copyright 2023- All Right Reserved.</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul>
          <h3>Social Midea Links</h3>
          <li>
            <Link to="/facebook">Facebook</Link>
          </li>
          <li>
            <Link to="/x">X</Link>
          </li>
          <li>
            <Link to="/instagram">Instagram</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
