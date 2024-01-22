import React, { useEffect, useState } from 'react';
import Header from './Header';
import UserName from './UserName';
import UserProfile from './UserProfile';
import { FaPlusCircle, FaRupeeSign } from 'react-icons/fa';
import RecentPayment from './RecentPayment';
import LinkedAccount from './LinkedAccount';
import { SideContext } from '../utils/SidebarContext';
import { useContext } from 'react';

const ConsumerDashBoardPrepaid = () => {
  // const {accountInfo} = useContext(SideContext)
  // console.log(accountInfo.CC)
  const [user, setUser] = useState(null);
  useEffect(() => {
    const u = JSON.parse(localStorage.getItem('setId'));
    u !== null && u.length !== 0
      ? setUser(u[0])
      : setUser([
          {
            id: '90',
            password: 'pass',
            conventional: true,
            netMetering: false,
            category: 'Postpaid',
          },
        ]);
  }, []);
  if (user === null) return;
  //   if(user === null || accountInfo === null) return;
  const recentPaymentData = [
    {
      month: 'APR - 2023',
      amount: '3000',
      transactionId: '121273',
      time: '30s',
    },
    {
      month: 'APR - 2023',
      amount: '3000',
      transactionId: '122273',
      time: '30s',
    },
    {
      month: 'APR - 2023',
      amount: '3000',
      transactionId: '122753',
      time: '30s',
    },
    {
      month: 'APR - 2023',
      amount: '3000',
      transactionId: '122073',
      time: '30s',
    },
    {
      month: 'APR - 2023',
      amount: '3000',
      transactionId: '121773',
      time: '30s',
    },
    {
      month: 'APR - 2023',
      amount: '3000',
      transactionId: '128273',
      time: '30s',
    },
    {
      month: 'APR - 2023',
      amount: '3000',
      transactionId: '122673',
      time: '30s',
    },
    {
      month: 'APR - 2023',
      amount: '3000',
      transactionId: '125273',
      time: '30s',
    },
    {
      month: 'APR - 2023',
      amount: '3000',
      transactionId: '1276273',
      time: '30s',
    },
  ];
  // const userData = {
  //     name:"Sharukh",
  //     cCode:accountInfo.CC ,
  //     cCategory:user.category ,
  //     email:"sharukh@gmail.com" ,
  //     acctId:accountInfo.results[0].acctId
  // }
  const userData = {
    name: 'Sharukh',
    cCode: 467853895,
    cCategory: user.category,
    email: 'sharukh@gmail.com',
    acctId: 457835785,
  };
  return (
    <div className="w-screen p-10 bg-[#F4F7FE]">
      <Header path={'Dashboard'} name={'Consumer Dashboard'} />
      <UserName name="Sharukh" />
      <div className="mt-4 md:flex round-2xl">
        <UserProfile data={userData} />

        {/* your Balance component */}

        {/* linkedAccount component*/}

        <LinkedAccount />
      </div>
      <RecentPayment data={recentPaymentData} />
    </div>
  );
};

export default ConsumerDashBoardPrepaid;
