import React from "react";
import "./footer.css";
import "../../App.css";

const Footer = () => {
  return (
    <div>
      <footer>
      <div
  className="footer bgimagelazyload"
  data-src="/footerbgcar.webp"
>


          <div className="container">
            <div className="ftrwrap flexrow">
              <div className="fotrwidget">
                <a href="#!">
                  <img
                    loading="lazy"
                    className=""
                    src="/logo.png"
                    width={231}
                    height={68}
                    alt="Faster Rent a Car"
                    title="Faster Rent a Car"
                  />
                </a>
                <p>
                  Faster Luxury Car Rental Dubai professional Sports Car Rental
                  Service. Customer well-being, satisfaction, and choice are our
                  extreme priority.
                </p>
                <a className="btnstyle02" href="#!">
                  Continue Reading
                </a>
              </div>
              <div className="fotrwidget">
                <div className="fancytitle-light">Useful Links</div>
                <ul className="fotrlinks">
                  {["About Us", "Special Offers", "Blogs & News", "Terms and Conditions", "FAQ'S", "Contact Us", "Sitemap"].map((link, index) => (
                    <li key={index}>
                      <a href="#!">
                        <svg className="svgicon dotcircle-icon">
                          <use xlinkHref="#dotcircle-icon" />
                        </svg>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="fotrwidget">
                <div className="fancytitle-light">Categories</div>
                <ul className="fotrlinks">
                  {["Modified Car", "SUV Car", "Convertible Car", "Economy Car", "Sports Car", "Luxury Car", "Monthly Car"].map((category, index) => (
                    <li key={index}>
                      <a href="#!">
                        <svg className="svgicon dotcircle-icon">
                          <use xlinkHref="#dotcircle-icon" />
                        </svg>
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="fotrwidget">
                <div className="fancytitle-light">Our Services</div>
                <ul className="fotrlinks">
                  {["Yacht Charter Service", "Limousine Service", "Helicopter Tour Service", "Desert Safari Service"].map((service, index) => (
                    <li key={index}>
                      <a href="#!">
                        <svg className="svgicon dotcircle-icon">
                          <use xlinkHref="#dotcircle-icon" />
                        </svg>
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="fotrwidget">
                <div className="fancytitle-light">Support</div>
                <p>
                  <svg className="svgicon loc-icon">
                    <use xlinkHref="#loc-icon" />
                  </svg>
                  <a aria-label="Location" target="_blank" rel="noreferrer" href="#!">
                    Rose 2 – 17a St – Dubai, Al Barsha, Sheikh Zayed Road, United Arab Emirates.
                  </a>
                </p>
                <p>
                  <svg className="svgicon phone-icon">
                    <use xlinkHref="#phone-icon" />
                  </svg>
                  <a aria-label="Phone Number" href="tel:+12345678">
                    +123456789
                  </a>
                </p>
                <p>
                  <svg className="svgicon whatsapp-icon">
                    <use xlinkHref="#whatsapp-icon" />
                  </svg>
                  <a
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noreferrer"
                    href="https://api.whatsapp.com/send?phone=+12345678&text=Hi, I'm contacting you through fastercars.ae I'd like to inquire about a car listed on your website"
                  >
                    +123456789
                  </a>
                </p>
                <p>
                  <svg className="svgicon email-icon">
                    <use xlinkHref="#email-icon" />
                  </svg>
                  <a aria-label="Email" href="#!">
                    info@monza.ae
                  </a>
                </p>
                <div className=" bgimagelazyload"style={{position:"relative", bottom:"-30px"}}>
              <img src="/footerbgcar.webp" alt="" width={300} height={150}  className="img-footer"
/>  
                </div>
              </div>
              <div className="fotrwidget socialmobile">
                <div className="fancytitle-light">Follow Us</div>
                <div className="social">
                  {[
                    { href: "#!", label: "Facebook", icon: "facebook-icon" },
                    { href: "#!", label: "LinkedIn", icon: "linkedin-icon" },
                    { href: "#!", label: "Instagram", icon: "instagram-icon" },
                    { href: "#!", label: "Twitter", icon: "twitter-icon" },
                    { href: "#!", label: "TikTok", icon: "tiktok-icon" },
                    { href: "#!", label: "YouTube", icon: "youtube-icon" },
                    { href: "#!", label: "Pinterest", icon: "pinterest-icon" },
                  ].map((social, index) => (
                    <a key={index} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                      <svg className={`svgicon ${social.icon}`}>
                        <use xlinkHref={`#${social.icon}`} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="coprwrap flexrow">
                <p>© 2024 All Rights Reserved.</p>
                <span>
                  Design & Developed   By
                  <a aria-label="Developers" target="_blank" rel="noreferrer" href="#" style={{ color: "red" }}>
                         _MoneyLeek
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
