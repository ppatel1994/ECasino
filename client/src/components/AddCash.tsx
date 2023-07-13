import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

function AddCash({ close }) {
  const value = 100.50;
  const [openTab, setOpenTab] = useState(1);

  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event:any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        close();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [close]);

  return (
    <div ref={modalRef} className="z-10 md:h-[500px] md:w-96 h-full w-full fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-center bg-ec-light-green flex flex-col justify-center">
      <div className="absolute top-0 w-full h-16">
        <button type="button" onClick={() => setOpenTab(1)} className={openTab === 2 ? 'border-r border-b border-ec-green w-1/2 p-8 text-white text-center text-ec-green font-bold text-xl hover:bg-ec-green-border' : 'w-1/2 p-8 text-white text-center text-ec-green font-bold text-xl hover:bg-ec-green-border'}>Deposit</button>
        <button type="button" onClick={() => setOpenTab(2)} className={openTab === 1 ? 'border-l border-b border-ec-green w-1/2 p-8 text-white text-center text-ec-white text-xl hover:bg-ec-green-border' : 'w-1/2 p-8 text-white text-center text-ec-white text-xl hover:bg-ec-green-border'}>Withdraw</button>
      </div>
      <div className="md:hidden flex">
        <div onClick={close} className="cursor-pointer inline-block p-4 ml-5 rounded-full hover:bg-ec-green">
          <ArrowLeftIcon className="text-white h-6" />
        </div>
      </div>
      <div className="flex relative justify-center mt-20">
        <div className="flex items-baseline text-center">
          <p className={value === 0 ? 'text-ec-light-grey self-start text-4xl' : 'text-ec-yellow self-start text-4xl'}>$</p>
          <input minLength="1" inputMode="decimal" placeholder="0" className="text-left w-48 caret-ec-yellow outline-none border-0 bg-ec-light-green text-6xl text-ec-yellow" />
        </div>
      </div>
      {openTab === 2 && <div><button type="button" className="mt-8 bg-ec-yellow text-white rounded-full font-bold p-2 px-10 hover:bg-ec-yellow-hover">Sell all</button></div>}
      <button type="button" className="bg-ec-yellow rounded-md p-2 text-white font-bold m-10 text-2xl bottom-0 hover:bg-ec-yellow-hover">Deposit</button>
    </div>
  );
}

export default AddCash;
