import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import UserTable1 from './userTimeTable/userslot1';
import UserTable2 from './userTimeTable/userslot2';
import UserTable3 from './userTimeTable/userslot3';
import UserTable4 from './userTimeTable/userslot4';

function CarouselPill() {

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
                    <UserTable1 />
                </div>
                <div className="min-w-280 sm:flex-shrink-0 pb-6">
                    <UserTable2 />
                </div>
                <div className="min-w-280 sm:flex-shrink-0 pb-6">
                    <UserTable3 />
                </div>
                <div className="min-w-280 sm:flex-shrink-0 pb-6">
                    <UserTable4 />
                </div>
            </Carousel>
        </div>
    );
}

export default CarouselPill;
