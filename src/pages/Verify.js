import React, { useState } from 'react';
import { useUser } from '../utils/SidebarContext';
import Card from '../components/card';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import Button from '../components/buttons';
import Text from '../components/text';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
    const navigate = useNavigate();
    const { userData } = useUser();

    const navigateToAck = () => {
        navigate('/acknowledgement');
    };

    const navigateChangePhone = () => {
        navigate('/verify/changephone');
    };

    const navigateChangeMail = () => {
        navigate('/verify/changemail');
    };

    const [showEmailCheckmark, setShowEmailCheckmark] = useState(false);
    const [showPhoneCheckmark, setShowPhoneCheckmark] = useState(false);

    const handleEmailSubmit = () => {
        // Backend Logic pending
        setShowEmailCheckmark(true);
    };

    const handlePhoneSubmit = () => {
        // Backend logic pending
        setShowPhoneCheckmark(true);
    };

    return (
        <Card>
            <div className="">
                {/* Email Verification */}
                <Text className="items-center justify-center  pb-5" variant="link" size="base" weight="b" align="l" >
                    Email Verification
                </Text>
                <Text className="justify-center mb-5" variant="textnm" align="l" weight="sb">
                    Enter the verification code that was sent to
                    <Text className="inline" variant="secondary" weight="b" ff="dS">
                        {' '}   {userData.email} {' '}
                    </Text>
                    to verify your Email Address.
                    <Text className="inline pl-4 cursor-pointer" variant="lbllight" size="sm" decor="u" onClick={navigateChangeMail}>
                        Change Email?
                    </Text>
                </Text>

                <div class="grid grid-cols-2 gap-4">
                    <div className="flex items-center border-b border-blue-500 py-2 mb-5">
                        <input
                            className="appearance-none flex-grow bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text"
                            placeholder="Enter OTP"
                        />
                        {showEmailCheckmark && <IoIosCheckmarkCircle size="25px" color="#0D67CA" />}
                    </div>
                    <div className="mb-5 flex justify-center items-center">
                        <Button onClick={handleEmailSubmit}>Submit</Button>
                    </div>
                </div>

                <Text className="mb-8" variant="secondary" size="base" weight="b" align="l" >
                    Did not receive the email?
                    <Text className="ml-6 inline cursor-pointer" decor="u" weight="b" size="sm" variant="link" >
                        Resend OTP
                    </Text>
                </Text>

                {/* Phone Verification */}
                <Text className="items-center justify-center  pb-5" variant="link" size="base" weight="b" align="l" >
                    Phone Verification
                </Text>
                <Text className="justify-center mb-5" variant="textnm" align="l" weight="sb">
                    Enter the verification code that was sent to
                    <Text className="inline" variant="secondary" weight="b" ff="dS">
                        {' '}   {userData.phone} {' '}
                    </Text>
                    to verify your number.
                    <Text className="inline pl-4" variant="lbllight" size="sm" decor="u" onClick={navigateChangePhone}>
                        Change Phone Number?
                    </Text>
                </Text>

                <div class="grid grid-cols-2 gap-4">
                    <div className="flex items-center border-b border-blue-500 py-2 mb-5">
                        <input
                            className="appearance-none flex-grow bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text"
                            placeholder="Enter OTP"
                        />
                        {showPhoneCheckmark && <IoIosCheckmarkCircle size="25px" color="#0D67CA" />}
                    </div>
                    <div className="mb-5 flex justify-center items-center">
                        <Button onClick={handlePhoneSubmit}>Submit</Button>
                    </div>
                </div>

                <Text className="mb-8" variant="secondary" size="base" weight="b" align="l">
                    Didn't receive OTP?
                    <Text className="ml-16 pl-2 inline" decor="u" weight="b" size="sm" variant="link">
                        Resend OTP
                    </Text>
                </Text>

                <Text variant="imp" align="l" weight="xb" size="xs">In order to proceed, please verify both your email and phone number.</Text>
                <div className="mt-8 flex justify-center items-center">
                    <Button className={showEmailCheckmark && showPhoneCheckmark ? "bg-blue-500" : "bg-gray-400"} onClick={navigateToAck} disabled={!showEmailCheckmark || !showPhoneCheckmark}>
                        Proceed
                    </Button>
                </div>

            </div>
        </Card>
    );
};

export default Verify;
