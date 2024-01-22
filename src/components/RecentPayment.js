import React from 'react';

const RecentPayment = ({ data, paytype }) => {
  if (data === null) return null;
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
  const Rows = ({ data, index, type }) => {
    if (type) {
      return type === 'P' ? (
        <tr key={index} className="text-black even:bg-slate-100">
          <td className="w-1/4 text-base border border-b-gray-400 p-2 text-center rounded-md">
            {months[parseInt(data.date.split('-')[1].replace(/^0/, '')) - 1]}
          </td>
          <td className="w-1/4 text-base border border-b-gray-400 text-center">
            {data.currency}
            {data.amount}
          </td>

          <td className="w-1/4 text-base border border-b-gray-400 text-center">
            {data.date}
          </td>
        </tr>
      ) : null;
    } else {
      return (
        <tr key={index} className="text-black even:bg-slate-100">
          <td className="w-1/4 text-base border border-b-gray-400 p-2 text-center rounded-md">
            {
              months[
                parseInt(data.billMonth.split('-')[1].replace(/^0/, '')) - 1
              ]
            }
          </td>
          <td className="w-1/4 text-base border border-b-gray-400 text-center">
            {data.billAmt}
          </td>
          <td className="w-1/4 text-base border border-b-gray-400 text-center">
            {data.bill_id}
          </td>
          <td className="w-1/4 text-base border border-b-gray-400 text-center">
            {data.billMonth}
          </td>
        </tr>
      );
    }
  };
  return (
    <div className="bg-white mt-3 p-4 rounded-2xl">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-[#2B3674]">Recent Payment</h3>
        <button className="bg-[#f8f9fa] text-[#0d6efd] rounded-sm px-3 py-2 font-bold">
          See All
        </button>
      </div>
      <div className="mt-3 h-80 overflow-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-[#2B3674] ">
              <th className="w-1/4 text-lg border border-gray-400 bg-gray-200 p-2">
                Month
              </th>
              <th className="w-1/4 text-lg border border-gray-400 bg-gray-200">
                Amount
              </th>
              {paytype == 'POSTPAID' ? (
                <th className="w-1/4 text-lg border border-gray-400 bg-gray-200">
                  Bill Id
                </th>
              ) : null}

              <th className="w-1/4 text-lg border border-gray-400 bg-gray-200">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data[0]?.hasOwnProperty('type') ? (
                data.map((d, index) => (
                  <Rows data={d} index={index} type={d.type} />
                ))
              ) : (
                data.map((d, index) => <Rows data={d} index={index} />)
              )
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

export default RecentPayment;
