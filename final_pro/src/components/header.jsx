// import React from 'react';

const Header = () => {
  return (
    <div className="container-fluid sticky top-0 left-0 z-50 px-5 text-green-600 bg-gray-100" id="header-top">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-20 h-20"><img src="/assets/Logo/dmu.jpg" alt="" /></div>
          <div>
            <h1 className="p-5 text-2xl font-bold">DMU Inventory System</h1>
          </div>
        </div>
        <div className="border border-green-400 p-2 rounded rounded-[30px] px-8 shadow shadow-sm">
          <p className="text-2xl">የእውቀት አውድማ ከጮቄ ማማ</p>
        </div>
      </div>

      <div className="w-full">
        <nav className="">
          <div className="navbar">
            <div className="nav-links">
              <ul className="links flex pl-28">
                {/* Add your navigation links here */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
