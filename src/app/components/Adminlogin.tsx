// AdminLogin.tsx
import React from 'react';
import styles from '../css/AdminLogin.module.css';
import { Eye } from 'lucide-react';


const AdminLogin = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Admin Login</h1>
      
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="hello@example.cl" />
        </div>
        
        <div className={styles.inputGroup}>
          <div className={styles.passwordHeader}>
            <label htmlFor="password">Password</label>
            <a href="#" className={styles.forgotPassword}>Forgot Password</a>
          </div>
          <div className={styles.passwordInput}>
            <input type="password" id="password" />
            <Eye className={styles.eyeIcon} />
          </div>
          <p className={styles.errorMessage}>Please enter correct password</p>
        </div>
        
        <div className={styles.checkbox}>
          <input type="checkbox" id="keepSignedIn" />
          <label htmlFor="keepSignedIn">Keep me signed in</label>
        </div>
        
        <button type="submit" className={styles.continueButton}>Continue</button>
      </form>
      
      <div className={styles.orSignUp}>
        <span>or sign up with</span>
      </div>
      
      <div className={styles.socialButtons}>
        <button className={styles.socialButton}>
          <img src="/google-icon.png" alt="Google" /> Google
        </button>
        <button className={styles.socialButton}>
          <img src="/apple-icon.png" alt="Apple" /> Apple
        </button>
        <button className={styles.socialButton}>
          <img src="/facebook-icon.png" alt="Facebook" /> Facebook
        </button>
      </div>
      
      <p className={styles.signUpLink}>
        Don't have an Account? <a href="#">Sign up here</a>
      </p>
    </div>
  );
};

export default AdminLogin;