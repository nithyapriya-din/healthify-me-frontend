import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'; // Import custom CSS file for styling

const SignIn = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const password = e.target.password.value;

        // Check if name and password are filled
        if (name && password) {
            // Navigate to the next page
            navigate('/what');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='signin-container'>
            <div className='signin-form-container'>
                <h2 className="signin-heading">Sign In</h2>
                <form onSubmit={handleSubmit} className="signin-form">
                    <input type="text" name="name" placeholder="Enter Your Name" className="signin-input" />
                    <div className="password-container">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            name="password" 
                            placeholder="Enter Your Password" 
                            className="signin-input" 
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
                    <button type="submit" className='signin-button'>Log In</button>
                </form>
                <p>Need an Account? <a href='/SignUp' className='signin-link'>Sign Up</a></p>
            </div>
        </div>
    );
};

export default SignIn;
