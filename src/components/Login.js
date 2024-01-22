import React, { useState } from 'react';
import user from "./tempUsers";
import { useContext } from 'react';
import { SideContext } from '../utils/SidebarContext';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setAccountInfo } = useContext(SideContext);
  const [id, setId] = useState(undefined);
  const navigate = useNavigate();
  console.log(user);

  function changeTabUrl(newUrl) {
    window.top.location.href = newUrl;
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const url = "http://172.18.2.96:8080/api/UserRequests/login";
    const data = {
      email: email,
      password: password
    }
    console.log(data);

    axios.post(url, data).then((response) => {

      const { userId, userFullName, userEmail } = response.data;
      console.log(userId, userFullName);
      changeTabUrl('http://172.18.2.96:3000/landing/${userId}/${userFullName}');

      // navigate(/landing/${userId}/${userFullName});
      setAddress([userId, userFullName, userEmail]);
    }).catch((err) => {
      alert("username / password is incorrect");
      console.log(err)
    })
    console.log(email, password)
  }

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} className='border border-black' />
      <button onClick={handleLogin} className='bg-blue-600'>Login</button>
    </div>
  )
}

export default Login;
