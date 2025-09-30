"use client";

import { FC, useEffect } from "react";
import { useAnimate, useInView, stagger } from "motion/react";
import Image from "next/image";

import PythonLogo from "@/assets/logos/python.svg";
import JsLogo from "@/assets/logos/javascript.svg";
import JavaLogo from "@/assets/logos/java.svg";
import SqlLogo from "@/assets/logos/sql.svg";
import TsLogo from "@/assets/logos/typescript.svg";
import CppLogo from "@/assets/logos/cpp.svg";

import ReactLogo from "@/assets/logos/react.svg";
import NextLogo from "@/assets/logos/nextjs.svg";
import TailwindLogo from "@/assets/logos/tailwind.svg";
import NodeLogo from "@/assets/logos/node.svg";
import DjangoLogo from "@/assets/logos/django.svg";
import SpringLogo from "@/assets/logos/spring.svg";
import MongoDBLogo from "@/assets/logos/mongodb.svg";
import MySQLLogo from "@/assets/logos/mysql.svg";
import PostgreSQL from "@/assets/logos/postgresql.svg";

import PytorchLogo from "@/assets/logos/pytorch.svg";
import SklearnLogo from "@/assets/logos/scikit-learn.svg";
import TensorflowLogo from "@/assets/logos/tensorflow.svg";
import NumpyLogo from "@/assets/logos/numpy.svg";
import PandasLogo from "@/assets/logos/pandas.svg";

import DockerLogo from "@/assets/logos/docker.svg";
import AwsLogo from "@/assets/logos/aws.svg";
import GitLogo from "@/assets/logos/git.svg";
import K8sLogo from "@/assets/logos/kubernetes.svg";
import CiCdLogo from "@/assets/logos/cicd.svg";

const About: FC = () => {
  const techStack = [
    {
      category: "Languages",
      items: [
        { name: "Python", logo: PythonLogo },
        { name: "JavaScript", logo: JsLogo },
        { name: "Java", logo: JavaLogo },
        { name: "SQL", logo: SqlLogo },
        { name: "TypeScript", logo: TsLogo },
        { name: "C++", logo: CppLogo },
      ],
    },
    {
      category: "Web Frameworks & Libraries",
      items: [
        { name: "React", logo: ReactLogo },
        { name: "Next.js", logo: NextLogo },
        { name: "TailwindCSS", logo: TailwindLogo },
        { name: "Node.js", logo: NodeLogo },
        { name: "Django", logo: DjangoLogo },
        { name: "Springboot", logo: SpringLogo },
        { name: "MongoDB", logo: MongoDBLogo },
        { name: "MySQL", logo: MySQLLogo },
        { name: "PostgreSQL", logo: PostgreSQL },
      ],
    },
    {
      category: "AI / ML",
      items: [
        { name: "PyTorch", logo: PytorchLogo },
        { name: "Sklearn", logo: SklearnLogo },
        { name: "TensorFlow", logo: TensorflowLogo },
        { name: "NumPy", logo: NumpyLogo },
        { name: "Pandas", logo: PandasLogo },
      ],
    },
    {
      category: "Other",
      items: [
        { name: "Docker", logo: DockerLogo },
        { name: "AWS", logo: AwsLogo },
        { name: "CI/CD", logo: CiCdLogo },
        { name: "Git", logo: GitLogo },
        { name: "Kubernetes", logo: K8sLogo },
      ],
    },
  ];

  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true });

  useEffect(() => {
    if (inView) {
      animate(
        ".techItem",
        { opacity: 1 },
        { duration: 0.5, delay: stagger(0.15), ease: [0.25, 1, 0.5, 1] }
      );
    }
  }, [inView, animate]);

  return (
    <section id="about" className="pb-16 lg:py-24 bg-neutral-light">
      <div className="container mx-auto px-4" ref={scope}>
        <h2 className="text-3xl md:text-5xl mb-6 text-center">About Me</h2>
        <p className="text-lg lg:text-xl text-primary-light mb-12 text-center text-pretty max-w-2xl mx-auto">
          Hi! I&apos;m a passionate full-stack developer and AI/ML enthusiast with experience building scalable web applications, machine learning models, and cloud infrastructure
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {techStack.map((section) => (
            <div key={section.category}>
              <h3 className="text-xl font-semibold mb-4">{section.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {section.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="techItem opacity-0 flex flex-col items-center justify-center p-4 bg-support-brown border-2 border-white rounded-lg transform ease-out transition-transform hover:-translate-y-1 hover:scale-105 hover:rotate-[360deg] cursor-pointer"
                  >
                    <Image src={tech.logo} alt={tech.name} className="w-9 h-9 md:w-12 md:h-12" />
                    <span className="mt-2 font-medium text-primary-light">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
