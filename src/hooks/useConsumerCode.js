import axios from "axios";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SideContext } from "../utils/SidebarContext";


const useConsumerCode = ()=>{
    const {id} = useParams();

    const {setAllConsumerCode} = useContext(SideContext);

    const getConsumerCode = ()=>{
        const url = "http://172.18.2.96:8080/api/UserRequests/view_data?userId="+id;
        axios.get(url).then((response)=>{
            console.log(response)
            setAllConsumerCode(response.data);
        }).catch((error)=>{
            console.log(error.response.data)
            if(error.response.data = "No consumer data found for user with userId: cf27a631-5b28-497d-b2df-ceab4556c9bd"){
                setAllConsumerCode([]);
            }
        })
    }
    useEffect(()=>{
        getConsumerCode();
    },[])

}

export default useConsumerCode;