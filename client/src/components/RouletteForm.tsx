import React from 'react';

function RouletteForm() {
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
                    <p className="text-xs">$Starter Cash</p>
                </div>
                <div className="text-center text-ec-grey">
                    <div className="text-white text-2xl border border-ec-green-footer py-10 px-5 mt-5 mb-3 box-border">
                        <div className="flex relative justify-center">
                            <div className="flex items-baseline text-center">
                                <input minLength="1" inputMode="decimal" placeholder="0" className="text-center w-24 caret-ec-yellow outline-none border-0 bg-ec-green text-3xl text-ec-yellow" />
                            </div>
                        </div>
                    </div>
                    <p className="text-xs">$Price/Roll</p>
                </div>
            </div>
            <div className="p-2 mx-2 my-4">
                <input className="w-full border border-ec-green-footer text-sm p-2 bg-ec-green text-white focus:outline-none focus:ring focus:ring-ec-yellow" placeholder="Table Name" type="text" />
            </div>
            <div className="mx-4 my-12 ">
                <button className="bg-ec-yellow text-white rounded-sm px-4 w-full py-4 hover:bg-ec-yellow-hover font-bold">Launch Table</button>
            </div>
        </div>
    )
}

export default RouletteForm;
