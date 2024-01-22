import React from 'react';
import TimeSlotTable from '../generateTimeSlot';
import Pill from '../pill';

const UserTable3 = () => {
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const numberOfColumns = 12;

    return (
        <>
            <section className="mx-auto w-full max-w-7xl px-2 py-2">
                <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    {daysOfWeek.map((day, dayIndex) => (
                                        <tbody key={dayIndex} className="bg-white">
                                            <tr>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <div className="text-sm text-gray-900 font-bold">{day}</div>
                                                </td>
                                                {Array.from({ length: numberOfColumns }).map((_, hourIndex) => (
                                                    <td key={hourIndex} className="whitespace-nowrap px-4 py-4">
                                                        <div className="text-sm text-gray-900">
                                                            <Pill />
                                                        </div>
                                                    </td>
                                                ))}
                                            </tr>
                                        </tbody>
                                    ))}
                                    <TimeSlotTable startIndex={24} />
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UserTable3;
