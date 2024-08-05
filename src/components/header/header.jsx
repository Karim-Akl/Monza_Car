import React from 'react';
import "./header.css"
import "../../App.css"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
  <header>
    <div className="hdr-top">
      <div className="container">
        <div className="tbarwrap  flexrow">
          <ul className="hdrtp-lft">
            <li>
              <icon>
                <svg className="svgicon phone-icon">
                  <use xlinkHref="#phone-icon" />
                </svg>
              </icon>
              <a aria-label="" href="#!">
                +12345678910
              </a>
            </li>
            {/* <li><icon><svg class="svgicon phone-icon"><use xlink:href="#phone-icon"></use></svg></icon><a aria-label="" class="convcall-pop" href="javascript:void(0)" data-href="tel:+971502299948">+971 50 229 9948</a></li> */}
            <li>
              <icon>
                <svg className="svgicon whatsapp-icon">
                  <use xlinkHref="#whatsapp-icon" />
                </svg>
              </icon>
              <a
                target="_blank"  rel="noreferrer"  
                aria-label=""
                href="https://api.whatsapp.com/send?phone=+12345678910&text=Hi, I'm contacting you through fastercars.ae I'd like to inquire about a car listed on your website"
              >
                +12345678910
              </a>
            </li>
            {/* <li><icon><svg class="svgicon whatsapp-icon"><use xlink:href="#whatsapp-icon"></use></svg></icon><a target="_self" aria-label="" class="convwhatsapp-pop" href="javascript:void(0)" data-href="https://api.whatsapp.com/send?phone=+971502299948&text=Hi,&nbsp;I'm&nbsp;contacting&nbsp;you&nbsp;through&nbsp;fastercars.ae&nbsp;I'd&nbsp;like&nbsp;to&nbsp;inquire&nbsp;about&nbsp;a&nbsp;car&nbsp;listed&nbsp;on&nbsp;your&nbsp;website">+971 50 229 9948</a></li> */}
          </ul>
          {/* <div id="google_translate_element"></div> */}
          <div className="hdrtp-rgt">
            <form
              method="GET"
              action=""
              acceptCharset="UTF-8"
            >
              <div className="searchwrap">
                <input
                  className="mainsrch"
                  type="search"
                  name="keyword"
                  defaultValue=""
                  id="searchInput"
                  placeholder="Search Your Dream Car"
                />
                <button type="submit" aria-label="Search Results">
                  <svg className="svgicon search-icon">
                    <use xlinkHref="#search-icon" />
                  </svg>
                </button>
                {/* Search Result Dropdown Starts */}
                <div className="srdropdon" id="itemList">
                  <div className="scrollable-container">
                    <ul className="scrollable-content">
                      <li style={{ display: "none" }}>
                        <a href="/">
                          Al Barsha
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="/">
                          Dubai Mall
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/rent-a-car-mall-of-emirates">
                          Mall of The Emirates
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="/">
                          Business Bay
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/rent-a-car-dubai-marina">
                          Dubai Marina
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/rent-a-car-international-city">
                          International City
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/rent-a-car-shaikh-zayed-road">
                          Sheikh Zayed Road
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/rent-a-car-palm-jumeriah">
                          Palm Jumeirah
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/rent-a-car-dubai-airport">
                          Dubai International Airport
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/rent-a-car-jumeirah-lake-towers">
                          JLT (Jumeirah Lake Towers)
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/rent-a-car-al-quoz">
                          Al Quoz
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/rent-a-car-deira">
                          Deira
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/nissan-patrol/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690611743Nissan-Patrol-Red-Hawk-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Patrol Red Hawk
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ford-mustang-blue-orange/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1716464929frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mustang Most Wanted
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/nissan-nismo-silver-tiffany/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1704019184frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Nismo Silver Tiffany
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/infiniti-qx80-maroon/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1716360243Infiniti Qx80 Maroon.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Infiniti Qx80
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/black-hawk-nissan-patrol/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1718868701Nissan-Patrol-Black-Hawk.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Patrol Black Hawk
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/nissan-patrol-tiffany-hawk/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1716465159Nissan Patrol - Black Tiffany (2).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Patrol Tiffany Hawk
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-camaro-metallic-orange/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690389803Camaro-Orange-Metallic-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Camaro
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/nissan-patrol-brown/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1716458582Nissan Patrol (6).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Patrol
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/dodge-charger-modified-yellow-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690469361Dodge-Charger-Yellow-Black-Modified-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Dodge Charger V8 Yellow
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/bmw-x5/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1695904512BMW-X5-Rental (2).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          BMW X5
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-camaro/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690454817Chevrolet-Camaro-Blue-Orange-2-scaled.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Camaro Blue Orange
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/dodge-charger-hellcat-kit-blue/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690473531Dodge-Charger-Srt-Blue-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Dodge Charger V8
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/range-rover-velar-white/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702388038frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Range Rover Velar
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/dodge-charger-black-yellow/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1698240470Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Dodge Charger V8
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ford-bronco/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1712495986frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ford Bronco
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/dodge-charger/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690470496Dodge-Charger-V8-Orange-Black-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Dodge Charger V8
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-camaro-green/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690390378Chevrolet-Camaro-Green-Black-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Camaro Green
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/dodge-challenger-srt-gray-red/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1716367848DSC00133 copy.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Dodge Challenger Grey Red
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/range-rover-velar-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690618001range-rover-velar-3.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Range Rover Velar
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ferrari-f8-red/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ferrari F8 Spider
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/bmw-x7-grey/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1706528025frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          BMW X7
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-eqe-350/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1715257039MERCEDES EQE 350 (4).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes EQE 350
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-camaro-grey/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1704375477frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Camaro Grey
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/dodge-challenger-v8/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1718882397Dodge Challenger V8 (2).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Dodge Challenger V8
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ford-mustang-red/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1701770013frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ford Mustang Red Black
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/red-chevrolet-camaro/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690455578Chevrolet-Camaro-Red-and-Black-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Camaro Red
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-camaro-white/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690456213DSC04252.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Camaro White
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/nissan-patrol-hawk-modified/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702210453FRONT-SAID.jpg"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Silver Hawk
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/rolls-royce-ghost/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1696236079Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Rolls Royce Ghost
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/infiniti-qx80-modified/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690544225Infiniti-Qx80-Black-Orange-8.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Infiniti Qx80 Orange Blue
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/jaguar-f-pace-hire/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1713183254Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Jaguar F-Pace
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-camaro-silver/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690389559Chevrolet-Camaro-Silver-8.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Camaro Coupe White
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-camaro-black-and-blue/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690390136Camaro-Blue-and-Black-Rental-Dubai-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Camaro Blue
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/rent-cadillac-escalade-600/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690387618cadillac-escalade-600-black-rental-3.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Cadillac Escalade
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-camaro-tiffany/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1709217966frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Camaro Tiffany
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-camaro-blue/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1717080991Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Camaro
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/gmc-yukon-denali/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690543183GMC-YUKON-BLACK-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          GMC Yukon At4
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/lamborghini-huracan-evo-spyder/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690548962Lamborghini-Huracan-Evo-SPyder-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Lamborghini Huracan Evo Spyder
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/rent-ford-mustang-tiffany/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1711801893frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ford Mustang Tiffany
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-sl43-rental/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1717339981Mercedes SL43 Rental (8).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes SL43
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/lamborghini-urus-yellow-2/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690549174Lamborghini-Urus-Yellow-_Black-Interior_-front.-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Lamborghini Urus
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/audi-q7/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690281433Audi-Q7-White-2021-Version-2-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Audi Q7
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/nissan-patrol-white/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702466428frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Patrol White
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/jaguar-f-pace-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1719155523Jaguar F-Pace Rental (7).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Jaguar F-Pace
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ferrari-488-spider/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690474985Ferrari-488-Spider-White-front.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ferrari 488 Spider
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/hire-audi-a6/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1712042865frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Audi A6
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/infiniti-qx80-black-tiffany/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1718874988Infiniti Qx80 Black Tiffany (5).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Infiniti Qx80 Black Tiffany
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-gt-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702287767frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes Gt
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/audi-q8/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702296010FRONT-SIDE.jpg"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Audi RSQ8
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/infinity-qx80-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702456624frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Infiniti Qx80 Black
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/lamborghini-aventador/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690549990Lamborghini-Aventador-Roadster-_8_.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Lamborghini Aventador
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-traverse-black-2020/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/17021259612 copy.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Traverse
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/lamborghini-evo-coupe-gray/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702284694frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Lamborghini Evo Coupe
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/black-range-rover-sport/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702384050Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Range Rover Sport
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/audi-q8-rental/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702294187FRONT-SIDE.jpg"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Audi Q8
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/lamborghini-aventador-orange/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702453881Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Lamborghini Aventador
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/rolls-royce-wraith-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690621525rolls-royce-wraith-faster-rent-a-car-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Rolls Royce Wraith
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mazda-cx-5/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702285312front-side.jpg"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mazda Cx-5
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/audi-a3-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702293250Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Audi A3
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/bentley-bentayga-v8/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690282829BENTLEY-BENTAYGA-V8-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Bentley Bentayga
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/lamborghini-urus-white/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702458167Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Lamborghini Urus
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/jeep-grand-cherokee/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690546375Jeep-Grand-Cherokee-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Jeep Grand Cherokee
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/maserati-ghibli/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1701782563frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Maserati Ghibli
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/audi-rs-q3-grey/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1708344093frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Audi Rs Q3
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/range-rover-sport-black-matt/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702384813front-side.jpg"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Range Rover Sport
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/bentley-bentayga/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702296631Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Bentley Bentayga
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-c300-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702200360Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes C300
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/gmc-yukon-denali-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702305987FRONT-SIDE.jpg"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Gmc Yukon Denali
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/bentley-flying-spur/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690378860Bentley-Flying-Spur-White-5.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Bentley Flying Spur
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/audi-q3/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1708251631Audi Q3 (6).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Audi Q3
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/jaguar-e-pace-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702197026frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Jaguar E Pace
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-c63s-benz-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702208629DSC02992 copy.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes C63s
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/bentley-continental-gt/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702210910frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Bentley Continental GTC
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/bmw-430i-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690197616BMW-430i-BLACK-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          BMW 430i
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chrysler-matt-gray/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702129363frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chrysler - Matt Gray
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/nissan-patrol-armada-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1704295468frontside (4).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Patrol Black Tiffany
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/bmw-x5-40i-2023/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690380104BMW-X5-40i-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          BMW X5 40i 2023
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/bmw-x6-m50i/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690380978BMW-X6-Blue-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          BMW X6 M50I
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-corvette-orange-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702218671front-side.jpg"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Corvette
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mclaren-gt/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702286146Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mclaren Gt
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/rolls-royce-cullinan-matt-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702288437FRONTSIDE.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Rolls Royce Cullinan
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-c43-amg-white/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702373869front-side.jpg"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes C43 Amg
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/bmw-x2/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690381741BMW-X2-White-front-side-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          BMW X2
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/rolls-royce-dawn-gold/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702290508Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Rolls Royce Dawn
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/bmw-x3/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690386317bmw-x3-faster-rent-a-car-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          BMW X3
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/lamborghini-aventador-yellow/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702219411Front-Side.jpg"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Lamborghini Aventador
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/rolls-royce-ghost-silver/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702291449Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Rolls Royce Ghost
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-gle-350/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1701771649MERCEDES GLE 350 Rental (1).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes Benz GLE 350
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/lamborghini-evo-spyder/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702220142front-side.jpg"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Lamborghini Evo Spyder
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/bmw-430m-conv-green/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702297526frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          BMW 430M Conv
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/lamborghini-urus-pearl-capsule-yellow/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702371446FRONT-SAID.jpg"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Lamborghini Urus Pearl Capsule
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/bmw-x6/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690387081BMW-X6-White-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          BMW X6
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/land-rover-defender-matt-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702373051Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Land Rover Defender
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/cadillac-escalade/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690387937Cadillac-Escalade-Black-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Cadillac Escalade
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-g63-maybach-rims/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702376945front side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes G63 Maybach Rims
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/cadillac-escalade-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690388247Cadillac-Escalade-Black-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Cadillac Escalade
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mini-cooper-white/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702378735DSC04752.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mini Cooper
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mini-countryman-red/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702380099Front side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mini Countryman
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/range-rover-svr-blue-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702386923Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Range Rover Svr
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/nissan-armada-nismo-kit/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702381005front-side.jpg"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Patrol Nismo Kit
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/range-rover-velar-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702387645Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Range Rover Velar
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/range-rover-vogue-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702388871Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Range Rover Vogue
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/toyota-land-cruiser-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702390029FRONT-SIDE.jpg"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Toyota Land Cruiser
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/range-rover-velar-2024/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702454902frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Range Rover Velar
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/bmw-x6-gray/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702390510Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Bmw X6
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-c300-gold/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702455442Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes C300
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-traverse-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690391003Traverse-Rental-Dubai-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Traverse
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-camaro-matte-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690391417Camaro-Rental-Black-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Camaro Matt Black
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/lamborghini-evo-coupe-white/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702799781frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Lamborghini Huracan Evo
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/lamborghini-evo-coupe-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702461550Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Lamborghini Huracan Evo Coupe
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ferrari-f8-tribute/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702467154frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ferrari F8 Tribute
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/rolls-royce-cullinan-blue/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702462368frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Rolls Royce Cullinan
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/bmw-735i-white/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702471139frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          BMW 735i
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/gmc-yukon-white/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702464445frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Gmc Yukon
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-maybach-vito-rental/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1708614693mercedes-maybach-vito (6).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes Maybach Vito
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/infiniti-qx80-black-yellow-modified/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1716386685INFINITI QX80 - YELLOW + BLACK - 2022 - H 32674.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Infiniti Qx80 Yellow Black
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/infiniti-qx80-blue/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1709130473frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Infiniti Qx80 Blue Orange
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/porsche-911-carrera-4-GTS-white/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702122288frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Porsche 911 Carrera 4 GTS
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-impala/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690455942Chevrolet-Impala-Silver-2-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Impala
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-camaro-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690456781Chevrolet-Camaro-Grey-Yellow-Modified-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Camaro Black Yellow
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-glc-300-gray/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1701955899frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes GLC 300 - Gray
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/bentley-continental-gt-v8/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702216449frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Bentley Continental GT V8
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-corvette-3/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690467805Chevrolet-Corvette-C8-YELLOW-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Corvette
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-corvette-2/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690468053Chevrolet-Corvette-C8-Red-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Corvette
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/lamborghini-sto/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702282241front-side.jpg"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Lamborghini Sto
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/lamborghini-evo-spyder-2024/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1704375809frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Lamborghini Evo Spyder 2024
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-corvette/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690468286Chevrolet-Corvette-C8-Gray-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Corvette
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/rolls-royce-phantom-gold/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1701960551frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Rolls Royce Phantom - Gold
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/bentley-continental-gt-v12/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702217309Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Bentley Continental GT V12
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/corvette-blue/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690468490chevrolet-corvette-blue-faster-rent-a-car-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Corvette
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/dodge-journey-silver/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690469103Dodge-Journey-Silver-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Dodge Journey
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/dodge-durango/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690469866dodge-durango-matte-black-8.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Dodge Durango
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/dodge-journey/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690470238Dodge-Journey-rental-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Dodge Journey
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/dodge-durango-v8/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702194856DSC03623.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Dodge Durango V8
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/dodge-hellcat-kit/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690473794dodge-srt-faster-rent-a-car-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Dodge Hellcat Kit V8
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/dodge-charger-rental-dubai/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690474551Dodge-Charger-Blue-1-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Dodge Charger V6
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ferrari-roma/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690475196Ferrari-Roma-Black-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ferrari Roma
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ferrari-488-spider-yellow/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690475478Ferrar-488-Spider-Yellow-4.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ferrari 488 Spider
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ferrari-812-superfast/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690475665ferrari-812-superfast-faster-rent-a-car-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ferrari 812 Superfast
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ferrari-portofino/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690475982ferrari-portofino-faster-rent-a-car-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ferrari Portofino
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ford-taurus/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690476405Ford-Taurus-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ford Taurus
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ford-mustang-grey/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1704294350DSC02934 copy.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ford Mustang Convertible Grey
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ford-mustang-grey-yellow/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1696504478Ford-Mustang (7).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ford Mustang
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ford-mustang-gray-orange/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690541278Mustang-Shelby-Silver-Orange-5.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ford Mustang Grey Orange
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ford-mustang-silver/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690542174Ford-Mustang-Shelby-Silver-Blue-5.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ford Mustang Shelby Kit
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ford-mustang-orange/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1704287619Front Side (2).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ford Mustang Orange Black
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ford-mustang-silver-red/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690542543Ford-Mustang-Silver-Red-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ford Mustang
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/porsche-911/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690615875Porsche-Carrera-911-GTS-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Porsche Carrera 911 4 GTS
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ford-mustang-convertible/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690542757Ford-Mustang-White-and-Black-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ford Mustang
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/porsche-boxster/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1695543671front-side.jpg"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Porsche 718 Boxster
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ford-explorer/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702300119FRONT-SIDE.jpg"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ford Explorer
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/porsche-panamera-s/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690616178porsche-panamera-s-2019-faster-rent-a-car-1-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Porsche Panamera S
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/audi-r8-white/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690276693AUDI-R8-WHITE-VERSION-2-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Audi R8
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/hyundai-veloster/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690543457Hyundai-Veloster-Rental-Dubai-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Hyundai Veloster
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/audi-a3-3/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690277311Audi-A3-White-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Audi A3
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/hyundai-santa-fe/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690543656hyundai-santa-fe-faster-rent-a-car-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Hyundai Santa Fe
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/hyundai-santa-fe-gray/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690543922Hyundai-Senta-Fe-Gray-4.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Hyundai Santa Fe
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/audi-a3-2/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690277880Audi-A3-Dark-Blue-front.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Audi A3
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/infiniti-qx80-white-hawk/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1696323177Nissan-White-Hawk (2).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Infiniti Qx80 White Red
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/audi-a3/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690279047AUDI-A3-blue-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Audi A3
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/infiniti-qx80-silver/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690544866Infiniti-Qx80-Silver-10.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Infiniti Qx80 Silver
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/infiniti-qx80-black-hawk/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702735291frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Infiniti Qx80 Black Hawk
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/infiniti-qx80-white/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690545298Infiniti-Qx80-White-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Infiniti Qx80 White
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/infiniti-qx80/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1695546824front side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Infiniti Qx80 Grey
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/jaguar-e-pace/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690545893Jaguar-E-Pace-Black-for-rent-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Jaguar E-Pace
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/jaguar-f-pace/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690546139Jaguar-F-PACE-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Jaguar F-Pace
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/jeep-compass/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690547195Jeep-Compass-for-Rent-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Jeep Compass
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/jeep-wrangler/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690547997Jeep-Wrangler-7.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Jeep Wrangler
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/kia-optima/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690548221Kia-Optima-Gray-1-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Kia Optima
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/lamborghini-huracan-sto/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690548763Lambprghini-Huracan-STO-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Lamborghini Huracan STO
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/lamborghini-huracan-gray/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1694266411Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Lamborghini Huracan
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/lamborghini-urus-green/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690549798lamborghini-urus-green-faster-rent-a-car-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Lamborghini Urus Green
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/lamborghini-urus-yellow/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690550271Lamborghini-Urus-Yellow-_Yellow-Interior_-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Lamborghini Urus Yellow
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/lexus-570s/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690550464lexus-570s-faster-rent-a-car-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Lexus 570S
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/maserati-levante/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690550646maserati-levante-faster-rent-a-car-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Maserati Levante
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/maserati-granturismo-rental/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690550791maserati-granturismo-faster-rent-a-car-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Maserati GranTurismo
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mazda-6/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690551049Mazda-6-Rental-Dubai-4.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mazda 6
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mclaren-675/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690551761McLaren-675-Red-_4_.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          McLaren 675
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mclaren-570s/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690551936McLaren-570s-Red-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          McLaren 570S
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mclaren-720s/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690552227mclaren-720s-faster-rent-a-car-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          McLaren 720S
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-benz-e300-white/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690552925Mercedes-E300-White-8.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes-Benz E300
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-g63-green/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690553589Mercedes-Benz-G63-Green-Rental-4.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes-AMG G63
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-benz-maybach-gls-600-purple/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690553822front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes-Maybach GLS 600
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/white-mercedes-benz-g63/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690554182FRONT-SIDE-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes-AMG G63
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-benz-c200-convertible/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690554703Mercedes-Benz-C200-Convertible-4.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes-Benz C200
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-benz-cla-250-rental/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690554946Mercedes-Benz-Cla250-Black-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes-Benz CLA 250
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-benz-amg-e63/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690555461Mercedes-C300-Black-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes-AMG E63 Kit
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-benz-c200-rental/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690555701mercedes-benz-c200-gray-4.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes-Benz C200
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-benz-amg-gtr/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690555892Mercedes-Gtr-Green-5.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes-Benz AMG GTR
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-benz-maybach-gls-600/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690556176Mercedes-Benz-Maybach-GLS-600-4.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes-Maybach GLS 600
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-benz-g63/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1695130584front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes-AMG G63
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-benz-a220/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690557221Mercedes-Benz-A220-Faster-rent-a-car-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes Benz A220
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-benz-e200/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690557491Mercedes-Benz-E200-White-6.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes-Benz E200
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-benz-gla-250/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690557970MERCEDES-GLA-250-GRAY-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes-Benz GLA 250
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-benz-c200-white/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690558374Mercedes-Benz-C200-White-4-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes-Benz C200
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-benz-amg-gle-63s/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690558640mercedes-benz-faster-rent-a-car-2-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes-Benz AMG GLE 63 S
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-benz-s500-rental/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690558861Mercedes-Benz-S500-4.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes Benz S500
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-benz-amg-g63/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690559997mercedes-amg-g63-faster-rent-a-car-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes AMG G63
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mini-cooper-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690610356Mini-Cooper-Black-Convertible-4.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mini Cooper Convertible Black
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mini-cooper-yellow/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690610552Mini-Cooper-Yellow-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mini Cooper Yellow
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mini-cooper/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690610724Mini-Cooper-blue-Yellow-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mini Cooper Blue
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/rent-black-nissan-patrol/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690025576Nissan-Patrol-Black-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Patrol Black
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/nissan-patrol-gray-hawk/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690035197Nissan-Patrol-Gray-Hawk-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Patrol Grey Hawk
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/rent-nissan-patrol-nismo/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690037053Nissan-Patrol-Nismo-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Patrol Nismo Silver Blue
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/rent-nissan-patrol-rss/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1717599906Nissan patrol rss (8).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Patrol RSS
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/rent-white-nissan-patrol/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690612264Nissan-Patrol-White-Hawk-15.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan White Hawk
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/rent-silver-nissan-patrol-nismo/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690612696Silver-Nissan-Patrol-Nismo-3.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Patrol Nismo
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/nissan-patrol-nismo-kit-navy-blue/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690612967Nissan-Patrol-Nismo-Kit-Navy-Blue-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Patrol Nismo
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/nissan-patrol-nismo/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1704295757front-side (1).jpg"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Patrol Nismo
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/nissan-pathfinder/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690613548Nissan-Pathfinder-Black-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Pathfinder
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/nissan-patrol-silver/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690614134Nissan-Patrol-Platinum-SIlver-5-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Patrol Platinum
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/nissan-x-terra/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690614343Nissan-X-Terra-White-4.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan X-Terra
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/nissan-patrol-2/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690614572Nissan-Patrol-Nismo-Gray-5.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Patrol Nismo
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/nissan-x-trail/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690614747Nissan-X-Trail-Blue-5.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan X-Trail
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/white-nissan-patrol/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690614895Nissan-Patrol-White-front-side-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Patrol Platinum
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-benz-glc-300/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690197236Mercedes-Benz-GLC-300-Rental-Dubai-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes Benz GLC 300 Red
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/range-rover-velar-blue/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690617057Range-Rover-Velar-Matt-Blue-10.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Range Rover Velar Blue
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/range-rover-vogue-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690617266Range-Rover-Vogue-Black-Rental-Dubai-5.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Range Rover Vogue
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/range-rover-vogue/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690617653Range-Rover-Vogue-6.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Range Rover Vogue
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/range-rover-svr/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690617819Range-Rover-SVR-BLUE-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Range Rover SVR Blue
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/range-rover-sport/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690618209Range-Rover-Sport-Gray-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Range Rover Sport
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/range-rover-sport-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690618391Range-Rover-Sport-Black-front-side-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Range Rover Sport
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/range-rover-velar-rent/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690618568Range-Rover-Velar-4.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Range Rover Velar
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/range-rover-vogue-white/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690618776Range-Rover-Vogue-White-4.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Range Rover Vogue
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/jeep-cherokee/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690547002Jeep-Cherokee-Rental-Dubai-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Jeep Cherokee
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/range-rover-evoque/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690618961Range-Rover-Evoque-6.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Range Rover Evoque
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ford-escape/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690477109Ford-Escape-Rental-Dubai-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ford Escape
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/rolls-royce-ghost-black-badge/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690620368Rolls-Royce-Ghost-Black-Badge-4.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Rolls Royce Ghost Black Badge
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-equinox/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690391746FRONT-SAID.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Equinox
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/rolls-royce-cullinan/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690620566Rolls-Royce-Cullinan-Rental-Dubai-4.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Rolls Royce Cullinan
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-traverse/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702127917frontside.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Traverse
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/bmw-x1/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690382014BMW-X1-Gray-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          BMW X1 Grey
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/nissan-patrol-rss/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690613346Nissan-Patrol-Rss-2-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Patrol RSS
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-benz-e300/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690554451Mercedes-Benz-E300-Rental-Dark-BLue-11.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes-Benz E300
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-c63-s-kit/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690559039benz-balck-c63s-faster-rent-a-car-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes-Benz C63s Kit
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/rolls-royce-wraith/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690621197RR-Wraith-Black-Baby-Blue-front-side-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Rolls Royce Wraith
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-benz-c300-rental/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690559774Mercedes-C300-Black-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes-Benz C300
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/rolls-royce-dawn/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690621380Rolls-Royce-Dawn-4.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Rolls Royce Dawn
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-a220-red/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690553366Mercedes-A220-Red-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes A220
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-benz-c63-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702737000Mercedes-Benz-c63-Black-front.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes-Benz C43
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/rolls-royce-cullinan-white/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690621886Rolls-Royce-Cullinan-White-Red-front-side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Rolls Royce Cullinan
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/rolls-royce-dawn-dark-blue/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1696235158Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Rolls Royce Dawn
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/audi-a5/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690280288audi-a5-faster-rent-a-car-1-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Audi A5
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ford-mustang-silver-orange/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/17042940023.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ford Mustang Grey Orange
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/volkswagen-beetle/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690622391Volkswagen-Beetle-1-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Volkswagen Beetle
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/lamborghini-huracan-evo-spyder-green/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1694262668Lamborghini Huracan Evo Spyder (3).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Lamborghini Huracan Evo Spyder
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/audi-r8/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690281039Audi-R8-Rental-Dubai-4.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Audi R8
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/dodge-challenger-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1702131320Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Dodge Challenger V8
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/land-rover-discovery-white/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1694331217front side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Land Rover Discovery
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/mercedes-amg-g63-double-night-package/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1695131675front.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Mercedes AMG G63 Double Night Package
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ferrari-sf90/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1696498682Ferrari Sf90 rental.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ferrari SF90
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/rent-chevrolet-camaro-matte-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690454557Camaro-Matte-Black-5.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Camaro Black
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/porsche-cayenne-gts/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1695544874Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Porsche Cayenne GTS
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-traverse-silver/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1695565520FRONTSIDE.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Traverse Silver
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chevrolet-camaro-convertible/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1698238676front side(1).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Camaro Red
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chrysler-300-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690467173Chrysler-300-Black-2-1.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chrysler 300
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/camaro-black-yellow-modified/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690389277Camaro-Black-Yellow-Modified-2.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chevrolet Camaro Yellow
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/chrysler-300/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690467430Chrysler-White-7.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Chrysler 300
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/bmw-520i/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1695901985Front Side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          BMW 520i
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/jaguar-f-pace-orange/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1696319521Jaguar-F-Pace (1).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Jaguar F-Pace Orange
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/bmw-x1-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1696325040BMW-X1-Rental (6).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          BMW X1
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/nissan-patrol-tiffany-black/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1696326013front side.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Nissan Patrol Tiffany
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/bmw-740-li/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1696334685BMW-740Li (4).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          BMW 740Li
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/jeep-grand-cherokee-srt/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1696337095Jeep-Grand-Cherokee-SRT (4).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Jeep Grand Cherokee SRT
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/lamborghini-urus-neon-green/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1690548450Lamborghini-Urus-Neon-Green-3.webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Lamborghini Urus Neon
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/ferrari-purosangue/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1719754916Ferrari Purosangue Rental (7).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Ferrari Purosangue
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/car-detail/tesla-model-x/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1719759145Tesla Model X (8).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Tesla Model X
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="/">
                          <img
                            style={{ display: "none" }}
                            loading="lazy"
                            src="https://www.fastercars.ae/uploads/1719239912Porsche 911 Carrera 4 GTS Spyder (1).webp"
                            width={100}
                            height={50}
                            alt=""
                            title=""
                          />
                          Porsche 911 Carrera 4 GTS Spyder
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Search Result Dropdown Ends */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* Header Topbar */}
    <div className="hdr-botm">
      <div className="container">
        <div className="hdrbtm-wrap flexrow"
        >
          <div className=''>
            <a href="/"><img src="/logo.png"  width={154} height={70} alt="" />
            </a>
          </div>
          <ul className="navwrap">
            <li className="">
              <a href="/">Home</a>
            </li>
            <li id="brandsdrpd" className="">
              <span className='icon-close'>All Brands</span>
              <svg className="svgicon angle-icon">
                <use xlinkHref="#angle-icon" />
              </svg>
              <ul className="submenubrands brandswrap">
                <li>
                  <a href="/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084370logo-nissan.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Nissan
                      <div className="ct-count">25 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/chevrolet-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084552logo-chev.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Chevrolet
                      <div className="ct-count">21 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/ford-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084589logo-ford.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Ford
                      <div className="ct-count">15 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/dodge-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084333logo-dodge.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Dodge
                      <div className="ct-count">13 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/mercedes-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084388logo-mercides.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Mercedes
                      <div className="ct-count">36 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/car/mini-cooper-rental/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084508logo-mini.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Mini Cooper
                      <div className="ct-count">5 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/bmw-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084415logo-bmw.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      BMW
                      <div className="ct-count">15 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/audi-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084404logo-audi.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Audi
                      <div className="ct-count">13 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/infiniti-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084630infiniti-logo.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Infiniti
                      <div className="ct-count">11 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/range-rover-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084439logo-rangerover.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Range Rover
                      <div className="ct-count">19 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/lamborghini-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696083490logo-lambo.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Lamborghini
                      <div className="ct-count">19 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/ferrari-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084306logo-ferari.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Ferrari
                      <div className="ct-count">9 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/rolls-royce-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084022logo-rolls.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Rolls Royce
                      <div className="ct-count">13 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/porsche-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084429logo-porsch.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Porsche
                      <div className="ct-count">6 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/bentley-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084519logo-bantly.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Bentley
                      <div className="ct-count">6 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/cadillac-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084542logo-cadilak.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Cadillac
                      <div className="ct-count">3 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/mclaren-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084724logo-maclren.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      McLaren
                      <div className="ct-count">4 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/corvette-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084579logo-corvet.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Corvette
                      <div className="ct-count">5 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/chrysler-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084566chrysler-brand.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Chrysler
                      <div className="ct-count">3 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/jeep-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084674logo-jeep.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Jeep
                      <div className="ct-count">5 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/jaguar-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084663logo-jag.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Jaguar
                      <div className="ct-count">6 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/gmc-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084600logo-gmc.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      GMC
                      <div className="ct-count">3 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/lexus-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084695logo-lexuis.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Lexus
                      <div className="ct-count">1 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/volkswagen/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084734logo-volswegan.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Volkswagen
                      <div className="ct-count">1 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/mazda-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084715logo-mazda.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Mazda
                      <div className="ct-count">2 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/hyundai-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084618logo-hundiy.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Hyundai
                      <div className="ct-count">3 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/maserati-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1696084704logo-mazarati.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Maserati
                      <div className="ct-count">3 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/toyota-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1702293676toyota.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Toyota
                      <div className="ct-count">1 Cars</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/tesla-rental-dubai/">
                    <img
                      loading="lazy"
                      src="https://www.fastercars.ae/uploads/1719754992teslalogo.webp"
                      width={60}
                      height={60}
                      alt=""
                      title=""
                    />
                    <div className="ct-tile">
                      Tesla
                      <div className="ct-count">1 Cars</div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="">
              <a href="https://www.fastercars.ae/special-offers/">
                Special Offers
              </a>
            </li>
            <li id="fleetdrpd" className="">
              <span>Categories</span>
              <svg className="svgicon angle-icon">
                <use xlinkHref="#angle-icon" />
              </svg>
              <ul className="submenufleet">
                <li>
                  <a href="https://www.fastercars.ae/modified-car-rental/">
                    <svg className="svgicon angle-icon">
                      <use xlinkHref="#angle-icon" />
                    </svg>
                    Modified Car
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/suv-car-rental-dubai/">
                    <svg className="svgicon angle-icon">
                      <use xlinkHref="#angle-icon" />
                    </svg>
                    SUV Car
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/convertible-car-rental-dubai/">
                    <svg className="svgicon angle-icon">
                      <use xlinkHref="#angle-icon" />
                    </svg>
                    Convertible Car
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/economy-car-rental-dubai/">
                    <svg className="svgicon angle-icon">
                      <use xlinkHref="#angle-icon" />
                    </svg>
                    Economy Car
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/sports-car-rental-dubai/">
                    <svg className="svgicon angle-icon">
                      <use xlinkHref="#angle-icon" />
                    </svg>
                    Sports Car
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/luxury-car-rental-dubai/">
                    <svg className="svgicon angle-icon">
                      <use xlinkHref="#angle-icon" />
                    </svg>
                    Luxury Car
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/monthly-car-rental-dubai/">
                    <svg className="svgicon angle-icon">
                      <use xlinkHref="#angle-icon" />
                    </svg>
                    Monthly Car
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/safe-driver-dubai/">
                    <svg className="svgicon angle-icon">
                      <use xlinkHref="#angle-icon" />
                    </svg>
                    Safe Driver Dubai
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/hourly-car-rental/">
                    <svg className="svgicon angle-icon">
                      <use xlinkHref="#angle-icon" />
                    </svg>
                    Hourly Car Rental
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/weekly-car-rental/">
                    <svg className="svgicon angle-icon">
                      <use xlinkHref="#angle-icon" />
                    </svg>
                    Weekly Car Rental
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/daily-car-rental/">
                    <svg className="svgicon angle-icon">
                      <use xlinkHref="#angle-icon" />
                    </svg>
                    Daily Car Rental
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/long-term-car-rental/">
                    <svg className="svgicon angle-icon">
                      <use xlinkHref="#angle-icon" />
                    </svg>
                    Long Term Car Rental
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/muscle-car-rental/">
                    <svg className="svgicon angle-icon">
                      <use xlinkHref="#angle-icon" />
                    </svg>
                    Muscle Car Rental
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/airport-car-rental/">
                    <svg className="svgicon angle-icon">
                      <use xlinkHref="#angle-icon" />
                    </svg>
                    Airport Car Rental
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/business-car-rental/">
                    <svg className="svgicon angle-icon">
                      <use xlinkHref="#angle-icon" />
                    </svg>
                    Business Car Rental
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/7-seater-car-rental/">
                    <svg className="svgicon angle-icon">
                      <use xlinkHref="#angle-icon" />
                    </svg>
                    7 Seater Car Rental
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/yachts-rental-dubai/">
                    <svg className="svgicon angle-icon">
                      <use xlinkHref="#angle-icon" />
                    </svg>
                    Yachts Rental Dubai
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/electric-car-rental/">
                    <svg className="svgicon angle-icon">
                      <use xlinkHref="#angle-icon" />
                    </svg>
                    Electric Car Rental
                  </a>
                </li>
              </ul>
            </li>
            <li id="loctionsdrpd" className="">
              <span>Locations</span>
              <svg className="svgicon angle-icon">
                <use xlinkHref="#angle-icon" />
              </svg>
              <div className="submenuloc">
                <ul>
                  <li>
                    <a href="https://www.fastercars.ae/rent-a-car-al-barsha/">
                      <svg className="svgicon angle-icon">
                        <use xlinkHref="#angle-icon" />
                      </svg>
                      Al Barsha
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fastercars.ae/rent-a-car-dubai-mall/">
                      <svg className="svgicon angle-icon">
                        <use xlinkHref="#angle-icon" />
                      </svg>
                      Dubai Mall
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fastercars.ae/rent-a-car-mall-of-emirates/">
                      <svg className="svgicon angle-icon">
                        <use xlinkHref="#angle-icon" />
                      </svg>
                      Mall of The Emirates
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fastercars.ae/rent-a-car-business-bay/">
                      <svg className="svgicon angle-icon">
                        <use xlinkHref="#angle-icon" />
                      </svg>
                      Business Bay
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fastercars.ae/rent-a-car-dubai-marina/">
                      <svg className="svgicon angle-icon">
                        <use xlinkHref="#angle-icon" />
                      </svg>
                      Dubai Marina
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fastercars.ae/rent-a-car-international-city/">
                      <svg className="svgicon angle-icon">
                        <use xlinkHref="#angle-icon" />
                      </svg>
                      International City
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fastercars.ae/rent-a-car-shaikh-zayed-road/">
                      <svg className="svgicon angle-icon">
                        <use xlinkHref="#angle-icon" />
                      </svg>
                      Sheikh Zayed Road
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fastercars.ae/rent-a-car-palm-jumeriah/">
                      <svg className="svgicon angle-icon">
                        <use xlinkHref="#angle-icon" />
                      </svg>
                      Palm Jumeirah
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fastercars.ae/rent-a-car-dubai-airport/">
                      <svg className="svgicon angle-icon">
                        <use xlinkHref="#angle-icon" />
                      </svg>
                      Dubai International Airport
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fastercars.ae/rent-a-car-jumeirah-lake-towers/">
                      <svg className="svgicon angle-icon">
                        <use xlinkHref="#angle-icon" />
                      </svg>
                      JLT (Jumeirah Lake Towers)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fastercars.ae/rent-a-car-al-quoz/">
                      <svg className="svgicon angle-icon">
                        <use xlinkHref="#angle-icon" />
                      </svg>
                      Al Quoz
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fastercars.ae/rent-a-car-deira/">
                      <svg className="svgicon angle-icon">
                        <use xlinkHref="#angle-icon" />
                      </svg>
                      Deira
                    </a>
                  </li>
                </ul>
                <img
                  loading="lazy"
                  src="https://www.fastercars.ae/public/assets/images/locationdropdownimage.webp"
                  width={275}
                  height={469}
                  alt=""
                  title=""
                />
              </div>
            </li>
            <li className="">
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li id="srvcdrpdown" className=" showonlymobile">
              <span>Our Services</span>
              <svg className="svgicon angle-icon">
                <use xaHref="#angle-icon" />
              </svg>
              <ul className="servcdropd">
                <li>
                  <a href="/">
                    Yacht Charter Service
                  </a>
                </li>
                <li>
                  <a href="/">
                    Limousine Service
                  </a>
                </li>
                <li>
                  <a href="/">
                    Helicopter Tour Service
                  </a>
                </li>
                <li>
                  <a href="/">
                    Desert Safari Service
                  </a>
                </li>
              </ul>
            </li>
            <li className="showonlymobile">
              <a href="/">All Cars</a>
            </li>
            <li className="showonlymobile">
              <a href="/">FAQ'S</a>
            </li>
            <li className="showonlymobile">
              <a href="/">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            {/* Mobile Menu Close Icon */}
            <li id="closebtnmobmenu">
              <p className="icon-close">
              </p>
            </li>
            {/* Mobile Menu Close Icon */}
          </ul>
          {/* Hamburger Mobile */}
          <div className="ham-menu">
            <span className="line line1" ></span>
            <span className="line line2" />
            <span className="line line3" />
          </div>
          {/* Hamburger Mobile */}
        </div>
      </div>
    </div>
    {/* Header Bottom */}
  </header>
    </div>
  );
}

export default Header;
