import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TimeTable1 from './mainTimeTable/timeslot1';
import TimeTable2 from './mainTimeTable/timeslot2';
import TimeTable3 from './mainTimeTable/timeslot3';
import TimeTable4 from './mainTimeTable/timeslot4';

function CarouselToggle() {
    return (
        <div style={{ position: 'relative' }}>
            <Carousel
                showArrows={false}
                showStatus={false}
                showIndicators={true}
                infiniteLoop={false}
                showThumbs={false}
                useKeyboardArrows={true}
                swipeable={true}
                autoPlay={false}
                dynamicHeight={true}
                autoFocus={false}
                className="max-w-sm min-w-280 mx-auto overflow-hidden sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"
            >
                <div className="min-w-280 sm:flex-shrink-0 pb-6">
                    <TimeTable1 />
                </div>
                <div className="min-w-280 sm:flex-shrink-0 pb-6">
                    <TimeTable2 />
                </div>
                <div className="min-w-280 sm:flex-shrink-0 pb-6">
                    <TimeTable3 />
                </div>
                <div className="min-w-280 sm:flex-shrink-0 pb-6">
                    <TimeTable4 />
                </div>
            </Carousel>
        </div>
    );
}

export default CarouselToggle;
