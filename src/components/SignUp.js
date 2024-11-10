import React from 'react';
import './SignUpPage.css';

function SignUpPage() {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign up</h2>
        <p>
          In order to view the property details and financial breakdowns of
          investment opportunities, you have to have an account with us.
        </p>

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
            Mobile Phone (optional)
          </label>
          <input type="tel" placeholder="+1 201-555-0123" />

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

        <p className="login-link">
          Already have an account? <a href="/login">Log in now.</a>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
