import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => (
  <footer className="text-center mt-5 mb-3 text-muted">
    <div className="d-flex justify-content-center gap-3 social-icons">
      <span className="icon-circle">G</span>
      <span className="icon-circle">f</span>
      <span className="icon-circle">in</span>
      <span className="icon-circle">t</span>
    </div>
    <br />
    <div>example@email.com</div>
    <small>&copy; Copright @ 2020 Name. All rights reserved.</small>
  </footer>
);

export default Footer;
