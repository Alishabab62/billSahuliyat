import React, { useContext } from 'react';
import Header from './Header';
import { SideContext } from '../utils/SidebarContext';

const BillHistory = () => {
  const { bill } = useContext(SideContext);
  if (bill === null) return null;
  console.log(bill, 'bill id');
  const months = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return (
    <div className="w-screen p-10 bg-[#F4F7FE]">
      <Header name={'Bill History'} path={'Bills'} />
      <div className="flex justify-between">
        <button className="bg-[#f8f9fa] text-[#0d6efd] rounded-sm px-3 py-2 font-bold">
          
        </button>
      </div>
      <div className="mt-3 h-96 overflow-auto bg-white  pt-4 pb-4 pl-7 pr-7">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-[#2B3674]">
              <th className="w-1/6 text-lg border border-gray-400 bg-gray-200 p-2">
                Bill Id
              </th>
              <th className="w-1/6 text-lg border border-gray-400 bg-gray-200">
                Date
              </th>
              <th className="w-1/6 text-lg border border-gray-400 bg-gray-200">
                Usage
              </th>
              <th className="w-1/6 text-lg border border-gray-400 bg-gray-200">
                Closing Read
              </th>
              <th className="w-1/6 text-lg border border-gray-400 bg-gray-200">
                Bill Amount
              </th>
              <th className="w-1/6 text-lg border border-gray-400 bg-gray-200">
                Amount Paid
              </th>
            </tr>
          </thead>
          <tbody>
            {bill ? (
              bill.map((d, index) => (
                <tr key={index} className="text-black even:bg-slate-100">
                  <td className="w-1/6  text-base border border-b-gray-400 p-2 text-center ">
                    {d.bill_id}
                  </td>
                  <td className="w-1/6 text-base border border-b-gray-400 text-center">
                    {d.billMonth}
                  </td>
                  <td className="w-1/6 text-base border border-b-gray-400 text-center">
                    {d.Usage}
                  </td>
                  <td className="w-1/6 text-base border border-b-gray-400 text-center">
                    {d.closingRead}
                  </td>
                  <td className="w-1/6 text-base border border-b-gray-400 text-center">
                    {d.billAmt}
                  </td>
                  <td className="w-1/6 text-base border border-b-gray-400 text-center">
                    {d.paidAmt}
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
  );
};

export default BillHistory;
