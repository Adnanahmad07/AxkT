import React from 'react';

const CardSleton = ({ image, heading, text, reverse }) => {
    return (
        <div
            className={`border max-w-[1200px] mx-auto flex flex-col md:flex-row items-center p-4 ${reverse ? 'md:flex-row-reverse' : ''}`}
            style={{
                borderImage: 'linear-gradient(to right, black, white, black) 1',
                borderImageSlice: 1,
            }}
        >
            <img src={image} alt="card" className="w-full md:w-1/2" />
            <div className="md:w-1/2 space-y-4">
                <h2 className="md:text-6xl text-3xl text-center md:text-left text-neutral-100">
                    {heading}
                </h2>
                <p className="md:text-2xl text-center md:text-left text-neutral-100">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default CardSleton;
