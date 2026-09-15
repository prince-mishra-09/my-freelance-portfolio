"use client";

import { useState } from 'react';
import styles from './ContactForm.module.css';

const stepsData = [
  {
    id: "need",
    title: "What do you need?",
    type: "radio",
    options: ["New Website", "Website Redesign", "E-commerce", "Landing Page", "Not Sure Yet"]
  },
  {
    id: "businessType",
    title: "What type of business is it?",
    type: "radio",
    options: ["Accounting / Professional", "Healthcare", "Retail / Showroom", "Interior / Architecture", "E-commerce", "Other"]
  },
  {
    id: "goal",
    title: "What is the website supposed to achieve?",
    type: "radio",
    options: ["Get more enquiries", "Build trust", "Showcase services", "Sell products", "Improve existing website", "Other"]
  },
  {
    id: "budget",
    title: "Budget range",
    type: "radio",
    options: ["₹5k–₹10k", "₹10k–₹25k", "₹25k–₹50k", "₹50k+", "Not sure yet"]
  },
  {
    id: "details",
    title: "Project details",
    type: "textarea",
    placeholder: "Tell me a bit about what you're trying to build..."
  },
  {
    id: "contact",
    title: "Your details",
    type: "contact_fields"
  }
];

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    need: "",
    businessType: "",
    goal: "",
    budget: "",
    details: "",
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleNext = () => {
    // Basic validation before proceeding
    const currentConfig = stepsData[currentStep];
    
    if (currentConfig.type === 'radio' && !formData[currentConfig.id]) {
      setError("Please select an option to continue.");
      return;
    }
    if (currentConfig.type === 'textarea' && !formData[currentConfig.id].trim()) {
      setError("Please provide a brief description.");
      return;
    }

    setError("");
    if (currentStep < stepsData.length - 1) {
      setCurrentStep(curr => curr + 1);
    }
  };

  const handleBack = () => {
    setError("");
    if (currentStep > 0) {
      setCurrentStep(curr => curr - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Name and Email are required.");
      return;
    }
    
    // Simulate submission
    setError("");
    setIsSubmitted(true);
  };

  const handleSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError("");
    // Automatically advance on radio select for frictionless UX
    setTimeout(() => {
      if (currentStep < stepsData.length - 1) {
        setCurrentStep(curr => curr + 1);
      }
    }, 400);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  if (isSubmitted) {
    return (
      <div className={styles.successState}>
        <div className={styles.successIcon}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className={styles.successTitle}>Thanks — I've got the basics.</h3>
        <p className={styles.successMessage}>
          I'll review the project details and get back to you with the next step.
        </p>
      </div>
    );
  }

  const currentConfig = stepsData[currentStep];
  const progressNumber = `0${currentStep + 1}`.slice(-2);

  return (
    <div className={styles.formContainer}>
      
      <div className={styles.progressHeader}>
        <span className={styles.progressNumber}>{progressNumber}</span>
        <span className={styles.progressDivider}>/</span>
        <span className={styles.progressTotal}>06</span>
      </div>

      <div className={styles.questionBlock}>
        <h2 className={styles.questionTitle}>{currentConfig.title}</h2>
        
        {error && <div className={styles.errorMessage} role="alert">{error}</div>}

        <div className={styles.inputArea}>
          {currentConfig.type === 'radio' && (
            <div className={styles.radioGrid}>
              {currentConfig.options.map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`${styles.radioOption} ${formData[currentConfig.id] === opt ? styles.selected : ''}`}
                  onClick={() => handleSelect(currentConfig.id, opt)}
                  aria-pressed={formData[currentConfig.id] === opt}
                >
                  <span className={styles.radioDot}></span>
                  {opt}
                </button>
              ))}
            </div>
          )}

          {currentConfig.type === 'textarea' && (
            <textarea
              name={currentConfig.id}
              className={styles.textarea}
              placeholder={currentConfig.placeholder}
              value={formData[currentConfig.id]}
              onChange={handleChange}
              rows={6}
              aria-label={currentConfig.title}
            />
          )}

          {currentConfig.type === 'contact_fields' && (
            <div className={styles.contactFields}>
              <div className={styles.fieldGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className={styles.input}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="phone" className={styles.label}>WhatsApp / Phone</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  className={styles.input}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.controls}>
        {currentStep > 0 && (
          <button type="button" onClick={handleBack} className={styles.backButton}>
            &larr; Back
          </button>
        )}
        
        {currentConfig.type !== 'radio' && currentStep < stepsData.length - 1 && (
          <button type="button" onClick={handleNext} className="btn-primary">
            Continue &rarr;
          </button>
        )}

        {currentStep === stepsData.length - 1 && (
          <button type="button" onClick={handleSubmit} className="btn-primary">
            Start the Conversation &rarr;
          </button>
        )}
      </div>

    </div>
  );
}
