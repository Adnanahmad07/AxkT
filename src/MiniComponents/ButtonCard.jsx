import { ArrowRight } from 'lucide-react'
import React from 'react'

const ButtonCard = ({ UrlLink, ButtonText, Text, }) => {
    return (
        <div className='md:flex justify-between items-center'>
            <h4 className='text-3xl md:text-5xl font-semibold text-black text-wrap md:max-w-[60%] mb-6 '>{Text}</h4>
            <button className='text-black flex  gap-1 justify-center items-center border px-4 py-2 rounded-4xl'>{ButtonText} <ArrowRight /></button>

        </div>
    )
}

export default ButtonCard