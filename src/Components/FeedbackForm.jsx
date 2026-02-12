import React, { useState } from "react";
import "./FeedbackForm.css";
import { z } from "zod"; 

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: "",
  });


  const clearFormData = () => {
    setFormData({ name: "", email: "", feedback: "", rating: "" });
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmission = (event) => {
    event.preventDefault();
    

    const emailSchema = z.email();
    const validEmail = emailSchema.safeParse(formData.email);
    
    if (validEmail.success) {
      const confirmationMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
      Rating: ${formData.rating}
      `;
      const isConfirmed = window.confirm(
        `Please confirm your details: \n\n ${confirmationMessage}`
      );
      if (isConfirmed) {
        console.log(`Submitting feedback`, formData);
        clearFormData();
        alert("Thank you for your valuable feedback");
      }
    } else {
      alert("Enter a valid e-mail");
    }
  };

  return (
    <>
      <nav>Tell Us What You Think</nav>

      <form onSubmit={handleSubmission} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
        />
        <span>Rate Us:</span>
        <div style={{display: 'flex', gap: '10px', paddingBottom: '20px'}}>
            <label><input type="radio" name="rating" value="1" onChange={handleChange} checked={formData.rating === "1"} /> 1</label>
            <label><input type="radio" name="rating" value="2" onChange={handleChange} checked={formData.rating === "2"} /> 2</label>
            <label><input type="radio" name="rating" value="3" onChange={handleChange} checked={formData.rating === "3"} /> 3</label>
            <label><input type="radio" name="rating" value="4" onChange={handleChange} checked={formData.rating === "4"} /> 4</label>
            <label><input type="radio" name="rating" value="5" onChange={handleChange} checked={formData.rating === "5"} /> 5</label>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;