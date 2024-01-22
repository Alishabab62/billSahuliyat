import React from 'react';
import Dropdown from './selectDrops';
import PrintCurtailment from './printBtn';

const DD = () => {
    const subdivisionItems = ['Subdivision1', 'Subdivision2', 'Subdivision3', 'Subdivision4'];
    const receivingStationItems = ['StationItem1', 'StationItem2', 'StationItem3'];
    const feederItems = ['Feeder1', 'Feeder2', 'Feeder3', 'Feeder4', 'Feeder5'];

    const [selectedSubdivision, setSelectedSubdivision] = React.useState(null);
    const [selectedReceivingStation, setSelectedReceivingStation] = React.useState(null);
    const [selectedFeeder, setSelectedFeeder] = React.useState(null);

    return (
        <div className="grid grid-cols-1 mt-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <div className="flex flex-col items-center justify-center">
                <div className='text-black text-sm font-medium mb-2'>
                    SELECT SUBDIVISION:
                </div>
                <Dropdown
                    label="Select Subdivision"
                    items={subdivisionItems}
                    onSelect={(item) => setSelectedSubdivision(item)}
                />
            </div>
            <div className=" flex flex-col items-center justify-center">
                <div className='text-black text-sm font-medium mb-2'>
                    SELECT RECEIVING STATION:
                </div>
                <Dropdown
                    label="Select Receiving Station"
                    items={receivingStationItems}
                    onSelect={(item) => setSelectedReceivingStation(item)}
                />
            </div>

            <div className=" flex flex-col items-center justify-center">
                <div className='text-black text-sm font-medium mb-2'>
                    SELECT FEEDER:
                </div>
                <Dropdown
                    label="Select Feeder"
                    items={feederItems}
                    onSelect={(item) => setSelectedFeeder(item)}
                />
            </div>
            <div className=" flex flex-col items-center justify-center">
                <PrintCurtailment
                    selectedSubdivision={selectedSubdivision}
                    selectedReceivingStation={selectedReceivingStation}
                    selectedFeeder={selectedFeeder}
                />
            </div>
        </div>
    );
}

export default DD;
