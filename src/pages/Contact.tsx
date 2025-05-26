import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6 font-orbitron">Get in Touch</h2>
              
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Address</h3>
                  <p>46 Richmond Way</p>
                  <p>Leatherhead, KT22 9NU</p>
                  <p>England</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <a href="mailto:lucilayalejoalx@hotmail.com" className="text-neon-green-400 hover:text-neon-green-300">
                    lucilayalejoalx@hotmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.youtube.com/@LeoFitLab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green-400">
                      YouTube
                    </a>
                    <a href="https://www.instagram.com/leofitlab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green-400">
                      Instagram
                    </a>
                    <a href="https://www.tiktok.com/@leofitlab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green-400">
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6 font-orbitron">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-tech-black-900 border border-tech-black-600 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-green-400 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-tech-black-900 border border-tech-black-600 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-green-400 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-tech-black-900 border border-tech-black-600 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-green-400 text-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="neon-button w-full flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
