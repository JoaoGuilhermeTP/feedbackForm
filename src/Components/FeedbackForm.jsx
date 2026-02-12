import React, { useState } from "react";
import "./FeedbackForm.css";
import { z } from "zod";
import {clearFormData, handleChange, handleSubmission} from './FormFunctions'

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: "",
  });

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
          type="textarea"
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
        />
        <span>Rate Us:</span>
        <p><input type="radio" name="rating" value="1" onChange={handleChange} /> 1</p>
        <p><input type="radio" name="rating" value="2" onChange={handleChange} /> 2</p>
        <p><input type="radio" name="rating" value="3" onChange={handleChange} /> 3</p>
        <p><input type="radio" name="rating" value="4" onChange={handleChange} /> 4</p>
        <p><input type="radio" name="rating" value="5" onChange={handleChange} /> 5</p>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
