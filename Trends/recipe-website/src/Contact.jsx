import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000 },
  });

  const successProps = useSpring({
    opacity: isSubmitted ? 1 : 0,
    transform: isSubmitted ? "translateY(0)" : "translateY(-20px)",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    // Simulate submission process
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="contact-container">
      <h2 className="text-warning text-center">Contact Us</h2>
      <p>
        Our Commitment: Your satisfaction and engagement are our priorities.
        When you reach out to us, you're not just contacting a support team –
        you're connecting with a community of like-minded individuals who share
        a passion for all things culinary. We're here to make your experience
        memorable and your culinary journey unforgettable.
      </p>

      <animated.div style={animationProps} className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="text-secondary">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="text-secondary">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="text-secondary">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-warning text-white" type="submit">
            Send Message
          </button>
        </form>
      </animated.div>

      <animated.div style={successProps} className="success-message">
        Thank you for reaching out! We'll be in touch soon.
      </animated.div>

      <animated.div style={animationProps} className="contact-info text-center">
        <h4 className="text-warning">Contact Information</h4>
        <p>Email: info@culinarydelights.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Culinary Street, Foodville</p>
      </animated.div>
    </div>
  );
}

export default Contact;
