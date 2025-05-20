import React from 'react';
import CardSleton from '../MiniComponents/CardSleton.jsx';
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';

const CardWallet = () => {
    return (
        <div className='bg-black w-full space-y-10 py-10'>
            <CardSleton
                image={card1}
                heading="No Wallet Address Required"
                text="Recipients don’t need to have a wallet address to receive their crypto assets."
                reverse={false}
            />
            <CardSleton
                image={card2}
                heading="Secure Transactions"
                text="All transactions are encrypted and verified to ensure maximum security."
                reverse={true}
            />
        </div>
    );
};

export default CardWallet;
