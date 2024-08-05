import React from 'react';
import "../../App.css"
const RelatedCar = () => {
  return (
    <div>
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
    </div>
  );
}

export default RelatedCar;
