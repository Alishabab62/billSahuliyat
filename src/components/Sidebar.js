import React, { useContext, useEffect, useState } from 'react';
import { FaHome, FaPenSquare, FaUser } from 'react-icons/fa';
import logo from '../assests/logo.png';
import { SideContext } from '../utils/SidebarContext';
import {
  CategoryChange,
  LoadChange,
  Changeowenership,
  RaiseTicket,
  PostPaidToPrepaid,
} from '../assests/icons';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ dis }) => {
  const [user, setUser] = useState(null);
  const { userDetails } = useContext(SideContext);
  const navigate = useNavigate();
  const handleRoute = (path) => {
    // console.log(path);
    navigate(path);
  };
  const url = window.location.pathname;

  const handleLogOut = () => {
    window.location.href =
      'http://172.18.2.96:8888/webcenter/portal/billsahuliyat/pages_loginpage';
  };

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
  if (userDetails === null) return;
  return (
    <div
      className={` ${
        !dis ? 'flex absolute' : 'hidden'
      } md:sticky md:flex w-3/4 bg-white z-10 md:w-[20%] border-r-2  top-0 h-screen flex-col justify-between overflow-auto scrollbar`}
    >
      <div>
       <h1 className='text-[#0d6efd] font-bold text-center p-6 text-2xl'><img src={logo} alt='logo'/></h1>
        <div>
          {/* {
                user.category === 'Prepaid' ? <ul className='text-xl'>
                    <li className='flex items-center p-[22px]  cursor-pointer h-[32px] ' style={{borderRight:url === "/" ? " 4px solid #0d6efd" : "white"}} onClick={()=>handleRoute("/")}><span className='mr-1'><FaHome style={{color:url === "/" ? "#0d6efd" : "#A3AED0"}}/></span><span style={{color:url === "/" ? "#2B3674" : "",fontWeight:url === "/" ? "700" : "500",fontStyle:"normal",lineHeight:"26px"}} className=' font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] '>Dashboard</span> </li>
                    <li className='flex items-center  p-[22px]   cursor-pointer h-[32px]' style={{borderRight:url === "/bills" ? " 4px solid #0d6efd" : "white"}} onClick={()=>handleRoute("/bills")}><span className='mr-1'><FaUser style={{color:url === "/bills" ? "#0d6efd" : "#A3AED0"}}/></span><span style={{color:url === "/bills" ? "#2B3674" : "",fontWeight:url === "/bills" ? "700" : "500",fontStyle:"normal",lineHeight:"26px"}} className='font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] '>Recharge history</span></li>
                    {userDetails.custype === "POSTPAID" && <li className='flex items-center  p-[22px]   cursor-pointer h-[32px]' style={{borderRight:url === "/usage-details" ? " 4px solid #0d6efd" : "white"}} onClick={()=>handleRoute("/usage-details")}><span className='mr-1'><FaUser style={{color:url === "/usage-details" ? "#0d6efd" : "#A3AED0"}}/></span><span style={{color:url === "/usage-details" ? "#2B3674" : "",fontWeight:url === "/usage-details" ? "700" : "500",fontStyle:"normal",lineHeight:"26px"}} className='font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] '>Usage Details</span></li>}
                    {!user.conventional && <li className='flex items-center  p-[22px]   cursor-pointer h-[32px]' style={{borderRight:url === "/energy-consumption" ? " 4px solid #0d6efd" : "white"}} onClick={()=>handleRoute("/energy-consumption")}><span className='mr-1'><FaUser style={{color:url === "/energy-consumption" ? "#0d6efd" : "#A3AED0"}}/></span><span style={{color:url === "/energy-consumption" ? "#2B3674" : "",fontWeight:url === "/energy-consumption" ? "700" : "500",fontStyle:"normal",lineHeight:"26px"}} className='font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] '>Energy Consumption</span></li>}
                    {(!user.conventional && user.netMetering) &&<li   className='flex items-center p-[22px] cursor-pointer h-[32px]' style={{borderRight:url === "/net-metering" ? " 4px solid #0d6efd" : "white"}} onClick={()=>handleRoute("/net-metering")}><span className='mr-1'><FaUser style={{color:url === "/net-metering" ? "#0d6efd" : "#A3AED0"}}/></span><span style={{color:url === "/net-metering" ? "#2B3674" : "",fontWeight:url === "/net-metering" ? "700" : "500",fontStyle:"normal",lineHeight:"26px"}} className='font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] '>Net Metering</span></li>}
                    <li   className='flex items-center p-[22px] cursor-pointer h-[32px]' style={{borderRight:url === "/name-change-form" ? " 4px solid #0d6efd" : "white"}} onClick={()=>handleRoute("/name-change-form")}><span className='mr-1'><FaPenSquare style={{color:url === "/name-change-form" ? "#0d6efd" : "#A3AED0"}}/></span><span style={{color:url === "/name-change-form" ? "#2B3674" : "",fontWeight:url === "/name-change-form" ? "700" : "500",fontStyle:"normal",lineHeight:"26px"}} className='font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] '>Name Change Request</span></li>
                    <li  className='flex items-center p-[22px]  cursor-pointer h-[32px]' style={{borderRight:url === "/ownership-change-form" ? " 4px solid #0d6efd" : "white"}} onClick={()=>handleRoute("/ownership-change-form")}><span className='mr-1'><Changeowenership/></span><span style={{color:url === "/ownership-change-form" ? "#2B3674" : "",fontWeight:url === "/ownership-change-form" ? "700" : "500",fontStyle:"normal",lineHeight:"26px"}} className='font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] ' >Ownership change Request</span></li>
                    <li   className='flex items-center p-[22px] cursor-pointer h-[32px]' style={{borderRight:url === "/category-change-form" ? " 4px solid #0d6efd" : "white"}} onClick={()=>handleRoute("/category-change-form")}><span className='mr-1'><CategoryChange/></span><span style={{color:url === "/category-change-form" ? "#2B3674" : "",fontWeight:url === "/category-change-form" ? "700" : "500",fontStyle:"normal",lineHeight:"26px"}} className='font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] '>Category change</span></li>
                    <li  className='flex items-center p-[22px]  cursor-pointer h-[32px]' style={{borderRight:url === "/load-change-form" ? " 4px solid #0d6efd" : "white"}} onClick={()=>handleRoute("/load-change-form")}><span className='mr-1'><LoadChange/></span><span style={{color:url === "/load-change-form" ? "#2B3674" : "",fontWeight:url === "/load-change-form" ? "700" : "500",fontStyle:"normal",lineHeight:"26px"}} className='font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] '>Load change</span></li>
                    <li  className='flex items-center p-[22px]  cursor-pointer h-[32px]' style={{borderRight:url === "/paperless-billing" ? " 4px solid #0d6efd" : "white"}} onClick={()=>handleRoute("/paperless-billing")}><span className='mr-1'><LoadChange/></span><span style={{color:url === "/paperless-billing" ? "#2B3674" : "",fontWeight:url === "/paperless-billing" ? "700" : "500",fontStyle:"normal",lineHeight:"26px"}} className='font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] '>Paper Less Billing</span></li>
                    <li  className='flex items-center p-[22px]  cursor-pointer h-[32px]' style={{borderRight:url === "/track-request-form" ? " 4px solid #0d6efd" : "white"}} onClick={()=>handleRoute("/track-request-form")}><span className='mr-1'><RaiseTicket/></span><span style={{color:url === "/track-request-form" ? "#2B3674" : "",fontWeight:url === "/track-request-form" ? "700" : "500",fontStyle:"normal",lineHeight:"26px"}} className='font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] '>Raise/Track request</span></li>
                </ul> : */}
          <ul>
            <li
              className="flex items-center p-[22px]  cursor-pointer h-[32px]"
              style={{
                borderRight: url === '/' ? ' 4px solid #0d6efd' : 'white',
              }}
              onClick={() => handleRoute('/')}
            >
              <span className="mr-1">
                <FaHome
                  style={{ color: url === '/' ? '#0d6efd' : '#A3AED0' }}
                />
              </span>
              <span
                style={{
                  color: url === '/' ? '#2B3674' : '',
                  fontWeight: url === '/' ? '700' : '500',
                  fontStyle: 'normal',
                  lineHeight: '26px',
                }}
                className="font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] "
              >
                Dashboard
              </span>
            </li>
            {userDetails.custype !== 'PREPAID' && (
              <li
                className="flex items-center p-[22px]  cursor-pointer h-[32px]"
                style={{
                  borderRight:
                    url === '/bills' ? ' 4px solid #0d6efd' : 'white',
                }}
                onClick={() => handleRoute('/bills')}
              >
                <span className="mr-1">
                  <FaUser
                    style={{ color: url === '/bills' ? '#0d6efd' : '#A3AED0' }}
                  />
                </span>
                <span
                  style={{
                    color: url === '/bills' ? '#2B3674' : '',
                    fontWeight: url === '/bills' ? '700' : '500',
                    fontStyle: 'normal',
                    lineHeight: '26px',
                  }}
                  className="font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] "
                >
                  Bill history
                </span>
              </li>
            )}

            {
              <li
                className="flex items-center  p-[22px]   cursor-pointer h-[32px]"
                style={{
                  borderRight:
                    url === '/usage-details' ? ' 4px solid #0d6efd' : 'white',
                }}
                onClick={() => handleRoute('/usage-details')}
              >
                <span className="mr-1">
                  <FaUser
                    style={{
                      color: url === '/usage-details' ? '#0d6efd' : '#A3AED0',
                    }}
                  />
                </span>
                <span
                  style={{
                    color: url === '/usage-details' ? '#2B3674' : '',
                    fontWeight: url === '/usage-details' ? '700' : '500',
                    fontStyle: 'normal',
                    lineHeight: '26px',
                  }}
                  className="font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] "
                >
                  Usage Details
                </span>
              </li>
            }
            {
              <li
                className="flex items-center  p-[22px]   cursor-pointer h-[32px]"
                style={{
                  borderRight:
                    url === '/energy-consumption'
                      ? ' 4px solid #0d6efd'
                      : 'white',
                }}
                onClick={() => handleRoute('/energy-consumption')}
              >
                <span className="mr-1">
                  <FaUser
                    style={{
                      color:
                        url === '/energy-consumption' ? '#0d6efd' : '#A3AED0',
                    }}
                  />
                </span>
                <span
                  style={{
                    color: url === '/energy-consumption' ? '#2B3674' : '',
                    fontWeight: url === '/energy-consumption' ? '700' : '500',
                    fontStyle: 'normal',
                    lineHeight: '26px',
                  }}
                  className="font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] "
                >
                  Energy Consumption
                </span>
              </li>
            }
            {
              <li
                className="flex items-center p-[22px]  cursor-pointer h-[32px]"
                style={{
                  borderRight:
                    url === '/net-metering' ? ' 4px solid #0d6efd' : 'white',
                }}
                onClick={() => handleRoute('/net-metering')}
              >
                <span className="mr-1">
                  <FaUser
                    style={{
                      color: url === '/net-metering' ? '#0d6efd' : '#A3AED0',
                    }}
                  />
                </span>
                <span
                  style={{
                    color: url === '/net-metering' ? '#2B3674' : '',
                    fontWeight: url === '/net-metering' ? '700' : '500',
                    fontStyle: 'normal',
                    lineHeight: '26px',
                  }}
                  className="font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] "
                >
                  Net Metering
                </span>
              </li>
            }
            <li
              className="flex items-center p-[22px]  cursor-pointer h-[32px]"
              style={{
                borderRight:
                  url === '/name-change-form' ? ' 4px solid #0d6efd' : 'white',
              }}
              onClick={() => handleRoute('/name-change-form')}
            >
              <span className="mr-1">
                <FaPenSquare
                  style={{
                    color: url === '/name-change-form' ? '#0d6efd' : '#A3AED0',
                  }}
                />
              </span>
              <span
                style={{
                  color: url === '/name-change-form' ? '#2B3674' : '',
                  fontWeight: url === '/name-change-form' ? '700' : '500',
                  fontStyle: 'normal',
                  lineHeight: '26px',
                }}
                className="font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] "
              >
                Name Change Request
              </span>
            </li>
            <li
              className="flex items-center p-[22px]  cursor-pointer h-[32px]"
              style={{
                borderRight:
                  url === '/ownership-change-form'
                    ? ' 4px solid #0d6efd'
                    : 'white',
              }}
              onClick={() => handleRoute('/ownership-change-form')}
            >
              <span className="mr-1">
                <Changeowenership />
              </span>
              <span
                style={{
                  color: url === '/ownership-change-form' ? '#2B3674' : '',
                  fontWeight: url === '/ownership-change-form' ? '700' : '500',
                  fontStyle: 'normal',
                  lineHeight: '26px',
                }}
                className="font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] "
              >
                Ownership change Request
              </span>
            </li>
            <li
              className="flex items-center p-[22px]  cursor-pointer h-[32px]"
              style={{
                borderRight:
                  url === '/category-change-form'
                    ? ' 4px solid #0d6efd'
                    : 'white',
              }}
              onClick={() => handleRoute('/category-change-form')}
            >
              <span className="mr-1">
                <CategoryChange />
              </span>
              <span
                style={{
                  color: url === '/category-change-form' ? '#2B3674' : '',
                  fontWeight: url === '/category-change-form' ? '700' : '500',
                  fontStyle: 'normal',
                  lineHeight: '26px',
                }}
                className="font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] "
              >
                Category change
              </span>
            </li>
            <li
              className="flex items-center p-[22px]  cursor-pointer h-[32px]"
              style={{
                borderRight:
                  url === '/load-change-form' ? ' 4px solid #0d6efd' : 'white',
              }}
              onClick={() => handleRoute('/load-change-form')}
            >
              <span className="mr-1">
                <LoadChange />
              </span>
              <span
                style={{
                  color: url === '/load-change-form' ? '#2B3674' : '',
                  fontWeight: url === '/load-change-form' ? '700' : '500',
                  fontStyle: 'normal',
                  lineHeight: '26px',
                }}
                className="font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] "
              >
                Load change
              </span>
            </li>
            <li
              className="flex items-center p-[22px] cursor-pointer h-[32px]"
              style={{
                borderRight:
                  url === '/postpaid-prepaid' ? ' 4px solid #0d6efd' : 'white',
              }}
              onClick={() => handleRoute('/postpaid-prepaid')}
            >
              <span className="mr-1">
                <PostPaidToPrepaid />
              </span>
              <span
                style={{
                  color: url === '/postpaid-prepaid' ? '#2B3674' : '',
                  fontWeight: url === '/postpaid-prepaid' ? '700' : '500',
                  fontStyle: 'normal',
                  lineHeight: '26px',
                }}
                className="font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] "
              >
                Postpaid to Prepaid
              </span>
            </li>
            <li
              className="flex items-center p-[22px]  cursor-pointer h-[32px]"
              style={{
                borderRight:
                  url === '/paperless-billing' ? ' 4px solid #0d6efd' : 'white',
              }}
              onClick={() => handleRoute('/paperless-billing')}
            >
              <span className="mr-1">
                <LoadChange />
              </span>
              <span
                style={{
                  color: url === '/paperless-billing' ? '#2B3674' : '',
                  fontWeight: url === '/paperless-billing' ? '700' : '500',
                  fontStyle: 'normal',
                  lineHeight: '26px',
                }}
                className="font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] "
              >
                Paper Less Billing
              </span>
            </li>
            <li
              className="flex items-center p-[22px]  cursor-pointer h-[32px]"
              style={{
                borderRight:
                  url === '/track-request-form'
                    ? ' 4px solid #0d6efd'
                    : 'white',
              }}
              onClick={() => handleRoute('/track-request-form')}
            >
              <span className="mr-1">
                <RaiseTicket />
              </span>
              <span
                style={{
                  color: url === '/track-request-form' ? '#2B3674' : '',
                  fontWeight: url === '/track-request-form' ? '700' : '500',
                  fontStyle: 'normal',
                  lineHeight: '26px',
                }}
                className="font-medium font-[DM Sans] leading-[27px] text-[14px] text-[#A3AED0] "
              >
                Raise Track Ticket
              </span>
            </li>
          </ul>
          {/* } */}
        </div>
      </div>
      <div className="flex flex-col items-center pb-4">
        <div
          className="flex items-center text-sm cursor-pointer font-medium text-[#707EAE]"
          onClick={() => handleRoute('/user-profile')}
        >
          <span>
            <FaUser className="rounded-full  mr-2" />
          </span>
          <span>Profile</span>
        </div>
        <button
          onClick={handleLogOut}
          className="bg-[#0d6efd] mt-2 px-10 py-2 rounded-3xl text-white text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
