import { transform } from "next/dist/build/swc";
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
                    dark: "#F1F1FB",
                },
                support: {
                    orange: "#FFB48F",
                    brown: "#F5E6CC",
                },
            },

            fontFamily: {
                sans: 'var(--font-archivo)'
            },

            keyframes: {
                "move-left": {
                    "0%": {
                        transform: "translateX(0%)"
                    },
                    "100%": {
                        transform: "translateX(-50%)"
                    },
                },

                "spin": {
                    "0%": {
                        transform: "rotate(0deg)"
                    },
                    "100%": {
                        transform: "rotate(360deg)"
                    }
                },
            },

            animation: {
                "move-left": "move-left 1s linear infinite",
                "spin": "spin 2s linear infinite",
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
