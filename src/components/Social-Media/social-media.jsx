import React from 'react';
import "../../App.css"
const Socal = () => {
  return (
    <div>
      
  {/* Social Media Follow Icons */}
  <div className="social-icons">
    <a
      href="/"
      target="_blank"
      aria-label="Facebook"
      rel="noreferrer"
    >
      <svg className="svgicon facebook-icon">
        <use xlinkHref="#facebook-icon" />
      </svg>
    </a>
    <a
      href="/"
      target="_blank"
      aria-label="LinkedIn"
      rel="noreferrer"
    >
      <svg className="svgicon linkedin-icon">
        <use xlinkHref="#linkedin-icon" />
      </svg>
    </a>
    <a
      href="/"
      target="_blank"
      aria-label="Instagram"
      rel="noreferrer"
    >
      <svg className="svgicon instagram-icon">
        <use xlinkHref="#instagram-icon" />
      </svg>
    </a>
    <a
      href="/"
      target="_blank"
      aria-label="Twitter"
      rel="noreferrer"
    >
      <svg className="svgicon twitter-icon">
        <use xlinkHref="#twitter-icon" />
      </svg>
    </a>
    <a
      href="/"
      target="_blank"
      aria-label="TikTok"
      rel="noreferrer"
    >
      <svg className="svgicon tiktok-icon">
        <use xlinkHref="#tiktok-icon" />
      </svg>
    </a>
    <a
      href="/"
      target="_blank"
      aria-label="YouTube"
      rel="noreferrer"
    >
      <svg className="svgicon youtube-icon">
        <use xlinkHref="#youtube-icon" />
      </svg>
    </a>
    <a
      href="/"
      target="_blank"
      aria-label="Pinterest"
      rel="noreferrer"
    >
      <svg className="svgicon pinterest-icon">
        <use xlinkHref="#pinterest-icon" />
      </svg>
    </a>
  </div>
  {/* Social Media Follow Icons */}




  {/*  Call button show smoll screen at Mobile  Icons */}


  <ul className="mobilecalltoact">
    <li>
      {/* <a href="javascript:void(0)" data-href="https://api.whatsapp.com/send?phone=+971502299948&text=Hi,&nbsp;I'm&nbsp;contacting&nbsp;you&nbsp;through&nbsp;fastercars.ae&nbsp;I'd&nbsp;like&nbsp;to&nbsp;inquire&nbsp;about&nbsp;a&nbsp;car&nbsp;listed&nbsp;on&nbsp;your&nbsp;website" class="convwhatsapp-pop" target="_self" aria-label="WhatsApp Inquiry">
  <icon><svg class="svgicon whatsapp-icon"><use xlink:href="#whatsapp-icon"></use></svg></icon>
  <span>WhatsApp</span>
</a> */}
      <a
        href="#!"
        aria-label="WhatsApp Inquiry"
        target="_blank"
        rel="noreferrer"
      >
        <icon>
          <svg className="svgicon whatsapp-icon">
            <use xlinkHref="#whatsapp-icon" />
          </svg>
        </icon>
        <span>WhatsApp</span>
      </a>
    </li>
    <li>
      {/* <a href="javascript:void(0)" data-href="tel:+971502299948" aria-label="Call Us Inquiry" target="_self" class="convcall-pop">
  <icon><svg class="svgicon phone-icon"><use xlink:href="#phone-icon"></use></svg></icon>
  <span>Call Us</span>
</a> */}
      <a href="tel:+12345678" aria-label="Call Us Inquiry">
        <icon>
          <svg className="svgicon phone-icon">
            <use xlinkHref="#phone-icon" />
          </svg>
        </icon>
        <span>Call Us</span>
      </a>
    </li>
    <li id="mobilechatwidget">
      <span>Live Chat</span>
    </li>
  </ul>

  {/*  Call button show smoll screen at Mobile  Follow Icons   End  */}

    </div>

    


  );
}

export default Socal;
