import React, { useState } from "react";
import Card from "./card";
import InputField from "./inputfields";
import Button from "./buttons";
import Text from "./text";
import Label from "./Label";
import { useNavigate } from "react-router-dom";
import { useUser } from "../utils/SidebarContext";


const ChangePhone = () => {
    const navigate = useNavigate();
    const { setUserData, userData } = useUser();  // Access setUserData and userData from useUser

    const [newPhone, setNewPhone] = useState("");

    const handlePhoneChange = (e) => {
        setNewPhone(e.target.value);
    };

    const navigateToVerify = () => {
        setUserData({
            ...userData,
            phone: newPhone,
        });
        navigate('/verify');
    };

    return (
        <Card>
            <form>
                <div className="mb-2">
                    <Label htmlFor="phone">
                        Enter correct phone number <Text variant="imp" size="sm" weight="xb">*</Text>
                    </Label>
                    <div className="flex flex-row gap-2">
                        <div className="w-1/6">
                            <InputField
                                value="+91"
                                readOnly
                            />
                        </div>
                        <div className="w-5/6">
                            <InputField
                                className="pl-4 w-5/6"
                                type="tel"
                                id="phone"
                                placeholder="9876543210"
                                value={newPhone}
                                onChange={handlePhoneChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-2 mt-6 flex justify-center item-center">
                    <Button onClick={navigateToVerify}>Submit</Button>
                </div>
            </form>
        </Card>
    );
}

export default ChangePhone;
