import React, { useContext, useEffect, useState } from 'react';
import Header from './Header';
import UserName from './UserName';
import UserProfile from './UserProfile';
import LinkedAccount from './LinkedAccount';
import { FaRupeeSign } from 'react-icons/fa';
import RecentPayment from './RecentPayment';
import { SideContext } from '../utils/SidebarContext';
import axios from 'axios';
import AddBalance from './AddBalance';
import CustomModal from './CustomModal';

const PostPaidDashboard = () => {
  const [recentPaymentData, setRecentPaymentData] = useState([]);
  const [selectedBillMonth, setSelectedBillMonth] = useState(null);
  const [billDetails, setBillDetails] = useState(null); // Added this line
  const { userDetails, bill, setBill } = useContext(SideContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [billdetails, setBilldetails] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const getBillHistory = () => {
    const url =
      'http://172.18.2.114:7020/soa-infra/resources/RESTKPDCL/WXBillPayHistoryRetriever!1.0/RestService/?value=' +
      userDetails.AcctId;
    axios
      .get(url)
      .then((response) => {
        const data = response?.data?.mainData?.history;

        userDetails.custype === 'PREPAID' && setBill(data);
        userDetails.custype === 'PREPAID' && setRecentPaymentData(data);

        // console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getRecentPayment = (id) => {
    const url =
      'http://172.18.2.114:7020/soa-infra/resources/RESTKPDCL/CM_BILLusage!1.0/RestService/?cc=' +
      id;
    axios
      .get(url)
      .then((response) => {
        const data = response?.data?.results;

        userDetails.custype === 'POSTPAID' && setBill(data);
        userDetails.custype === 'POSTPAID' && setRecentPaymentData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getbilldetail = () => {
    const url =
      'http://172.18.2.114:7020/soa-infra/resources/RESTKPDCL/WXBillView!1.0/RestService/?value=' +
      userDetails.AcctId;
    axios
      .get(url)
      .then((response) => {
        console.log(response);

        const data = response?.data.mainData;
        handleOpenModal();
        setBilldetails(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const viewBill = () => {
    if (selectedBillMonth) {
      const url = `http://172.18.2.114:7020/soa-infra/resources/RESTKPDCL/WXBillView!1.0/RestService/?month=${selectedBillMonth}`;
      axios
        .get(url)
        .then((response) => {
          const data = response.data;

          setBillDetails(data.billDetails);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.error('Please select a bill month');
    }
  };

  useEffect(() => {
    if (userDetails != null) {
      if (userDetails != null) {
        getBillHistory(userDetails.AcctId);
        getRecentPayment(userDetails.consumerCode);
      }
    }
    // eslint-disable-next-line
  }, [userDetails]);

  if (userDetails === null || !bill) return null;

  const userData = {
    name: userDetails.cname,
    cCode: userDetails.consumerCode,
    cCategory: userDetails.category,
    phone: userDetails.phone,
    acctId: userDetails.AcctId,
  };

  const findLatestDateObject = (list) =>
    list.reduce((latest, current) =>
      new Date(latest.date) > new Date(current.date) ? latest : current
    );
  const DynamicList = ({ data }) => {
    // Remove 'billSegment' key from the object
    const { billSegment, ...restData } = data;

    const renderKeyValuePairs = (obj) => {
      return Object.entries(obj).map(([key, value]) => {
        return (
          <div key={key} className="mb-2  rounded-lg  bg-gray-200 p-2">
            <div className="flex items-start">
              <div className="font-bold mr-2">{key}:</div>
              <div>{renderValue(value)}</div>
            </div>
          </div>
        );
      });
    };

    const renderValue = (value) => {
      if (typeof value === 'object') {
        // Recursively render nested objects
        return <DynamicList data={value} />;
      } else {
        return <div>{value}</div>;
      }
    };

    return <div className=" rounded-lg ">{renderKeyValuePairs(restData)}</div>;
  };
  return (
    <div className="w-screen p-10 bg-[#f8f9fa]">
      <CustomModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className="flex w-2/3 "
      >
        {/* Add your modal content here */}
        <div className=" rounded-lg ">
          <h1 className="text-2xl font-bold mb-4">Bill Details</h1>
          <p>
            <DynamicList data={billdetails} />
          </p>
        </div>
      </CustomModal>
      <Header name={'Consumer Dashboard'} path={'Dashboard'} />
      <UserName name={userDetails.cname} />
      <div className="mt-4 md:flex">
        <UserProfile data={userData} />
        <LinkedAccount />
        {userDetails.custype === 'PREPAID' ? (
          <AddBalance balance={bill[0].amount} type={userDetails.custype} />
        ) : (
          <AddBalance
            balance={findLatestDateObject(bill).billAmt}
            type={userDetails.custype}
            getbilldetail={getbilldetail}
          />
        )}
      </div>
      {recentPaymentData && (
        <RecentPayment data={recentPaymentData} paytype={userDetails.custype} />
      )}
    </div>
  );
};

export default PostPaidDashboard;
