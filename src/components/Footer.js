import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaDribbble, FaLinkedin } from "react-icons/fa";

function FooterBar() {
  return (
    <footer class="site-footer" style={{ marginTop: "5vh" }}>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by PRADA.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li>
                <a class="facebook" href="/">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a class="twitter" href="/">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a class="dribbble" href="/">
                  <FaDribbble />
                </a>
              </li>
              <li>
                <a class="linkedin" href="/">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterBar;
