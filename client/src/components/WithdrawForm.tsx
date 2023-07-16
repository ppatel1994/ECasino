import React from 'react';

function WithdrawForm() {
    return (
        <>
            <div className="flex relative justify-center mt-20">
                <div className="flex items-baseline text-center">
                <p className="text-ec-light-grey self-start text-4xl">$</p>
                <div onKeyDown={e => e.keyCode === 13 && e.preventDefault()} className="text-center caret-ec-yellow outline-none border-0 bg-ec-light-green text-6xl text-ec-yellow" contentEditable>0</div>
                </div>
            </div>
            <div><button type="button" className="mt-8 bg-ec-yellow text-white rounded-full font-bold p-2 px-10 hover:bg-ec-yellow-hover">Withdraw All</button></div>
            <button type="button" className="bg-ec-yellow rounded-md p-2 text-white font-bold m-10 text-2xl bottom-0 hover:bg-ec-yellow-hover">Deposit</button>
        </>
    )
}

export default WithdrawForm;