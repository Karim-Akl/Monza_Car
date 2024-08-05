import React from 'react';
import "../../App.css"
import "./nav.css"
const Nav = () => {
  return (
    <div>
        <div className="pt-bredwrap" >
    <div className="container"
    >
      <div className="ptboutr"
>
        <h2 className='mr-h1'>Infiniti Qx80</h2>
        <ol className="breadcrumb">
          <li>
            <a
              aria-label="Home"
              href="/"
              className="fa fa-home"
            />
          </li>
          <li>
            <a
              aria-label=""
              href="/"
            >
              Infiniti
            </a>
          </li>
          <li>
            <a
              aria-label=""
               href="/"
            >
              Infiniti QX80
            </a>
          </li>
          <li className="active">Infiniti Qx80 Yellow Black</li>
        </ol>
      </div>
    </div>
  </div>
    </div>
  );
}

export default Nav;
