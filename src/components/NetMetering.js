import React from 'react'
import Header from './Header'
import { FaCaretDown } from 'react-icons/fa'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const NetMetering = () => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display:false,
      },
    },
  };
  
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  const data = {
    labels,
    datasets: [
      {
        // label: 'Dataset 1',
        data: [20,49,43,34,95,14,84],
        backgroundColor: '#0d6efd',
      },
      {
        // label: 'Dataset 2',
        data: [23,43,23,64,75,24,54],
        backgroundColor: 'rgba(53, 184, 108)',
      },
    ],
  };


  return (
    <div className="w-screen p-10 bg-[#F4F7FE]">
        <Header path="Net metering" name="Net Metering"/>
        <div className='p-2'>
        <p className='text-sm mb-1 text-[#707EAE] font-normal'>Enables residential and commercial customers to sell the surplus electricity back into rhe grid.</p>
        </div>

        <div className='flex flex-wrap justify-between'>

        {/* net metering */}

            <div className='w-[49%] border-b-2 border-t-2 p-4 bg-white rounded-2xl'>
              <div className='flex justify-between my-1'>
                <span className='text-[#2B3674] font-semibold'>Show by</span>
                <select className='bg-[#0d6efd] text-white'>
                  <option>last Month <FaCaretDown/></option>
                  <option>last 3 Month <FaCaretDown/></option>
                </select>
              </div>
              <div className='flex justify-between my-1 '>
                <span className='text-[#2B3674] font-semibold'>From Date</span>
                <span className='text-[#707EAE] text-base font-normal'></span>
              </div>
              <div className='flex justify-between my-1'>
                <span className='text-[#2B3674] font-semibold'>To Date</span>
                <span className='text-[#707EAE] text-base font-normal'></span>
              </div>
              <div className='flex justify-between my-1'>
                <span className='text-[#2B3674] font-semibold'>Export</span>
                <span className='text-[#707EAE] text-base font-normal'></span>
              </div>
              <div className='flex justify-between my-1'>
                <span className='text-[#2B3674] font-semibold'>Import</span>
                <span className='text-[#707EAE] text-base font-normal'></span>
              </div>
              <div className='flex justify-between my-1'>
                <span className='text-[#2B3674] font-semibold'>Net Billed</span>
                <span className='text-[#707EAE] text-base font-normal'></span>
              </div>
              <p className='text-center text-white bg-orange-500 p-4 rounded-2xl'>0% of your total consumption was Powered by EXPORT</p>
            </div>
            



          {/* weekly comparisons */}
          <div className='bg-white rounded-2xl p-4 w-[49%] ml-5'>
          <h3 className='font-bold text-2xl  mb-1 text-[#2B3674]'>Weekly Usage Comparison</h3>
          <div style={{ width: '510px', height: '300px' }}> 
            <Bar options={options} data={data} />
        </div>
          </div>

          {/* weekly usage summary: */}

            <div className='w-[49%]  p-4 h-80 bg-white rounded-2xl mt-5 mr-5'>
              <div className='h-96'>
                <h3 className='font-bold text-2xl  mb-1 text-[#2B3674]'>Weekly usage summary</h3>
                <div className=' flex my-2 w-full'>
                  <div className='w-1/2 font-bold text-[#2B3674]'>Days</div>
                  <span className='font-bold text-[#2B3674]'>Usage (kWh)</span>
                </div>
                <div className='w-full flex'>
                  <div className='w-1/2 '></div>
                  <div className='flex justify-between w-1/2 text-[#2B3674]'>
                  <span className='font-bold'>Previous Week</span>
                  <span className='font-bold'>Current Week</span>
                  </div>
                </div>
                <div className='overflow-y-scroll h-2/4'>
                  <div className='w-full flex justify-between my-1 border-2 py-1 px-1'>
                    <div className='w-1/2 text-[#707EAE]'>Monday</div>
                    <div className='flex justify-between w-1/2'>
                    <span className='text-yellow-500'></span>
                    <span className='text-yellow-500'></span>
                    </div>
                  </div>
                  <div className='w-full flex justify-between my-1 border-2 py-1 px-1'>
                    <div className='w-1/2 text-[#707EAE]'>Tuesday</div>
                    <div className='flex justify-between w-1/2'>
                    <span className='text-yellow-500'></span>
                    <span className='text-yellow-500'></span>
                    </div>
                  </div>
                  <div className='w-full flex justify-between my-1 border-2 py-1 px-1'>
                    <div className='w-1/2 text-[#707EAE]'>Wednesday</div>
                    <div className='flex justify-between w-1/2'>
                    <span className='text-yellow-500'></span>
                    <span className='text-yellow-500'></span>
                    </div>
                  </div>
                  <div className='w-full flex justify-between my-1 border-2 py-1 px-1'>
                    <div className='w-1/2 text-[#707EAE]'>Thursday</div>
                    <div className='flex justify-between w-1/2'>
                    <span className='text-yellow-500'></span>
                    <span className='text-yellow-500'></span>
                    </div>
                  </div>
                  <div className='w-full flex justify-between my-1 border-2 py-1 px-1'>
                    <div className='w-1/2 text-[#707EAE]'>Friday</div>
                    <div className='flex justify-between w-1/2'>
                    <span className='text-yellow-500'></span>
                    <span className='text-yellow-500'></span>
                    </div>
                  </div>
                  <div className='w-full flex justify-between my-1 border-2 py-1 px-1'>
                    <div className='w-1/2 text-[#707EAE]'>Saturday</div>
                    <div className='flex justify-between w-1/2'>
                    <span className='text-yellow-500'></span>
                    <span className='text-yellow-500'></span>
                    </div>
                  </div>
                  <div className='w-full flex justify-between my-1 border-2 py-1 px-1'>
                    <div className='w-1/2 text-[#707EAE]'>Sunday</div>
                    <div className='flex justify-between w-1/2'>
                    <span className='text-yellow-500'></span>
                    <span className='text-yellow-500'></span>
                    </div>
                  </div>
                </div>
              </div>  

            </div>

        {/* usage comparisons */}

        <div className='w-[49%]  p-4 h-80 bg-white rounded-2xl mt-5'>
          <h3 className='font-bold text-2xl  mb-1 text-[#2B3674]'>Usage Details</h3>
      <div className='mt-3 h-60 overflow-auto'>
          
          <table className=' border-collapse w-full'>
              <thead>
                <tr className='text-[#2B3674] '>
                  <th className='w-1/6 text-lg border border-gray-400 bg-gray-200 p-2'>Date</th>
                  <th className='w-1/6 text-lg border border-gray-400 bg-gray-200 p-2'>Import (kWh)</th>
                  <th className='w-1/6 text-lg border border-gray-400 bg-gray-200 p-2'>Import Read</th>
                  <th className='w-1/6 text-lg border border-gray-400 bg-gray-200 p-2'>Export (kWh)</th>
                  <th className='w-1/6 text-lg border border-gray-400 bg-gray-200 p-2'>Export Read</th>
                  <th className='w-1/6 text-lg border border-gray-400 bg-gray-200 p-2'>Net Read</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-black even:bg-slate-100'>
                  <td className='w-1/6 text-base border border-b-gray-400  p-2 text-center rounded-md'>Sep 24,2023</td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                </tr>
                <tr className='text-black even:bg-slate-100'>
                  <td className='w-1/6 text-base border border-b-gray-400  p-2 text-center rounded-md'>Sep 24,2023</td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                </tr>
                <tr className='text-black even:bg-slate-100'>
                  <td className='w-1/6 text-base border border-b-gray-400  p-2 text-center rounded-md'>Sep 24,2023</td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                </tr>
                <tr className='text-black even:bg-slate-100'>
                  <td className='w-1/6 text-base border border-b-gray-400  p-2 text-center rounded-md'>Sep 24,2023</td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                </tr>
                <tr className='text-black even:bg-slate-100'>
                  <td className='w-1/6 text-base border border-b-gray-400  p-2 text-center rounded-md'>Sep 24,2023</td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                </tr>
                <tr className='text-black even:bg-slate-100'>
                  <td className='w-1/6 text-base border border-b-gray-400  p-2 text-center rounded-md'>Sep 24,2023</td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                </tr>
                <tr className='text-black even:bg-slate-100'>
                  <td className='w-1/6 text-base border border-b-gray-400  p-2 text-center rounded-md'>Sep 24,2023</td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                </tr>
                <tr className='text-black even:bg-slate-100'>
                  <td className='w-1/6 text-base border border-b-gray-400  p-2 text-center rounded-md'>Sep 24,2023</td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                  <td className='w-1/6 text-base border border-b-gray-400 text-yellow-500 p-2 text-center rounded-md'></td>
                </tr>
              </tbody>
            </table>
      </div>
          </div>
        </div>


        </div>
  )
}

export default NetMetering