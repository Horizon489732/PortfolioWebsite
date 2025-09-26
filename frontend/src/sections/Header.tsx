"use client";

import { FC, useEffect, useState } from "react";
import { motion, useAnimate } from "motion/react";

import Button from "@/components/Button";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "Introduction",
    href: "#intro",
  },
  {
    label: "Featured Projects",
    href: "#projects",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();
  

  useEffect(() => {

    if (isOpen) {
   
      topLineAnimate([
        [topLineScope.current, { translateY: 4 }],
        [topLineScope.current, { rotate: 45 }],
      ]);

      bottomLineAnimate([
        [bottomLineScope.current, { translateY: -4 }],
        [bottomLineScope.current, { rotate: -45 }],
      ]);

      navAnimate([
        [navScope.current, {height: "auto", duration: 0.7}],
      ]);

    } else {
      
      topLineAnimate([
        [topLineScope.current, { rotate: 0 }],
        [topLineScope.current, { translateY: 0 }],
      ]);

      bottomLineAnimate([
        [bottomLineScope.current, { rotate: 0 }],
        [bottomLineScope.current, { translateY: 0 }],
      ]);

      navAnimate([
        [navScope.current, {height: 0, duration: 0.7}],
      ]);

    }
  }, [isOpen, topLineAnimate, topLineScope, bottomLineAnimate, bottomLineScope, navAnimate, navScope]);

  const handleClinkMobileNavItems = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    const url = new URL(e.currentTarget.href);
    const hash = url.hash;
    const target = document.querySelector(hash);
    if (!target) return;

    setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth"});
    }, 0);
  
  }

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md z-50">
      <div ref={navScope} className="fixed top-[80px] left-0 w-full h-0 overflow-hidden bg-neutral-light">
          <nav className="flex flex-col">
            {navItems.map(({label, href}) => (
              <a href={href} key={label} className="py-8 text-secondary-dark border-t last:border-b border-secondary-light group/nav-items relative isolate cursor-pointer"
                 onClick={handleClinkMobileNavItems}>

                <div className="container !max-w-full flex items-center justify-between">
                  <span className="text-3xl group-hover/nav-items:pl-4 transition-all durantion-500">{label}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>

                <div className="absolute w-full h-0 bg-support-brown group-hover/nav-items:h-full transition-all duration-500 bottom-0 -z-10"></div>
              </a>
            ))}
          </nav>
      </div>
      
      <div className="container !max-w-full">
        <div className="flex justify-between h-20 items-center">
          <div>
            <a href="/"><span className="text-xl font-bold uppercase">Hien&nbsp; Tran</span></a>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-11 border border-primary-light rounded-full inline-flex items-center justify-center cursor-pointer"
                 onClick={() => setIsOpen(!isOpen)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.rect x="3" y="7" width="18" height="2" fill="currentColor" ref={topLineScope}
                               style = {{transformOrigin:"12px 8px"}}/>

                  <motion.rect x="3" y="15" width="18" height="2" fill="currentColor" ref={bottomLineScope}
                               style = {{transformOrigin:"12px 16px"}}/>
              </svg>
            </div>
            <Button variant="primary" className="hidden md:inline-flex">Contact Me</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
