import React from 'react';
import styles from '../css/SignUpForm.module.css';

const SignUpForm = () => {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Form Sign up</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="you@company.com" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone number</label>
          <div className={styles.phoneInput}>
            <select className={styles.countryCode}>
              <option>US</option>
            </select>
            <input type="tel" id="phone" placeholder="+84 (123) 456-789" className={styles.input} />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">Address</label>
          <textarea id="address" className={styles.textarea}></textarea>
        </div>
        <div className={styles.formGroup}>
          <label>Skills</label>
          <div className={styles.skillsGrid}>
            {['HTML', 'JavaScript', 'UX design', 'ReactJS', 'CSS', 'Java'].map((skill) => (
              <label key={skill} className={styles.checkboxLabel}>
                <input type="checkbox" className={styles.checkbox} />
                {skill}
              </label>
            ))}
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;