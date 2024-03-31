import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const password = e.target.password.value;

        if (name && password) {
            // Navigate to the login page
            navigate('/signin');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='signup-container'>
            <div className='signup-form-container'>
                <h2 className="signup-heading">Sign Up</h2>
                <form onSubmit={handleSubmit} className="signup-form">
                    <input type="text" name="name" placeholder="Enter Your Name" className="signup-input" />
                    <div className="password-container">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            name="password" 
                            placeholder="Enter Your Password" 
                            className="signup-input" 
                        />
                        {/* Button to toggle password visibility */}
                        <button 
                            type="button" 
                            className="toggle-password-button"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    <button type="submit" className='signup-button'>Sign Up</button>
                </form>
                <p>Already have an Account? <a href='/SignIn' className='signin-link'>Sign In</a></p>
            </div>
        </div>
    );
};

export default SignUp;
