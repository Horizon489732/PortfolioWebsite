import { FC } from "react";
import Brightness1Icon from '@mui/icons-material/Brightness1';

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
            <div className="flex flex-none gap-4 py-3">
              {words.map((word) => (
                <div key={word} className="inline-flex gap-4 items-center">
                  <span className="uppercase font-extrabold text-sm">{word}</span>
                  <Brightness1Icon sx={{ fontSize: 12 }} />
                </div>
              ))}
            </div>
        </div>   
      </div>
    </div>
  );
};

export default Tape;
