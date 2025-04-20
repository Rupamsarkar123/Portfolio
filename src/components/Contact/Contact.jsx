import React, { useState } from "react";
import styles from "./Contact.module.css";
//import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

// Direct imports for icons
import emailIcon from "../../assets/contact/ail.png";
import linkedinIcon from "../../assets/contact/l.png";
import githubIcon from "../../assets/contact/hub.png";
import leetIcon from "../../assets/contact/leet.png";
import gfgIcon from "../../assets/contact/g.png";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(" Details submitted successfully!", {
          position: "top-center",
          autoClose: 3000,
        });
        setFormData({ name: "", email: "", phone: "" }); // Clear form
      } else {
        toast.error("❌ Error: " + data.message, {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(" Something went wrong. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Connect Me</h2>
        <p>Feel free to reach out!</p>

        <ul className={styles.links}>
          <li>
            <a
              href="mailto:srupam322@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.iconContainer}>
                <img src={emailIcon} alt="Email" className={styles.icon} />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/rupam-sarkar-27022004fb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Rupamsarkar123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className={`${styles.icon} ${styles.smallIcon}`}
              />
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/u/rupam322/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={leetIcon}
                alt="LeetCode"
                className={`${styles.icon} ${styles.smallIcon}`}
              />
            </a>
          </li>
          <li className={styles.link}>
            <a
              href="https://www.geeksforgeeks.org/user/srupa4bhx/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.gfgContainer}>
                <img
                  src={gfgIcon}
                  alt="GFG icon"
                  className={styles.smallIcon}
                />
              </div>
            </a>
          </li>
        </ul>
        {/* Add phone number and copyright below the icons */}
        <div className={styles.contactDetails}>
          <p className={styles.phoneNumber}>Phone: +91 6296310921</p>{" "}
          {/* Replace with your actual phone number */}
          <p className={styles.copyright}>
            © 2025 Rupam Sarkar. All rights reserved.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className={styles.contactForm}>
        <h3>Contact Me</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className={styles.inputField} // ✅ Apply correct class
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className={styles.inputField} // ✅ Apply correct class
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            className={styles.inputField} // ✅ Apply correct class
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>{" "}
        </form>
      </div>
      <ToastContainer />
    </footer>
  );
};
