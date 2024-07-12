import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    txtName: "",
    txtEmail: "",
    txtPhone: "",
    txtMsg: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.txtName.trim()) {
      errors.txtName = "Name is required";
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.txtEmail)) {
      errors.txtEmail = "Invalid email format";
      isValid = false;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(formData.txtPhone)) {
      errors.txtPhone = "Phone number must be 10 digits";
      isValid = false;
    }

    if (formData.txtMsg.trim().split(" ").length < 2) {
      errors.txtMsg = "Message should contain at least two words";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("https://formspree.io/f/xyyrllko", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setSuccessMessage("Form submitted successfully!");
          setFormData({
            txtName: "",
            txtEmail: "",
            txtPhone: "",
            txtMsg: "",
          });
        } else {
          throw new Error("Failed to submit form");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSuccessMessage("Failed to submit form. Please try again later.");
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gradient-to-r from-green-300 to-green-500">
      <div className="container mx-auto py-10">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2">
            <div className="text-center">
              <h3 className="text-3xl font-cursive font-bold mb-8">
                Drop Us a Message
              </h3>
            </div>
            <form className="px-8" onSubmit={handleSubmit} method="POST">
              <input type="hidden" name="_subject" value="New form submission" />
              <input
                type="hidden"
                name="_replyto"
                value="piyush6306508774@gmail.com"
              />
              <div className="mb-6">
                <input
                  type="text"
                  name="txtName"
                  value={formData.txtName}
                  onChange={handleChange}
                  className={`form-input rounded-lg w-full p-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none ${
                    errors.txtName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your Name *"
                />
                {errors.txtName && (
                  <p className="text-red-500">{errors.txtName}</p>
                )}
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  name="txtEmail"
                  value={formData.txtEmail}
                  onChange={handleChange}
                  className={`form-input rounded-lg w-full p-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none ${
                    errors.txtEmail ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your Email *"
                />
                {errors.txtEmail && (
                  <p className="text-red-500">{errors.txtEmail}</p>
                )}
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  name="txtPhone"
                  value={formData.txtPhone}
                  onChange={handleChange}
                  className={`form-input rounded-lg w-full p-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none ${
                    errors.txtPhone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your Phone Number *"
                />
                {errors.txtPhone && (
                  <p className="text-red-500">{errors.txtPhone}</p>
                )}
              </div>
              <div className="mb-6">
                <textarea
                  name="txtMsg"
                  value={formData.txtMsg}
                  onChange={handleChange}
                  className={`form-textarea rounded-lg w-full p-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none ${
                    errors.txtMsg ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your Message *"
                  rows="4"
                ></textarea>
                {errors.txtMsg && (
                  <p className="text-red-500">{errors.txtMsg}</p>
                )}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  name="btnSubmit"
                  className="inline-block bg-primary/70 py-2 px-4 mt-5 text-sm rounded-full shadow-lg"
                >
                  Send Message
                </button>
              </div>
              {successMessage && (
                <p className="text-white text-center mt-4">
                  {successMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
