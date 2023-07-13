import React, { useState } from 'react';
import { ArrowDownRightIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  ViewColumnsIcon, BanknotesIcon, Cog6ToothIcon, ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/solid';
import Logo from './Logo';
import AddCash from './AddCash';

function Header() {
  const [modal, setModal] = useState(false);

  const openMenu = () => {
    document.getElementById('menu').style.display = 'block';
  };

  const closeMenu = () => {
    document.getElementById('menu').style.display = 'none';
  };

  const handleAddCashClick = () => {
    closeMenu();
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      {modal && <AddCash close={closeModal} /> }
      <div id="menu" className="h-full w-full md:w-96 md:bg-ec-green-border md:right-0 bg-ec-green z-10 fixed">
        <div className="flex">
          <div role="presentation" onClick={closeMenu} className="ml-auto m-7 p-4 hover:rounded-full hover:bg-ec-green-border">
            <XMarkIcon className="animate-spin h-8 text-white cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-row hover:bg-ec-green-border md:hover:bg-ec-green mx-6 mb-6 rounded-lg space-x-10 space-y-3 cursor-pointer">
          <div className="rounded-full bg-ec-green-border md:bg-ec-green p-3">
            <ViewColumnsIcon className="text-white h-6" />
          </div>
          <div>
            <p className="text-white text-lg">Leaderboard</p>
          </div>
        </div>
        <div data-modal-target="defaultModal" data-modal-toggle="defaultModal" onClick={handleAddCashClick} className="flex flex-row hover:bg-ec-green-border md:hover:bg-ec-green mx-6 mb-6 rounded-lg space-x-10 space-y-3 cursor-pointer">
          <div className="rounded-full bg-ec-green-border md:bg-ec-green p-3">
            <BanknotesIcon className="text-white h-6" />
          </div>
          <div>
            <p className="text-white text-lg">Manage Cash</p>
          </div>
        </div>
        <div className="flex flex-row hover:bg-ec-green-border md:hover:bg-ec-green mx-6 mb-6 rounded-lg space-x-10 space-y-3 cursor-pointer">
          <div className="rounded-full bg-ec-green-border md:bg-ec-green p-3">
            <Cog6ToothIcon className="text-white h-6" />
          </div>
          <div>
            <p className="text-white text-lg">Set up Drawing/Table</p>
          </div>
        </div>
        <div className="flex flex-row hover:bg-ec-green-border md:hover:bg-ec-green mx-6 mb-6 rounded-lg space-x-10 space-y-3 cursor-pointer">
          <div className="rounded-full bg-ec-green-border md:bg-ec-green p-3">
            <ArrowLeftOnRectangleIcon className="text-white h-6" />
          </div>
          <div>
            <p className="text-white text-lg">Logout</p>
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
