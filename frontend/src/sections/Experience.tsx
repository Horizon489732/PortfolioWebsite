"use client";

import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
          className="text-accent ml-2 hover:border-b-2 hover:pb-1 hover:border-accent">
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

  const cardVariant = {
  hidden: (i: number) => ({ opacity: 0, x: i % 2 === 0 ? -100 : 100 }),
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const scrollingDiv = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end 72%"],
  });

  const fanRotate = useTransform(scrollYProgress, [0, 1], [0, 3600]);

  return (
    <section id="experience" className="pb-16 lg:py-24 bg-neutral-light">
      <div className="container mx-auto px-4 max-w-4xl sticky -top-14">
        <h2 className="text-3xl translate-y-1 text-center mt-6 md:text-5xl mb-10">
          Experience
        </h2>
        <div className="flex justify-center mb-10">
          <span className="h-1 w-[30vw] bg-gradient-to-r from-support-brown to-support-orange rounded-full"></span>
        </div>
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="p-6 bg-neutral-dark rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-4 md:mb-5 relative">
                <motion.svg
                  style={{ rotate: fanRotate }}
                  className="absolute top-1 right-1 w-5 h-5 md:w-8 md:h-8 text-primary"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" fill="none" />
                  <path d="M12,11a1,1,0,1,0,1,1,1,1,0,0,0-1-1m.5-9C17,2,17.1,5.57,14.73,6.75a3.36,3.36,0,0,0-1.62,2.47,3.17,3.17,0,0,1,1.23.91C18,8.13,22,8.92,22,12.5c0,4.5-3.58,4.6-4.75,2.23a3.44,3.44,0,0,0-2.5-1.62,3.24,3.24,0,0,1-.91,1.23c2,3.69,1.2,7.66-2.38,7.66C7,22,6.89,18.42,9.26,17.24a3.46,3.46,0,0,0,1.62-2.45,3,3,0,0,1-1.25-.92C5.94,15.85,2,15.07,2,11.5,2,7,5.54,6.89,6.72,9.26A3.39,3.39,0,0,0,9.2,10.87a2.91,2.91,0,0,1,.92-1.22C8.13,6,8.92,2,12.48,2Z"/>
                </motion.svg>
                <h3 className="text-2xl md:text-4xl mt-2 md:mt-5">{exp.role}</h3>
                <span className="text-sm text-primary-light">{exp.date}</span>
              </div>
              <p className="text-primary-light font-medium md:text-lg mb-4 md:mb-5">
                {exp.company}
              </p>
              <hr className="border-t-2 border-neutral-light mt-4 md:mt-5"/>
              <ul className="list-disc list-inside space-y-1 mt-4 md:mt-5 text-secondary-dark">
                {exp.bullets.map((point, idx) => {
                      const total = exp.bullets.length;
                      const start = idx / total;
                      const end = (idx + 1) / total;

                      const opacity = useTransform(
                        scrollYProgress,
                        [start, end],
                        [0, 1],
                      );
                      const x = useTransform(
                        scrollYProgress,
                        [start, end],
                        [-20, 0]
                      );

                return (<motion.li key={idx} style={{ opacity, x }} className="text-pretty">
                          {point}
                        </motion.li>);
              })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <div ref={scrollingDiv} className="h-[300vh]"></div>
    </section>
  );
};

export default Experience;
