import React, {useContext, useState } from "react";
import Button from "../components/buttons";
import Label from "../components/Label";
import InputField from "../components/inputfields";
import Text from "../components/text";
import Card from "../components/card"
// 6Le6vCkpAAAAALtZEvAezl6oxuvQD3I_H65bp_n3 (site key)
// 6Le6vCkpAAAAAGhYmaJFD5gGv5z0bWRefoGONOZy (secret key)
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import bgLogin from "../assests/login.jpg"
import { SideContext } from "../utils/SidebarContext";
import { useNavigate } from "react-router-dom";




const Login = () => {
    const [capVal, setCapVal] = useState(null)
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {setAddress} = useContext(SideContext);
    const navigate = useNavigate();


    function changeTabUrl(newUrl) {
        window.top.location.href = newUrl;
      }

    const handleLogin = (e) =>{
        e.preventDefault()
        const url = "http://172.18.2.96:8080/api/UserRequests/login";
        const data ={
            email:email,
            password:password
        }
        console.log(data);
        
        axios.post(url,data).then((response)=>{
            
            const {userId,userFullName,userEmail} = response.data;
            console.log(userId,userFullName);
            changeTabUrl(`http://172.18.2.96:3000/landing/${userId}/${userFullName}`)

            // navigate(`/landing/${userId}/${userFullName}`);
            setAddress([userId,userFullName,userEmail]);
        }).catch((err)=>{
            alert("username / password is incorrect");
            console.log(err)
        })
        console.log(email,password)
    }

    return (
        <Card bg = {bgLogin}>
            <form>
                <div className="mb-2">
                    <Label htmlFor="email" >Email/ Phone <Text variant="imp" size="sm" weight="xb">*</Text></Label>
                    <InputField type="email" id="email" placeholder="Enter email or phone" setValue={setEmail} value={email}/>
                </div>
                <div className="mb-5 mt-5">
                    <Label htmlFor="password">Password <Text variant="imp" size="sm" weight="xb">*</Text></Label>
                    <InputField type="password" id="password" placeholder="Enter Password" setValue={setPassword} value={password}/>
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div className="mb-2 text-gray-600 mt-2 text-left">
                        <Label htmlFor="password">
                            <input type="checkbox" /><span className="pl-1 font-bold text-xs text-gray-600">Keep me logged in</span>
                        </Label>
                    </div>
                    <Text className=" mt-3 item-center justify-center" variant="link" size="xs" weight="b" align="r">
                        Forgot Password?
                    </Text>
                </div>
                <ReCAPTCHA sitekey="6Le6vCkpAAAAALtZEvAezl6oxuvQD3I_H65bp_n3" onChange={(val) => setCapVal(val)} />
                <div className="mb-2 mt-6 flex justify-center item-center">
                    <Button  fun={handleLogin}>Login</Button>
                </div>
            </form>
        </Card>

    )
}

export default Login;