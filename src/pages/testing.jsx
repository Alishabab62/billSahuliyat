import React, { useState } from "react";
import Card from "../components/Card";
import Button from "../components/buttons";
import Label from "../components/labels";
import InputField from "../components/inputfields";
import Text from "../components/text";

// 6Le6vCkpAAAAALtZEvAezl6oxuvQD3I_H65bp_n3 (site key)
// 6Le6vCkpAAAAAGhYmaJFD5gGv5z0bWRefoGONOZy (secret key)
import ReCAPTCHA from "react-google-recaptcha";



const Login = () => {
    const [capVal, setCapVal] = useState(null)

    return (
        <Card>
            <form>
                <div className="mb-2">
                    <Label htmlFor="email">Email/ Phone <Text variant="imp" size="sm" weight="xb">*</Text></Label>
                    <InputField type="email" id="email" placeholder="Enter email or phone" />
                </div>
                <div className="mb-5 mt-5">
                    <Label htmlFor="password">Password <Text variant="imp" size="sm" weight="xb">*</Text></Label>
                    <InputField type="password" id="password" placeholder="Enter Password" />
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div className="mb-2 text-gray-600 mt-2 text-left">
                        <Label>
                            <input type="checkbox" /><span className="pl-1 font-bold text-xs text-gray-600">Keep me logged in</span>
                        </Label>
                    </div>
                    <Text className=" mt-3 item-center justify-center" variant="link" size="xs" weight="b" align="r">
                        Forgot Password?
                    </Text>
                </div>
                <ReCAPTCHA sitekey="6Le6vCkpAAAAALtZEvAezl6oxuvQD3I_H65bp_n3" onChange={(val) => setCapVal(val)} />
                <div className="mb-2 mt-6 flex justify-center item-center">
                    <Button disabled={!capVal}>Login</Button>
                </div>
            </form>
        </Card>

    )
}

export default Login;