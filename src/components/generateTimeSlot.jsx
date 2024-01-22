import React from 'react';

const generateTimeSlots = () => {
    const startHour = 0; // 12:00 AM
    const timeSlots = Array.from({ length: 48 }, (_, i) => {
        const hour = Math.floor((startHour + i / 2) % 12) || 12; // Convert to 12-hour format
        const minute = i % 2 === 0 ? '00' : '30';
        const nextHour = Math.floor((startHour + (i + 1) / 2) % 12) || 12;
        const nextMinute = (i + 1) % 2 === 0 ? '00' : '30';
        const ampm = Math.floor((startHour + i / 2) / 12) % 2 === 0 ? 'AM' : 'PM';
        const nextAmpm = Math.floor((startHour + (i + 1) / 2) / 12) % 2 === 0 ? 'AM' : 'PM';

        return `${hour}:${minute} ${ampm} - ${nextHour}:${nextMinute} ${nextAmpm}`;
    });

    // Return the time slots array
    return timeSlots;
};

const TimeSlotTable = ({ startIndex }) => {
    const timeSlots = generateTimeSlots().slice(startIndex, startIndex + 12);

    return (
        <thead>
            <tr>
                <th
                    scope="col"
                    className="px-2 py-2 text-left text-xs font-normal text-gray-500"
                >
                    <span> </span>
                </th>
                {timeSlots.map((slot, index) => (
                    <th
                        key={index}
                        scope="col"
                        className="px-2 py-2 text-left text-xs text-gray-900 font-bold sm:text-xs md:text-sm lg:text-md"
                    >
                        {slot}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TimeSlotTable;
