// import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer-color text-white bg-green-700 py-10 font-axiforma pb-10 mb-0 pt-10 mt-10">
      <div className="container flex flex-col justify-center items-center" id="footer-bottom">
        <div className="flex space-x-20">
          <div className="col-xs-3">
            <h5>QUICK LINKS</h5>
            <ul>
              <li className="active"><a href="/">HOMEPAGE</a></li>
              <li><a href="">vacancy</a></li>
              <li><a href="">Event</a></li>
              <li><a href="">news</a></li>
            </ul>
          </div>
          <div className="col-xs-3">
            <h5>Rules</h5>
            <ul>
              <li>
                <a href="#" className="fmenu">About Us</a>
              </li>
              <li><a href="javascript:;" className="fmenu">FAQ</a> </li>
              <li><a href="javascript:;" className="fmenu">Live Meeting</a></li>
              <li><a href="javascript:;" className="fmenu">Contact Us</a> </li>
            </ul>
          </div>
          <div className="col-xs-3">
            <h5>Rules</h5>
            <ul>
              <li>
                <a href="#" className="fmenu">About Us</a>
              </li>
              <li><a href="javascript:;" className="fmenu">FAQ</a> </li>
              <li><a href="javascript:;" className="fmenu">Live Meeting</a></li>
              <li><a href="javascript:;" className="fmenu">Contact Us</a> </li>
            </ul>
          </div>
          <div className="col-xs-3">
            <h5>FOLLOW US</h5>
            <ul>
              <li><a href="#"><i className='bx bxl-telegram'></i></a></li>
              <li><a href="#"><i className='bx bxl-facebook-circle'></i></a></li>
              <li><a href="#"><i className='bx bxl-youtube'></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container flex flex-row justify-center items-center mt-10" id="footer-copyright">
        <div className="row no-margin">
          <div className="col-xs-6 border-t border-gray-400">
            Copyright 2016 DMU - All rights reserved
          </div>
          <div className="col-xs-auto editby" style={{ float: 'right' }}>
            <p>Devloped by<span><a href="#"> Andy & Ahi</a></span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;