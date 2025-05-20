// src/components/Contribution.jsx
import React from 'react';

const Contribution = () => {
    return (
        <div className="bg-black text-white py-10 px-4 text-center">
            <p className="text-lg md:text-xl lg:text-xl font-medium mb-8">
                In recognition of our contribution to the Web3 ecosystem, we have received grants from
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-base md:text-5xl ">
                <span className="font-serif mx-3">Aragon</span>
                <span className="font-serif mx-3">Aztec</span>
                <span className="font-serif mx-3">Ethereum Foundation</span>
                <span className="font-serif mx-3">Nouns DAO</span>
            </div>
        </div>
    );
};

export default Contribution;
