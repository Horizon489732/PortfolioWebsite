import { HTMLAttributes } from "react";

import Button from "./Button";
import TheoryDetails from "./TheoryDetails";

const Theory = (project: {
    title: string,
    description: string,
    theory: Array<string>,
    href: string,
    tags: Array<string>,
} & HTMLAttributes<HTMLDivElement>) => {
    return (
        <>
            <div className="flex flex-wrap items-end justify-between py-5 space-y-5 md:py-10 md:space-x-14">
                <div>
                    <p className="text-lg md:text-2xl">{project.title}</p>
                    <div className="flex gap-5 text-sm md:text-lg mt-2 text-support-orange">
                        {project.tags.map((tag) => 
                            (<span key={tag}>{tag}</span>)
                        )}
                    </div>
                </div>

                <Button variant="text" iconAfter={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                } className="py-0">
                    <span className="align-bottom">Read More</span>
                </Button>
            </div>

            <div className="m-auto bg-gradient-to-r from-secondary-light to-secondary-dark h-[1px] w-[30vw]"></div>

            <TheoryDetails key={project.id} title={project.title} description={project.description} theory={project.theory} href={project.href} tags={project.tags} />
        </>
    )
}

export default Theory;