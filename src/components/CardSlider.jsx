import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cardData = [
    { heading: 'Heading 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { heading: 'Heading 2', text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { heading: 'Heading 3', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    { heading: 'Heading 4', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.' },
    { heading: 'Heading 5', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.' },
    { heading: 'Heading 6', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { heading: 'Heading 7', text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
];

const CardSlider = () => {
    const sliderRef = useRef(null);




    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -800, behavior: 'smooth' });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 800, behavior: 'smooth' });
    };

    return (
        <div className="bg-black text-white flex justify-center py-10">
            <div className="relative w-full max-w-[800px]">
                <h2 className='text-center text-6xl my-12'>Features of Web3</h2>
                <div
                    className="flex overflow-x-auto no-scrollbar  scroll-smooth"
                    ref={sliderRef}
                >
                    {cardData.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="w-full flex-shrink-0 h-[400px] border-l border-r p-4 rounded-lg bg-black"
                            style={{
                                borderImage: 'linear-gradient(to bottom, black, white, black) 1',
                                borderImageSlice: 1,
                            }}
                        >
                            <h2 className="text-xl font-bold mb-2">{item.heading}</h2>
                            <p className="text-sm text-neutral-300">{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Arrow buttons at bottom-left */}
                <div className="absolute bottom-[-3rem] left-0 flex gap-4 mt-2 p-2">
                    <button
                        onClick={scrollLeft}
                        className="p-2 rounded-full  bg-neutral-800 hover:bg-neutral-600 transition"
                    >
                        <ChevronLeft className="text-white" size={44} />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-600 transition"
                    >
                        <ChevronRight className="text-white" size={44} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardSlider;
