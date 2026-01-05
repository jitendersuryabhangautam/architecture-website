"use client";

import { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  XCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  // Initialize EmailJS
  useEffect(() => {
    // EmailJS is initialized automatically when you call emailjs.send
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Get EmailJS credentials from environment variables
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error("EmailJS credentials are not configured properly.");
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Step One Studio",
        reply_to: formData.email,
        date: new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      console.log("Sending email with params:", templateParams);

      const result = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );
      console.log("Email sent successfully:", result);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Email send error:", error);
      setSubmitStatus("error");

      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="py-20 px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 50%, #FFFFFF 100%)",
      }}
    >
      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="fixed top-6 right-6 z-50 animate-fade-in">
          <div
            className="rounded-xl p-4 shadow-2xl max-w-sm backdrop-blur-sm"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              border: "2px solid rgba(34, 197, 94, 0.3)",
              boxShadow: "0 10px 40px rgba(34, 197, 94, 0.2)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-green-100">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-green-800">
                  Message Sent Successfully!
                </p>
                <p className="text-sm text-green-600 mt-1">
                  We&rsquo;ll get back to you within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="fixed top-6 right-6 z-50 animate-fade-in">
          <div
            className="rounded-xl p-4 shadow-2xl max-w-sm backdrop-blur-sm"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              border: "2px solid rgba(239, 68, 68, 0.3)",
              boxShadow: "0 10px 40px rgba(239, 68, 68, 0.2)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-red-100">
                <XCircle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="font-semibold text-red-800">
                  Failed to Send Message
                </p>
                <p className="text-sm text-red-600 mt-1">
                  Please try again or contact us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-1 opacity-30"
        style={{
          background:
            "linear-gradient(to right, transparent, #AD8151, transparent)",
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-1 opacity-30"
        style={{
          background:
            "linear-gradient(to right, transparent, #D4A76A, transparent)",
        }}
      ></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold mb-4 text-gray-900">
                Let&apos;s Build Your
                <span
                  className="block bg-clip-text text-transparent mt-2"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #AD8151, #D4A76A, #AD8151)",
                  }}
                >
                  Vision Together
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                Reach out to discuss your architectural dreams and let us bring
                them to life with precision and elegance.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address Card */}
              <div
                className="p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  border: "1px solid rgba(173, 129, 81, 0.15)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-full shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(173, 129, 81, 0.1), rgba(212, 167, 106, 0.1))",
                    }}
                  >
                    <MapPin className="w-6 h-6" style={{ color: "#AD8151" }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-1">
                      Our Studio
                    </h4>
                    <p className="text-gray-600">
                      Distilled City of China (B2H),
                      <br />
                      Central Life Academy, Delhi NCR
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div
                className="p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  border: "1px solid rgba(173, 129, 81, 0.15)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-full shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(173, 129, 81, 0.1), rgba(212, 167, 106, 0.1))",
                    }}
                  >
                    <Phone className="w-6 h-6" style={{ color: "#AD8151" }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-1">
                      Call Us
                    </h4>
                    <a
                      href="tel:+911234567890"
                      className="text-gray-600 hover:text-[#AD8151] transition-colors text-lg font-medium"
                    >
                      +91 12345 67890
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div
                className="p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  border: "1px solid rgba(173, 129, 81, 0.15)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-full shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(173, 129, 81, 0.1), rgba(212, 167, 106, 0.1))",
                    }}
                  >
                    <Mail className="w-6 h-6" style={{ color: "#AD8151" }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-1">
                      Email Us
                    </h4>
                    <a
                      href="mailto:info@steponestudio.com"
                      className="text-gray-600 hover:text-[#AD8151] transition-colors text-lg font-medium"
                    >
                      info@steponestudio.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div
                className="p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  border: "1px solid rgba(173, 129, 81, 0.15)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-full shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(173, 129, 81, 0.1), rgba(212, 167, 106, 0.1))",
                    }}
                  >
                    <Clock className="w-6 h-6" style={{ color: "#AD8151" }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-1">
                      Studio Hours
                    </h4>
                    <div className="space-y-1">
                      <p className="text-gray-600">
                        <span className="font-medium">Mon - Fri:</span> 9:00 AM
                        - 6:00 PM
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Saturday:</span> 10:00 AM
                        - 4:00 PM
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Sunday:</span> By
                        Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <div
              className="p-8 lg:p-10 rounded-3xl shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 100%)",
                border: "1px solid rgba(173, 129, 81, 0.1)",
              }}
            >
              <h3 className="text-3xl font-bold mb-2 text-gray-900">
                Send us a Message
              </h3>
              <p className="text-gray-500 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                      background: "rgba(255, 255, 255, 0.9)",
                      borderColor: "rgba(173, 129, 81, 0.2)",
                    }}
                    placeholder="John Doe"
                    required
                    onFocus={(e) => {
                      e.target.style.borderColor = "#AD8151";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(173, 129, 81, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(173, 129, 81, 0.2)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                      background: "rgba(255, 255, 255, 0.9)",
                      borderColor: "rgba(173, 129, 81, 0.2)",
                    }}
                    placeholder="john@example.com"
                    required
                    onFocus={(e) => {
                      e.target.style.borderColor = "#AD8151";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(173, 129, 81, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(173, 129, 81, 0.2)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-5 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 resize-none"
                    style={{
                      background: "rgba(255, 255, 255, 0.9)",
                      borderColor: "rgba(173, 129, 81, 0.2)",
                    }}
                    placeholder="Tell us about your project..."
                    required
                    onFocus={(e) => {
                      e.target.style.borderColor = "#AD8151";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(173, 129, 81, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(173, 129, 81, 0.2)";
                      e.target.style.boxShadow = "none";
                    }}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
                  style={{
                    background: "linear-gradient(to right, #AD8151, #D4A76A)",
                    color: "white",
                    boxShadow: "0 10px 30px rgba(173, 129, 81, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(to right, #D4A76A, #AD8151)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 40px rgba(173, 129, 81, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(to right, #AD8151, #D4A76A)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(173, 129, 81, 0.3)";
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </span>

                  {/* Button shine effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 group-hover:animate-shine"
                      style={{
                        background:
                          "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)",
                      }}
                    ></div>
                  </div>
                </button>
              </form>

              {/* Note */}
              <p className="text-gray-400 text-sm text-center mt-6">
                We respect your privacy and will never share your information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .group:hover .group-hover\\:animate-shine {
          animation: shine 1s ease-in-out;
        }
      `}</style>
    </div>
  );
}
