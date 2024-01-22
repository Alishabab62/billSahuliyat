import React, { useContext, useState } from 'react';
import Header from './Header';
import usePostpaidUsageDetails from '../hooks/usePostpaidUsageDetails';
import { SideContext } from '../utils/SidebarContext';

const UsageDetails = () => {
  const { userDetails } = useContext(SideContext);

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  const today = new Date();
  const formattedDate = formatDate(today);

  const [date, setDate] = useState(formattedDate);
  const usage = usePostpaidUsageDetails(date);
  console.log(usage, 'details usage ........................');

  if (usage === null) return;
  return (
    <div className="bg-[#F4F7FE] py-4 w-screen px-10">
      <Header path={'usagedetails'} name={'Usage Details'} />
      <div className="bg-white mt-3 p-4 rounded-2xl">
        <div className="flex justify-between">
          {/* <h3 className='text-2xl font-bold text-[#2B3674]'>Usage De  tails</h3> */}
          {/*<div className="bg-[#f8f9fa] text-[#0d6efd] rounded-sm px-3 py-2 font-bold">
            <select className="outline-none">
              <option>Filter</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          {/* {userDetails.custype === 'PREPAID' && (
            <div>
              <input type="date" onChange={(e) => setDate(e.target.value)} />
            </div>
          )} */}
        </div>
        <div className="mt-3 h-80 overflow-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-[#2B3674] ">
                <th className="w-1/4 text-lg border border-gray-400 bg-gray-200 p-2">
                  Date
                </th>
                <th className="w-1/4 text-lg border border-gray-400 bg-gray-200">
                  Unit Consume
                </th>
                {usage[0].hasOwnProperty('closingRead') && (
                  <th className="w-1/4 text-lg border border-gray-400 bg-gray-200">
                    Closing Read
                  </th>
                )}
                <th className="w-1/4 text-lg border border-gray-400 bg-gray-200">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {usage ? (
                usage.map((d, index) => (
                  <tr key={index} className="text-black even:bg-slate-100">
                    <td className="w-1/4 text-base border border-b-gray-400 p-2 text-center rounded-md">
                      {d.Day ? d.Day : d.billMonth}
                    </td>
                    <td className="w-1/4 text-base border border-b-gray-400 text-center">
                      {d.Usage}
                    </td>
                    {d.hasOwnProperty('closingRead') && (
                      <td className="w-1/4 text-base border border-b-gray-400 text-center">
                        {d.closingRead}
                      </td>
                    )}
                    <td className="w-1/4 text-base border border-b-gray-400 text-center">
                      {d.BillAmt}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsageDetails;
