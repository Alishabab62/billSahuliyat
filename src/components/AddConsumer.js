import React, { useContext, useState } from "react";
import InputField from "./inputfields";
import Text from "./text";
import Label from "./Label";
import Button from "./buttons";
import axios from "axios";
import { SideContext } from "../utils/SidebarContext";

const AddConsumer = ({ fun, valFun, val, userID }) => {
  const { setUserDetails, userDetails } = useContext(SideContext);
  const [confirmError,setConfirmError] = useState(false);
  const [confirm,setConfirm] = useState("");
  const [showDetails,setShowDetails] = useState(false);
  
  const getAccountIdPersonID = (e) => {
    e.preventDefault();
    if(val !== confirm){
      setConfirmError("Please check your consumer code");
      return;
    }
    else{
      setConfirmError("");
    }
    if(val=== "" && userDetails === null) alert("Please enter consumer code");
    console.log(userDetails)
    const url =
      "http://172.18.2.114:7020/soa-infra/resources/RESTKPDCL/custinformation!1.0/RestService/?consumerCode=" +
      val;
    axios
      .get(url)
      .then((res) => {
        console.log(res?.data?.results[0]);
        setShowDetails(true);
        setUserDetails(res?.data?.results[0]);
        // fun();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const linkConsumer = (e) => {
    console.log(val,confirm);
    e.preventDefault();

    const url = "http://172.18.2.96:8080/api/UserRequests/linkConsumer";
    // const data = {
    //   consumerCode: userDetails.consumerCode,
    //   accountId: userDetails.AcctId,
    //   personId: userDetails.perID,
    //   userRequest: {
    //     userId: userID,
    //   },
    // };
    const data = {
        "consumerCode":val,
        "accountId":"1234567",
        "personId":"123445",
        "userRequest":{
        "userId":userID
        }
    
    }
    axios
      .post(url, data)
      .then((response) => {
        if(response.status === 200) {
            alert("Success")
            setShowDetails(false);
            fun();
        }
        console.log(response);
      })
      .catch((err) => {
        alert("user already linked")
        fun();
        console.log(err);
      });
  };
 
  return (
    <div className="center-absolute text-black w-7/12 bg-white h-auto rounded-lg border-2 border-black z-10">
     <div className="ml-2 mt-2"><Button fun={fun}>Back</Button></div>
      <form className="w-1/2 mx-auto p-5">
        <Label htmlFor="email">
          Consumer Code{" "}
          <Text variant="imp" size="sm" weight="xb">
            *
          </Text>
        </Label>
        <InputField
          placeholder="Enter Consumer Code"
          value={val}
          setValue={valFun}
          id="addConsumer"
        />
         <Label htmlFor="email">
          Confirm Consumer Code{" "}
          <Text variant="imp" size="sm" weight="xb">
            *
          </Text>
        </Label>
        <InputField
          placeholder="Confirm Consumer Code"
          value={confirm}
          setValue={setConfirm}
          id="addConsumer"
        />
        <div className="flex ">
             {confirmError &&
                 <p className="text-red-600 text-xs font-semibold pt-2 sm:text-xs md:text-sm lg:text-xs 2xl:text-xs">{confirmError}</p>
              }
             </div>           
        {userDetails && showDetails && (
          <div className="my-2">
            <div className='w-full my-1 flex justify-between'><div className='w-1/2 text-[#2B3674] text-base font-bold'>Name :</div><div className='w-1/2 text-black text-base'>{userDetails.cname}</div></div>
            <div className='w-full my-1 flex justify-between'><div className='w-1/2 text-[#2B3674] text-base font-bold'>Consumer Code :</div><div className='w-1/2 text-black text-base'>{userDetails.consumerCode}</div></div>
            <div className='w-full my-1 flex justify-between'><div className='w-1/2 text-[#2B3674] text-base font-bold'>Person ID :</div><div className='w-1/2 text-black text-base'>{userDetails.perID}</div></div>
          </div>
        )}
        <div className="mt-2 mb-2 flex justify-center item-center">
          {(userDetails && showDetails) ? (
            <Button fun={linkConsumer}>Link Consumer</Button>
          ) : (
            <Button fun={getAccountIdPersonID}>Submit</Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddConsumer;
