import React from 'react';

function HeaderBtns({form, setForm}) {
    return (
        <div className="flex justify-center">
            <button onClick={() => setForm(0)} className={form === 0 ? "text-sm md:text-md cursor-pointer px-5 py-2 mt-4 mx-2 font-bold text-white bg-ec-light-green rounded-md box-border" : "text-sm md:text-md cursor-pointer px-5 py-2 mt-4 mx-2 font-bold text-white border-2 border-ec-green-footer rounded-md hover:bg-ec-light-green box-border"}>Drawing</button>
            <button onClick={() => setForm(1)} className={form === 1 ? "text-sm md:text-md cursor-pointer px-5 py-2 mt-4 mx-2 font-bold text-white bg-ec-light-green rounded-md box-border" : "text-sm md:text-md cursor-pointer px-5 py-2 mt-4 mx-2 font-bold text-white border-2 border-ec-green-footer rounded-md hover:bg-ec-light-green box-border"}>Roulette</button>
        </div>
    )
}

export default HeaderBtns;