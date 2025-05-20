import React from 'react'


const Footer = () => {




    return (
        <footer className="bg-black text-white px-6 py-8  w-full">
            <div className="max-w-6xl mx-auto border-t pt-8"
                style={{
                    borderImage: 'linear-gradient(to right, black, white, black) 1',
                    borderImageSlice: 1,
                    borderTopWidth: '2px',
                    borderStyle: 'solid',
                }}
            >
                <div className="flex flex-col md:flex-row justify-around items-start md:items-center gap-8">
                    {/* Logo + Tagline */}
                    <div>
                        <h1 className="text-4xl font-bold">AZKR Logo</h1>
                        <p className="text-xl mt-2 text-gray-400 max-w-96">Working on the future of autonomous real-world organisations</p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col text-xl gap-1">
                        <a href="#">About</a>
                        <a href="#">Updates</a>
                        <a href="#">FAQs</a>
                        <a href="#">Contact us</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>

                    {/* Ecosystem */}
                    <div className="flex flex-col text-xl gap-1">
                        <p className="font-semibold">Ecosystem</p>
                        <a href="#">Bank3</a>
                        <a href="#">League of Identity (LoID)</a>
                        <a href="#">AZKR-chain</a>
                        <a href="#">Gears</a>
                        <a href="#">Timelock</a>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center mt-8 space-x-6">


                </div>

                {/* Copyright */}
                <div className="text-center text-gray-500 text-sm mt-6 border-t pt-4"
                    style={{
                        borderImage: 'linear-gradient(to right, black, white, black) 1',
                        borderImageSlice: 1,
                        borderTopWidth: '2px',
                        borderStyle: 'solid',
                    }}
                >
                    Copyright ©2025 AZKR
                </div>
            </div>
        </footer>
    );
}



export default Footer