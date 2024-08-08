import React, { useState } from "react";
import "./listcar.css";

const Listcar = () => {
  const [showMore, setShowMore] = useState(false);

  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className="car-list flex">
        <ul>
          <li>
            <a href="#!">
              <div className="img-back">
                <img src="/1.webp" alt="" />
              </div>
              <h3>Modified Car </h3>
              <p>41 Cars</p>
            </a>
          </li>
          <li>
            <a href="#!">
              <div className="img-back">
                <img src="/2.webp" alt="" />
              </div>
              <h3>Modified Car </h3>
              <p>41 Cars</p>
            </a>
          </li>
          <li>
            <a href="#!">
              <div className="img-back">
                <img src="/3.webp" alt="" />
              </div>
              <h3>Modified Car </h3>
              <p>41 Cars</p>
            </a>
          </li>
          <li>
            <a href="#!">
              <div className="img-back">
                <img src="/4.webp" alt="" />
              </div>
              <h3>Modified Car </h3>
              <p>41 Cars</p>
            </a>
          </li>
          <li>
            <a href="#!">
              <div className="img-back">
                <img src="/5.webp" alt="" />
              </div>
              <h3>Modified Car </h3>
              <p>41 Cars</p>
            </a>
          </li>
          <li>
            <a href="#!">
              <div className="img-back">
                <img src="/6.webp" alt="" />
              </div>
              <h3>Modified Car </h3>
              <p>41 Cars</p>
            </a>
          </li>

          {showMore && (
            <>
              <li>
                <a href="#!">
                  <div className="img-back">
                    <img src="/4.webp" alt="" />
                  </div>
                  <h3>Modified Car </h3>
                  <p>41 Cars</p>
                </a>
              </li>
              <li>
                <a href="#!">
                  <div className="img-back">
                    <img src="/5.webp" alt="" />
                  </div>
                  <h3>Modified Car </h3>
                  <p>41 Cars</p>
                </a>
              </li>
              <li>
                <a href="#!">
                  <div className="img-back">
                    <img src="/6.webp" alt="" />
                  </div>
                  <h3>Modified Car </h3>
                  <p>41 Cars</p>
                </a>
              </li>
              <li>
                <a href="#!">
                  <div className="img-back">
                    <img src="/5.webp" alt="" />
                  </div>
                  <h3>Modified Car </h3>
                  <p>41 Cars</p>
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="more-car">
        <button onClick={handleViewMore}>
          
          {showMore ? "View Less" : "View More"}<svg className="svgicon angle-icon">
                <use xlinkHref="#angle-icon" />
              </svg>
        </button>
      </div>
    </div>
  );
};

export default Listcar;
