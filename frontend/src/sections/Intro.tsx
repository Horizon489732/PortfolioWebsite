import { FC } from "react";

const Intro: FC = () => {
  return (
    <section id="intro" className="py-24 md:py-32 lg:py-40 mt-12 md:mt-16 lg:mt-20">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]"><span className="font-bold text-secondary-light">Fast-learning</span> developer with <span className="text-primary-dark">full-stack</span> and <span className="text-primary-dark">ML</span> experience. Passionate about building impactful tools. <span className="italic text-neutral-dark">No visa sponsorship required.</span></h2>
      </div>
    </section>
  );
};

export default Intro;
