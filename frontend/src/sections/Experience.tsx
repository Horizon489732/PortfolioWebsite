"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Undergraduate Research Assistant",
    company: "Suffolk University, Boston, MA",
    date: "May 2024 – Sep 2025",
    bullets: [<>Contributed to the evaluation and optimization of a hybrid RoBERTa–TF-IDF model for multi-class classification of Reddit posts by suicide risk, achieving a weighted F1 score of 0.7512.
        <a
          href="https://your-paper-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline ml-2">
          View Paper
        </a>
      </>,
      "Enhanced predictive performance through features preprocessing, resampling, weighted loss, data augmentation, bagging and ensemble strategies.",
      "Conducted extensive benchmarking of 15+ machine learning classifiers, analyzing feature representations and model performance to identify optimal strategies for suicide risk prediction.",
      "Scraped, cleaned, and processed a dataset of 1,200+ Reddit posts, applying preprocessing techniques to improve model robustness and generalization.",
    ],
  },
  {
    role: "Peer Tutor",
    company: "Suffolk University CLAS, Boston, MA",
    date: "Mar 2024 – Sep 2024",
    bullets: [
      "Provided tailored 1-on-1 instruction in programming, algorithms, and mathematics, enabling students to improve grades and conceptual understanding.",
      "Developed customized learning strategies that enhanced problem-solving skills and fostered student independence.",
    ],
  },
];

const Experience: FC = () => {
  return (
    <section id="experience" className="pb-16 lg:py-24 bg-neutral-light">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
          Experience
        </h2>
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="p-6 bg-neutral-dark rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-4 md:mb-5">
                <h3 className="text-2xl md:text-4xl mt-2 md:mt-5">{exp.role}</h3>
                <span className="text-sm text-primary-light">{exp.date}</span>
              </div>
              <p className="text-primary-light font-medium md:text-lg mb-4 md:mb-5">
                {exp.company}
              </p>
              <hr className="border-t-2 border-neutral-light mt-4 md:mt-5"/>
              <ul className="list-disc list-inside space-y-1 mt-4 md:mt-5 text-secondary-dark">
                {exp.bullets.map((point, j) => (
                  <li key={j} className="text-pretty">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
