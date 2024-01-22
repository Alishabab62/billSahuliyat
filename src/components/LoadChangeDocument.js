import React, { useRef } from 'react'
import Header from './Header';
import { FaUpload } from 'react-icons/fa';

const LoadChangeDocument = () => {
    const fileInputRef = useRef(null);
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };
  // eslint-disable-next-line
  
  // const handleFileChange = (event) => {
  //   const selectedFiles = event.target.files;
  //   console.log("Selected files:", selectedFiles);
  // };

  return (
    <div className="w-screen p-10 bg-[#F4F7FE]">
        <Header path={"Load"} name={"Load change"}/>
      <div className="border p-2 bg-white rounded-2xl">
        <div className="w-full md:w-1/2 m-auto">
          <h3 className="font-bold text-xl mb-1">Documents Required</h3>
          <p className=" text-md mb-2">
            Kindly ensure that the documents are scanned properly. Department
            reserves right to reject the application with illegible supporting
            documents.
          </p>
          <div className="border mb-4"></div>
        </div>
        <div className="w-full md:w-1/2 m-auto border p-4 rounded-2xl">
          <div class="relative px-4 ">
            <ol className="list-[number]">
              <li class="h-[25px] text-[#2B3674] text-base font-medium" >
                {" "}
                A Copy of Latest Bill Duly Paid
              </li>
            </ol>
          </div>
        </div>
        <div className="w-full md:w-1/2 m-auto border p-4 mt-4 rounded-2xl">
          <div>
            <div>
              <table className='w-full'>
                <tbody>
                  <tr class="h-[25px] text-[#2B3674] text-base font-medium">
                    <td className="py-2">
                      &#x2022; A copy of latest bill duly paid.
                    </td>
                    <td>pdf</td>
                    <td>MANDATORY</td>
                    <td>
                      <label for="fileInput" class="upload-icon frm-lbl">
                        <FaUpload onclick={handleUploadClick} />
                      </label>
                      <input type="file" className="hidden" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
       <button className="bg-[#0d6efd] px-7 py-3 text-xs rounded-md m-auto text-white flex justify-center mt-3">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default LoadChangeDocument;