import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'General',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Mock submission - will be replaced with actual API call
    setTimeout(() => {
      setSubmitMessage('Thank you for your inquiry! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'General',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="heading-1">Contact NYOM</h1>
          <p className="body-large">Get in touch with us for export–import inquiries</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="heading-2">Get In Touch</h2>
              <p className="body-medium">
                Have questions about our export–import services or investor partnerships? Reach out to us through any of the following channels.
              </p>

              <div className="contact-details">
                <div className="contact-detail-card network-card">
                  <MapPin size={32} className="contact-icon" />
                  <div>
                    <h3 className="heading-3">Our Office</h3>
                    <p className="body-medium">
                      UGF-04, Plot No-653/1,<br />
                      Shakti Khand–3, One Mall,<br />
                      Indirapuram, Ghaziabad,<br />
                      Uttar Pradesh – 201014, India
                    </p>
                  </div>
                </div>

                <div className="contact-detail-card network-card">
                  <Mail size={32} className="contact-icon" />
                  <div>
                    <h3 className="heading-3">Email Us</h3>
                    <a href="mailto:nyomexport@gmail.com" className="contact-link">
                      nyomexport@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-detail-card network-card">
                  <Phone size={32} className="contact-icon" />
                  <div>
                    <h3 className="heading-3">Call Us</h3>
                    <a href="tel:+919873274011" className="contact-link">
                      +91 98732 74011
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="contact-form-card network-card">
                <h2 className="heading-2">Send Us A Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiryType" className="form-label">Inquiry Type *</label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="form-input"
                    >
                      <option value="General">General Inquiry</option>
                      <option value="Export">Export Services</option>
                      <option value="Investor">Investor Partnership</option>
                      <option value="Business">Business Partnership</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="form-input form-textarea"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary btn-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Submit Inquiry <Send size={18} />
                      </>
                    )}
                  </button>

                  {submitMessage && (
                    <div className="submit-message">
                      {submitMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="business-hours network-card">
            <h2 className="heading-2">Business Hours</h2>
            <p className="body-large">
              Monday - Friday: 9:00 AM - 6:00 PM IST<br />
              Saturday: 9:00 AM - 2:00 PM IST<br />
              Sunday: Closed
            </p>
            <p className="body-medium">
              For urgent inquiries outside business hours, please send us an email and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
