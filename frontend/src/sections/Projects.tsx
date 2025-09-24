import { FC } from "react";
import image1 from "@/assets/images/project-1.jpg";
import image2 from "@/assets/images/project-2.jpg";
import Image from "next/image";
import Button from "@/components/Button";
import Card from "@/components/Card";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const projects = [
  {
    company: "Criminology Institute For Research And Training",
    title: "Journal and Research Workflow Platform",
    results: [
      { title: "Enabled criminology graduates to submit and manage research papers seamlessly, reducing manual paperwork." },
      { title: "Improved departmental collaboration by providing a centralized platform for journals, submissions, and fellowships." },
      { title: "Ensured secure, cloud-based storage of research files, protecting sensitive academic work." },
      { title: "Provided real-time updates on submissions and journal status, speeding up review and feedback cycles." },
    ],
    demo: "https://cirt-project.vercel.app/",
    image: image1,
  },
  {
    company: "BeachStore",
    title: "Employee Management System",
    results: [
      { title: "Simplified employee time tracking and payroll, reducing errors and manual calculations." },
      { title: "Enhanced operational efficiency by providing managers and owners with real-time financial and attendance reports." },
      { title: "Improved security and privacy through role-based access, ensuring employees see only relevant information." },
      { title: "Made daily operations easier for staff with an intuitive desktop interface, saving time and reducing training needs." }
    ],
    demo: "https://github.com/abbyburkett/Beach-Store-project",
    image: image2,
  },
];

const Projects: FC = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-secondary-light to-secondary-dark bg-clip-text text-transparent">Real-world Results</p>
        </div>
        <h2 className="text-3xl text-center mt-6 md:text-5xl">Featured Projects</h2>
        <p className="text-center text-primary-light mt-4 md:text-lg lg:text-xl max-w-md mx-auto">See how I build applications that improve workflows and empower users.</p>
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {projects.map((project, projectIdx) => (
            <Card key={project.title}
                  className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                  style={{ top: `calc(80px + ${projectIdx * 56}px)` }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">

                  <div className="lg:pb-16">
                      <div className="flex">
                        <span className="bg-gradient-to-r from-support-brown to-support-orange inline-flex font-bold uppercase tracking-widest text-sm  bg-clip-text text-transparent">{project.company}</span>
                      </div>
                      <h3 className="text-2xl md:text-4xl mt-2 md:mt-5 text-primary-dark">{project.title}</h3>
                      <hr className="border-t-2 border-support-brown mt-4 md:mt-5"/>
                      <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                        {project.results.map((result) => (
                          <li key={result.title} className="flex items-center gap-2 text-sm md:text-base text-white">
                            <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17 9L9.99998 16L6.99994 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>{result.title}</span>
                          </li>
                        ))}
                      </ul>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary" iconAfter={
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-primary-dark">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                        } className="normal-case bg-secondary-light h-12 mt-8"><span className="text-primary-dark">View Project</span></Button>
                      </a>

                  </div>

                  <div>
                      <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:bottom-0 lg:object-contain"/>
                  </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
