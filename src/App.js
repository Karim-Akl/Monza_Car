import React, { useState } from 'react';
// import { Link } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <>
  <header>
    
    <div className="hdr-top">
      <div className="container">
        <div className="tbarwrap flexrow">
          <ul className="hdrtp-lft">
            <li>
              <icon>
                <svg className="svgicon phone-icon">
                  <use xlinkHref="#phone-icon" />
                </svg>
              </icon>
              <a aria-label="" href="tel:+971502299948">
                +201093378681
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
                target="_blank"
                aria-label=""
                href="https://api.whatsapp.com/send?phone=+971502299948&text=Hi, I'm contacting you through fastercars.ae I'd like to inquire about a car listed on your website"
              >
                +201093378681
              </a>
            </li>
            {/* <li><icon><svg class="svgicon whatsapp-icon"><use xlink:href="#whatsapp-icon"></use></svg></icon><a target="_self" aria-label="" class="convwhatsapp-pop" href="javascript:void(0)" data-href="https://api.whatsapp.com/send?phone=+971502299948&text=Hi,&nbsp;I'm&nbsp;contacting&nbsp;you&nbsp;through&nbsp;fastercars.ae&nbsp;I'd&nbsp;like&nbsp;to&nbsp;inquire&nbsp;about&nbsp;a&nbsp;car&nbsp;listed&nbsp;on&nbsp;your&nbsp;website">+971 50 229 9948</a></li> */}
          </ul>
          {/* <div id="google_translate_element"></div> */}
          <div className="hdrtp-rgt">
            <form
              method="GET"
              action="https://www.fastercars.ae/search"
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
                        <a href="https://www.fastercars.ae/rent-a-car-al-barsha">
                          Al Barsha
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/rent-a-car-dubai-mall">
                          Dubai Mall
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/rent-a-car-mall-of-emirates">
                          Mall of The Emirates
                        </a>
                      </li>
                      <li style={{ display: "none" }}>
                        <a href="https://www.fastercars.ae/rent-a-car-business-bay">
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
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/modified-car-rental">Modified Car</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/suv-car-rental-dubai">SUV Car</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/convertible-car-rental-dubai">Convertible Car</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/economy-car-rental-dubai">Economy Car</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/sports-car-rental-dubai">Sports Car</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/luxury-car-rental-dubai">Luxury Car</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/monthly-car-rental-dubai">Monthly Car</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/safe-driver-dubai">Safe Driver Dubai</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/hourly-car-rental">Hourly Car Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/weekly-car-rental">Weekly Car Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/daily-car-rental">Daily Car Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/long-term-car-rental">Long Term Car Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/muscle-car-rental">Muscle Car Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/airport-car-rental">Airport Car Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/business-car-rental">Business Car Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/7-seater-car-rental">7 Seater Car Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/yachts-rental-dubai">Yachts Rental Dubai</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/electric-car-rental">Electric Car Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/mercedes-gle-350-rental-dubai">Mercedes Benz GLE 350</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/land-cruiser-rental-dubai">Land Cruiser Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/mazda-cx5-for-rent">Mazda Cx 5</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/mclaren-gt-rental-dubai">McLaren GT</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/mercedes-s-class-rental-dubai">Mercedes S Class Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/bmw-4-series-rental-dubai">BMW 4 Series</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/bmw-x7-rental-dubai">BMW X7 Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/land-rover-defender-for-rent">Defender Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/ferrari-f8-spider-rental-dubai">Ferrari F8 Spider Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/mercedes-v-class-rental">Mercedes V Class</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/ferrari-f8-tributo-rental-dubai">Ferrari F8 Tributo Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/ferrari-purosangue-rental-dubai">Ferrari Purosangue Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/range-rover-sport-rental">Range Rover Sport</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/lamborghini-aventador-rental-dubai">Lamborghini Aventador</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/ferrari-812-superfast">Ferrari 812 Superfast</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/ferrari-portofino-rental">Ferrari Portofino</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/rolls-royce-wraith-rental-dubai">Rolls Royce Wraith</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/rolls-royce-dawn-rental-dubai">Rolls Royce Dawn</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/dodge-hellcat-kit-rental-dubai">Dodge Hellcat</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/rent-dodge-journey-in-dubai">Dodge Journey</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/dodge-durango-rental">Dodge Durango</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/mercedes-benz-glc-300-rental-dubai">Mercedes Benz GLC 300</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/rent-mercedes-benz-a220-in-dubai">Mercedes Benz A220</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/mercedes-benz-e200-rental">Mercedes Benz E200</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/mercedes-benz-c63-rental">Benz C63</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/mercedes-benz-gla-250-rental">Mercedes Benz GLA 250</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/mercedes-benz-c200-rental">Mercedes Benz C200</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/mercedes-benz-amg-gle-63s">Mercedes-AMG GLE 63 s</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/mercedes-benz-c300-rental">Mercedes-Benz C300</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/mercedes-benz-maybach-gls-600-rental">Benz Maybach GLS 600</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/mercedes-benz-e300-rental">Mercedes-Benz E300</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/mercedes-benz-cla-250-rental">Mercedes-Benz CLA 250</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/mercedes-benz-amg-e63-rental">Mercedes-AMG E63</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/mercedes-benz-amg-gtr-rental">Mercedes AMG GTR</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/porsche-boxster-rental-dubai">Porsche Boxster Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/porsche-cayenne-rental-dubai">Porsche Cayenne S</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/porsche-panamera-rental-dubai">Porsche Panamera S</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/porsche-911-rental-dubai">Porsche Carrera</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/range-rover-velar-rental-dubai">Range Rover Velar</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/land-rover-discovery-rental">Land Rover Discovery Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/range-rover-evoque-rental-dubai">Range Rover Evoque Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/bentley-continental-gt-rental">Bentley Continental GTC</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/bentley-bentayga-rental-dubai">Bentley Bentayga</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/bentley-flying-spur-rental">Bentley Flying Spur Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/chevrolet-traverse-rental">Chevrolet Traverse Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/chevrolet-equinox-rental">Chevrolet Equinox Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/chevrolet-impala-rental">Chevrolet Impala Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/chrysler-300-rental-dubai">Chrysler 300 Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/gmc-yukon-denali-rental">GMC Yukon Denali</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/hyundai-veloster-for-rent">Hyundai Veloster</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/hyundai-santa-fe-rental">Hyundai Santa Fe Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/jaguar-e-pace-rental">Jaguar E-Pace</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/jaguar-f-pace-rental">Jaguar F-Pace</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/jeep-cherokee-rental">Jeep Cherokee Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/jeep-compass-for-rent">Jeep Compass</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/jeep-wrangler-rental">Jeep Wrangler</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/kia-optima-rental-dubai">Kia Optima Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/lexus-570s-rental">Lexus 570S Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/mazda-6-rental-dubai">Mazda 6 Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/mclaren-675-rental">McLaren 675 Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/mclaren-570s-spider-rental">McLaren 570S Spider Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/mclaren-720s-rental">McLaren 720S Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/nissan-pathfinder-rental">Nissan Pathfinder</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/nissan-x-terra-rental">Nissan X-Terra Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/nissan-x-trail-rental">Nissan X-Trail Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/volkswagen-beetle-rental">Volkswagen Beetle</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/ferrari-sf90-rental-dubai">Ferrari SF90 Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/lamborghini-huracan-rental-dubai">Lamborghini Huracan</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/rolls-royce-ghost-rental-dubai">Rolls Royce Ghost</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/g63-rental-dubai">Mercedes AMG G63</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/bmw-x6-rental-dubai">BMW X6 Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/range-rover-svr-rental">Range Rover SVR</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/audi-r8-rental-dubai">Audi R8 Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/ferrari-488-spider-rental-dubai">Ferrari 488 Spider</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/nissan-rental-dubai">Nissan</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/camaro-rental-dubai">Chevrolet Camaro</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/nissan-patrol-rental-dubai">Nissan Patrol</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/dodge-challenger-rental-dubai">Dodge Challenger</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/infiniti-qx80-rental">Infiniti QX80</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/cadillac-escalade-rental-dubai">Cadillac Escalade</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/maserati-ghibli-for-rent-in-dubai">Maserati Ghibli</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/ford-bronco-rental-dubai">Ford Bronco Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/rolls-royce-cullinan-rental-dubai">Rolls Royce Cullinan</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/lamborghini-urus-rental-dubai">Lamborghini Urus</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/mercedes-benz-s500-rental">Mercedes S500</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/range-rover-vogue-rental-dubai">Range Rover Vogue</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/audi-q7-rental">Audi Q7</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/chevrolet-rental-dubai">Chevrolet</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/ford-mustang-rental">Ford Mustang Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/dodge-charger-rental-dubai">Dodge Charger</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/ferrari-roma-rental">Ferrari Roma</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/maserati-levante-rental">Maserati Levante</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/bmw-7-series-rental-dubai">BMW 7 Series Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/audi-a3-rental">Audi A3 Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/ford-rental-dubai">Ford</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/bmw-x5-rental-dubai">BMW X5 Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/ford-taurus-rental">Ford Taurus Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/maserati-granturismo-rental">Maserati GranTurismo</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/dodge-rental-dubai">Dodge</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/audi-a6-rental-dubai">Audi A6 Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/ford-explorer-rental-dubai">Ford Explorer</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/bmw-5-series-rental-dubai">BMW 5 Series</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/mercedes-rental-dubai">Mercedes</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/audi-q8-rental">Audi Q8</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/bmw-x3-rental">BMW X3 Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/ford-escape-rental">Ford Escape</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/mini-cooper-rental">Mini Cooper</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/bmw-x2-rental">BMW X2 Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/audi-q3-rental-dubai">Audi Q3</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/bmw-rental-dubai">BMW</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/audi-a5-rental">Audi A5 Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/car/bmw-x1-rental">BMW X1 Rental</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/audi-rental-dubai">Audi</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/infiniti-rental-dubai">Infiniti</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/range-rover-rental-dubai">Range Rover</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/lamborghini-rental-dubai">Lamborghini</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/ferrari-rental-dubai">Ferrari</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/rolls-royce-rental-dubai">Rolls Royce</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/porsche-rental-dubai">Porsche</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/bentley-rental-dubai">Bentley</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/cadillac-rental-dubai">Cadillac</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/mclaren-rental-dubai">McLaren</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/corvette-rental-dubai">Corvette</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/chrysler-rental-dubai">Chrysler</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/jeep-rental-dubai">Jeep</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/jaguar-rental-dubai">Jaguar</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/gmc-rental-dubai">GMC</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/lexus-rental-dubai">Lexus</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/volkswagen">Volkswagen</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/mazda-rental-dubai">Mazda</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/hyundai-rental-dubai">Hyundai</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/maserati-rental-dubai">Maserati</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/toyota-rental-dubai">Toyota</a></li>*/}
                      {/*<li style="display: none;"><a href="https://www.fastercars.ae/tesla-rental-dubai">Tesla</a></li>*/}
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
                        <a href="https://www.fastercars.ae/car-detail/porsche-911-carrera-4-gts-spyder-rental/">
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
        <div className="hdrbtm-wrap flexrow">
          <ul className="navwrap">
            <li className="">
              <a href="https://www.fastercars.ae">Home</a>
            </li>
            <li id="brandsdrpd" className="">
              <span>All Brands</span>
              <svg className="svgicon angle-icon">
                <use xlinkHref="#angle-icon" />
              </svg>
              <ul className="submenubrands brandswrap">
                <li>
                  <a href="https://www.fastercars.ae/nissan-rental-dubai/">
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
              <a href="https://www.fastercars.ae/about-us/">About Us</a>
            </li>
            <li>
              <a href="https://www.fastercars.ae/blog/">Blog</a>
            </li>
            <li id="srvcdrpdown" className=" showonlymobile">
              <span>Our Services</span>
              <svg className="svgicon angle-icon">
                <use xlinkHref="#angle-icon" />
              </svg>
              <ul className="servcdropd">
                <li>
                  <a href="https://www.fastercars.ae/yacht-charter-service/">
                    Yacht Charter Service
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/limousine-service/">
                    Limousine Service
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/helicopter-tour-service/">
                    Helicopter Tour Service
                  </a>
                </li>
                <li>
                  <a href="https://www.fastercars.ae/desert-safari-service/">
                    Desert Safari Service
                  </a>
                </li>
              </ul>
            </li>
            <li className="showonlymobile">
              <a href="https://www.fastercars.ae/car-listings/">All Cars</a>
            </li>
            <li className="showonlymobile">
              <a href="https://www.fastercars.ae/faqs/">FAQ'S</a>
            </li>
            <li className="showonlymobile">
              <a href="https://www.fastercars.ae/terms-and-conditions/">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="https://www.fastercars.ae/get-in-touch/">Contact Us</a>
            </li>
            {/* Mobile Menu Close Icon */}
            <li id="closebtnmobmenu">
              <svg className="svgicon close-icon">
                <use xlinkHref="#close-icon" />
              </svg>
            </li>
            {/* Mobile Menu Close Icon */}
          </ul>
          {/* Hamburger Mobile */}
          <div className="ham-menu">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>
          {/* Hamburger Mobile */}
        </div>
      </div>
    </div>
    {/* Header Bottom */}
  </header>
{/* ####################### */}





