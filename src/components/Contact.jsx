import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({ fullname: "", email: "", message: "" });
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_070699";
    const templateId = "template_070699";
    const publicKey = "Uo99j6RUyHdDUOq_a";

    const templateParams = {
      fullname: form.fullname,
      email: form.email,
      message: form.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setResponseMessage("Email sent successfully!");
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setResponseMessage("");
        setErrorMessage("Error sending email. Please try again later.");
      });

    setForm({
      fullname: "",
      email: "",
      message: "",
    });
  };

  const contact_info = [
    { logo: "mail", text: "Julietogechi27@gmail.com" },
    { logo: "paper-plane-outline", text: "+234 813 8780 831" },
    {
      logo: "location",
      text: "Nigeria",
    },
  ];

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form onSubmit={sendEmail} className="flex flex-col flex-1 gap-5">
            <input
              type="text"
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              placeholder="Your Name"
            />
            <input
              type="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email Address"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={10}
            ></textarea>
            {responseMessage && (
              <p style={{ color: "green" }}>{responseMessage}</p>
            )}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
