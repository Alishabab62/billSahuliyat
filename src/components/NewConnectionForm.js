import React, { useState } from 'react';
import { FaAsterisk } from 'react-icons/fa';
import SanctionLoadCalculator from './SanctionLoadCalculator';
import NewConnectionDocument from './NewConnectionDocument';
import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import Header from "./Header";

const NewConnectionForm = ({ selectedType, onTypeChange }) => {
  const [categoryType, setCategoryType] = useState(null);
  const [supplyType, setSupplyType] = useState(null);
  const [pastConnection, setPastConnection] = useState('null');
  const [conditions1, setConditions1] = useState('null');
  const [conditions2, setConditions2] = useState('null');
  const [conditions3, setConditions3] = useState('null');
  const [formdata, setFormdata] = useState({
    personOrBusiness: 'P',
  });
  const [user, setUser] = useState('false');
  const [showApplication, setShowApplication] = useState(false);
  const handleSubmit = () => {
    console.log('clicked');

    const url =
      'http://172.18.2.114:7020/soa-infra/resources/RESTKPDCL/CM-NEWSERCON!1.0/RestService/';

    const requestData = formdata;
    axios
      .get(url, {
        requestData,
      })
      .then((response) => {
        // Handle the successful response here
        alert(
          response.data.Response.description +
            ' ' +
            response.data.Response.caseID
        );
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error:', error);
      });
  };
  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);

    setFormdata({
      ...formdata,
      [event.target.name]: event.target.value,
    });
    console.log(formdata);
  };

  // console.log(user)

  return (
    <div className="bg-[#F4F7FE] p-12 w-screen">
      {/* <Header path={"New Connection"} name={"New Connection Form"} /> */}
      {showApplication ? (
        <>
          <div className="m-auto border-2 p-4 rounded-2xl bg-white px-12">
            <div className="border-b-2 pb-2">
              <h3 className="font-bold text-3xl  mb-1 text-[#2B3674]">
                e-Application
              </h3>
              <h4 className="text-sm mb-3 text-[#707EAE] font-normal">
                Enter given required details
              </h4>
            </div>
            <div className="mb-2">
              <h3 className="font-bold text-xl  mb-1 text-[#2B3674]">
                Personal Details:
              </h3>
              {/* tenant or owner */}
              <div className="flex items-center my-2">
                <label className="flex text-center text-[#2B3674]">
                  Applying as:
                  <FaAsterisk className="text-red-500 text-[5px]" />
                </label>
                <input
                  type="radio"
                  value="P"
                  className="mx-1 block"
                  name="personOrBusiness"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                An Owner
                <input
                  type="radio"
                  value="B"
                  className="mx-1 block"
                  name="personOrBusiness"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                A Tenant
              </div>
              {user === 'true' && (
                <div className=" justify-between w-full border p-4 mb-3">
                  <h3 className="my-1 text-[#2B3674] font-bold">
                    Owner Details
                  </h3>
                  <div className="w-full flex">
                    <div className="w-full">
                      <label className="flex text-center text-[#2B3674] text-xs">
                        Name
                        <FaAsterisk className="text-red-500 text-[5px] " />
                      </label>
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        name="name"
                        type="text"
                        className="border p-2 my-2 rounded-xl block w-full"
                      />
                    </div>
                    <div className="ml-3 w-1/2">
                      <label className="flex text-center text-[#2B3674] text-xs">
                        Phone
                        <FaAsterisk className="text-red-500 text-[5px] " />
                      </label>
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        name="phone"
                        type="text"
                        className="border p-2 my-2 rounded-xl block w-full"
                      />
                    </div>
                  </div>
                  <div className="w-full flex">
                    <div className="w-1/2">
                      <label className="flex text-center text-[#2B3674] text-xs">
                        Email
                        <FaAsterisk className="text-red-500 text-[5px] " />
                      </label>
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        name="email"
                        type="text"
                        className="border p-2 my-2 rounded-xl block w-full"
                      />
                    </div>
                    <div className="ml-3 w-1/2">
                      <label className="flex text-center text-[#2B3674] text-xs">
                        Address
                        <FaAsterisk className="text-red-500 text-[5px] " />
                      </label>
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        name="address"
                        type="text"
                        className="border p-2 my-2 rounded-xl block w-full"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between w-full">
                <div className="w-1/2">
                  <label className="flex text-center text-[#2B3674] text-xs">
                    Name
                    <FaAsterisk className="text-red-500 text-[5px] " />
                  </label>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="name"
                    type="text"
                    className="border p-2 my-2 rounded-xl block w-full"
                  />
                </div>
                <div className="ml-3 w-1/2">
                  <label className="flex text-center text-[#2B3674] text-xs">
                    Parentage
                    <FaAsterisk className="text-red-500 text-[5px] " />
                  </label>
                  <input
                    type="text"
                    className="border p-2 my-2 rounded-xl block w-full"
                  />
                </div>
              </div>
              <div className="flex justify-between w-full">
                <div className="w-1/2">
                  <label className="flex text-center text-[#2B3674] text-xs">
                    Phone
                    <FaAsterisk className="text-red-500 text-[5px] " />
                  </label>

                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="phone"
                    type="text"
                    className="border p-2 my-2 rounded-xl block w-full"
                  />
                </div>
                <div className="w-1/2 ml-3">
                  <label className="flex text-center text-[#2B3674] text-xs">
                    Email
                    <FaAsterisk className="text-red-500 text-[5px] " />
                  </label>

                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="email"
                    type="text"
                    className="border p-2 my-2 rounded-xl block w-full"
                  />
                </div>
              </div>
              <h3 className="my-1 text-[#2B3674] font-bold">
                Address for new connection:
              </h3>
              <div className="flex justify-between w-full">
                <div className="w-1/2">
                  <label className="flex text-center text-[#2B3674] text-xs">
                    Address
                    <FaAsterisk className="text-red-500 text-[5px] " />
                  </label>

                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="addressLine1"
                    type="text"
                    className="border p-2 my-2 rounded-xl block w-full"
                  />
                </div>
                <div className="ml-3 w-1/2">
                  <label className="flex text-center text-[#2B3674] text-xs">
                    District
                    <FaAsterisk className="text-red-500 text-[5px] " />
                  </label>

                  <select
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="addressLine2"
                    className="border p-2 rounded-xl my-2 w-full text-[#2B3674]"
                  >
                    <option value="default" selected>
                      Select Your District
                    </option>
                    <option value="Anantnag">Anantnag</option>
                    <option value="Bandipora">Bandipora</option>
                    <option value="Budgam">Budgam</option>
                    <option value="Budgam">Ganderbal</option>
                    <option value="Budgam">Kulgam</option>
                    <option value="Budgam">Kupwara</option>
                    <option value="Budgam">Pulwama</option>
                    <option value="Budgam">Shopian</option>
                    <option value="Srinagar">Srinagar</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-1/2">
                  <label className="flex text-center text-[#2B3674] text-xs">
                    Pin
                    <FaAsterisk className="text-red-500 text-[5px] " />
                  </label>

                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="postalCode"
                    type="text"
                    className="border p-2 my-2 rounded-xl block w-full"
                  />
                </div>
                <div className="ml-3 w-1/2">
                  <label className="flex text-center text-[#2B3674] text-xs">
                    Sub-Division
                    <FaAsterisk className="text-red-500 text-[5px] " />
                  </label>

                  <select
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="addressLine3"
                    className="border p-2 my-2 rounded-xl block w-full text-[#2B3674]"
                  >
                    <option value="Select Your subdivision">
                      Select Your subdivision
                    </option>
                    <option value="ACCHBAL">ACCHBAL</option>
                    <option value="AISHMUQAM">AISHMUQAM</option>
                    <option value="ANANTNAG">ANANTNAG</option>
                    <option value="AWANTIPORA">AWANTIPORA</option>
                    <option value="BAGAAT">BAGAAT</option>
                    <option value="BANDIPORA">BANDIPORA</option>
                    <option value="BARAMULLA-1">BARAMULLA-1</option>
                    <option value="BARAMULLA-2">BARAMULLA-2</option>
                    <option value="BEERWA">BEERWA</option>
                    <option value="BIJBEHARA">BIJBEHARA</option>
                    <option value="BUDGAM">BUDGAM</option>
                    <option value="CHADURA">CHADURA</option>
                    <option value="CHANPORA">CHANPORA</option>
                    <option value="CHARAR">CHARAR-I-SHARIEF</option>
                    <option value="CHITRGAM">CHITRGAM</option>
                    <option value="D.H.PORA">D.H.PORA</option>
                    <option value="DALGATE">DALGATE</option>
                    <option value="DOORU">DOORU</option>
                    <option value="GANDERBAL">GANDERBAL</option>
                    <option value="GUREZ">GUREZ</option>
                    <option value="HABBA">HABBA KADAL</option>
                    <option value="HAJIN">HAJIN</option>
                    <option value="HANDWARA">HANDWARA</option>
                    <option value="HAWAL">HAWAL</option>
                    <option value="HAZURIBAGH">HAZURIBAGH</option>
                    <option value="KALOOSA">KALOOSA</option>
                    <option value="KANGAN">KANGAN</option>
                    <option value="KARANNAGAR">KARANNAGAR</option>
                    <option value="KELLAR">KELLAR</option>
                    <option value="KHANKAHI">KHANKAHI MOHALLA</option>
                    <option value="KHANMOH">KHANMOH</option>
                    <option value="KHANYAR">KHANYAR</option>
                    <option value="KULGAM">KULGAM</option>
                    <option value="KUPWARA">KUPWARA</option>
                    <option value="LANGATE">LANGATE</option>
                    <option value="MAHRAJGUNJ">MAHRAJGUNJ</option>
                    <option value="MANIGAM">MANIGAM</option>
                    <option value="MOHRA">MOHRA</option>
                    <option value="NARBAL">NARBAL</option>
                    <option value="NAWAKADAL">NAWAKADAL</option>
                    <option value="NEWA">NEWA</option>
                    <option value="NISHAT">NISHAT</option>
                    <option value="PAMPORE">PAMPORE</option>
                    <option value="PATHAR">PATHAR MASJID</option>
                    <option value="PATTAN">PATTAN</option>
                    <option value="PULWAMA">PULWAMA</option>
                    <option value="QAZIGUND">QAZIGUND</option>
                    <option value="RAINAWARI">RAINAWARI</option>
                    <option value="RAJBAGH">RAJBAGH</option>
                    <option value="RAJPORA">RAJPORA</option>
                    <option value="RESHIPORA">RESHIPORA</option>
                    <option value="SHOPIAN">SHOPIAN</option>
                    <option value="SOPORE">SOPORE-I</option>
                    <option value="SOPORE">SOPORE-II</option>
                    <option value="SOPORE">SOPORE-III</option>
                    <option value="SPECIAL">SPECIAL SD TANGMARG</option>
                    <option value="STREETLIGHTS">STREETLIGHTS </option>
                    <option value="SUMBAL">SUMBAL</option>
                    <option value="TANGHDAR">TANGHDAR</option>
                    <option value="TRAL">TRAL</option>
                    <option value="TREHGAM">TREHGAM</option>
                    <option value="TULMULLA">TULMULLA</option>
                    <option value="WAGOORA">WAGOORA</option>
                    <option value="WATALKADAL">WATALKADAL</option>
                    <option value="WATERGAM">WATERGAM</option>
                    <option value="ZAINAKOTE">ZAINAKOTE</option>
                    <option value="ZAKURA">ZAKURA</option>
                    <option value="SHEIKH">SHEIKH BAGH</option>
                  </select>
                </div>
              </div>
              <h3 className="my-1 text-[#2B3674] font-bold">
                Address of communication:
              </h3>
              <div className="flex justify-between">
                <div className="w-1/2">
                  <label className="flex text-center text-[#2B3674] text-xs">
                    Address
                    <FaAsterisk className="text-red-500 text-[5px] " />
                  </label>

                  <input
                    type="text"
                    className="border p-2 my-2 rounded-xl block w-full"
                  />
                </div>
                <div className="w-1/2 ml-3">
                  <label className="flex text-center text-[#2B3674] text-xs">
                    District
                    <FaAsterisk className="text-red-500 text-[5px] " />
                  </label>
                  <select className="border p-2 my-2 rounded-xl block w-full text-[#2B3674]">
                    <option value="Anantnag" selected>
                      Select Your District
                    </option>
                    <option value="Anantnag">Anantnag</option>
                    <option value="Bandipora">Bandipora</option>
                    <option value="Budgam">Budgam</option>
                    <option value="Budgam">Ganderbal</option>
                    <option value="Budgam">Kulgam</option>
                    <option value="Budgam">Kupwara</option>
                    <option value="Budgam">Pulwama</option>
                    <option value="Budgam">Shopian</option>
                    <option value="Srinagar">Srinagar</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between w-full">
                <div className="w-1/2">
                  <label className="flex text-center text-[#2B3674] text-xs">
                    Pin <FaAsterisk className="text-red-500 text-[5px] " />
                  </label>

                  <input
                    type="text"
                    className="border p-2 my-2 rounded-xl block w-full"
                  />
                </div>
                <div className="w-1/2 ml-3">
                  <label className="flex text-center text-[#2B3674] text-xs">
                    Landmark
                    <FaAsterisk className="text-red-500 text-[5px] " />
                  </label>
                  <input
                    type="text"
                    className="border p-2 my-2 rounded-xl block w-full"
                  />
                </div>
              </div>
              <h3 className="my-1 text-[#2B3674] font-bold">
                Select Category:
              </h3>
              <div className="flex justify-between w-full">
                <div className="w-1/2">
                  <label className="flex text-center text-[#2B3674] text-xs">
                    Select Category{' '}
                    <FaAsterisk className="text-red-500 text-[5px] " />
                  </label>
                  <select
                    onChange={(e) => setCategoryType(e.target.value)}
                    className="border p-2 my-2 rounded-xl block w-full text-[#2B3674]"
                  >
                    <option value={null}>Select Category</option>
                    <option value={'high-tension'}>High Tension</option>
                    <option value={'low-tension'}>Low Tension</option>
                  </select>
                </div>
              </div>

              {categoryType !== null && (
                <h3 className="my-1 text-[#2B3674] font-bold">
                  Supply Details:
                </h3>
              )}
              {categoryType === 'high-tension' && (
                <div className="flex justify-between w-full">
                  <div className="w-2/5">
                    <label className="flex text-center text-[#2B3674] text-xs">
                      Load <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <input
                      type="text"
                      className="border p-2 my-2 rounded-xl block w-full"
                    />
                  </div>
                  <div className="w-1/5 ml-3">
                    <label className="flex text-center text-[#2B3674] text-xs">
                      Unit <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <input
                      type="text"
                      value={'KV'}
                      className="border p-2 my-2 rounded-xl block w-full"
                    />
                  </div>
                  <div className="w-2/5 ml-3">
                    <label className="flex text-center text-[#2B3674] text-xs">
                      Supply Voltage
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <select className="border p-2 my-2 rounded-xl block w-full text-[#2B3674]">
                      <option>Select Supply Voltage</option>
                      <option value={'11kv'}>11 KV</option>
                      <option value={'33kv'}>33 KV</option>
                      <option value={'66kv'}>66 KV</option>
                    </select>
                  </div>
                </div>
              )}

              {categoryType === 'low-tension' && (
                <div className="flex justify-between w-full">
                  <div className="w-2/5">
                    <label className="flex text-center text-[#2B3674] text-xs">
                      Load <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <input
                      type="text"
                      className="border p-2 my-2 rounded-xl block w-full"
                    />
                  </div>
                  <div className="w-1/5 ml-3">
                    <label className="flex text-center text-[#2B3674] text-xs">
                      Unit <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <input
                      type="text"
                      value={'KW'}
                      className="border p-2 my-2 rounded-xl block w-full"
                    />
                  </div>
                  <div className="w-2/5 ml-3">
                    <label className="flex text-center text-[#2B3674] text-xs">
                      Supply Voltage
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <select className="border p-2 my-2 rounded-xl block w-full text-[#2B3674]">
                      <option>Select Supply Voltage</option>
                      <option value={'1 phase'}>1 Phase LT</option>
                      <option value={'3 phase'}>3 Phase LT</option>
                    </select>
                  </div>
                </div>
              )}

              {categoryType !== null && (
                <div className="flex justify-between w-full">
                  {categoryType === 'high-tension' && (
                    <div className="w-1/2 ">
                      <label className="flex text-center text-[#2B3674] text-xs w-1/2">
                        Dedicated feeder required?{' '}
                        <FaAsterisk className="text-red-500 text-[5px] " />
                      </label>
                      <div className="flex justify-between w-1/3">
                        <div>
                          <input
                            type="radio"
                            className="border p-2 my-2 "
                            value={'yes'}
                            name="feeder-required"
                          />
                          Yes
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="feeder-required"
                            value={'no'}
                            className="border p-2 my-2 "
                          />
                          No
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="w-1/2">
                    <label className="flex text-center text-[#2B3674] text-xs">
                      Select Supply Type{' '}
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <div className="flex justify-between w-3/5">
                      <div>
                        <input
                          type="radio"
                          value={'permanent'}
                          name="supplyType"
                          className="border p-2 "
                          onChange={(e) => setSupplyType(e.target.value)}
                        />
                        Permanent
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="supplyType"
                          value={'temporary'}
                          onChange={(e) => setSupplyType(e.target.value)}
                          className="border p-2 "
                        />
                        Temporary
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {supplyType === 'temporary' && (
                <div className="flex justify-between w-full">
                  <div className="w-1/2">
                    <label className="flex text-center text-[#2B3674] text-xs">
                      Start Date{' '}
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>

                    <input
                      type="date"
                      className="border p-2 my-2 rounded-xl block w-full"
                    />
                  </div>
                  <div className="w-1/2 ml-3">
                    <label className="flex text-center text-[#2B3674] text-xs">
                      End Date
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <input
                      type="date"
                      className="border p-2 my-2 rounded-xl block w-full"
                    />
                  </div>
                </div>
              )}

              {categoryType !== null && (
                <h3 className="my-1 text-[#2B3674] font-bold">
                  Installation Details:
                </h3>
              )}

              {categoryType === 'low-tension' && (
                <div className="flex justify-between w-full">
                  <div className="w-1/2">
                    <label className="flex text-center text-[#2B3674] text-xs">
                      Category
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <select className="border p-2 my-2 rounded-xl block w-full text-[#2B3674]">
                      <option>Select Category</option>
                      <option>Domestic Supply</option>
                      <option>Non Domestic Commercial</option>
                      <option>State / Central Govt Dept</option>
                      <option>Agriculture</option>
                      <option>LTPHE</option>
                    </select>
                  </div>
                  <div className="ml-3 w-1/2">
                    <label className="flex text-center text-[#2B3674] text-xs">
                      Plot Size
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <input
                      type="text"
                      className="border p-2 my-2 rounded-xl block w-full"
                      value={'Sq.Ft.'}
                    />
                  </div>
                </div>
              )}

              {categoryType === 'low-tension' && (
                <div className="flex justify-between w-full">
                  <div className="w-1/2">
                    <label className="flex text-center text-[#2B3674] text-xs">
                      Coverage Area
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <input
                      type="text"
                      className="border p-2 my-2 rounded-xl block w-full"
                      value={'Sq.Ft.'}
                    />
                  </div>
                  <div className="ml-3 w-1/2">
                    <label className="flex text-center text-[#2B3674] text-xs">
                      Purpose of Supply
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <input
                      type="text"
                      className="border p-2 my-2 rounded-xl block w-full"
                    />
                  </div>
                </div>
              )}

              {categoryType === 'low-tension' && (
                <div className="flex justify-between w-full">
                  <div className="w-full">
                    <label className="flex text-left text-[#2B3674] text-xs">
                      Please indicate whether you want to carry out the works of
                      laying service line and/or dedicated distribution facility
                      for the electricity supply requisitioned{' '}
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <div className="flex justify-between w-1/5">
                      <div>
                        <input
                          type="radio"
                          value={'permanent'}
                          name="supplyType"
                          className="border p-2 "
                        />
                        Yes
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="supplyType"
                          value={'temporary'}
                          className="border p-2 "
                        />
                        No
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {categoryType === 'high-tension' && (
                <div className="flex justify-between w-full">
                  <div className="w-1/2 ">
                    <label className="flex text-center text-[#2B3674] text-xs w-1/2">
                      Category{' '}
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <div className="flex justify-between w-2/3">
                      <div>
                        <input
                          type="radio"
                          className="border p-2 my-2 "
                          value={'HT PHE'}
                          name="feeder-required"
                        />
                        HT PHE
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="feeder-required"
                          value={'General Purpose'}
                          className="border p-2 my-2 "
                        />
                        General Purpose
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <label className="flex text-center text-[#2B3674] text-xs">
                      Category of industry{' '}
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <div className="flex justify-between w-5/5">
                      <div>
                        <input
                          type="radio"
                          value={'Small Scale'}
                          name="supplyType"
                          className="border p-2 "
                          onChange={(e) => setSupplyType(e.target.value)}
                        />
                        Small Scale
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="supplyType"
                          value={'Medium Scale'}
                          onChange={(e) => setSupplyType(e.target.value)}
                          className="border p-2 "
                        />
                        Medium Scale
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="supplyType"
                          value={'large Scale'}
                          onChange={(e) => setSupplyType(e.target.value)}
                          className="border p-2 "
                        />
                        large Scale
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {categoryType === 'high-tension' && (
                <div className="flex justify-between w-full items-center">
                  <div className="w-1/2 ">
                    <label className="flex text-center text-[#2B3674] text-xs w-1/2">
                      Installation Purpose{' '}
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <div className="flex justify-between w-full">
                      <input
                        type="text"
                        className="border p-2 my-2 rounded-xl block w-full"
                        value={''}
                        name="feeder-required"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 ml-3">
                    <label className="flex text-center text-[#2B3674] text-xs">
                      Types of Unit{' '}
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <div className="flex justify-between w-3/5">
                      <div>
                        <input
                          type="radio"
                          value={'Small Scale'}
                          name="supplyType"
                          className="border p-2 "
                          onChange={(e) => setSupplyType(e.target.value)}
                        />
                        Partnership
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="supplyType"
                          value={'Medium Scale'}
                          onChange={(e) => setSupplyType(e.target.value)}
                          className="border p-2 "
                        />
                        Private Ltd
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {categoryType === 'high-tension' && (
                <div className="flex justify-between w-full">
                  <div className="w-1/2">
                    <label className="flex text-center text-[#2B3674] text-xs">
                      Name of Institution developing Industrial Premises
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <input
                      type="text"
                      className="border p-2 my-2 rounded-xl block w-full"
                    />
                  </div>
                  <div className="ml-3 w-1/2">
                    <label className="flex text-center text-[#2B3674] text-xs">
                      Production Capacity
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <input
                      type="text"
                      className="border p-2 my-2 rounded-xl block w-full"
                    />
                  </div>
                </div>
              )}
              {categoryType === 'high-tension' && (
                <div className="flex justify-between w-full">
                  <div className="w-1/2">
                    <label className="flex text-center text-[#2B3674] text-xs">
                      Land Acquisition Status
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <input
                      type="text"
                      className="border p-2 my-2 rounded-xl block w-full"
                    />
                  </div>
                  <div className="ml-3 w-1/2">
                    <label className="flex text-center text-[#2B3674] text-xs">
                      Finance Availability Date
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <input
                      type="date"
                      className="border p-2 my-2 rounded-xl block w-full"
                    />
                  </div>
                </div>
              )}
              {categoryType === 'high-tension' && (
                <h3 className="my-1 text-[#2B3674] font-bold">
                  Phasing Details
                </h3>
              )}

              {categoryType === 'high-tension' && (
                <div className="flex justify-between w-full">
                  <div className="w-1/2">
                    <label className="flex text-center text-[#2B3674] text-xs">
                      Basis for projection of CD
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <input
                      type="text"
                      className="border p-2 my-2 rounded-xl block w-full"
                    />
                  </div>
                  <div className="ml-3 w-1/2">
                    <label className="flex text-center text-[#2B3674] text-xs">
                      Phasing of Contract Demand required
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <input
                      type="text"
                      className="border p-2 my-2 rounded-xl block w-full"
                    />
                  </div>
                </div>
              )}

              {categoryType !== null && (
                <h3 className="my-1 text-[#2B3674] font-bold">
                  Existing Connection Details:
                </h3>
              )}

              {categoryType === 'low-tension' && (
                <div className="w-12/12 ">
                  <label className="flex text-center text-[#2B3674] text-xs w-2/2">
                    Particulars of any running connection/previous connection on
                    the name of the applicant{' '}
                    <FaAsterisk className="text-red-500 text-[5px] " />
                  </label>
                  <div className="flex justify-between w-full">
                    <input
                      type="text"
                      className="border p-2 my-2 rounded-xl block w-full"
                      value={''}
                      name="feeder-required"
                    />
                  </div>
                </div>
              )}

              {categoryType === 'high-tension' && (
                <div className="flex justify-between w-full">
                  <div className="w-full ">
                    <label className="flex text-center text-[#2B3674] text-xs w-1/2">
                      Has the unit operated at any other place in the past?{' '}
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <div className="flex justify-between w-1/2">
                      <select className="border p-2 my-2 rounded-xl block w-full text-[#2B3674]">
                        <option>No</option>
                        <option>Yes</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {categoryType === 'high-tension' && (
                <div className="flex justify-between w-full">
                  <div className="w-full ">
                    <label className="flex text-center text-[#2B3674] text-xs w-1/2">
                      Was connection requested in past for the premises?{' '}
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <div className="flex justify-between w-1/2">
                      <select
                        value={pastConnection}
                        onChange={(e) => {
                          setPastConnection(e.target.value);
                          console.log(pastConnection);
                        }}
                        className="border p-2 my-2 rounded-xl block w-full text-[#2B3674]"
                      >
                        <option value={'null'}>No</option>
                        <option value={'true'}>Yes</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {pastConnection !== 'null' && categoryType === 'high-tension' && (
                <div className="flex justify-between w-full items-center">
                  <div className="w-4/12 ">
                    <label className="flex text-center text-[#2B3674] text-xs w-1/2">
                      Sanction Load{' '}
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <div className="flex justify-between w-full">
                      <input
                        type="text"
                        className="border p-2 my-2 rounded-xl block w-full"
                        value={''}
                        name="feeder-required"
                      />
                    </div>
                  </div>

                  <div className="w-1/12 ml-3">
                    <label className="flex text-center text-[#2B3674] text-xs w-full">
                      Unit <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <div className="flex justify-between w-full">
                      <input
                        type="text"
                        className="border p-2 my-2 rounded-xl block w-full"
                        value={'KV'}
                        name="feeder-required"
                      />
                    </div>
                  </div>

                  <div className="w-4/12 mx-3">
                    <label className="flex text-center text-[#2B3674] text-xs w-2/2">
                      Connection Number{' '}
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <div className="flex justify-between w-full">
                      <input
                        type="text"
                        className="border p-2 my-2 rounded-xl block w-full"
                        value={''}
                        name="feeder-required"
                      />
                    </div>
                  </div>

                  <div className="w-4/12 ">
                    <label className="flex text-center text-[#2B3674] text-xs w-1/2">
                      Arrears{' '}
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <div className="flex justify-between w-full">
                      <input
                        type="text"
                        className="border p-2 my-2 rounded-xl block w-full"
                        value={''}
                        name="feeder-required"
                      />
                    </div>
                  </div>
                </div>
              )}

              {categoryType !== null && (
                <div className="flex justify-between w-full">
                  <div className="w-full ">
                    <label className="flex text-center text-[#2B3674] text-xs w-2/2">
                      Any electricity dues outstanding in Licensee's area of
                      operation in consumer 's name ?
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <div className="flex justify-between w-1/2">
                      <select
                        value={conditions1}
                        onChange={(e) => {
                          setConditions1(e.target.value);
                          console.log(pastConnection);
                        }}
                        className="border p-2 my-2 rounded-xl block w-full text-[#2B3674]"
                      >
                        <option value={'null'}>No</option>
                        <option value={'true'}>Yes</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {conditions1 !== 'null' && categoryType !== null && (
                <div className="flex flex-col rounded-2xl justify-between w-full border p-2">
                  <label className="my-1 text-[#2B3674] font-bold">
                    Details:
                  </label>
                  <input
                    type="text"
                    className="border p-2 my-2 rounded-xl block w-full"
                  />
                </div>
              )}

              {categoryType !== null && (
                <div className="flex justify-between w-full">
                  <div className="w-full ">
                    <label className="flex  text-[#2B3674] text-xs w-2/2">
                      Any electricity dues outstanding for the premises for
                      which connection applied for?
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <div className="flex justify-between w-1/2">
                      <select
                        value={conditions2}
                        onChange={(e) => {
                          setConditions2(e.target.value);
                          console.log(pastConnection);
                        }}
                        className="border p-2 my-2 rounded-xl block w-full text-[#2B3674]"
                      >
                        <option value={'null'}>No</option>
                        <option value={'true'}>Yes</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {conditions2 !== 'null' && categoryType !== null && (
                <div className="flex flex-col rounded-2xl justify-between w-full border p-2">
                  <label className="my-1 text-[#2B3674] font-bold">
                    Details:
                  </label>
                  <input
                    type="text"
                    className="border p-2 my-2 rounded-xl block w-full"
                  />
                </div>
              )}

              {categoryType !== null && (
                <div className="flex justify-between w-full">
                  <div className="w-full ">
                    <label className="flex  text-[#2B3674] text-xs w-2/2">
                      Any electricity dues outstanding with the Licensee against
                      any firm with which the consumer is associated as an
                      Owner, Partner, Director or Managing Director?{' '}
                      <FaAsterisk className="text-red-500 text-[5px] " />
                    </label>
                    <div className="flex justify-between w-1/2">
                      <select
                        value={conditions3}
                        onChange={(e) => {
                          setConditions3(e.target.value);
                          console.log(pastConnection);
                        }}
                        className="border p-2 my-2 rounded-xl block w-full text-[#2B3674]"
                      >
                        <option value={'null'}>No</option>
                        <option value={'true'}>Yes</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {conditions3 !== 'null' && categoryType !== null && (
                <div className="flex flex-col rounded-2xl justify-between w-full border p-2">
                  <label className="my-1 text-[#2B3674] font-bold">
                    Details:
                  </label>
                  <input
                    type="text"
                    className="border p-2 my-2 rounded-xl block w-full"
                  />
                </div>
              )}
            </div>
            <button className="bg-[#2B3674] font-bold rounded-lg px-8 py-3 mb-6 text-sm m-auto text-white flex justify-center">
              Submit
            </button>
          </div>
          <NewConnectionDocument
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </>
      ) : (
        <SanctionLoadCalculator setShowApplication={setShowApplication} />
      )}
    </div>
  );
};

export default NewConnectionForm;
