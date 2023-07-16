import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import DepositForm from './DepositForm';
import WithdrawForm from './WithdrawForm';

function AddCash({ close }) {
  const value = 100.50;
  const [cashForm, setForm] = useState(0);

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
        <button type="button" onClick={() => setForm(0)} className={cashForm === 1 ? 'box-border border-r border-b border-ec-green w-1/2 p-8 text-white text-center text-ec-green font-bold text-xl hover:bg-ec-green-border' : 'box-border w-1/2 p-8 text-white text-center text-ec-green font-bold text-xl hover:bg-ec-green-border'}>Deposit</button>
        <button type="button" onClick={() => setForm(1)} className={cashForm === 0 ? 'box-border border-l border-b border-ec-green w-1/2 p-8 text-white text-center text-ec-white text-xl hover:bg-ec-green-border' : 'box-border w-1/2 p-8 text-white text-center text-ec-white text-xl hover:bg-ec-green-border'}>Withdraw</button>
      </div>
      <div className="md:hidden flex">
        <div onClick={close} className="cursor-pointer inline-block p-4 ml-5 rounded-full hover:bg-ec-green">
          <ArrowLeftIcon className="text-white h-6" />
        </div>
      </div>
      {cashForm === 0 ? <DepositForm /> : <WithdrawForm />}
      <footer className="absolute bottom-0 p-8 text-ec-grey">Cash Balance: $500.24</footer>
    </div>
  );
}

export default AddCash;
