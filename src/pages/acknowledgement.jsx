import React from 'react'
import Card from '../components/Card';
import Text from '../components/text';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const Acknowledge = () => {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }
    return (
        <Card>
            <div>
                <div className="flex items-center justify-center" >
                    <IoIosCheckmarkCircle size='130px' color='#0D67CA' />
                </div>
                <Text className="mb-4 pt-4" variant="secondary" size="lg" weight="xb" align="c" ff="p">Congrats!</Text>
                <Text className="" variant="lbllight" size="b" weight="b" align="c" ff="dS">Account Registered <br />Successfully</Text>
                <Text className=" mt-4 mb-4" variant="labels" size="sm" align="c" weight="b" decor="u" ff="p">
                    <a className='cursor' onClick={navigateToLogin}>Go to Login.</a></Text>
            </div>
        </Card>

    )
}
export default Acknowledge;
