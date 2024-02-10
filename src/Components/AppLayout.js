import React from "react";
import Header from "./Header";

const AppLayout = ({ children }) => (
  <div>
    <header>
      <nav>
        <Header />
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <footer className="footer-area">
        <div className="copyright-area style-01">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-item">
                  <div className="copyright-area-inner">
                    © Copyrights 2024 Cloud 10. All rights reserved.
                  </div>
                  <div className="widget widget_nav_menu">
                    <ul className="social_share style-01">
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </footer>
  </div>
);

export default AppLayout;