{/* 3############################ */}
  {/* Header Ends Here */}
  {/* FancyBox Image Gallery */}
  <link
    rel="preload"
    href="https://www.fastercars.ae/public/assets/css/fancyboximagegallery.min.css"
    as="style"
    onload="this.onload=null;this.rel='stylesheet'"
  />
  {/* FancyBox Image Gallery */}
  {/*  Page Title and Breadcrumbs Starts */}
  <div className="pt-bredwrap">
    <div className="container">
      <div className="ptboutr">
        <h1>Infiniti Qx80</h1>
        <ol className="breadcrumb">
          <li>
            <a
              aria-label="Home"
              // href="https://www.fastercars.ae"
              className="fa fa-home"
            />
          </li>
          <li>
            <a
              aria-label=""
              // href="https://www.fastercars.ae/infiniti-rental-dubai/"
            >
              Infiniti
            </a>
          </li>
          <li>
            <a
              aria-label=""
              // href="/car/infiniti-qx80-rental/"
            >
              Infiniti QX80
            </a>
          </li>
          <li className="active">Infiniti Qx80 Yellow Black</li>
        </ol>
      </div>
    </div>
  </div>
  {/*  Page Title and Breadcrumbs Ends */}
  {/* Car Detials Start Section Starts */}
  <div className="cardtailsec padd-top padd-botm">
    <div className="container">
      <div className="cardtailwrap flexrow">
        <div className="cdleft">
          <div className="swiper gallery">
            <div className="swiper-wrapper">
              {/* Video Integration Starts */}
              {/* Video Integration Ends */}
              <div
                className="swiper-slide"
                data-fancybox="gallery"
                data-thumb="/uploads/1716386685INFINITI QX80 - YELLOW + BLACK - 2022 - H 32674.webp"
                data-src="/uploads/1716386685INFINITI QX80 - YELLOW + BLACK - 2022 - H 32674.webp"
              >
                <img
                  loading="lazy"
                  src="https://www.fastercars.ae/uploads/1716386685INFINITI QX80 - YELLOW + BLACK - 2022 - H 32674.webp"
                  width={788}
                  height={394}
                  alt="Infinti Qx80 Yellow and Black Modified Front View"
                  title="Infinti Qx80 Yellow and Black Modified Front View"
                />
              </div>
              <div
                className="swiper-slide"
                data-fancybox="gallery"
                data-thumb="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (2).webp"
                data-src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (2).webp"
              >
                <img
                  loading="lazy"
                  src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (2).webp"
                  width={788}
                  height={394}
                  alt="Infiniti Qx80 Yellow and Black Modified Exterior Back Side View"
                  title="Infiniti Qx80 Yellow and Black Modified Exterior Back Side View"
                />
              </div>
              <div
                className="swiper-slide"
                data-fancybox="gallery"
                data-thumb="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (5).webp"
                data-src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (5).webp"
              >
                <img
                  loading="lazy"
                  src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (5).webp"
                  width={788}
                  height={394}
                  alt="Infiniti Qx80 Yellow and Black Modified Interior"
                  title="Infiniti Qx80 Yellow and Black Modified Interior"
                />
              </div>
              <div
                className="swiper-slide"
                data-fancybox="gallery"
                data-thumb="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (3).webp"
                data-src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (3).webp"
              >
                <img
                  loading="lazy"
                  src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (3).webp"
                  width={788}
                  height={394}
                  alt="Infiniti Qx80 Yellow and Black Modified Interior Back Seats"
                  title="Infiniti Qx80 Yellow and Black Modified Interior Back Seats"
                />
              </div>
              <div
                className="swiper-slide"
                data-fancybox="gallery"
                data-thumb="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (10).webp"
                data-src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (10).webp"
              >
                <img
                  loading="lazy"
                  src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (10).webp"
                  width={788}
                  height={394}
                  alt="Infiniti Qx80 Yellow and Black Modified Interior Back Seats"
                  title="Infiniti Qx80 Yellow and Black Modified Interior Back Seats"
                />
              </div>
              <div
                className="swiper-slide"
                data-fancybox="gallery"
                data-thumb="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (9).webp"
                data-src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (9).webp"
              >
                <img
                  loading="lazy"
                  src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (9).webp"
                  width={788}
                  height={394}
                  alt="Infiniti Qx80 Yellow and Black Modified Interior Back Seats"
                  title="Infiniti Qx80 Yellow and Black Modified Interior Back Seats"
                />
              </div>
              <div
                className="swiper-slide"
                data-fancybox="gallery"
                data-thumb="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (8).webp"
                data-src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (8).webp"
              >
                <img
                  loading="lazy"
                  src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (8).webp"
                  width={788}
                  height={394}
                  alt="Infiniti Qx80 Yellow and Black Modified Exterior Front View"
                  title="Infiniti Qx80 Yellow and Black Modified Exterior Front View"
                />
              </div>
              <div
                className="swiper-slide"
                data-fancybox="gallery"
                data-thumb="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (6).webp"
                data-src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (6).webp"
              >
                <img
                  loading="lazy"
                  src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (6).webp"
                  width={788}
                  height={394}
                  alt="Infiniti Qx80 Yellow and Black Modified Exterior Side View"
                  title="Infiniti Qx80 Yellow and Black Modified Exterior Side View"
                />
              </div>
              <div
                className="swiper-slide"
                data-fancybox="gallery"
                data-thumb="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (4).webp"
                data-src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (4).webp"
              >
                <img
                  loading="lazy"
                  src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (4).webp"
                  width={788}
                  height={394}
                  alt="Infiniti Qx80 Yellow and Black Modified Interior"
                  title="Infiniti Qx80 Yellow and Black Modified Interior"
                />
              </div>
              <div
                className="swiper-slide"
                data-fancybox="gallery"
                data-thumb="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (7).webp"
                data-src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (7).webp"
              >
                <img
                  loading="lazy"
                  src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (7).webp"
                  width={788}
                  height={394}
                  alt="Infiniti Qx80 Yellow and Black Modified Exterior Rear"
                  title="Infiniti Qx80 Yellow and Black Modified Exterior Rear"
                />
              </div>
            </div>
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </div>
          <div thumbsslider="" className="swiper thumbnails">
            {/* Preloader On Custom Sections */}
            <div id="preloader" className="preloader">
              <div className="loader" />
            </div>
            {/* Preloader On Custom Sections */}
            <div className="swiper-wrapper">
              <div
                className="swiper-slide sectionpreloader videothumb"
                style={{ display: "none" }}
              >
                <img
                  loading="lazy"
                  src=""
                  width={788}
                  height={394}
                  alt=""
                  title=""
                />
              </div>
              <div
                className="swiper-slide sectionpreloader"
                style={{ display: "none" }}
              >
                <img
                  loading="lazy"
                  src="https://www.fastercars.ae/uploads/1716386685INFINITI QX80 - YELLOW + BLACK - 2022 - H 32674.webp"
                  width={788}
                  height={394}
                  alt="Infinti Qx80 Yellow and Black Modified Front View"
                  title="Infinti Qx80 Yellow and Black Modified Front View"
                />
              </div>
              <div
                className="swiper-slide sectionpreloader"
                style={{ display: "none" }}
              >
                <img
                  loading="lazy"
                  src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (2).webp"
                  width={788}
                  height={394}
                  alt="Infiniti Qx80 Yellow and Black Modified Exterior Back Side View"
                  title="Infiniti Qx80 Yellow and Black Modified Exterior Back Side View"
                />
              </div>
              <div
                className="swiper-slide sectionpreloader"
                style={{ display: "none" }}
              >
                <img
                  loading="lazy"
                  src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (5).webp"
                  width={788}
                  height={394}
                  alt="Infiniti Qx80 Yellow and Black Modified Interior"
                  title="Infiniti Qx80 Yellow and Black Modified Interior"
                />
              </div>
              <div
                className="swiper-slide sectionpreloader"
                style={{ display: "none" }}
              >
                <img
                  loading="lazy"
                  src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (3).webp"
                  width={788}
                  height={394}
                  alt="Infiniti Qx80 Yellow and Black Modified Interior Back Seats"
                  title="Infiniti Qx80 Yellow and Black Modified Interior Back Seats"
                />
              </div>
              <div
                className="swiper-slide sectionpreloader"
                style={{ display: "none" }}
              >
                <img
                  loading="lazy"
                  src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (10).webp"
                  width={788}
                  height={394}
                  alt="Infiniti Qx80 Yellow and Black Modified Interior Back Seats"
                  title="Infiniti Qx80 Yellow and Black Modified Interior Back Seats"
                />
              </div>
              <div
                className="swiper-slide sectionpreloader"
                style={{ display: "none" }}
              >
                <img
                  loading="lazy"
                  src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (9).webp"
                  width={788}
                  height={394}
                  alt="Infiniti Qx80 Yellow and Black Modified Interior Back Seats"
                  title="Infiniti Qx80 Yellow and Black Modified Interior Back Seats"
                />
              </div>
              <div
                className="swiper-slide sectionpreloader"
                style={{ display: "none" }}
              >
                <img
                  loading="lazy"
                  src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (8).webp"
                  width={788}
                  height={394}
                  alt="Infiniti Qx80 Yellow and Black Modified Exterior Front View"
                  title="Infiniti Qx80 Yellow and Black Modified Exterior Front View"
                />
              </div>
              <div
                className="swiper-slide sectionpreloader"
                style={{ display: "none" }}
              >
                <img
                  loading="lazy"
                  src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (6).webp"
                  width={788}
                  height={394}
                  alt="Infiniti Qx80 Yellow and Black Modified Exterior Side View"
                  title="Infiniti Qx80 Yellow and Black Modified Exterior Side View"
                />
              </div>
              <div
                className="swiper-slide sectionpreloader"
                style={{ display: "none" }}
              >
                <img
                  loading="lazy"
                  src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (4).webp"
                  width={788}
                  height={394}
                  alt="Infiniti Qx80 Yellow and Black Modified Interior"
                  title="Infiniti Qx80 Yellow and Black Modified Interior"
                />
              </div>
              <div
                className="swiper-slide sectionpreloader"
                style={{ display: "none" }}
              >
                <img
                  loading="lazy"
                  src="https://www.fastercars.ae/uploads/1709038539Infinti Qx80 Yellow and Black (7).webp"
                  width={788}
                  height={394}
                  alt="Infiniti Qx80 Yellow and Black Modified Exterior Rear"
                  title="Infiniti Qx80 Yellow and Black Modified Exterior Rear"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="cdrgt">
          <h2>Infiniti Qx80 Yellow Black</h2>
          <div className="googlerating">
            <svg className="svgicon star-icon active">
              <use xlinkHref="#star-icon" />
            </svg>
            <svg className="svgicon star-icon active">
              <use xlinkHref="#star-icon" />
            </svg>
            <svg className="svgicon star-icon active">
              <use xlinkHref="#star-icon" />
            </svg>
            <svg className="svgicon star-icon active">
              <use xlinkHref="#star-icon" />
            </svg>
            <svg className="svgicon star-icon active">
              <use xlinkHref="#star-icon" />
            </svg>
          </div>
          <div className="allpricecontainer">
            <div className="mainprice">
              AED <strong>666</strong> <span>/ Day</span>
              <div className="delprice">AED 999</div>
            </div>
          </div>
          <ul className="carthumb-cta">
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=+971502299948&text=Hi, I'm contacting you through fastercars.ae. I'd like to inquire about %22Infiniti Qx80 Yellow Black%22%20%0Ahttps://www.fastercars.ae/car-detail/infiniti-qx80-black-yellow-modified"
                target="_blank" rel="noopener noreferrer"
                aria-label="WhatsApp Inquiry"
              >
                <svg className="svgicon whatsapp-icon">
                  <use xlinkHref="#whatsapp-icon" />
                </svg>
                WhatsApp
              </a>
            </li>
            {/* <li><a href="javascript:void(0)" data-href="https://api.whatsapp.com/send?phone=+971502299948&text=Hi, I&#039;m contacting you through fastercars.ae. I&#039;d like to inquire about %22Infiniti Qx80 Yellow Black%22%20%0Ahttps://www.fastercars.ae/car-detail/infiniti-qx80-black-yellow-modified" target="_self" aria-label="WhatsApp Inquiry" class="convwhatsapp-pop"><svg class="svgicon whatsapp-icon"><use xlink:href="#whatsapp-icon"></use></svg>WhatsApp</a></li> */}
            <li>
              <a href="tel:+971502299948" aria-label="Call Us Inquiry" 
                target="_blank" rel="noopener noreferrer"
                >
                
                <svg className="svgicon phone-icon">
                  <use xlinkHref="#phone-icon" />
                </svg>
                Call Us
              </a>
            </li>
            {/* <li><a href="javascript:void(0)" data-href="tel:+971502299948" aria-label="Call Us Inquiry" target="_self" class="convcall-pop"><svg class="svgicon phone-icon"><use xlink:href="#phone-icon"></use></svg>Call Us</a></li> */}
            <li>
              <button
                data-url="https://www.fastercars.ae/car-detail/infiniti-qx80-black-yellow-modified"
                data-title="Infiniti Qx80 Yellow Black"
                className="booknowpop"
                aria-label="Book Online Inquiry"
              >
                <svg className="svgicon book-icon">
                  <use xlinkHref="#book-icon" />
                </svg>
                Book Online
              </button>
            </li>
          </ul>
          <div className="carspecs">
            <span className="fancytitle2">Specifications</span>
            <div className="carspecswrap">
              <div className="specslist">
                <div className="feature-img">
                  <img
                    loading="lazy"
                    src="https://www.fastercars.ae/public/assets/images/specification-icon-carmake.svg"
                    width={30}
                    height={30}
                    alt=""
                    title=""
                  />
                </div>
                <div className="featues-info">
                  <span>Make</span>
                  <p> Infinity</p>
                </div>
              </div>
              <div className="specslist">
                <div className="feature-img">
                  <img
                    loading="lazy"
                    src="https://www.fastercars.ae/public/assets/images/specification-icon-cartype.svg"
                    width={30}
                    height={30}
                    alt=""
                    title=""
                  />
                </div>
                <div className="featues-info">
                  <span>Car Type</span>
                  <p>SUV</p>
                </div>
              </div>
              <div className="specslist">
                <div className="feature-img">
                  <img
                    loading="lazy"
                    src="https://www.fastercars.ae/public/assets/images/specification-icon-door.svg"
                    width={30}
                    height={30}
                    alt=""
                    title=""
                  />
                </div>
                <div className="featues-info">
                  <span>Door</span>
                  <p> 4 Doors</p>
                </div>
              </div>
              <div className="specslist">
                <div className="feature-img">
                  <img
                    loading="lazy"
                    src="https://www.fastercars.ae/public/assets/images/specification-icon-passenger.svg"
                    width={30}
                    height={30}
                    alt=""
                    title=""
                  />
                </div>
                <div className="featues-info">
                  <span>Passengers</span>
                  <p> 7</p>
                </div>
              </div>
              <div className="specslist">
                <div className="feature-img">
                  <img
                    loading="lazy"
                    src="https://www.fastercars.ae/public/assets/images/specification-icon-gear.svg"
                    width={30}
                    height={30}
                    alt=""
                    title=""
                  />
                </div>
                <div className="featues-info">
                  <span>Gear</span>
                  <p> Auto</p>
                </div>
              </div>
              <div className="specslist">
                <div className="feature-img">
                  <img
                    loading="lazy"
                    src="https://www.fastercars.ae/public/assets/images/specification-icon-luggage.svg"
                    width={30}
                    height={30}
                    alt=""
                    title=""
                  />
                </div>
                <div className="featues-info">
                  <span>Luggages</span>
                  <p>2</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carspecs">
            <span className="fancytitle2">Included</span>
            <div className="carspecswrap">
              <ul className="thumboffer">
                <li>
                  <svg className="svgicon circlecheck-icon">
                    <use xlinkHref="#circlecheck-icon" />
                  </svg>
                  Free Delivery
                </li>
                <li>
                  <svg className="svgicon circlecheck-icon">
                    <use xlinkHref="#circlecheck-icon" />
                  </svg>
                  Insurance Included
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*  Car Detail Top Section */}
      <div className="cardtailbtm flexcol">
        <span className="fancytitle2">Car Description</span>
        <div className="cmseditor">
          <ul>
            <li>Air Condition</li>
            <li>GPS Navigation</li>
            <li>USB Input</li>
            <li>Bluetooth</li>
            <li>Audio Input</li>
            <li>Leather Seats</li>
            <li>Starlight Headlining</li>
            <li>Modified Alloy Rims</li>
          </ul>
        </div>
      </div>
      {/* Car Detial Bottom Section */}
      {/* Related Cars */}
      <div className="cars-section padd-top relatdcarsec">
        <div className="container">
          <div className="fancytitle">
            <h2>Related Cars</h2>
          </div>
          <div className="carscolwrap">
            <div className="swiper" id="relatedcarcrsl">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div
                    data-daily-price={600}
                    data-monthly-price=""
                    className="carthumb
