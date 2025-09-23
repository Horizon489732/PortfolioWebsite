import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                sm: "375px",
                md: "768px",
                lg: "1200px",
            },

            colors: {
                primary: {
                    DEFAULT: "#E43D12", // fiery red-orange
                    light: "#F16548",
                    dark: "#B22F0E",
                },
                secondary: {
                    light: "#FFA2B6", // light pink
                    dark: "#D6536D",   // darker pink
                },
                accent: {
                    DEFAULT: "#EFB11D", // yellow
                },
                neutral: {
                    light: "#EBE9E1",
                    dark: "#9ca3af",
                },
                support: {
                    blue: "#125EE4",
                    teal: "#12E4A7",
                },
            },

            fontFamily: {
                sans: 'var(--font-archivo)'
            },

            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    md: "2rem",
                    lg: "4rem",
                }
            },
        },
    },
    plugins: [],
};
export default config;
