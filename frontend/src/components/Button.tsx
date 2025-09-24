import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Button = (props: 
    {
        variant: "primary" | "secondary" | "text";
        iconAfter?: ReactNode;
    } &
    ButtonHTMLAttributes<HTMLButtonElement>) => {
    
    const { variant, iconAfter, className, children, ...rest } = props;
    
    return(
        <button className={twMerge("h-11 px-6 rounded-xl border border-secondary-light uppercase inline-flex items-center gap-2 cursor-pointer transition-all duration-500 relative group/button",
                                variant === "primary" && "bg-secondary-light text-white",
                                variant === "secondary" && "hover:bg-primary hover:text-support-orange hover:border-primary",
                                variant === "text" && "h-auto px-0 border-transparent after:content-[''] after:transition-all after:duration-500 after:h-px after:w-0 after:absolute after:top-full after:bg-primary hover:after:w-full", className)}{...rest}>
            <span>{children}</span>
            {iconAfter && <span>{iconAfter}</span>}
        </button>
    );
}

export default Button;