"
                  >
                    <div className="ctimgcont">
                      <div className="slider-container">
                        <div className="slider">
                          <div className="slide">
                            <a
                              aria-label="Detail Page Link"
                              href="https://www.fastercars.ae/car-detail/infinity-qx80-black/"
                target="_blank" rel="noopener noreferrer"

                            >
                              <img
                                className="mainimg"
                                loading="lazy"
                                src="https://www.fastercars.ae/uploads/1702456624frontside.webp"
                                width={332}
                                height={166}
                                alt="Infinity Qx80 - Black Front Side"
                                title="Infinity Qx80 - Black Front Side"
                              />
                            </a>
                          </div>
                          <div className="slide">
                            <a
                              aria-label="Detail Page Link"
                              href="https://www.fastercars.ae/car-detail/infinity-qx80-black/"
                target="_blank" rel="noopener noreferrer"

                            >
                              <img
                                className="mainimg"
                                loading="lazy"
                                src="https://www.fastercars.ae/uploads/1702456624inside.webp"
                                width={332}
                                height={166}
                                alt="Infinity Qx80 - Black Inside"
                                title="Infinity Qx80 - Black Inside"
                              />
                            </a>
                          </div>
                          <div className="slide">
                            <a
                              aria-label="Detail Page Link"
                              href="https://www.fastercars.ae/car-detail/infinity-qx80-black/"
                target="_blank" rel="noopener noreferrer"

                            >
                              <img
                                className="mainimg"
                                loading="lazy"
                                src="https://www.fastercars.ae/uploads/1702456624inside2.webp"
                                width={332}
                                height={166}
                                alt="Infinity Qx80 - Black Inside 2"
                                title="Infinity Qx80 - Black Inside 2"
                              />
                            </a>
                          </div>
                        </div>
                        <button
                          aria-label="Arrow Navigation"
                          className="prev-slide"
                        >
                          <svg className="svgicon angle-icon">
                            <use xlinkHref="#angle-icon" />
                          </svg>
                        </button>
                        <button
                          aria-label="Arrow Navigation"
                          className="next-slide"
                        >
                          <svg className="svgicon angle-icon">
                            <use xlinkHref="#angle-icon" />
                          </svg>
                        </button>
                        <div className="pagination" />
                      </div>
                      <img
                        loading="lazy"
                        className="brandico"
                        src="https://www.fastercars.ae/uploads/1696084630infiniti-logo.webp"
                        width={60}
                        height={60}
                        alt=""
                        title=""
                      />
                      {/* <a href="https://www.fastercars.ae/car-detail/infinity-qx80-black">
      <div class="seemore">See More <i class="fa fa-angle-double-right"></i></div>
  </a> */}
                    </div>
                    <div className="ctdtailcont">
                      <div className="thumbtitle">
                        <a
                          aria-label=""
                          href="https://www.fastercars.ae/car-detail/infinity-qx80-black/"
                target="_blank" rel="noopener noreferrer"

                        >
                          <h3>Infiniti Qx80 Black</h3>
                        </a>
                      </div>
                      <div className="pricewrap">
                        <div className="mainprice">
                          <div className="orignalprice">
                            AED <strong>450</strong> <span>/ Day</span>
                          </div>
                          <div className="delprice">AED 600</div>
                        </div>
                      </div>
                      <div className="googlerating">
                        <svg className="svgicon star-icon  active">
                          <use xlink="#star-icon" />
                        </svg>
                        {/*  <i class="fa-solid fa-star  active"></i> */}
                        <svg className="svgicon star-icon  active">
                          <use xlinkHref="#star-icon" />
                        </svg>
                        {/*  <i class="fa-solid fa-star  active"></i> */}
                        <svg className="svgicon star-icon  active">
                          <use xlinkHref="#star-icon" />
                        </svg>
                        {/*  <i class="fa-solid fa-star  active"></i> */}
                        <svg className="svgicon star-icon  active">
                          <use xlinkHref="#star-icon" />
                        </svg>
                        {/*  <i class="fa-solid fa-star  active"></i> */}
                        <svg className="svgicon star-icon  active">
                          <use xlinkHref="#star-icon" />
                        </svg>
                        {/*  <i class="fa-solid fa-star  active"></i> */}
                      </div>
                      <ul className="thumbfeature">
                        <li>
                          <img
                            loading="lazy"
                            src="https://www.fastercars.ae/public/assets/images/car-door.svg"
                            width={18}
                            height={18}
                            alt="door"
                            title="door"
                          />
                          4
                        </li>
                        <li>
                          <img
                            loading="lazy"
                            src="https://www.fastercars.ae/public/assets/images/car-seat.svg"
                            width={18}
                            height={18}
                            alt="passengers"
                            title="passengers"
                          />
                          7
                        </li>
                        <li>
                          <img
                            loading="lazy"
                            src="https://www.fastercars.ae/public/assets/images/car-briefcase.svg"
                            width={18}
                            height={18}
                            alt="luggages"
                            title="luggages"
                          />
                          2
                        </li>
                        {/* <li>SUV</li> */}
                        <li>SUV</li>
                      </ul>
                      <ul className="thumboffer">
                        <li>
                          <svg className="svgicon circlecheck-icon">
                            <use xlinkHref="#circlecheck-icon" />
                          </svg>
                          Free Delivery
                        </li>
                        <li>
                          <svg className="svgicon circlecheck-icon">
                            <use xlinkHref="#circlecheck-icon" />
                          </svg>
                          Insurance Included
                        </li>
                      </ul>
                      <ul className="carthumb-cta">
                        <li>
                          <a
                            href="https://api.whatsapp.com/send?phone=+971502299948&text=Hi, I'm contacting you through fastercars.ae. I'd like to inquire about %22Infiniti Qx80 Black%22%20%0Ahttps://www.fastercars.ae/car-detail/infinity-qx80-black"
                            target="_blank"
                            aria-label="WhatsApp Inquiry"
                          >
                            <svg className="svgicon whatsapp-icon">
                              <use xlinkHref="#whatsapp-icon" />
                            </svg>
                            WhatsApp
                          </a>
                        </li>
                        {/* <li><a href="javascript:void(0)" data-href="https://api.whatsapp.com/send?phone=+971502299948&text=Hi, I&#039;m contacting you through fastercars.ae. I&#039;d like to inquire about %22Infiniti Qx80 Black%22%20%0Ahttps://www.fastercars.ae/car-detail/infinity-qx80-black" target="_self" aria-label="WhatsApp Inquiry" class="convwhatsapp-pop"><svg class="svgicon whatsapp-icon"><use xlink:href="#whatsapp-icon"></use></svg>WhatsApp</a></li> */}
                        <li>
                          <a
                            href="tel:+971502299948"
                target="_blank" rel="noopener noreferrer"

                            aria-label="Call Us Inquiry"
                          >
                            <svg className="svgicon phone-icon">
                              <use xlinkHref="#phone-icon" />
                            </svg>
                            Call Us
                          </a>
                        </li>
                        {/* <li><a href="javascript:void(0)" data-href="tel:+971502299948" aria-label="Call Us Inquiry" target="_self" class="convcall-pop"><svg class="svgicon phone-icon"><use xlink:href="#phone-icon"></use></svg>Call Us</a></li> */}
                        <li>
                          <button
                            data-url="https://www.fastercars.ae/car-detail/infinity-qx80-black"
                            data-title="Infiniti Qx80 Black"
                            className="booknowpop"
                            aria-label="Book Online Inquiry"
                          >
                            <svg className="svgicon book-icon">
                              <use xlinkHref="#book-icon" />
                            </svg>
                            Book Online
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>{" "}
                </div>
                <div className="swiper-slide">
                  <div
                    data-daily-price={750}
                    data-monthly-price={14000}
                    className="carthumb
