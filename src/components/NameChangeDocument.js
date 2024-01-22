import React from "react";
import Header from "./Header";
import { useRef } from "react";
import { FaUpload } from "react-icons/fa";

const NameChangeDocument = () => {
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
      <Header path={"Name Change"} name={"Request for name change"} />
      <div className="border p-2 bg-white rounded-2xl">
        <div className="w-full md:w-1/2 m-auto">
          <h3 className="font-bold text-3xl  mb-1 text-[#2B3674]">Documents Required</h3>
          <p className=" text-sm mb-3 text-[#707EAE] font-normal">
            Kindly ensure that the documents are scanned properly. Department
            reserves right to reject the application with illegible supporting
            documents.
          </p>
          <div className="border mb-4 w-2/3"></div>
        </div>
        <div className="w-full md:w-1/2 m-auto border p-6 rounded-2xl">
          <div class="relative ">
            <ol className="list-[number]">
              <li class=" h-[45px] text-[#2B3674] text-base font-medium"> Copy of latest bill duly paid</li>
              <li class=" text-[#2B3674] text-base font-medium">
                {" "}
                Proof of ownership / legal occupation of the premises in the
                name of applicant.
                <ul className="list-[square] relative left-6">
                  <li>Sale Deed / Allotment Letter</li>
                  <li>Lease deed or rent deed</li>
                </ul>
              </li>
              <li class="h-[65px] text-[#2B3674] text-base font-medium">
                No Objection Certificate from the existing consumer (if
                available/possible)
              </li>
              <li class="h-[45px] text-[#2B3674] text-base font-medium">
                Registered deed / Succession certificate
              </li>
              <li class="h-[45px] text-[#2B3674] text-base font-medium">Other document</li>
              <li class="h-[45px] text-[#2B3674] text-base font-medium">NOC PUBLISHED IN PRINT MEDIA</li>
            </ol>
          </div>
        </div>
        <div className="w-full md:w-1/2 m-auto border p-6 mt-4 overflow-auto rounded-2xl">
          <div>
            <div>
              <table>
                <tbody>
                  <tr class=" h-[45px] text-[#2B3674] text-base font-medium">
                    <td className="py-2">
                      &#x2022; Copy of latest bill duly paid
                    </td>
                    <td className="pr-3">pdf</td>
                    <td className="pr-3">MANDATORY</td>
                    <td >
                      <label >
                        <FaUpload onclick={handleUploadClick} />
                      </label>
                      <input type="file" className="hidden" />
                    </td>
                  </tr>
                  <tr class=" h-[45px] text-[#2B3674] text-base font-medium">
                    <td className="py-2">
                      &#x2022; Proof of ownership / legal occupation of the
                      premises in the name of applicant.
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
                  <tr class=" h-[45px] text-[#2B3674] text-base font-medium">
                    <td className="py-2">
                      &#x2022; No objection certificate for the existing
                      consumer{" "}
                      <small>
                        <i>(if available/possible)</i>
                      </small>
                    </td>
                    <td>pdf</td>
                    <td>Optional</td>
                    <td class="HLupload-icon">
                      <label for="fileInput" class="upload-icon frm-lbl">
                        <FaUpload onclick={handleUploadClick} />
                      </label>
                      <input type="file" className="hidden" />
                    </td>
                  </tr>
                  <tr class=" h-[45px] text-[#2B3674] text-base font-medium">
                    <td className="py-2">
                      &#x2022; Registered deed/Succession certificate{" "}
                    </td>
                    <td>pdf</td>
                    <td>Optional</td>
                    <td >
                      <label >
                        <FaUpload onclick={handleUploadClick} />
                      </label>
                      <input type="file" className="hidden" />
                    </td>
                  </tr>
                  <tr class=" h-[45px] text-[#2B3674] text-base font-medium">
                    <td className="py-2">
                      &#x2022; Other document{" "}
                      <small>
                        <i>(for industrial/ agricultural consumers)</i>
                      </small>
                    </td>
                    <td>pdf</td>
                    <td>Optional</td>
                    <td >
                      <label >
                        <FaUpload onclick={handleUploadClick} />
                      </label>
                      <input type="file" className="hidden" />
                    </td>
                  </tr>
                  <tr class=" h-[45px] text-[#2B3674] text-base font-medium">
                    <td className="py-2">
                      &#x2022; NOC PUBLISHED IN PRINT MEDIA
                    </td>
                    <td>pdf</td>
                    <td>MANDATORY</td>
                    <td >
                      <label >
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
  );
};

export default NameChangeDocument;
