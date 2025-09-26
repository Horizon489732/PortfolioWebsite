import { HTMLAttributes } from "react";
import Card from "./Card";

const TheoryDetails = (
    project: {
    title: string,
    description: string,
    theory: Array<string>,
    href: string,
    tags: Array<string>,
} & HTMLAttributes<HTMLDivElement>) => {
    return(
        <div className="fixed isolate inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
            <Card>
                <button>Close</button>

                <div>
                    <h5 className="mb-2 text-2xl font-bold text-white">{project.title}</h5>
                    <p className="mb-3 font-normal text-secondary-dark">{project.description}</p>
                </div>
            </Card>
        </div>
    )
}

export default TheoryDetails;