"
                  >
                    <div className="ctimgcont">
                      <div className="slider-container">
                        <div className="slider">
                          <div className="slide">
                            <a
                              aria-label="Detail Page Link"
                              href="https://www.fastercars.ae/car-detail/infiniti-qx80-modified/"
                target="_blank" rel="noopener noreferrer"

                            >
                              <img
                                className="mainimg"
                                loading="lazy"
                                src="https://www.fastercars.ae/uploads/1690544225Infiniti-Qx80-Black-Orange-8.webp"
                                width={332}
                                height={166}
                                alt=""
                                title=""
                              />
                            </a>
                          </div>
                          <div className="slide">
                            <a
                              aria-label="Detail Page Link"
                              href="https://www.fastercars.ae/car-detail/infiniti-qx80-modified/"
                            >
                              <img
                                className="mainimg"
                                loading="lazy"
                                src="https://www.fastercars.ae/uploads/1690544225Infiniti-Qx80-Black-Orange-10.webp"
                                width={332}
                                height={166}
                                alt=""
                                title=""
                              />
                            </a>
                          </div>
                          <div className="slide">
                            <a
                              aria-label="Detail Page Link"
                              href="https://www.fastercars.ae/car-detail/infiniti-qx80-modified/"
                            >
                              <img
                                className="mainimg"
                                loading="lazy"
                                src="https://www.fastercars.ae/uploads/1690544225Infiniti-Qx80-Black-Orange-1.webp"
                                width={332}
                                height={166}
                                alt=""
                                title=""
                              />
                            </a>
                          </div>
                        </div>
                        <button
                          aria-label="Arrow Navigation"
                          className="prev-slide"
                        >
                          <svg className="svgicon angle-icon">
                            <use xlinkHref="#angle-icon" />
                          </svg>
                        </button>
                        <button
                          aria-label="Arrow Navigation"
                          className="next-slide"
                        >
                          <svg className="svgicon angle-icon">
                            <use xlinkHref="#angle-icon" />
                          </svg>
                        </button>
                        <div className="pagination" />
                      </div>
                      <img
                        loading="lazy"
                        className="brandico"
                        src="https://www.fastercars.ae/uploads/1696084630infiniti-logo.webp"
                        width={60}
                        height={60}
                        alt=""
                        title=""
                      />
                      {/* <a href="https://www.fastercars.ae/car-detail/infiniti-qx80-modified">
      <div class="seemore">See More <i class="fa fa-angle-double-right"></i></div>
  </a> */}
                    </div>
                    <div className="ctdtailcont">
                      <div className="thumbtitle">
                        <a
                          aria-label=""
                          href="https://www.fastercars.ae/car-detail/infiniti-qx80-modified/"
                        >
                          <h3>Infiniti Qx80 Orange Blue</h3>
                        </a>
                      </div>
                      <div className="pricewrap">
                        <div className="mainprice">
                          <div className="orignalprice">
                            AED <strong>499</strong> <span>/ Day</span>
                          </div>
                          <div className="delprice">AED 750</div>
                        </div>
                        <div className="mainprice">
                          {" "}
                          <div className="orignalprice">
                            AED <strong>13000</strong> <span>/ Monthly</span>
                          </div>
                          <div className="delprice">AED 14000</div>
                        </div>
                      </div>
                      <div className="googlerating">
                        <svg className="svgicon star-icon  active">
                          <use xlinkHref="#star-icon" />
                        </svg>
                        {/*  <i class="fa-solid fa-star  active"></i> */}
                        <svg className="svgicon star-icon  active">
                          <use xlinkHref="#star-icon" />
                        </svg>
                        {/*  <i class="fa-solid fa-star  active"></i> */}
                        <svg className="svgicon star-icon  active">
                          <use xlinkHref="#star-icon" />
                        </svg>
                        {/*  <i class="fa-solid fa-star  active"></i> */}
                        <svg className="svgicon star-icon  active">
                          <use xlinkHref="#star-icon" />
                        </svg>
                        {/*  <i class="fa-solid fa-star  active"></i> */}
                        <svg className="svgicon star-icon  active">
                          <use xlinkHref="#star-icon" />
                        </svg>
                        {/*  <i class="fa-solid fa-star  active"></i> */}
                      </div>
                      <ul className="thumbfeature">
                        <li>
                          <img
                            loading="lazy"
                            src="https://www.fastercars.ae/public/assets/images/car-door.svg"
                            width={18}
                            height={18}
                            alt="door"
                            title="door"
                          />
                          4
                        </li>
                        <li>
                          <img
                            loading="lazy"
                            src="https://www.fastercars.ae/public/assets/images/car-seat.svg"
                            width={18}
                            height={18}
                            alt="passengers"
                            title="passengers"
                          />
                          7
                        </li>
                        <li>
                          <img
                            loading="lazy"
                            src="https://www.fastercars.ae/public/assets/images/car-briefcase.svg"
                            width={18}
                            height={18}
                            alt="luggages"
                            title="luggages"
                          />
                          3
                        </li>
                        {/* <li>SUV</li> */}
                        <li>SUV</li>
                      </ul>
                      <ul className="thumboffer">
                        <li>
                          <svg className="svgicon circlecheck-icon">
                            <use xlinkHref="#circlecheck-icon" />
                          </svg>
                          Free Delivery
                        </li>
                        <li>
                          <svg className="svgicon circlecheck-icon">
                            <use xlinkHref="#circlecheck-icon" />
                          </svg>
                          Insurance Included
                        </li>
                      </ul>
                      <ul className="carthumb-cta">
                        <li>
                          <a
                            href="https://api.whatsapp.com/send?phone=+971502299948&text=Hi, I'm contacting you through fastercars.ae. I'd like to inquire about %22Infiniti Qx80 Orange Blue%22%20%0Ahttps://www.fastercars.ae/car-detail/infiniti-qx80-modified"
                            target="_blank"
                            aria-label="WhatsApp Inquiry"
                          >
                            <svg className="svgicon whatsapp-icon">
                              <use xlinkHref="#whatsapp-icon" />
                            </svg>
                            WhatsApp
                          </a>
                        </li>
                        {/* <li><a href="javascript:void(0)" data-href="https://api.whatsapp.com/send?phone=+971502299948&text=Hi, I&#039;m contacting you through fastercars.ae. I&#039;d like to inquire about %22Infiniti Qx80 Orange Blue%22%20%0Ahttps://www.fastercars.ae/car-detail/infiniti-qx80-modified" target="_self" aria-label="WhatsApp Inquiry" class="convwhatsapp-pop"><svg class="svgicon whatsapp-icon"><use xlink:href="#whatsapp-icon"></use></svg>WhatsApp</a></li> */}
                        <li>
                          <a
                            href="tel:+971502299948"
                            aria-label="Call Us Inquiry"
                          >
                            <svg className="svgicon phone-icon">
                              <use xlinkHref="#phone-icon" />
                            </svg>
                            Call Us
                          </a>
                        </li>
                        {/* <li><a href="javascript:void(0)" data-href="tel:+971502299948" aria-label="Call Us Inquiry" target="_self" class="convcall-pop"><svg class="svgicon phone-icon"><use xlink:href="#phone-icon"></use></svg>Call Us</a></li> */}
                        <li>
                          <button
                            data-url="https://www.fastercars.ae/car-detail/infiniti-qx80-modified"
                            data-title="Infiniti Qx80 Orange Blue"
                            className="booknowpop"
                            aria-label="Book Online Inquiry"
                          >
                            <svg className="svgicon book-icon">
                              <use xlinkHref="#book-icon" />
                            </svg>
                            Book Online
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>{" "}
                </div>
                <div className="swiper-slide">
                  <div
                    data-daily-price={650}
                    data-monthly-price={12500}
                    className="carthumb
