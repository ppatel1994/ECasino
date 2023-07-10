import React from 'react';
import { ArrowDownRightIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';

function Header() {
  const openMenu = () => {
    document.getElementById('menu').style.display = 'block';
  };

  const closeMenu = () => {
    document.getElementById('menu').style.display = 'none';
  };

  return (
    <>
      <div id="menu" className="hidden h-full w-full bg-ec-green z-10 fixed">
        <div className="flex">
          <div role="presentation" onClick={closeMenu} className="ml-auto m-7 p-4 hover:rounded-full hover:bg-ec-green-border">
            <XMarkIcon className="animate-spin h-8 text-white cursor-pointer" />
          </div>
        </div>
      </div>
      <nav className="sticky">
        <div className="p-2 flex flex-row">
          <Logo />
          <div className="p-5">
            <div className="flex space-x-2">
              <p className="text-ec-grey">Cash</p>
              <p className="text-ec-yellow">$500.00</p>
            </div>
            <div className="flex space-x-2">
              <ArrowDownRightIcon className="text-ec-red pt-1 h-5" />
              <p className="text-ec-red">$200.50</p>
              <p className="text-ec-grey">All Time</p>
            </div>
          </div>
          <div role="presentation" onClick={openMenu} className="ms-auto m-5 p-4 hover:rounded-full hover:bg-ec-green-border">
            <Bars3BottomRightIcon className="h-8 text-white cursor-pointer" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
