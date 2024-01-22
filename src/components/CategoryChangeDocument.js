import React, { useRef } from 'react'
import Header from './Header';
import { FaUpload } from 'react-icons/fa';

const CategoryChangeDocument = () => {
    const fileInputRef = useRef(null);
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };
  // const handleFileChange = (event) => {
  //   const selectedFiles = event.target.files;
  //   console.log("Selected files:", selectedFiles);
  // };

  return (
    <div className="w-screen p-10 bg-[#F4F7FE]">
        <Header path={"Category Change"} name={"Category change"}/>
      <div className="border p-2 bg-white rounded-2xl">
        <div className="w-full md:w-1/2 m-auto rounded-2xl">
          <h3 className="text-2xl font-bold text-[#2B3674]">Documents Required</h3>
          <p className='text-sm mb-3 text-[#707EAE] font-normal'>
            Kindly ensure that the documents are scanned properly. Department
            reserves right to reject the application with illegible supporting
            documents.
          </p>
          <div className="border mb-4"></div>
        </div>
        <div className="w-full md:w-1/2 m-auto border p-4  rounded-2xl">
          <div class="relative px-4">
            <ol className="list-[number] text-[#2B3674]">
              <li class="h-[25px] text-[#2B3674] text-base font-medium">
                {" "}
                Proof of ownership / legal occupancy of premises
              </li>
              <li class="h-[25px] text-[#2B3674] text-base font-medium">
                Other Documents
              </li>
            </ol>
          </div>
        </div>
        <div className="w-full md:w-1/2 m-auto border p-4 mt-4 overflow-auto rounded-2xl">
          <div>
            <div className="">
              <table>
                <tbody>
                  <tr class=" h-[25px] text-[#2B3674] text-base font-medium even:bg-slate-100">
                    <td className="">
                      &#x2022; Proof of ownership / legal occupancy of 
                      premises.
                    </td>
                    <td>pdf</td>
                    <td>MANDATORY</td>
                    <td>
                      <label for="fileInput" class="upload-icon frm-lbl">
                        <FaUpload onclick={handleUploadClick} className='text-[#0D67CA]'/>
                      </label>
                      <input type="file" className="hidden" />
                    </td>
                  </tr>
                  <tr class=" h-[25px] text-[#2B3674] text-base font-medium even:bg-slate-100">
                    <td className="py-2">
                      &#x2022; Other Documents
                    </td>
                    <td className="pr-3">pdf</td>
                    <td className="pr-3">MANDATORY</td>
                    <td >
                      <label >
                        <FaUpload onclick={handleUploadClick} className='text-[#0D67CA]' />
                      </label>
                      <input type="file" className="hidden" />
                    </td>
                  </tr>
                  
                  
                  
                </tbody>
              </table>
            </div>
          </div>
       <button className="bg-[#0d6efd] px-7 py-3 text-xs rounded-md m-auto text-white flex justify-center mt-4">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default CategoryChangeDocument;