

import React from 'react'
import { useState } from 'react'

const useGetRecentPayment = () => {
    const [payment,setPayment] = useState(null)
  const  getRecentPay = ()=>{
    const url = "https://172.18.2.114:7021/soa-infra/resources/RESTKPDCL/CM_BILLusage!1.0/RestService/application.wadl";
  }
}

export default useGetRecentPayment