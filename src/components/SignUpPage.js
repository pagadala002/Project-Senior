import React from 'react';
import './SignUpPage.css';
import { Link } from 'react-router-dom';

function SignupPage() {
    return (
        <div>
            {/* Header Section */}
            <header className="header">
                <div className="logo">
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        WiseShare <span className="home-icon">🏠</span>
                    </Link>
                </div>
                <div className="search-bar-container">
                    <input type="text" className="search-bar" placeholder="Search" />
                    <button className="search-button">Search</button>
                </div>
                <div className="icons">
                    <span className="icon">?</span>
                    <Link to="/signup" className="icon">👤</Link>
                    <span className="icon">🌐 English ▼</span>
                </div>
            </header>

            {/* Main Layout with Sidebar and Signup Content */}
            <div className="container">
                <div className="sidebar">
                    <ul className="sidebar-nav">
                        <li>Home</li>
                        <li>Music</li>
                        <li>Gaming</li>
                        <li>Education</li>
                        <li>Science & Tech</li>
                        <li>Entertainment</li>
                        <li>Student Hubs</li>
                    </ul>
                </div>
                <div className="signup-content">
                    {/* Background Image */}
                    <img src="/images/interiorsign.jpg" alt="Background" className="signup-image" />
                    {/* Signup Form */}
                    <div className="signup-form-container">
                        <h2>Sign up</h2>
                        <p>In order to view the property details and financial breakdowns of investment opportunities, you have to have an account with us.</p>
                        <form>
                            <label>
                                First Name (legal name) <span className="required">*</span>
                            </label>
                            <input type="text" placeholder="First Name" required />
                            
                            <label>
                                Last Name (legal name) <span className="required">*</span>
                            </label>
                            <input type="text" placeholder="Last Name" required />
                            
                            <label>
                                Mobile Phone
                            </label>
                            <input type="text" placeholder="+1 201-555-0123" />
                            
                            <label>
                                Email <span className="required">*</span>
                            </label>
                            <input type="email" placeholder="Email" required />
                            
                            <label>
                                Password <span className="required">*</span>
                            </label>
                            <input type="password" placeholder="Password" required />
                            
                            <button type="submit" className="signup-button">Sign up</button>
                        </form>
                        <p>Already have an account? <a href="/login">Log in now.</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
