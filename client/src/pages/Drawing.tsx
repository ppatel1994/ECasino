import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { StarIcon, ArrowUturnDownIcon } from '@heroicons/react/24/solid';

function Drawing(){
    return (
        <div className="bg-ec-green h-screen w-full overflow-auto">
            <Header />
            <Banner />
            {/* <Footer /> */}
            <div className="text-center">
                <p className="text-ec-yellow">Drawing MegaLotto</p>
            </div>
            <div className="flex items-center justify-center md:mb-3">
                <div className="md:border md:border-ec-green-border w-[400px]">
                    <div className="flex justify-center text-center">
                        <p className="text-white text-xs font-bold p-2">Commissions <span className="text-ec-bright-green">$1.50</span></p>
                    </div>
                    <div className="flex flex-row justify-evenly mb-4">
                        <div className="flex items-center justify-center cursor-not-allowed text-white text-xs border border-ec-green-footer w-[150px] h-[100px] box-border hover:bg-ec-green-inner">
                            <StarIcon className="h-5 mr-2" />
                            <p>Draw Winner</p>
                        </div>
                        <div className="flex items-center justify-center cursor-pointer text-white text-xs border border-ec-green-footer w-[150px] h-[100px] box-border hover:bg-ec-green-inner">
                            <ArrowUturnDownIcon className="h-5 mr-2" />
                            <p>Refund All</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex flex-col lg:flex-row md:space-x-10">
                    <div className="mb-4 border-0 md:border md:border-ec-green-border rounded-md bg-ec-green-inner">
                        <div className="text-center">
                            <h1 className="text-white text-2xl md:text-4xl">The Next Draw</h1>
                        </div>
                        <div className="flex flex-row justify-evenly mt-2 p-2 space-x-2 md:space-x-8">
                            <div className="border border-ec-green-footer w-[200px] h-[100px] text-center">
                                <p className="text-xs text-ec-grey text-left pt-1">Total Pool</p>
                                <p className="p-4 text-xl text-white font-bold">$150.00</p>
                            </div>
                            <div className="border border-ec-green-footer w-[200px] h-[100px] text-center">
                                <p className="text-xs text-ec-grey text-left pt-1">Tickets Remaining</p>
                                <p className="p-4 text-xl text-white font-bold">100</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-ec-grey italic text-xs ">Time Remaining</p>
                        </div>
                        <div className="flex flex-row justify-evenly">
                            <div className="text-center">
                                <div className="flex bg-ec-light-green items-center text-white justify-center text-4xl font-bold w-[100px] h-[100px]">
                                    0
                                </div>
                                <p className="text-white text-xs">Hours</p>
                            </div>
                            <div className="text-center">
                                <div className="flex bg-ec-light-green items-center text-white justify-center text-4xl font-bold w-[100px] h-[100px]">
                                    25
                                </div>
                                <p className="text-white text-xs">Minutes</p>
                            </div>
                            <div className="text-center pb-1">
                                <div className="flex bg-ec-light-green items-center text-white justify-center text-4xl font-bold w-[100px] h-[100px]">
                                    53
                                </div>
                                <p className="text-white text-xs">Seconds</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 border-0 md:border md:border-ec-green-border rounded-md bg-ec-green-inner w-[450px] h-[275px] mb-8">
                        <div className="">
                            <div className="p-4">
                                <p className="text-white float-left">Price per Ticket</p>
                                <p className="text-white float-right">$1.00</p>
                            </div>
                            <div className="flex items-center justify-center my-4 border-4 border-ec-green-border py-2 mx-24">
                                <div className="relative w-full">
                                    <p className="text-white ml-2 ">Tickets</p>
                                </div>
                                <div>
                                    <div onKeyDown={e => e.keyCode === 13 && e.preventDefault()} className="mr-4 text-center caret-ec-yellow outline-none border-0 text-md text-ec-yellow" contentEditable>8</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full my-2">
                                <div className="">
                                    <p className="text-ec-cost-green px-8 text-white float-left">Cost of tickets</p>
                                    <p className="text-ec-fee-green px-8 text-white float-right">$8.00</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full my-2">
                                <div className="">
                                    <p className="text-ec-fee-green px-8 text-white float-left">+ Service Fees</p>
                                    <p className="text-ec-fee-green px-8 text-white float-right">$0.08</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full my-4">
                                <button className="text-white bg-ec-yellow rounded-sm py-4 px-8 hover:bg-ec-yellow-hover focus:ring focus:ring-ec-yellow">Buy 8 Ticket(s)</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Drawing;