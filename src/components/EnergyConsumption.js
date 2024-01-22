import React, { useCallback, useRef } from 'react'
import Header from './Header'

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



  const options = {
    responsive: true,
    plugins: {
      legend: {
        display:true,
      },
    },
  };
  
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Previous Week',
        data: [],
        backgroundColor: '#0d6efd',
      },
      {
        label: 'Current Week ',
        data: [],
        backgroundColor: 'rgba(53, 184, 108)',
      },
    ],
  };



const EnergyConsumption = () => {

  const chartRef = useRef();

  const downloadImage = useCallback(()=>{
    const link = document.createElement('a');
    link.download = 'consumption.png';
    link.href = chartRef.current.toBase64Image();
    link.click();
  },[])
  
  return (
    <div className="w-screen p-10 bg-[#F4F7FE] relative" >
        <Header path={"energyconsumption"} name="Energy Consumption"/>
        <div className='w-full h-16 pr-10 relative'>
          <select className='absolute right-8 border p-2 my-2 rounded-xl block  text-[#2B3674]'>
            <option>Filter</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>
       <div className='flex flex-wrap'>
       <div className='w-1/2  p-4 h-96 bg-white rounded-2xl'>
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
          <div className='bg-white rounded-2xl p-4 ml-5'>
          <div className='flex justify-between'><h3 className='font-bold text-2xl  mb-1 text-[#2B3674]'>Weekly Usage Comparison</h3><button onClick={downloadImage} className="bg-[#0d6efd] px-4 py-2 text-xs rounded-md  text-white">Download</button></div>
          <div style={{ width: '515px', height: '300px' }}> 
            <Bar ref={chartRef} options={options} data={data} />
        </div>
          </div> 
        </div> 
    </div>
  )
}

export default EnergyConsumption