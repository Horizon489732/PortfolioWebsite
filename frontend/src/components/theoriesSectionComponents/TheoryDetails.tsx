import { HTMLAttributes } from "react";
import { motion } from "motion/react";
import Card from "../Card";


const TheoryDetails = (
    props: {
    project: {
    projectId: number,
    title: string,
    description: string,
    theory: Array<string>,
    href: string,
    tags: Array<string>
}, closeFunc: ()=>void} & HTMLAttributes<HTMLDivElement>) => {

    const { project, closeFunc } = props;

    return(
        <div className="fixed isolate inset-0 bg-black/50 z-50 flex items-start md:items-center justify-center w-full h-full overflow-auto md:overflow-hidden backdrop-blur-md">
            <motion.div
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}>
                <Card className="bg-neutral-dark my-2 md:my-0 mx-2 md:mx-5">
                    <button className="absolute top-4 right-4 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:text-primary-dark" onClick={closeFunc}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 md:w-6 md:h-6 rotate-45">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                    <div>
                        <h4 className="mb-2 text-2xl font-bold text-secondary-dark">{project.title}</h4>
                        <p className="mb-3 font-normal text-pretty text-white">{project.description}</p>
                    </div>
                    <div className="mb-3">
                        <span className="text-white">Tags:</span>{" "}
                        {project.tags.map((tag) => (
                        <span key={tag} className="mr-2 text-support-orange">
                            {tag}
                        </span>
                        ))}
                    </div>
                    <div>
                        <h4 className="text-white">Theory Steps:</h4>
                        <ol className="list-decimal ml-6 mt-2 text-secondary-dark">
                        {project.theory.map((step, idx) => (
                            <li key={idx} className="mb-1">
                                {step}
                            </li>
                        ))}
                        </ol>
                    </div>
                </Card>
            </motion.div>
        </div>
    )
}

export default TheoryDetails;