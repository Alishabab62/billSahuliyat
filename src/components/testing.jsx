import React, { useState } from "react";
import Card from "../components/Card";
import Button from "../components/buttons";
import Label from "../components/labels";
import InputField from "../components/inputfields";
import VerMsg from "../pages/verificationMsg";
import Text from "../components/text";
import {
    validateFirstName,
    validateLastName,
    validatePhone,
    validateEmail,
    validatePassword,
    validateConfirmPassword,
} from "../components/validate";


const Reg = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const [formErrors, setFormErrors] = useState({
        first_name: null,
        last_name: null,
        phone: null,
        email: null,
        password: null,
        confirm_password: null,
    });

    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target;

        switch (id) {
            case "first_name":
                setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    [id]: validateFirstName(value),
                }));
                break;
            case "last_name":
                setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    [id]: validateLastName(value),
                }));
                break;
            case "phone":
                setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    [id]: validatePhone(value),
                }));
                break;
            case "email":
                setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    [id]: validateEmail(value),
                }));
                break;
            case "password":
                setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    [id]: validatePassword(value),
                }));
                break;

            case "confirm_password":
                setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    [id]: validateConfirmPassword(formData.password, value),
                }));
                break;
            default:
                break;
        }

        // Update form data
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };


    const isFormValid = () => {
        // Check if all required fields are filled in formData and formErrors are empty
        return (
            Object.values(formData).every((value) => value.trim() !== "") &&
            Object.values(formErrors).every((error) => !error)
        );
    };


    const handleSignUpClick = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            setShowModal(true);
        } else {
            // Check if any field in formData is empty
            if (Object.values(formData).every((value) => value.trim() === "")) {
                alert("Please fill in all the fields before proceeding.");
            } else if (Object.values(formData).some((value) => value.trim() === "")) {
                alert("Some fields are empty. Please fill in all the required fields.");
            } else {
                alert("Please fix the highlighted errors before proceeding.");
            }

        }
    };



    return (
        <Card>
            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <Label htmlFor="first_name">
                            First name <Text variant="imp" size="sm" weight="xb">*</Text>
                        </Label>
                        <InputField
                            id="first_name"
                            onChange={handleInputChange}
                            value={formData.first_name}
                        />
                        {formErrors.first_name && (
                            <span className="text-red-500 font-bold text-sm">{formErrors.first_name}</span>
                        )}

                    </div>
                    <div>
                        <Label htmlFor="last_name">
                            Last name <Text variant="imp" size="sm" weight="xb">*</Text>
                        </Label>
                        <InputField
                            id="last_name"
                            onChange={handleInputChange}
                            value={formData.last_name}
                        />
                        {formErrors.last_name && (
                            <span className="text-red-500 font-bold text-sm">{formErrors.last_name}</span>
                        )}
                    </div>
                </div>
                <div className="mb-6">
                    <Label htmlFor="phone">
                        Phone number <Text variant="imp" size="sm" weight="xb">*</Text>
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
                                onChange={handleInputChange}
                                value={formData.phone}
                            />
                        </div>
                    </div>



                    {formErrors.phone && (
                        <span className="text-red-500 font-bold text-sm">{formErrors.phone}</span>
                    )}
                </div>
                <div className="mb-6">
                    <Label htmlFor="email">
                        Email <Text variant="imp" size="sm" weight="xb">*</Text>
                    </Label>

                    <InputField
                        type="mail"
                        id="email"
                        placeholder="example@gmail.com"
                        onChange={handleInputChange}
                        value={formData.email}
                    />

                    {formErrors.email && (
                        <span className="text-red-500 font-bold text-sm">{formErrors.email}</span>
                    )}
                </div>
                <div className="mb-6">
                    <Label htmlFor="password">
                        Password <Text variant="imp" size="sm" weight="xb">*</Text>
                    </Label>
                    <InputField
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        onChange={handleInputChange}
                        value={formData.password}
                    />
                    {formErrors.password && (
                        <span className="text-red-500 font-bold text-sm">{formErrors.password}</span>
                    )}
                </div>
                <div className="mb-6">
                    <Label htmlFor="confirm_password">
                        Confirm password <Text variant="imp" size="sm" weight="xb">*</Text>
                    </Label>
                    <InputField
                        type="password"
                        id="confirm_password"
                        placeholder="Re-Enter Password"
                        onChange={handleInputChange}
                        value={formData.confirm_password}
                    />
                    {formErrors.confirm_password && (
                        <span className="text-red-500 font-bold text-sm">{formErrors.confirm_password}</span>
                    )}
                </div>
                <div className="mb-6 flex justify-center items-center">
                    <Button
                        onClick={(e) => handleSignUpClick(e)}
                    // disabled={!isFormValid()}
                    >
                        Sign Up
                    </Button>
                    {showModal && <VerMsg />}
                </div>

            </form>
        </Card>
    );
};

export default Reg;
