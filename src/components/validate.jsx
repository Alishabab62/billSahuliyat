const validateFirstName = (firstName) => {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(firstName) ? null : 'Only alphabets allowed';
};

const validateLastName = (lastName) => {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(lastName) ? null : 'Only alphabets allowed';
};

const validateEmail = (email) => {
    const emailRegex = /^[^@\s]+@[a-z]+\.[a-z]{2,3}$/;
    return emailRegex.test(email) ? null : 'Invalid email';
}

const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;

    // Check if all 10 digits are not the same
    const isNotAllSameDigits = !/(\d)\1{9}/.test(phone);

    return phoneRegex.test(phone) && isNotAllSameDigits ? null : 'Enter a valid 10 digit mobile number';
};


const validatePassword = (password) => {
    // Minimum length check
    if (password.length < 8 || password.length > 40) {
        return 'Password must be between 8 and 40 characters long';
    }

    // Check for at least one alphabet
    if (!/[a-zA-Z]/.test(password)) {
        return 'Password must contain at least one alphabet';
    }

    // Check for at least one digit
    if (!/\d/.test(password)) {
        return 'Password must contain at least one digit';
    }

    // Check for at least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return 'Password must contain at least one special character';
    }
    // If all checks pass, return null (no error)
    return null;
};


const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword ? null : 'Passwords do not match';
};

export {
    validateFirstName,
    validateLastName,
    validateEmail,
    validatePhone,
    validatePassword,
    validateConfirmPassword,
};
