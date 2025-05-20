import React from 'react'
import CardSleton from '../MiniComponents/CardSleton.jsx';
import ButtonCard from '../MiniComponents/ButtonCard.jsx';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';

const CardWallet2 = () => {
    return (
        <div className='bg-black w-full space-y-10 py-10 px-6'>

            <div className='max-w-[1200px] mx-auto px-12 bg-rose-50 min-h-[300px] rounded-[84px] flex justify-center items-center '>
                <ButtonCard
                    Text="Send Crypto Directly to Gmail or Facebook"
                    ButtonText="Try Web3"

                />
            </div>
            <CardSleton
                image={card3}
                heading="The infrastructure behind Bank3: League of Identity"
                text="League of Identity is a decentralized identity-based encryption and signature (IBE/IBS) infrastructure that leverages existing identity providers such as Gmail & Facebook."
                reverse={true}
            />
            <CardSleton
                image={card4}
                heading="Mass Adoption of DAO & Traditional Encryption"
                text="League of Identity eliminates the traditional barriers to crypto adoption. It can allow you to sign messages or transactions on blockchains or to decrypt secret messages, paving the way for a seamless transition from Web2 to Web3."
                reverse={false}
            />
            <div className='max-w-[1200px] mx-auto px-12 bg-rose-50 min-h-[300px] rounded-[84px] flex justify-center items-center '>
                <ButtonCard
                    Text="Send Crypto Directly to Gmail or Facebook"
                    ButtonText="Try Web3"

                />
            </div>

        </div>
    )
}
export default CardWallet2;