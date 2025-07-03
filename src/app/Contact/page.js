"use client";
import Image from "next/image";
import Logo from "../../../public/lg.jpeg";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6 md:px-[7%]">
      <div className="text-center">
        <Image src={Logo} alt="Gym Logo" width={80} height={80} className="mx-auto" />
        <h1 className="text-4xl font-bold mt-4">Contact Us</h1>
        <p className="text-gray-400 mt-2">Have questions? Reach out to us!</p>
      </div>

      {/* Contact Info & Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Contact Details */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-gray-300">📍 Aadhrsh vidhya mandir school, opp. baba property, Sector 26, Pratap Nagar, Jaipur, Rajasthan 302033</p>
          <p className="text-gray-300">📧 contact@shotocan.com</p>
          <p className="text-gray-300">📞 +91 74140 69375</p>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4">
            
          <a
  href="https://www.instagram.com/shotokan_m.m.aacademy?igsh=ZDF0aHIxNzIyMmR4"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-yellow-400 text-2xl"
>
  <FaInstagram />
</a>

 
          <a
  href="https://www.facebook.com/groups/701561910688489/?ref=share&mibextid=KtfwRi"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-yellow-400 text-2xl"
>
  <FaFacebook />
</a>

            <a href="#" className="text-gray-400 hover:text-yellow-400 text-2xl"><FaTwitter /></a>
                      <a
  href="https://youtu.be/ei4AfQJNdVk?si=Uw8xeoJeypI4oD3W"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-yellow-400 text-2xl"
>
  <FaYoutube />
</a>
          </div>
        

        {/* Contact Form */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              rows="4"
            ></textarea>
            <button type="submit" className="w-full bg-[#007878] text-black font-semibold p-3 rounded-lg hover:bg-blue-500">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map (Optional) */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-center mb-4">Find Us Here</h2>
        <iframe
          className="w-full h-[300px] rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086165!2d144.95592531550462!3d-37.81720974201448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775f0f18a5b8f5!2sGym%20Location!5e0!3m2!1sen!2sus!4v1633347186460!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    </div>
  );
}
