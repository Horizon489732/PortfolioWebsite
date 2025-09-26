"use client";

import { FC } from "react";

const experiences = [
  {
    role: "Undergraduate Research Assistant",
    company: "Suffolk University, Boston, MA",
    date: "May 2024 – Sep 2025",
    bullets: [
    <>Contributed to the evaluation and optimization of a hybrid RoBERTa–TF-IDF model for multi-class classification of Reddit posts by suicide risk, achieving a weighted F1 score of 0.7512.
        <a
        href="https://your-paper-link.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline ml-2"
        >View Paper</a>
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
            <div
              key={i}
              className="p-6 bg-neutral-dark rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <span className="text-sm text-primary-light">{exp.date}</span>
              </div>
              <p className="text-primary-light font-medium mb-3">{exp.company}</p>
              <ul className="list-disc list-inside space-y-1 text-secondary-dark">
                {exp.bullets.map((point, j) => (
                  <li key={j} className="text-pretty">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
