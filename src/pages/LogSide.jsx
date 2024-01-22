import React from 'react';
import DD from '../components/dropdownPart';
import CarouselToggle from '../components/carousel';

const Log = () => {
    return (
        <div className='h-full'>
            <div className='mt-10'>
                <DD />
            </div>
            <div className='pt-14'>
                <CarouselToggle />
            </div>

        </div>
    )
}
export default Log;