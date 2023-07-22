import React from 'react';

function DrawForm() {
    return (
        <div className="md:border-2 md:border-ec-green-footer md:mx-48 md:mt-8 lg:mx-80">
            <div className="flex flex-row justify-evenly">
                <div className="text-center text-ec-grey">
                    <div className="text-white text-2xl border border-ec-green-footer py-10 px-5 mt-5 mb-3 box-border">
                        <div className="flex relative justify-center">
                            <div className="flex items-baseline text-center">
                                <input minLength="1" inputMode="decimal" placeholder="0" className="text-center w-24 caret-ec-yellow outline-none border-0 bg-ec-green text-3xl text-ec-yellow" />
                            </div>
                        </div>
                    </div>
                    <p className="text-xs">Tickets</p>
                </div>
                <div className="text-center text-ec-grey">
                    <div className="text-white text-2xl border border-ec-green-footer py-10 px-5 mt-5 mb-3 box-border">
                        <div className="flex relative justify-center">
                            <div className="flex items-baseline text-center">
                                <input minLength="1" inputMode="decimal" placeholder="0" className="text-center w-24 caret-ec-yellow outline-none border-0 bg-ec-green text-3xl text-ec-yellow" />
                            </div>
                        </div>
                    </div>
                    <p className="text-xs">$Price/Ticket</p>
                </div>
            </div>
            <div className="p-2 mx-2 my-4 md:my-0">
                <input className="w-full border border-ec-green-footer text-sm p-2 bg-ec-green text-white focus:outline-none focus:ring focus:ring-ec-yellow" type="datetime-local" />
            </div>
            <div className="p-2 mx-2">
                <input className="w-full border border-ec-green-footer text-sm p-2 bg-ec-green text-white focus:outline-none focus:ring focus:ring-ec-yellow" placeholder="Drawing Name" type="text" />
            </div>
            <div className="mx-4 my-5">
                <button className="bg-ec-yellow text-white rounded-sm px-4 w-full py-4 hover:bg-ec-yellow-hover font-bold focus:ring focus:ring-ec-yellow">Launch Drawing</button>
            </div>
        </div>
    )
}

export default DrawForm;
