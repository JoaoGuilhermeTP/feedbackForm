// src/Components/FormFunctions.jsx
import { useState } from "react";
import { z } from "zod";

export const useFeedbackForm = () => {
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
    
    // Fix: Correct Zod syntax is z.string().email()
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
      // Note: Usually better NOT to clear form on error so user can fix it
    }
  };

  // Return the things the component needs
  return {
    formData,
    handleChange,
    handleSubmission,
  };
};