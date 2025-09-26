import { HTMLAttributes } from "react";
import { motion } from "motion/react";
import Card from "./Card";


const TheoryDetails = (
    props: {
    project: {
    title: string,
    description: string,
    theory: Array<string>,
    href: string,
    tags: Array<string>
}, closeFunc: ()=>void} & HTMLAttributes<HTMLDivElement>) => {

    const { project, closeFunc } = props;

    return(
        <div className="fixed isolate inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
            <motion.div
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}>
                <Card>
                    <button onClick={closeFunc}>Close</button>
                    <div>
                        <h5 className="mb-2 text-2xl font-bold text-white">{project.title}</h5>
                        <p className="mb-3 font-normal text-secondary-dark">{project.description}</p>
                    </div>
                </Card>
            </motion.div>
        </div>
    )
}

export default TheoryDetails;