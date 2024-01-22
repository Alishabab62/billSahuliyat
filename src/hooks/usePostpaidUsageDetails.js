import React, { useContext, useEffect, useState } from 'react'
import { SideContext } from '../utils/SidebarContext';
import axios from 'axios';

const usePostpaidUsageDetails = (date) => {
    const {userDetails} = useContext(SideContext);
    const [usage,setUsage]  = useState(null);
    console.log(userDetails);

  const getPostpaidDetails = () => {
    console.log("Postpaid Usage Details")

    const url = "http://172.18.2.114:7020/soa-infra/resources/RESTKPDCL/CM_USGAGE!1.0/RestService/?cc="+userDetails.consumerCode;
    axios.get(url).then((response) =>{
        console.log(response?.data?.results)
        if(response?.data?.results){
          setUsage(response?.data?.results);
        }
        else{
          setUsage(undefined);
        }
    }).catch(err =>console.log(err))
  };


  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
  
    return `${day}-${month}-${year}`;
  };

  const formatFromDate = (date) => {
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    let year = date.getFullYear();
    // if(month - 2 < 0){
    //   year = year -1;
    //   
    // }
    if(day - 1 <0){
      day = 30;
    }
    else{
      day = day - 1;
    }
  
    return `${day}-${month}-${year-1}`;
  };
  


  const getPrepaidDetails = () => {
    console.log("Prepaid")
    const today = new Date();
    const formattedDate = formatDate(today);
    const fromDate = formatFromDate(today)
    
    const url = "http://172.18.2.114:7020/soa-infra/resources/RESTKPDCL/CM_PrepaidUsage!1.0/RestService/?cc="+userDetails.consumerCode+"&tdate="+formattedDate+"&fdate="+fromDate;
 
  
      axios.get(url).then((response) =>{
        console.log(response?.data)
        if(response?.data?.results){
          setUsage(response?.data?.results);
        }
        else{
          setUsage(undefined);
        }
    }).catch(err =>console.log(err))
  };


  useEffect(()=>{
    if(userDetails !== null){
      userDetails.custype === "PREPAID" ? getPrepaidDetails() :  getPostpaidDetails() 
    }
  },[userDetails,date]);
  return usage;
}

export default usePostpaidUsageDetails;