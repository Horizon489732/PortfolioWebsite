"use client";

import { FC } from "react";

const Footer: FC = () => {
  
  const navItems = [
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

const socialLinks = [
  {
    name: "Github",
    icon: <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="size-5 fill-current"
        >
          <path d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z" />
        </svg>,
    href: "https://github.com/Horizon489732"
  },
  {
    name: "Linkedin",
    icon: <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56.693 56.693"
          className="size-5 fill-current"
        >
          <path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z" />
        </svg>,
    href: "https://www.linkedin.com/in/hien-tran-972b9b18a/"
  },
]

  return (
  <footer id="footer" className="py-24 md:py-32 lg:py-40 mt-12 md:mt-16 lg:mt-20 border-t border-primary-light bg-primary-dark">

    <div className="container text-support-brown lg:!max-w-full">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8">
        <h6 className="font-extrabold text-2xl">Explore</h6>
        <nav className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {navItems.map((item) => (
            <a href={item.href} key={item.href} className="relative uppercase text-xs tracking-widest font-bold text-accent pb-1
                                                           after:content-[''] after:absolute after:left-0 after:top-full after:h-px after:w-0 
                                                           after:bg-accent after:transition-all after:duration-500 
                                                           hover:after:w-full"
               onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(item.href);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth"})
                }
               }}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-16 flex flex-col md:flex-row-reverse items-center md:justify-between gap-8">
        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <a href={link.href} key={link.name} className="cursor-pointer hover:scale-105" target="_blank" rel="noopener noreferrer">
              <div className="size-10 rounded-full bg-neutral-light text-primary-dark inline-flex items-center justify-center">
                {link.icon}
              </div>
            </a>
          ))}
        </div>
        <p className="text-support-brown text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>

    </div>

  </footer>);
};

export default Footer;