flashsalethumb
"
                  >
                    <div className="ctimgcont">
                      <div className="slider-container">
                        <div className="slider">
                          <div className="slide">
                            <a
                              aria-label="Detail Page Link"
                              href="https://www.fastercars.ae/car-detail/infiniti-qx80-black-hawk/"
                            >
                              <img
                                className="mainimg"
                                loading="lazy"
                                src="https://www.fastercars.ae/uploads/1702735291frontside.webp"
                                width={332}
                                height={166}
                                alt="Infiniti Qx80 Black Hawk - Black - 2019 - T 53963 inside 3"
                                title="Infiniti Qx80 Black Hawk Front Side"
                              />
                            </a>
                          </div>
                          <div className="slide">
                            <a
                              aria-label="Detail Page Link"
                              href="https://www.fastercars.ae/car-detail/infiniti-qx80-black-hawk/"
                target="_blank" rel="noopener noreferrer"


                            >
                              <img
                                className="mainimg"
                                loading="lazy"
                                src="https://www.fastercars.ae/uploads/1702197236inside1.webp"
                                width={332}
                                height={166}
                                alt="Infiniti Qx80 4"
                                title="Infiniti Qx80 4"

                              />
                            </a>
                          </div>
                          <div className="slide">
                            <a
                              aria-label="Detail Page Link"
                              href="https://www.fastercars.ae/car-detail/infiniti-qx80-black-hawk/"
                target="_blank" rel="noopener noreferrer"

                            >
                              <img
                                className="mainimg"
                                loading="lazy"
                                src="https://www.fastercars.ae/uploads/1702197236inside2.webp"
                                width={332}
                                height={166}
                                alt="Infiniti Qx80 2"
                                title="Infiniti Qx80 2"
                              />
                            </a>
                          </div>
                        </div>
                        <button
                          aria-label="Arrow Navigation"
                          className="prev-slide"
                        >
                          <svg className="svgicon angle-icon">
                            <use xlinkHref="#angle-icon" />
                          </svg>
                        </button>
                        <button
                          aria-label="Arrow Navigation"
                          className="next-slide"
                        >
                          <svg className="svgicon angle-icon">
                            <use xlinkHref="#angle-icon" />
                          </svg>
                        </button>
                        <div className="pagination" />
                      </div>
                      <img
                        loading="lazy"
                        className="brandico"
                        src="https://www.fastercars.ae/uploads/1696084630infiniti-logo.webp"
                        width={60}
                        height={60}
                        alt=""
                        title=""
                      />
                      {/* <a href="https://www.fastercars.ae/car-detail/infiniti-qx80-black-hawk">
      <div class="seemore">See More <i class="fa fa-angle-double-right"></i></div>
  </a> */}
                    </div>
                    <div className="ctdtailcont">
                      <div className="thumbtitle">
                        <a
                          aria-label=""
                          href="https://www.fastercars.ae/car-detail/infiniti-qx80-black-hawk/"
                        >
                          <h3>Infiniti Qx80 Black Hawk</h3>
                        </a>
                      </div>
                      <div className="pricewrap">
                        <div className="mainprice">
                          <div className="orignalprice">
                            AED <strong>450</strong> <span>/ Day</span>
                          </div>
                          <div className="delprice">AED 650</div>
                        </div>
                        <div className="mainprice">
                          {" "}
                          <div className="orignalprice">
                            AED <strong>9900</strong> <span>/ Monthly</span>
                          </div>
                          <div className="delprice">AED 12500</div>
                        </div>
                      </div>
                      <div className="timerwrap">
                        <div className="countdowntimer" />
                      </div>
                      <div className="googlerating">
                        <svg className="svgicon star-icon  active">
                          <use xlinkHref="#star-icon" />
                        </svg>
                        {/*  <i class="fa-solid fa-star  active"></i> */}
                        <svg className="svgicon star-icon  active">
                          <use xlinkHref="#star-icon" />
                        </svg>
                        {/*  <i class="fa-solid fa-star  active"></i> */}
                        <svg className="svgicon star-icon  active">
                          <use xlinkHref="#star-icon" />
                        </svg>
                        {/*  <i class="fa-solid fa-star  active"></i> */}
                        <svg className="svgicon star-icon  active">
                          <use xlinkHref="#star-icon" />
                        </svg>
                        {/*  <i class="fa-solid fa-star  active"></i> */}
                        <svg className="svgicon star-icon  active">
                          <use xlinkHref="#star-icon" />
                        </svg>
                        {/*  <i class="fa-solid fa-star  active"></i> */}
                      </div>
                      <ul className="thumbfeature">
                        <li>
                          <img
                            loading="lazy"
                            src="https://www.fastercars.ae/public/assets/images/car-door.svg"
                            width={18}
                            height={18}
                            alt="door"
                            title="door"
                          />
                          4
                        </li>
                        <li>
                          <img
                            loading="lazy"
                            src="https://www.fastercars.ae/public/assets/images/car-seat.svg"
                            width={18}
                            height={18}
                            alt="passengers"
                            title="passengers"
                          />
                          4
                        </li>
                        <li>
                          <img
                            loading="lazy"
                            src="https://www.fastercars.ae/public/assets/images/car-briefcase.svg"
                            width={18}
                            height={18}
                            alt="luggages"
                            title="luggages"
                          />
                          5
                        </li>
                        {/* <li>SUV</li> */}
                        <li>SUV</li>
                      </ul>
                      <ul className="thumboffer">
                        <li>
                          <svg className="svgicon circlecheck-icon">
                            <use xlinkHref="#circlecheck-icon" />
                          </svg>
                          Free Delivery
                        </li>
                        <li>
                          <svg className="svgicon circlecheck-icon">
                            <use xlinkHref="#circlecheck-icon" />
                          </svg>
                          Insurance Included
                        </li>
                      </ul>
                      <ul className="carthumb-cta">
                        <li>
                          <a
                            href="https://api.whatsapp.com/send?phone=+971502299948&text=Hi, I'm contacting you through fastercars.ae. I'd like to inquire about %22Infiniti Qx80 Black Hawk%22%20%0Ahttps://www.fastercars.ae/car-detail/infiniti-qx80-black-hawk"
                            target="_blank"
                            aria-label="WhatsApp Inquiry"
                          >
                            <svg className="svgicon whatsapp-icon">
                              <use xlinkHref="#whatsapp-icon" />
                            </svg>
                            WhatsApp
                          </a>
                        </li>
                        {/* <li><a href="javascript:void(0)" data-href="https://api.whatsapp.com/send?phone=+971502299948&text=Hi, I&#039;m contacting you through fastercars.ae. I&#039;d like to inquire about %22Infiniti Qx80 Black Hawk%22%20%0Ahttps://www.fastercars.ae/car-detail/infiniti-qx80-black-hawk" target="_self" aria-label="WhatsApp Inquiry" class="convwhatsapp-pop"><svg class="svgicon whatsapp-icon"><use xlink:href="#whatsapp-icon"></use></svg>WhatsApp</a></li> */}
                        <li>
                          <a
                            href="tel:+971502299948"
                            aria-label="Call Us Inquiry"
                          >
                            <svg className="svgicon phone-icon">
                              <use xlinkHref="#phone-icon" />
                            </svg>
                            Call Us
                          </a>
                        </li>
                        {/* <li><a href="javascript:void(0)" data-href="tel:+971502299948" aria-label="Call Us Inquiry" target="_self" class="convcall-pop"><svg class="svgicon phone-icon"><use xlink:href="#phone-icon"></use></svg>Call Us</a></li> */}
                        <li>
                          <button
                            data-url="https://www.fastercars.ae/car-detail/infiniti-qx80-black-hawk"
                            data-title="Infiniti Qx80 Black Hawk"
                            className="booknowpop"
                            aria-label="Book Online Inquiry"
                          >
                            <svg className="svgicon book-icon">
                              <use xlinkHref="#book-icon" />
                            </svg>
                            Book Online
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </div>
      {/* Related Cars */}
    </div>
  </div>
  {/* Car Detials Start Section Ends */}
  {/* Footer Starts Here */}
  {/* Footer Starts Here */}
  <footer>
    <div
      className="footer bgimagelazyload"
      data-src="https://www.fastercars.ae/public/assets/images/footerbgcar.webp"
    >
      <div className="container">
        <div className="ftrwrap flexrow">
          <div className="fotrwidget">
            {/* <a href="#!">
              <img
                loading="lazy"
                className="logo"
                src="public/assets/images/logo.png"
                width={231}
                height={68}
                alt="Faster Rent a Car"
                title="Faster Rent a Car"
              />
            </a> */}
            <p>
              Faster Luxury Car Rental Dubai professional Sports Car Rental
              Service. Customer well-being, satisfaction and choice are our
              extreme priority.
            </p>
            <a className="btnstyle02" href="#!">
              Continue Reading
            </a>
          </div>
          <div className="fotrwidget">
            <div className="fancytitle-light">Useful Links</div>
            <ul className="fotrlinks">
              <li>
                <a href="#!">
                  <svg className="svgicon dotcircle-icon">
                    <use xlinkHref="#dotcircle-icon" />
                  </svg>
                  About Us
                </a>
              </li>
              <li>
                <a href="#!">
                  <svg className="svgicon dotcircle-icon">
                    <use xlinkHref="#dotcircle-icon" />
                  </svg>
                  Special Offers
                </a>
              </li>
              <li>
                <a href="#!">
                  <svg className="svgicon dotcircle-icon">
                    <use xlinkHref="#dotcircle-icon" />
                  </svg>
                  Blogs &amp; News
                </a>
              </li>
              <li>
                <a href="#!">
                  <svg className="svgicon dotcircle-icon">
                    <use xlinkHref="#dotcircle-icon" />
                  </svg>
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#!">
                  <svg className="svgicon dotcircle-icon">
                    <use xlinkHref="#dotcircle-icon" />
                  </svg>
                  FAQ'S
                </a>
              </li>
              <li>
                <a href="#!">
                  <svg className="svgicon dotcircle-icon">
                    <use xlinkHref="#dotcircle-icon" />
                  </svg>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#!">
                  <svg className="svgicon dotcircle-icon">
                    <use xlinkHref="#dotcircle-icon" />
                  </svg>
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div className="fotrwidget">
            <div className="fancytitle-light">Categories</div>
            <ul className="fotrlinks">
              <li>
                <a href="#!/">
                  <sv className="svgicon dotcircle-icon">
                    <use xlinkHref="#dotcircle-icon" />
                    Modified Car
                  </sv>
                </a>
              </li>
              <li>
                <a href="#!">
                  <svg className="svgicon dotcircle-icon">
                    <use xlinkHref="#dotcircle-icon" />
                  </svg>
                  SUV Car
                </a>
              </li>
              <li>
                <a href="#!">
                  <svg className="svgicon dotcircle-icon">
                    <use xlinkHref="#dotcircle-icon" />
                  </svg>
                  Convertible Car
                </a>
              </li>
              <li>
                <a href="#!">
                  <svg className="svgicon dotcircle-icon">
                    <use xlinkHref="#dotcircle-icon" />
                  </svg>
                  Economy Car
                </a>
              </li>
              <li>
                <a href="#!">
                  <svg className="svgicon dotcircle-icon">
                    <use xlinkHref="#dotcircle-icon" />
                  </svg>
                  Sports Car
                </a>
              </li>
              <li>
                <a href="#!">
                  <svg className="svgicon dotcircle-icon">
                    <use xlinkHref="#dotcircle-icon" />
                  </svg>
                  Luxury Car
                </a>
              </li>
              <li>
                <a href="#!">
                  <svg className="svgicon dotcircle-icon">
                    <use xlinkHref="#dotcircle-icon" />
                  </svg>
                  Monthly Car
                </a>
              </li>
            </ul>
          </div>
          <div className="fotrwidget">
            <div className="fancytitle-light">Our Services</div>
            <ul className="fotrlinks">
              <li>
                <a href="#!">
                  <svg className="svgicon dotcircle-icon">
                    <use xlinkHref="#dotcircle-icon" />
                  </svg>
                  Yacht Charter Service
                </a>
              </li>
              <li>
                <a href="#!">
                  <svg className="svgicon dotcircle-icon">
                    <use xlinkHref="#dotcircle-icon" />
                  </svg>
                  Limousine Service
                </a>
              </li>
              <li>
                <a href="#!">
                  <svg className="svgicon dotcircle-icon">
                    <use xlinkHref="#dotcircle-icon" />
                  </svg>
                  Helicopter Tour Service
                </a>
              </li>
              <li>
                <a href="#!">
                  <svg className="svgicon dotcircle-icon">
                    <use xlinkHref="#dotcircle-icon" />
                  </svg>
                  Desert Safari Service
                </a>
              </li>
            </ul>
          </div>
          <div className="fotrwidget">
            <div className="fancytitle-light">Support</div>
            <p>
              <svg className="svgicon loc-icon">
                <use xlinkHref="#loc-icon" />
              </svg>
              <a
                aria-label=""
                target="_blank"
                href="https://goo.gl/maps/8a3Km5GAK39A6TdPA"
              >
                Rose 2 – 17a St – Dubai, Al Barsha, Sheikh Zayed Road, United
                Arab Emirates.
              </a>
            </p>
            <p>
              <svg className="svgicon phone-icon">
                <use xlinkHref="#phone-icon" />
              </svg>
              <a aria-label="" href="tel:+971502299948">
                +971 50 229 9948
              </a>
            </p>
            {/* <p><svg class="svgicon phone-icon"><use xlink:href="#phone-icon"></use></svg><a aria-label="" class="convcall-pop" href="javascript:void(0)" data-href="tel:+971502299948">+971 50 229 9948</a></p> */}
            <p>
              <svg className="svgicon whatsapp-icon">
                <use xlinkHref="#whatsapp-icon" />
              </svg>
              <a
                aria-label=""
                target="_blank"
                href="https://api.whatsapp.com/send?phone=+971502299948&text=Hi, I'm contacting you through fastercars.ae I'd like to inquire about a car listed on your website"
              >
                +971 50 229 9948
              </a>
            </p>
            {/* <p><svg class="svgicon whatsapp-icon"><use xlink:href="#whatsapp-icon"></use></svg><a aria-label="" class="convwhatsapp-pop" target="_self" href="javascript:void(0)" data-href="https://api.whatsapp.com/send?phone=+971502299948&text=Hi,&nbsp;I'm&nbsp;contacting&nbsp;you&nbsp;through&nbsp;fastercars.ae&nbsp;I'd&nbsp;like&nbsp;to&nbsp;inquire&nbsp;about&nbsp;a&nbsp;car&nbsp;listed&nbsp;on&nbsp;your&nbsp;website">+971 50 229 9948</a></p> */}
            <p>
              <svg className="svgicon email-icon">
                <use xlinkHref="#email-icon" />
              </svg>
              <a aria-label="" href="mailto:info@fastercars.ae">
                info@fastercars.ae
              </a>
            </p>
          </div>
          <div className="fotrwidget socialmobile">
            <div className="fancytitle-light">Follow Us</div>
            <div className="social">
              <a
                href="https://www.facebook.com/Faster.Rent/"
                target="_blank"
                aria-label="Facebook"
              >
                <svg className="svgicon facebook-icon">
                  <use xlinkHref="#facebook-icon" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/fasterrentacar/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <svg className="svgicon linkedin-icon">
                  <use xlinkHref="#linkedin-icon" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/fasterrentacar/"
                target="_blank"
                aria-label="Instagram"
              >
                <svg className="svgicon instagram-icon">
                  <use xlinkHref="#instagram-icon" />
                </svg>
              </a>
              <a
                href="https://twitter.com/fasterrentacar/"
                target="_blank"
                aria-label="Twitter"
              >
                <svg className="svgicon twitter-icon">
                  <use xlinkHref="#twitter-icon" />
                </svg>
              </a>
              <a
                href="https://vm.tiktok.com/ZSeeXko63/"
                target="_blank"
                aria-label="TikTok"
              >
                <svg className="svgicon tiktok-icon">
                  <use xlinkHref="#tiktok-icon" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCSzZ6lAnt1rmPyOutIjigYg"
                target="_blank"
                aria-label="YouTube"
              >
                <svg className="svgicon youtube-icon">
                  <use xlinkHref="#youtube-icon" />
                </svg>
              </a>
              <a
                href="https://www.pinterest.com/fastercarrental/"
                target="_blank"
                aria-label="Pinterest"
              >
                <svg className="svgicon pinterest-icon">
                  <use xlinkHref="#pinterest-icon" />
                </svg>
              </a>
            </div>
          </div>
          {/* Copyright Section */}
          <div className="coprwrap flexrow">
            <p>© 2024 All Rights Reserved.</p>
            {/* <span>Design & Developed By<a aria-label="Developers" target="_blank" href="#">&nbsp;</a></span> */}
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Car Book Now Popup */}
  <div className="popwrap bookcarpop">
    <div className="popcntnt">
      <div className="fancytitle">
        <h2>Book Online</h2>
      </div>
      <div className="bookonlinewrap">
        <form
          method="POST"
          action="https://www.fastercars.ae/online-booking"
          acceptCharset="UTF-8"
          id="web-forms"
        >
          <input
            name="_token"
            type="hidden"
            defaultValue="77BMn3k10rC3U8rjmQJxMXQ2vFJFA6VJxIKImOKr"
          />
          <input
            type="hidden"
            name="CarUrl"
            className="carurl"
            defaultValue=""
            placeholder=""
            readOnly=""
          />
          <input
            className="fieldstyle disabled car"
            type="text"
            name="Car Name"
            defaultValue=""
            placeholder=""
            readOnly=""
          />
          <input
            className="fieldstyle"
            type="text"
            name="Full Name"
            defaultValue=""
            pattern="[A-Za-z ]+"
            maxLength={25}
            title="Enter Only Letters"
            placeholder="Full Name"
            required=""
          />
          <input
            className="fieldstyle"
            type="email"
            name="email"
            defaultValue=""
            title="Enter Valid E-mail Address"
            placeholder="E-mail"
            required=""
          />
          <input
            className="fieldstyle intltel"
            type="tel"
            name="Phone"
            defaultValue=""
            minLength={7}
            maxLength={25}
            pattern="[0-9 ]+"
            title="Enter Only Numbers"
            placeholder="Phone Number"
            required=""
          />
          <textarea
            className="fieldstyle"
            rows={4}
            name="message"
            maxLength={300}
            placeholder="Your Message"
            defaultValue={""}
          />
          <button
            className="formbtn"
            type="submit"
            aria-label="Contact Inquiry"
            id="submitBtn"
          >
            Book Now
          </button>
          {/* <button class="formbtn g-recaptcha" data-sitekey="6LcENkIoAAAAADb-xjHMAW0NN6CH8MBeopNRDiaZ
" data-callback='onSubmit' data-action='submit' type="submit" aria-label="Contact Inquiry">Book Now</button> */}
        </form>
      </div>
      <span className="close">Close</span>
    </div>
  </div>
  {/* Car Book Now Popup */}
  {/* Conversion WhatsApp Popup */}
  <div className="popwrap whatsappconvpop">
    <div className="popcntnt">
      <icon id="popconvicon">
        <svg className="svgicon whatsapp-icon">
          <use xlinkHref="#whatsapp-icon" />
        </svg>
      </icon>
      <div className="fancytitle">
        <h2>Enter your phone number to start a WhatsApp conversation</h2>
      </div>
      <div className="bookonlinewrap">
        <form method="GET" className="whatsapp-form">
          <input
            type="text"
            name="type"
            defaultValue="whatsapp"
            style={{ display: "none" }}
          />
          <input
            id="fieldstyle"
            className="intltel"
            type="tel"
            name="phone"
            defaultValue=""
            minLength={7}
            maxLength={25}
            pattern="[0-9 ]+"
            title="Enter Only Numbers"
            placeholder="Phone Number"
            required=""
          />
          <button
            type="submit"
            className="convrspopactionbtn"
            aria-label="WhatsApp Inquiry"
          >
            <svg className="svgicon whatsapp-icon">
              <use xlinkHref="#whatsapp-icon" />
            </svg>
            WhatsApp
          </button>
        </form>
      </div>
      <span className="close">Close</span>
    </div>
  </div>
  {/* Conversion WhatsApp Popup */}
  {/* Conversion Call Popup */}
  <div className="popwrap callconvpop">
    <div className="popcntnt">
      <icon id="popconvicon">
        <svg className="svgicon phone-icon">
          <use xlinkHref="#phone-icon" />
        </svg>
      </icon>
      <div className="fancytitle">
        <h2>Enter your phone number to place a Call</h2>
      </div>
      <div className="bookonlinewrap">
        <form method="GET" className="call-form">
          <input
            type="text"
            name="type"
            defaultValue="call"
            style={{ display: "none" }}
          />
          <input
            id="fieldstyle"
            className="intltel"
            type="tel"
            name="phone"
            defaultValue=""
            minLength={7}
            maxLength={25}
            pattern="[0-9 ]+"
            title="Enter Only Numbers"
            placeholder="Phone Number"
            required=""
          />
          <button
            type="submit"
            className="convrspopactionbtn"
            aria-label="Call Us Inquiry"
          >
            <svg className="svgicon phone-icon">
              <use xlinkHref="#phone-icon" />
            </svg>
            Call Us
          </button>
        </form>
      </div>
      <span className="close">Close</span>
    </div>
  </div>
  <a
    style={{ display: "none" }}
    className="call-btn-action"
    target="_blank"
    href="tel:+971502299948"
  />
  {/* Conversion Call Popup */}
  {/* WhatsApp Icon Desktop */}
  <a
    href="https://api.whatsapp.com/send?phone=+971502299948&text=Hi, I'm contacting you through fastercars.ae I'd like to inquire about a car listed on your website"
    className="whatsppicodesk"
    target="_blank"
    aria-label="WhatsApp Inquiry"
  >
    <svg className="svgicon whatsapp-icon">
      <use xlinkHref="#whatsapp-icon" />
    </svg>
  </a>
  {/*  */}
  {/* WhatsApp Icon Desktop */}
  {/* Back to Top Button */}
  <a id="back-to-top">
    <svg className="svgicon doubleangle-icon">
      <use xlinkHref="#doubleangle-icon" />
    </svg>
  </a>
  {/* Back to Top Button */}
  {/* Social Media Follow Icons */}
  <div className="social-icons">
    <a
      href="https://www.facebook.com/Faster.Rent/"
      target="_blank"
      aria-label="Facebook"
    >
      <svg className="svgicon facebook-icon">
        <use xlinkHref="#facebook-icon" />
      </svg>
    </a>
    <a
      href="https://www.linkedin.com/company/fasterrentacar/"
      target="_blank"
      aria-label="LinkedIn"
    >
      <svg className="svgicon linkedin-icon">
        <use xlinkHref="#linkedin-icon" />
      </svg>
    </a>
    <a
      href="https://www.instagram.com/fasterrentacar/"
      target="_blank"
      aria-label="Instagram"
    >
      <svg className="svgicon instagram-icon">
        <use xlinkHref="#instagram-icon" />
      </svg>
    </a>
    <a
      href="https://twitter.com/fasterrentacar/"
      target="_blank"
      aria-label="Twitter"
    >
      <svg className="svgicon twitter-icon">
        <use xlinkHref="#twitter-icon" />
      </svg>
    </a>
    <a
      href="https://vm.tiktok.com/ZSeeXko63/"
      target="_blank"
      aria-label="TikTok"
    >
      <svg className="svgicon tiktok-icon">
        <use xlinkHref="#tiktok-icon" />
      </svg>
    </a>
    <a
      href="https://www.youtube.com/channel/UCSzZ6lAnt1rmPyOutIjigYg"
      target="_blank"
      aria-label="YouTube"
    >
      <svg className="svgicon youtube-icon">
        <use xlinkHref="#youtube-icon" />
      </svg>
    </a>
    <a
      href="https://www.pinterest.com/fastercarrental/"
      target="_blank"
      aria-label="Pinterest"
    >
      <svg className="svgicon pinterest-icon">
        <use xlinkHref="#pinterest-icon" />
      </svg>
    </a>
  </div>
  {/* Social Media Follow Icons */}
  {/* Mobile Call To Actions */}
  <ul className="mobilecalltoact">
    <li>
      {/* <a href="javascript:void(0)" data-href="https://api.whatsapp.com/send?phone=+971502299948&text=Hi,&nbsp;I'm&nbsp;contacting&nbsp;you&nbsp;through&nbsp;fastercars.ae&nbsp;I'd&nbsp;like&nbsp;to&nbsp;inquire&nbsp;about&nbsp;a&nbsp;car&nbsp;listed&nbsp;on&nbsp;your&nbsp;website" class="convwhatsapp-pop" target="_self" aria-label="WhatsApp Inquiry">
  <icon><svg class="svgicon whatsapp-icon"><use xlink:href="#whatsapp-icon"></use></svg></icon>
  <span>WhatsApp</span>
</a> */}
      <a
        href="https://api.whatsapp.com/send?phone=+971502299948&text=Hi, I'm contacting you through fastercars.ae I'd like to inquire about a car listed on your website"
        aria-label="WhatsApp Inquiry"
        target="_blank"
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
      <a href="tel:+971502299948" aria-label="Call Us Inquiry">
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
  {/* Mobile Call To Actions */}
  {/* Monthly offer Sticky Button */}
  <div className="monthlystickbtn">
    <a href="/monthly-car-rental-dubai/" className="btnstyle01">
      Monthly Offers
      <svg className="svgicon angle-icon">
        <use xlinkHref="#angle-icon" />
      </svg>
    </a>
  </div>
  {/* Monthly offer Sticky Button */}
  {/* Footer Ends Here */}
  {/* Script Files Included starts */}
  {/* Script Files Included Ends */}
  {/*End of Tawk.to Script*/}
  {/* Google Recaptcha */}
  {/*
   */}
  {/* Google Recaptcha */}
  {/* Types of Car Homepage viewmore and view less */}
  {/* Types of Car Homepage viewmore and view less / Ends */}
  {/* Function For WhatsApp/Call Conversion Popup */}
  {/* Function For WhatsApp/Call Conversion Popup */}
  {/* Instagram API */}
  {/* Instagram API */}
  {/* For Yachts Category */}
  {/* For Yachts Category */}
  {/* After the window has loaded, show the preloaded div */}
  {/*  */}
  {/* After the window has loaded, show the preloaded div */}
  {/* SVG Icon Codes */}
  <svg width={0} height={0} style={{ display: "none" }}>
    <symbol id="search-icon" viewBox="0 0 64 64">
      <g>
        <g>
          <path d="M26.402,48.286C14.325,48.286,4.5,38.461,4.5,26.384S14.325,4.482,26.402,4.482    c12.077,0,21.902,9.825,21.902,21.902S38.479,48.286,26.402,48.286z M26.402,10.012c-9.028,0-16.372,7.345-16.372,16.372    s7.345,16.372,16.372,16.372s16.372-7.345,16.372-16.372S35.43,10.012,26.402,10.012z"></path>
        </g>
        <g>
          <path d="M36.36,29.149c-1.527,0-2.765-1.238-2.765-2.765c0-2.431-1.215-4.681-3.25-6.018    c-1.171-0.769-2.534-1.176-3.943-1.176c-1.527,0-2.765-1.238-2.765-2.765s1.238-2.765,2.765-2.765    c2.491,0,4.904,0.721,6.979,2.084c3.597,2.363,5.744,6.34,5.744,10.639C39.125,27.911,37.887,29.149,36.36,29.149z"></path>
        </g>
        <g>
          <path d="M51.018,59.518c-2.266,0-4.396-0.882-5.998-2.484L33.296,45.31    c-0.622-0.622-0.911-1.504-0.778-2.374c0.133-0.87,0.673-1.625,1.453-2.032c2.975-1.553,5.371-3.943,6.929-6.91    c0.409-0.778,1.163-1.316,2.032-1.448c0.869-0.132,1.749,0.157,2.371,0.778l11.713,11.712c1.602,1.602,2.484,3.732,2.484,5.998    s-0.882,4.396-2.484,5.998C55.414,58.636,53.283,59.518,51.018,59.518z M39.642,43.836l9.288,9.287    c0.558,0.558,1.299,0.865,2.088,0.865c0.789,0,1.53-0.307,2.088-0.865c1.151-1.151,1.151-3.025,0-4.176l-9.282-9.282    C42.625,41.24,41.221,42.641,39.642,43.836z"></path>
        </g>
      </g>
    </symbol>
    <symbol id="whatsapp-icon" viewBox="0 0 90 90">
      <g>
        <g>
          <path
            d="M90,43.8c0,24.2-19.8,43.8-44.2,43.8c-7.7,0-15-2-21.4-5.5L0,90l8-23.5c-4-6.6-6.3-14.4-6.3-22.6     C1.6,19.6,21.4,0,45.8,0C70.2,0,90,19.6,90,43.8z M45.8,7C25.3,7,8.7,23.5,8.7,43.8c0,8.1,2.6,15.5,7.1,21.6l-4.6,13.7l14.3-4.5     c5.9,3.9,12.9,6.1,20.4,6.1C66.3,80.7,83,64.2,83,43.8S66.3,7,45.8,7z M68.1,53.9c-0.3-0.4-1-0.7-2.1-1.3     c-1.1-0.5-6.4-3.1-7.4-3.5c-1-0.4-1.7-0.5-2.4,0.5c-0.7,1.1-2.8,3.5-3.4,4.2c-0.6,0.7-1.3,0.8-2.3,0.3c-1.1-0.5-4.6-1.7-8.7-5.3     c-3.2-2.8-5.4-6.4-6-7.4c-0.6-1.1-0.1-1.7,0.5-2.2c0.5-0.5,1.1-1.3,1.6-1.9c0.5-0.6,0.7-1.1,1.1-1.8c0.4-0.7,0.2-1.3-0.1-1.9     c-0.3-0.5-2.4-5.8-3.3-8c-0.9-2.1-1.8-1.8-2.4-1.8c-0.6,0-1.4-0.1-2.1-0.1s-1.9,0.3-2.9,1.3c-1,1.1-3.8,3.7-3.8,9     c0,5.3,3.9,10.4,4.4,11.1c0.5,0.7,7.5,11.9,18.5,16.2c11,4.3,11,2.9,13,2.7c2-0.2,6.4-2.6,7.3-5.1C68.4,56.5,68.4,54.4,68.1,53.9     z"
            id="WhatsApp"
          />
        </g>
      </g>
    </symbol>
    <symbol
      id="phone-icon"
      x="0px"
      y="0px"
      enableBackground="new 0 0 118.875 122.877"
      viewBox="0 0 118.875 122.877"
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.432,20.714c9.427,6.476,18.779,12.989,26.673,21.375 C23.58,62.076,41.64,78.045,58.111,87.453c6.448,3.683,9.298,6.265,16.476,5.024l28.268,27.696 C49.657,138.039-10.045,63.084,1.432,20.714L1.432,20.714z M81.874,85.356l6.201-6.298c1.788-1.819,4.74-1.842,6.559-0.053 l22.862,22.509c1.818,1.789,1.841,4.741,0.053,6.559l-6.203,6.299c-1.789,1.818-4.741,1.841-6.56,0.052L81.924,91.915 C80.105,90.127,80.083,87.175,81.874,85.356L81.874,85.356z M7.004,7.467l4.5-5.464c1.929-2.342,5.425-2.68,7.767-0.751 l23.405,19.281c2.342,1.931,2.677,5.425,0.75,7.77l-4.502,5.461c-1.93,2.345-5.425,2.68-7.768,0.751L7.755,15.234 C5.413,13.305,5.073,9.809,7.004,7.467L7.004,7.467z"
        ></path>
      </g>
    </symbol>
    <symbol id="angle-icon" viewBox="0 0 1792 1792">
      <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path>
    </symbol>
    <symbol viewBox="0 0 1792 1792" id="doubleangle-icon">
      <path d="M1395 1312q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23zm0-384q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"></path>
    </symbol>
    <symbol id="dotcircle-icon" viewBox="0 0 24 24">
      <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm4-10c0,2.209-1.791,4-4,4s-4-1.791-4-4,1.791-4,4-4,4,1.791,4,4Z"></path>
    </symbol>
    <symbol id="loc-icon" x="0px" y="0px" viewBox="0 0 92.26 122.88">
      <g>
        <path d="M47.49,116.85c6.31-4.01,11.98-8.87,16.92-14.29c10.73-11.75,17.97-26.11,20.87-40.2c2.88-13.91,1.52-27.54-4.85-38.06 c-1.81-3.02-4.08-5.78-6.78-8.26c-7.74-7.05-16.6-10.41-25.52-10.5c-9.37-0.07-18.87,3.45-27.27,10.14 c-3.58,2.86-6.53,6.15-8.82,9.78c-5.9,9.28-7.69,20.8-5.74,32.85c1.97,12.23,7.78,25.02,17.04,36.61 c6.44,8.08,14.54,15.58,24.18,21.91L47.49,116.85L47.49,116.85z M46.13,21.16c7.05,0,13.45,2.86,18.06,7.49 c4.63,4.63,7.49,11,7.49,18.06c0,7.05-2.86,13.45-7.49,18.06c-4.63,4.63-11,7.49-18.06,7.49c-7.05,0-13.45-2.86-18.06-7.49 c-4.63-4.63-7.49-11-7.49-18.06c0-7.05,2.86-13.45,7.49-18.06C32.7,24.02,39.07,21.16,46.13,21.16L46.13,21.16z M60.51,32.33 c-3.67-3.67-8.78-5.97-14.38-5.97c-5.63,0-10.71,2.27-14.38,5.97c-3.67,3.67-5.97,8.78-5.97,14.38c0,5.63,2.27,10.71,5.97,14.38 c3.67,3.67,8.78,5.97,14.38,5.97c5.63,0,10.71-2.27,14.38-5.97c3.67-3.67,5.97-8.78,5.97-14.38C66.47,41.08,64.21,36,60.51,32.33 L60.51,32.33z M68.52,106.27c-5.6,6.12-12.09,11.61-19.42,16.06c-0.88,0.66-2.13,0.75-3.13,0.11 c-10.8-6.87-19.85-15.13-26.99-24.09C9.15,86.02,2.94,72.34,0.83,59.16c-2.15-13.36-0.14-26.2,6.51-36.68 c2.63-4.13,5.97-7.89,10.07-11.14C26.78,3.88,37.51-0.07,48.17,0c10.28,0.09,20.42,3.9,29.22,11.93c3.09,2.81,5.67,5.99,7.78,9.48 c7.15,11.77,8.69,26.81,5.56,42.01c-3.11,15.04-10.8,30.33-22.18,42.8L68.52,106.27L68.52,106.27z"></path>
      </g>
    </symbol>
    <symbol
      id="email-icon"
      x="0px"
      y="0px"
      enableBackground="new 0 0 122.88 78.607"
      viewBox="0 0 122.88 78.607"
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M61.058,65.992l24.224-24.221l36.837,36.836H73.673h-25.23H0l36.836-36.836 L61.058,65.992L61.058,65.992z M1.401,0l59.656,59.654L120.714,0H1.401L1.401,0z M0,69.673l31.625-31.628L0,6.42V69.673L0,69.673z M122.88,72.698L88.227,38.045L122.88,3.393V72.698L122.88,72.698z"
        ></path>
      </g>
    </symbol>
    <symbol viewBox="0 0 512 512" id="facebook-icon">
      <path d="M374.244,285.825l14.105,-91.961l-88.233,0l0,-59.677c0,-25.159 12.325,-49.682 51.845,-49.682l40.116,0l0,-78.291c0,0 -36.407,-6.214 -71.213,-6.214c-72.67,0 -120.165,44.042 -120.165,123.775l0,70.089l-80.777,0l0,91.961l80.777,0l0,222.31c16.197,2.541 32.798,3.865 49.709,3.865c16.911,0 33.511,-1.324 49.708,-3.865l0,-222.31l74.128,0Z"></path>
    </symbol>
    <symbol viewBox="0 0 100 100" id="linkedin-icon">
      <g id="Layer_1">
        <path
          d="M66.8,75.4v-22c0,0-1.2-4.6-5.6-4.4c-4.4,0.2-5.8,0.9-7.8,3.3v23.1H42.1V40.5h11.2v5.1c0,0,3.6-7.1,11.2-6.6   c6.9,0.5,12.1,4.7,13.2,13.9H78v22.5H66.8z M28.7,36c-3.7,0-6.7-3-6.7-6.8c0-3.7,3-6.8,6.7-6.8s6.7,3,6.7,6.8   C35.4,32.9,32.4,36,28.7,36z M34.3,75.4H23.1V40.5h11.2V75.4z"
          id="linkedin"
        />
      </g>
    </symbol>
    <symbol id="instagram-icon" viewBox="0 0 56.7 56.7">
      <g>
        <path
          d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
      c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"
        />
        <circle cx="41.5" cy="16.4" r="2.9" />
        <path
          d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
      h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
      s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
      c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"
        />
      </g>
    </symbol>
    <symbol id="twitter-icon" viewBox="0 0 24 24">
      <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"></path>
    </symbol>
    <symbol viewBox="0 0 448 512" id="tiktok-icon">
      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
    </symbol>
    <symbol viewBox="0 0 576 512" id="youtube-icon">
      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
    </symbol>
    <symbol
      enableBackground="new 0 0 56.693 56.693"
      id="pinterest-icon"
      viewBox="0 0 56.693 56.693"
    >
      <path d="M30.374,4.622c-13.586,0-20.437,9.74-20.437,17.864c0,4.918,1.862,9.293,5.855,10.922c0.655,0.27,1.242,0.01,1.432-0.715  c0.132-0.5,0.445-1.766,0.584-2.295c0.191-0.717,0.117-0.967-0.412-1.594c-1.151-1.357-1.888-3.115-1.888-5.607  c0-7.226,5.407-13.695,14.079-13.695c7.679,0,11.898,4.692,11.898,10.957c0,8.246-3.649,15.205-9.065,15.205  c-2.992,0-5.23-2.473-4.514-5.508c0.859-3.623,2.524-7.531,2.524-10.148c0-2.34-1.257-4.292-3.856-4.292  c-3.058,0-5.515,3.164-5.515,7.401c0,2.699,0.912,4.525,0.912,4.525s-3.129,13.26-3.678,15.582  c-1.092,4.625-0.164,10.293-0.085,10.865c0.046,0.34,0.482,0.422,0.68,0.166c0.281-0.369,3.925-4.865,5.162-9.359  c0.351-1.271,2.011-7.859,2.011-7.859c0.994,1.896,3.898,3.562,6.986,3.562c9.191,0,15.428-8.379,15.428-19.595  C48.476,12.521,41.292,4.622,30.374,4.622z"></path>
    </symbol>
    <symbol
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 424 511.65"
      id="question-icon"
    >
      <path d="M28.21 53.37h67.64v43.72H66.68c-13.03 0-23.82 10.8-23.82 23.82v326.57c0 13.04 10.73 23.82 23.82 23.82h290.64c13.09 0 23.82-10.75 23.82-23.82V120.91c0-13.08-10.79-23.82-23.82-23.82h-29.17V53.37h67.64c15.52 0 28.21 12.77 28.21 28.21v401.86c0 15.46-12.75 28.21-28.21 28.21H28.21C12.75 511.65 0 498.96 0 483.44V81.58c0-15.52 12.69-28.21 28.21-28.21zm160.64 280.31c0-8.83.63-16.78 1.93-23.78 1.24-7.07 3.43-13.4 6.54-18.96 3.07-5.55 7.32-10.49 12.67-14.75 4.67-3.69 8.68-7.22 11.94-10.75 3.33-3.48 5.87-6.95 7.69-10.38 1.82-3.48 2.75-6.91 2.75-10.39 0-6.96-1.45-12-4.41-15.06-2.96-3.02-7.38-4.57-13.25-4.57-4.56 0-8.72 1.77-12.56 5.19-3.79 3.43-5.77 9.25-5.97 17.35h-55.1c.2-15.94 3.58-28.77 10.13-38.48 6.54-9.77 15.32-16.83 26.38-21.29 11.06-4.47 23.47-6.71 37.12-6.71 22.65 0 40.41 5.09 53.34 15.28 12.93 10.17 19.42 25.39 19.42 45.59 0 8.72-1.71 16.15-5.03 22.33-3.38 6.17-7.79 11.94-13.3 17.29-5.56 5.3-11.74 11.12-18.49 17.4-5.92 5.09-9.86 10.12-11.89 15.06-2.02 4.98-3.16 11.52-3.48 19.63h-46.43zm-6.54 45.49c0-8.1 2.81-14.85 8.36-20.2 5.61-5.41 12.83-8.11 21.77-8.11 9.03 0 16.3 2.7 21.86 8.11 5.5 5.35 8.25 12.1 8.25 20.2 0 8-2.75 14.74-8.25 20.15-5.56 5.45-12.83 8.15-21.86 8.15-8.94 0-16.16-2.7-21.77-8.15-5.55-5.41-8.36-12.15-8.36-20.15zM134.93 39.4h31.97C169.6 17.18 187.53 0 209.28 0c21.6 0 39.44 16.95 42.33 38.93l37.42.47c2.62 0 4.71 2.09 4.71 4.7v63.84c0 2.6-2.09 4.7-4.71 4.7H134.97c-2.56 0-4.7-2.1-4.7-4.7V44.1c-.05-2.61 2.05-4.7 4.66-4.7zm56.84 19.33c2.89 3.96 7.03 7.86 11.41 9.87 3.58 1.07 7.49 1.17 11.13.18 5.68-2.61 10.9-8.89 13.31-14.15.29-1.49.48-3.03.48-4.71 0-11.13-8.53-20.16-19.06-20.16-10.52 0-19.04 9.03-19.04 20.16.05 3.36.65 6.34 1.77 8.81z"></path>
    </symbol>
    <symbol viewBox="0 0 32 32" id="circlecheck-icon">
      <g id="Accept">
        <path d="M16,4A12,12,0,1,0,28,16,12.0137,12.0137,0,0,0,16,4Zm5.207,9.707-6.8154,6.8155L10.7,15.6a1,1,0,1,1,1.6-1.2l2.3086,3.0776L19.793,12.293a1,1,0,0,1,1.414,1.414Z"></path>
      </g>
    </symbol>
    <symbol id="book-icon" viewBox="0 0 119.92 122.88">
      <path d="M108.68,122.88H11.24A11.28,11.28,0,0,1,0,111.64V22.55A11.28,11.28,0,0,1,11.24,11.31H21.61V25.14a12.35,12.35,0,0,0,4.67,9.61,14.55,14.55,0,0,0,18.31,0,12.35,12.35,0,0,0,4.67-9.61V11.31H70.2V25.14a12.35,12.35,0,0,0,4.67,9.61,14.55,14.55,0,0,0,18.31,0,12.35,12.35,0,0,0,4.67-9.61V11.31h10.83a11.3,11.3,0,0,1,11.24,11.24v89.09a11.27,11.27,0,0,1-11.24,11.24ZM83.58,56.77h16.1a2.07,2.07,0,0,1,2.06,2v13.4a2.07,2.07,0,0,1-2.06,2H83.58a2.06,2.06,0,0,1-2-2V58.82a2.05,2.05,0,0,1,2-2Zm-31.51,0H68.18a2.06,2.06,0,0,1,2,2v13.4a2.07,2.07,0,0,1-2,2H52.07a2.06,2.06,0,0,1-2-2V58.82a2.06,2.06,0,0,1,2-2Zm-31.84,0H36.34a2.06,2.06,0,0,1,2,2v13.4a2.07,2.07,0,0,1-2,2H20.23a2.06,2.06,0,0,1-2.05-2V58.82a2.05,2.05,0,0,1,2.05-2ZM83.58,85.26h16.1a2.07,2.07,0,0,1,2.06,2v13.4a2.06,2.06,0,0,1-2.06,2.05H83.58a2.06,2.06,0,0,1-2-2.05V87.31a2.06,2.06,0,0,1,2-2Zm-31.51,0H68.18a2.06,2.06,0,0,1,2,2v13.4a2.06,2.06,0,0,1-2,2.05H52.07a2.06,2.06,0,0,1-2-2.05V87.31a2.07,2.07,0,0,1,2-2Zm-31.84,0H36.34a2.06,2.06,0,0,1,2,2v13.4a2.06,2.06,0,0,1-2,2.05H20.23a2.06,2.06,0,0,1-2.05-2.05V87.31a2.06,2.06,0,0,1,2.05-2ZM78.6,4.45C78.6,2,81,0,84,0s5.43,2,5.43,4.45V25.14c0,2.46-2.42,4.45-5.43,4.45s-5.42-2-5.42-4.45V4.45ZM30,4.45C30,2,32.44,0,35.44,0s5.42,2,5.42,4.45V25.14c0,2.46-2.42,4.45-5.42,4.45S30,27.6,30,25.14V4.45ZM3.6,43.86v66.58a8.87,8.87,0,0,0,8.84,8.84h95a8.87,8.87,0,0,0,8.85-8.84V43.86Z"></path>
    </symbol>
    <symbol id="star-icon" viewBox="0 0 122.88 117.1">
      <path d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"></path>
    </symbol>
    <symbol
      id="globe-icon"
      x="0px"
      y="0px"
      enableBackground="new 0 0 122.879 122.879"
      xmlSpace="preserve"
      viewBox="0 0 122.879 122.879"
    >
      <g>
        <path d="M109.465,89.503c0.182,0,0.359,0.019,0.533,0.053c1.146-1.998,2.191-4.095,3.135-6.286 c0.018-0.044,0.037-0.086,0.059-0.128c1.418-3.345,2.488-6.819,3.209-10.419c0.559-2.793,0.904-5.657,1.035-8.591h-16.893 c-0.307,8.574-2.867,17.03-7.639,25.371H109.465L109.465,89.503z M106.52,94.889H89.506c-5.164,7.481-12.121,14.87-20.838,22.167 c1.367-0.17,2.719-0.388,4.055-0.655c3.646-0.729,7.164-1.817,10.549-3.264l-0.002-0.004c3.441-1.48,6.646-3.212,9.609-5.199 c2.969-1.992,5.721-4.255,8.25-6.795l0.01-0.01l0,0C103.096,99.18,104.889,97.099,106.52,94.889L106.52,94.889z M54.21,117.055 c-8.716-7.296-15.673-14.685-20.838-22.166H16.361c1.631,2.21,3.423,4.291,5.379,6.24l0.01,0.011v-0.001 c2.53,2.54,5.282,4.803,8.25,6.795c2.962,1.987,6.167,3.719,9.609,5.199c0.043,0.019,0.086,0.038,0.128,0.059 c3.345,1.419,6.819,2.488,10.42,3.209C51.493,116.668,52.843,116.886,54.21,117.055L54.21,117.055z M12.852,89.503h17.122 c-4.771-8.341-7.332-16.797-7.637-25.371H5.445c0.13,2.934,0.475,5.797,1.034,8.59c0.729,3.646,1.818,7.164,3.264,10.549 l0.004-0.001C10.682,85.442,11.716,87.521,12.852,89.503L12.852,89.503z M5.445,58.747h16.997c0.625-8.4,3.412-16.857,8.407-25.371 H12.852c-1.136,1.982-2.17,4.061-3.105,6.234c-0.019,0.043-0.039,0.086-0.059,0.127C8.269,43.083,7.2,46.557,6.479,50.157 C5.92,52.95,5.575,55.814,5.445,58.747L5.445,58.747z M16.361,27.991h17.938c5.108-7.361,11.862-14.765,20.29-22.212 c-1.496,0.175-2.973,0.408-4.431,0.7c-3.647,0.729-7.164,1.818-10.549,3.264l0.001,0.003c-3.442,1.481-6.647,3.212-9.609,5.2 c-2.968,1.992-5.72,4.255-8.25,6.794l-0.011,0.01h0C19.784,23.7,17.992,25.78,16.361,27.991L16.361,27.991z M68.289,5.778 c8.428,7.447,15.182,14.851,20.291,22.212h17.939c-1.631-2.21-3.424-4.291-5.381-6.24l-0.01-0.01l0,0 c-2.529-2.54-5.281-4.802-8.25-6.794c-2.963-1.988-6.168-3.719-9.609-5.2c-0.043-0.018-0.086-0.038-0.127-0.059 c-3.346-1.418-6.82-2.488-10.42-3.208C71.264,6.187,69.785,5.954,68.289,5.778L68.289,5.778z M110.027,33.376H92.029 c4.996,8.514,7.783,16.971,8.408,25.371h16.998c-0.131-2.934-0.477-5.797-1.035-8.59c-0.73-3.646-1.818-7.164-3.264-10.549 l-0.004,0.002C112.197,37.437,111.164,35.358,110.027,33.376L110.027,33.376z M49.106,1.198C53.098,0.399,57.21,0,61.44,0 c4.23,0,8.341,0.399,12.333,1.198c3.934,0.788,7.758,1.97,11.473,3.547c0.051,0.018,0.1,0.037,0.148,0.058 c3.703,1.594,7.197,3.485,10.471,5.684c3.268,2.192,6.291,4.677,9.066,7.462c2.785,2.775,5.27,5.799,7.461,9.065 c2.197,3.275,4.09,6.768,5.684,10.473l-0.004,0.001l0.004,0.009c1.607,3.758,2.809,7.628,3.605,11.609 c0.799,3.992,1.197,8.104,1.197,12.334c0,4.23-0.398,8.343-1.197,12.335c-0.787,3.932-1.971,7.758-3.547,11.472 c-0.018,0.05-0.037,0.099-0.059,0.147c-1.594,3.705-3.486,7.197-5.684,10.472c-2.191,3.267-4.676,6.29-7.461,9.065 c-2.775,2.785-5.799,5.271-9.066,7.462c-3.273,2.198-6.768,4.091-10.471,5.684l-0.002-0.004l-0.01,0.004 c-3.758,1.606-7.629,2.808-11.609,3.604c-3.992,0.799-8.104,1.198-12.333,1.198c-4.229,0-8.342-0.399-12.334-1.198 c-3.933-0.787-7.758-1.97-11.474-3.546c-0.049-0.019-0.098-0.037-0.147-0.059c-3.705-1.593-7.197-3.485-10.472-5.684 c-3.266-2.191-6.29-4.677-9.065-7.462c-2.785-2.775-5.27-5.799-7.461-9.065c-2.198-3.274-4.09-6.767-5.684-10.472l0.004-0.002 l-0.004-0.009c-1.606-3.758-2.808-7.628-3.604-11.609C0.4,69.782,0,65.67,0,61.439c0-4.229,0.4-8.342,1.199-12.334 c0.787-3.933,1.97-7.758,3.546-11.473c0.018-0.049,0.037-0.099,0.058-0.147c1.594-3.705,3.485-7.198,5.684-10.473 c2.192-3.266,4.677-6.29,7.461-9.065c2.775-2.785,5.799-5.27,9.065-7.462c3.275-2.198,6.768-4.09,10.472-5.684l0.001,0.004 l0.009-0.004C41.254,3.197,45.125,1.995,49.106,1.198L49.106,1.198z M64.133,9.268v18.723h17.826 C77.275,21.815,71.34,15.575,64.133,9.268L64.133,9.268z M64.133,33.376v25.371h30.922c-0.699-8.332-3.789-16.788-9.318-25.371 H64.133L64.133,33.376z M64.133,64.132v25.371h22.51c5.328-8.396,8.189-16.854,8.531-25.371H64.133L64.133,64.132z M64.133,94.889 v18.952c7.645-6.283,13.902-12.601,18.746-18.952H64.133L64.133,94.889z M58.747,113.843V94.889H40 C44.843,101.24,51.1,107.559,58.747,113.843L58.747,113.843z M58.747,89.503V64.132H27.706c0.341,8.518,3.201,16.975,8.531,25.371 H58.747L58.747,89.503z M58.747,58.747V33.376H37.143c-5.529,8.583-8.619,17.04-9.319,25.371H58.747L58.747,58.747z M58.747,27.991 V9.266C51.54,15.573,45.604,21.815,40.92,27.991H58.747L58.747,27.991z"></path>
      </g>
    </symbol>
    <symbol viewBox="0 0 121.7 122.88" id="nosearch-icon">
      <path
        d="M53.62 0c14.81 0 28.21 6 37.91 15.7 9.7 9.7 15.7 23.11 15.7 37.91 0 10.83-3.21 20.91-8.74 29.35l23.2 25.29-16 14.63-22.37-24.62a53.359 53.359 0 01-29.7 8.98c-14.81 0-28.21-6-37.91-15.7C6 81.82 0 68.42 0 53.62 0 38.81 6 25.41 15.7 15.7 25.41 6 38.81 0 53.62 0zm8.01 38.91a4.747 4.747 0 016.76-.02 4.868 4.868 0 01.02 6.83l-8.17 8.29 8.18 8.3c1.85 1.88 1.82 4.92-.05 6.79-1.88 1.87-4.9 1.87-6.74-.01l-8.13-8.24-8.14 8.26a4.747 4.747 0 01-6.76.02 4.868 4.868 0 01-.02-6.83l8.17-8.3-8.18-8.3c-1.85-1.88-1.82-4.92.06-6.79 1.88-1.87 4.9-1.87 6.74.01l8.13 8.24 8.13-8.25zM87.3 19.93C78.68 11.31 66.77 5.98 53.62 5.98c-13.15 0-25.06 5.33-33.68 13.95-8.63 8.62-13.96 20.53-13.96 33.69 0 13.15 5.33 25.06 13.95 33.68 8.62 8.62 20.53 13.95 33.68 13.95 13.16 0 25.06-5.33 33.68-13.95 8.62-8.62 13.95-20.53 13.95-33.68.01-13.16-5.32-25.07-13.94-33.69z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </symbol>
    <symbol id="sentmail-icon" viewBox="0 0 122.88 49.21">
      <path d="M54.58,0,86.24,27.52,120.63,0ZM35.37,37.6a2.9,2.9,0,0,1,0,5.79H23a2.9,2.9,0,0,1,0-5.79Zm2.89-15.89a2.9,2.9,0,0,1,0,5.79H12.89a2.9,2.9,0,0,1,0-5.79Zm59.92.45L119.54,46.5l3.34-44.11L98.18,22.16Zm-20.94,2.2L50.58,49.21h66.65L95.42,24.37,87.11,31h0a1.72,1.72,0,0,1-2.18,0l-7.69-6.69Zm-28.35,22,25.87-24.1L52.2,2.61l-3.31,43.7ZM38.26,5.82a2.89,2.89,0,1,1,0,5.78H2.89a2.89,2.89,0,0,1,0-5.78Z"></path>
    </symbol>
    <symbol
      id="close-icon"
      x="0px"
      y="0px"
      enableBackground="new 0 0 122.881 122.88"
      viewBox="0 0 122.881 122.88"
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M61.44,0c33.933,0,61.441,27.507,61.441,61.439 c0,33.933-27.508,61.44-61.441,61.44C27.508,122.88,0,95.372,0,61.439C0,27.507,27.508,0,61.44,0L61.44,0z M81.719,36.226 c1.363-1.363,3.572-1.363,4.936,0c1.363,1.363,1.363,3.573,0,4.936L66.375,61.439l20.279,20.278c1.363,1.363,1.363,3.573,0,4.937 c-1.363,1.362-3.572,1.362-4.936,0L61.44,66.376L41.162,86.654c-1.362,1.362-3.573,1.362-4.936,0c-1.363-1.363-1.363-3.573,0-4.937 l20.278-20.278L36.226,41.162c-1.363-1.363-1.363-3.573,0-4.936c1.363-1.363,3.573-1.363,4.936,0L61.44,56.504L81.719,36.226 L81.719,36.226z"
        ></path>
      </g>
    </symbol>
    <symbol
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 512 461.12"
      id="filter-icon"
    >
      <path d="M379.69 65.19c53.86 0 97.52 43.66 97.52 97.53 0 53.86-43.66 97.52-97.52 97.52-53.87 0-97.53-43.66-97.53-97.52 0-53.87 43.66-97.53 97.53-97.53zM11.49 0h488.84C506.78 0 512 5.23 512 11.68c0 3.53-1.53 6.76-4.15 8.91L463.4 77.07a119.922 119.922 0 0 0-19.22-15.3L471.9 23.2l.16.15H39.29l158.23 192.38c2.45 2.15 3.99 5.23 3.99 8.76v204.79l87.73-40.1V241.24c6.88 7.92 14.79 14.92 23.51 20.81v133.89c0 4.61-2.61 8.6-6.61 10.44l-110.31 53.16c-5.53 3.22-12.6 1.38-15.83-4.31-1.07-1.84-1.53-3.83-1.53-5.83V229.25L3.34 19.82a11.791 11.791 0 0 1 0-16.44C5.65 1.08 8.57 0 11.49 0zm318.73 177.82c-13.25-14.26 7.1-35.5 21.83-22.05 5.2 4.74 8.98 10.89 14.23 15.59l40.39-49.63c14.06-14.54 36.26 6.81 22.38 21.44l-50.74 60.53a15.59 15.59 0 0 1-11.31 4.86c-3.8 0-7.54-1.31-10.31-3.9-8.67-8.11-17.45-19.2-26.47-26.84z"></path>
    </symbol>
  </svg>
</>

    </div>
  );
}

export default App;
