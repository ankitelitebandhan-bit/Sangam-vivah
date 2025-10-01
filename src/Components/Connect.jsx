import React, { useState } from "react";
import emailjs from "emailjs-com";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    country: "",
    keyword: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_thtbb2e", // Replace with your service ID from EmailJS
        "template_06564si", // Replace with your template ID from EmailJS
        e.target, // The form data
        "kRJ0-Q8iuigZ9gdG_" // Replace with your user ID from EmailJS
      )
      .then(
        (result) => {
          setResponseMessage("Thank you for your submission!");
          setFormData({
            name: "",
            phone: "",
            country: "",
            keyword: "",
          });
        },
        (error) => {
          setResponseMessage("Error submitting form. Please try again.");
        }
      );
  };

  return (
    <div className="flex justify-center items-center bg-[#ffffff] px-4 py-14">
      <form
        className="w-full max-w-6xl flex flex-col items-center bg-[#ffffff] p-6 md:p-12 rounded-xl shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="w-full text-center text-2xl md:text-4xl font-semibold text-pink-600 mb-10 italic">
          Please share your details, we will reach out to you
        </h2>

        <div className="w-full grid grid-cols-1  gap-4 justify-center">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 border border-pink-500 rounded-md placeholder-italic focus:outline-none focus:ring-2 focus:ring-pink-700"
            required
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full p-3 border border-pink-500 rounded-md placeholder-italic focus:outline-none focus:ring-2 focus:ring-pink-700"
            required
          />

          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-3 border border-pink-500 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-700"
            required
          >
            <option value="" disabled>
              Select Country
            </option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="India">India</option>
          </select>

          <input
            type="text"
            name="keyword"
            value={formData.keyword}
            onChange={handleChange}
            placeholder="Your message"
            className="w-full p-3 border border-pink-500 rounded-md placeholder-italic focus:outline-none focus:ring-2 focus:ring-pink-700"
          />
        </div>

        <div className="mt-8 w-full">
          <button
            type="submit"
            className="w-full bg-pink-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-pink-500 transition-all shadow-md "
          >
            Submit
          </button>
        </div>

        {responseMessage && (
          <p className="mt-4 text-center text-sm text-gray-600">
            {responseMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default Connect;
