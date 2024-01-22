import React, { useState } from "react";
import Card from "./card";
import InputField from "./inputfields";
import Button from "./buttons";
import Text from "./text";
import Label from "./Label";
import { useNavigate } from "react-router-dom";
import { useUser } from "../utils/SidebarContext";

const ChangeMail = () => {
    const navigate = useNavigate();
    const { setUserData, userData } = useUser();  // Access setUserData and userData from useUser

    const [newEmail, setNewEmail] = useState("");

    const handleEmailChange = (e) => {
        setNewEmail(e.target.value);
    };

    const navigateToVerify = () => {
        setUserData({
            ...userData,
            email: newEmail,
        });
        navigate('/verify');
    };

    return (
        <Card>
            <form>
                <Label htmlFor="email">Enter Correct Email id <Text variant="imp" size="sm" weight="xb">*</Text></Label>
                <div className="flex flex-row gap-2">
                    <div className="w-full">
                        <InputField
                            className="text-center w-full"
                            type="email"
                            id="email"
                            placeholder="example123@gmail.com"
                            value={newEmail}
                            onChange={handleEmailChange}
                        />
                    </div>
                </div>
                <div className="mb-2 mt-6 flex justify-center item-center">
                    <Button onClick={navigateToVerify}>Submit</Button>
                </div>
            </form>
        </Card>
    );
}

export default ChangeMail;
