import { FC, Fragment } from "react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

const words = [
  "Performance",
  "Scalability",
  "Reliability",
  "Efficiency",
  "Collaboration",
  "Innovation",
  "Optimization",
  "Automation",
  "Security",
  "Usability",
  "Accessibility",
  "Responsiveness",
  "Integration",
  "Deployment",
  "Monitoring",
];

const Tape: FC = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="bg-gradient-to-r from-support-brown to-support-orange overflow-x-clip -rotate-2 -mx-1">
        <div className=" flex 
              [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
              [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex flex-none gap-4 py-3 animate-move-left [animation-duration:30s]">
              {[...new Array(2)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                    {words.map((word) => (
                      <div key={word} className="inline-flex gap-4 items-center">
                        <span className="uppercase font-extrabold text-sm">{word}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="12" />
                        </svg>
                      </div>
                    ))}
                </Fragment>
              ))} 
            </div>
        </div>   
      </div>
    </div>
  );
};

export default Tape;
