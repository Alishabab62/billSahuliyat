import React, {  createContext, useContext, useState } from 'react'
const SideContext = createContext();
const SidebarContext = ({children}) => {
    const [display,setDisplay] = useState(true);
    const [userDetails,setUserDetails] = useState(null);
    const [name,setName] = useState(null);
    const [bill,setBill] = useState(null);
    const [address,setAddress] = useState(null);
    const [allConsumerCode,setAllConsumerCode] = useState(null);
  return (
    <SideContext.Provider value={{display,setDisplay,userDetails,allConsumerCode,setAllConsumerCode, setUserDetails,name,setName,bill,setBill,address,setAddress}}>
        {children}
    </SideContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(SideContext);
  if (!context) {
      throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export  {SidebarContext,SideContext};