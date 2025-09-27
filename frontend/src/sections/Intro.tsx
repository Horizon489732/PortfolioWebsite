"use client";

import { useAnimate, useInView, stagger } from "motion/react";
import { FC, useEffect } from "react";
import SplitType from "split-type";

const Intro: FC = () => {

  const [scope, animate] = useAnimate();

  const inView = useInView(scope, {
    once: true
  });

  useEffect(() => {
  
    new SplitType(scope.current.querySelector("h2"), {
        types: "lines,words",
        tagName: "span"
    })

  }, [scope])

useEffect(() => {
    if (inView) {
      animate(
        scope.current.querySelectorAll(".word"),
        { transform: "translateY(0%)" },
        { duration: 0.7, delay: stagger(0.2) }
      );
    }
  }, [inView, animate, scope]);
  
  return (
    <section id="intro" ref={scope} className="py-24 md:py-32 lg:py-40 mt-12 md:mt-16 lg:mt-20">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%] text-pretty">
          <span className="font-bold text-secondary-light">Fast-learning</span> developer with <span className="text-primary-dark"> full-stack </span> and <span className="text-primary-dark"> ML </span>experience. Passionate about building impactful tools
        </h2>
      </div>
    </section>
  );
};

export default Intro;
