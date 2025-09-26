import { twMerge } from "tailwind-merge";
import { ComponentPropsWithoutRef } from "react";

const Card = ({ className, children, ...other }:ComponentPropsWithoutRef<"div">) => {
    return(
        <div className={twMerge("bg-accent rounded-3xl relative p-6 z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white after:pointer-events-none",
                        className)} {...other} >
            {children}
        </div>
    )
}

export default Card;