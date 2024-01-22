import React from "react";
import Button from "../components/buttons";
import Card from "../components/card";
import Text from "../components/text";
import { useNavigate } from 'react-router-dom';

const VerMsg = () => {
    const navigate = useNavigate();

    const navigateToVerify = () => {
        navigate('/verify');
    }

    return (
        <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 z-50">
            <Card>
                <div className="text-center">
                    <Text className="leading-7 mb-5" variant="primary" size="sm" align="l" weight="sb">In order to start using the Bill Sahuliyat Plus services, you need to <br /> verify your Email Address and Phone Number. Click Proceed to receive <br /> the OTP. </Text>

                    <Button onClick={navigateToVerify}>Proceed</Button>
                </div>
            </Card>
        </div>
    );
}

export default VerMsg;
