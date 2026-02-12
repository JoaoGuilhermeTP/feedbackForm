import React from "react";

export const clearFormData = () => {
    setFormData({ name: "", email: "", feedback: "", rating: "" });
  };

  export const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  export const handleSubmission = (event) => {
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
        `Please confirm your details: \n\n ${confirmationMessage}`,
      );
      if (isConfirmed) {
        console.log(`Submiting feedback`, formData);
        clearFormData();
        alert("Thank you for your valuable feedback");
      }
    } else {
      alert("Enter a valid e-mail");
      clearFormData();
    }
  };