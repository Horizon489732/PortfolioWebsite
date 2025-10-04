import { twMerge } from "tailwind-merge";
import { ComponentPropsWithoutRef } from "react";

const LoaderModal = ({ className, children, ...other }:ComponentPropsWithoutRef<"div">) => {
       
    return(
        <div className={twMerge("fixed z-10 left-0 top-0 w-full h-full flex items-center justify-center bg-black/40", className)} {...other}>
            <div className="m-auto p-4 bg-neutral-light rounded-r-sm flex gap-4 items-center shadow-sm">
                <div className="w-6 h-6 md:w-12 md:h-12 animate-spin rounded-full bg-gradient-to-r from-support-brown to-primary p-[2px]">
                    <div className="w-full h-full rounded-full bg-neutral-light"></div>
                </div>
                {children}
            </div>
        </div>
    );
}

export default LoaderModal;