import React from 'react';
import HeroBg from '../assets/herobg.mp4';

const Hero = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden mt-14
        border-b"
            style={{
                borderImage: 'linear-gradient(to right, black, white, black) 1',
                borderImageSlice: 1,
            }}>

            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={HeroBg}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                    Bridging Web2 & Web3: <br /> An Ecosystem for DAO Mass Adoption
                </h1>

                <p className="max-w-2xl text-lg md:text-xl mb-8">
                    Seamlessly connect to the decentralised space. Send crypto directly to an email or Facebook account—
                    and soon participate in DAOs without a wallet address.
                </p>

                <p className="max-w-xl text-base md:text-lg mb-6">
                    The <strong>BANK3</strong> token is now listed on Raydium. Join our Telegram community to learn more.
                    The official CA on Solana is:
                    <br />
                    <span className="break-all text-sm text-gray-300">
                        6YactBwhA8gqEQWoobi9X2ViChg2s21Fru7HMgudikXC
                    </span>
                    <br />
                    Note that the old AZKR website is still online at{' '}
                    <a href="https://research.azkr.org/" className="underline hover:text-blue-400" target="_blank" rel="noreferrer">
                        https://research.azkr.org/
                    </a>
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                    <button className="px-6 py-3 border border-gray-300 text-white rounded-lg hover:bg-white hover:text-black transition">
                        Try Bank3
                    </button>
                    <button className="px-6 py-3 border border-gray-300 text-white rounded-lg hover:bg-white hover:text-black transition">
                        Join Community
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
