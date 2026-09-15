"use client";

import { useState } from 'react';
import Section from './Section';
import styles from './FaqSection.module.css';

const faqs = [
  {
    num: "01",
    question: "What kinds of businesses do you work with?",
    answer: "I primarily work with professional firms, clinics, showrooms, premium service businesses and e-commerce projects. The right approach depends on the business and what the website needs to accomplish."
  },
  {
    num: "02",
    question: "Can you redesign my existing website?",
    answer: "Yes. A redesign can focus on visual quality, structure, mobile UX, trust, conversion and overall clarity."
  },
  {
    num: "03",
    question: "Can you build e-commerce websites?",
    answer: "Yes. I can design and develop product-focused experiences with discovery, product pages, trust elements and conversion paths."
  },
  {
    num: "04",
    question: "Will the website work on mobile?",
    answer: "Yes. Responsive behavior should be designed from the beginning rather than added at the end."
  },
  {
    num: "05",
    question: "How does the project start?",
    answer: "We first discuss the business, goals, current website if there is one, and what the new experience needs to achieve."
  },
  {
    num: "06",
    question: "Do you provide support after launch?",
    answer: "Support can be discussed based on the project and business needs."
  },
  {
    num: "07",
    question: "How much does a website cost?",
    answer: "Every project is different. The final scope depends on the number of pages, functionality, integrations and level of design required. Contact me and I'll help define the right scope."
  },
  {
    num: "08",
    question: "Can I see examples of your work?",
    answer: "Absolutely. Visit the Work section for live examples and detailed case studies."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className={styles.faqSection} background="primary">
      
      <div className={styles.header}>
        <h2 className={styles.title}>Before we build, you might be wondering...</h2>
      </div>

      <div className={styles.accordionContainer}>
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx} 
              className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
            >
              <button 
                className={styles.faqButton} 
                onClick={() => toggleFaq(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
              >
                <div className={styles.questionWrapper}>
                  <span className={styles.number}>{faq.num}</span>
                  <span className={styles.question}>{faq.question}</span>
                </div>
                <div className={styles.iconWrapper}>
                  <svg 
                    width="20" height="20" viewBox="0 0 24 24" 
                    fill="none" xmlns="http://www.w3.org/2000/svg" 
                    className={styles.icon}
                  >
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              
              <div 
                id={`faq-answer-${idx}`}
                className={styles.answerWrapper}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
              >
                <div className={styles.answerInner}>
                  <p className={styles.answerText}>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </Section>
  );
}
