import React from "react";
import FooterNav from "./FooterNav";
import Layout from "../Layout/Layout";
import FooterSocial from "./FooterSocial";
import FooterInfo from "./FooterInfo";
import Contact from "../Contact/ContactBanner";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
      <Contact />
        <FooterNav />
        <div className="footer__content">
          <FooterInfo />
          <FooterSocial />
        </div>
      </div>
    </footer>
  );
}
