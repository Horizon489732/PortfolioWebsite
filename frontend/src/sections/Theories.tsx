import { FC } from "react";

import Theory from "@/components/theoriesSectionComponents/Theory";

const myTheoryProjects = [
    {
        id: 1,
        title: "Factorization with Elliptic Curve with Lenstra theorem",
        description: "Lenstra's algorithm is like throwing darts at a target until you hit the bullseye. Each dart is a different elliptic curve, and hitting the bullseye means finding a prime factor of the number. For any given curve, we have some chance of success—if the group size works out nicely, we land the hit and uncover a factor. If that curve doesn't work, instead of giving up, we simply throw another dart by choosing a new curve. Because the group sizes change a lot from curve to curve, the odds of eventually hitting the prime factor are pretty good",
        theory: [
            "Let n ≥ 2 be composite. Ensure gcd(n,6) = 1 and n is not a perfect power",
            "Randomly select integers b, x₁, y₁ modulo n; define P = (x₁, y₁) and c ≡ y₁² − x₁³ − b·x₁ (mod n)",
            "Define the elliptic curve E: y² = x³ + b·x + c over ℤ/nℤ",
            "For d = 2, 3, ..., dₘₐₓ, compute Q = d·P (mod n) iteratively; update P = Q",
            "If computation fails (division by non-invertible element), gcd gives a non-trivial divisor g of n",
            "If g < n, return g. Otherwise, pick a new curve and point, repeat the process",
            "Repeat until a non-trivial factor is found. Variability in #E(ℤ/pℤ) across curves improves success probability"
        ],
        href: "",
        tags: ["Python"]
    },
    {
        id: 2,
        title: "Legendre's Theorem & Lagrange's Descent",
        description: "Legendre gave necessary and sufficient conditions for the solvability of the Diophantine equation aX² + bY² + cZ² = 0 with non-zero, square-free coefficients. Lagrange's descent is a method to prove existence of solutions iteratively",
        theory: [
            "Equation: aX² + bY² = cZ² with a, b, c ≠ 0 and square-free",
            "Non-trivial solution exists iff:",
            "1. Not all of a, b, c have the same sign",
            "2. Legendre conditions modulo each coefficient:",
            "-b·c is a quadratic residue mod |a|",
            "-a·c is a quadratic residue mod |b|",
            "-a·b is a quadratic residue mod |c|",
        ],
        href: "",
        tags: ["Java"]
    }
]

const Theories: FC = () => {

    return (
        <section id="theories" className="mt-24">
            <h2 className="font-semibold text-3xl mb-10 md:mb-14 text-center mt-6 md:text-5xl">Theory into Practice</h2> 
            <div className="m-auto bg-gradient-to-r from-secondary-light to-secondary-dark h-[1px] w-[30vw]"></div>
            <div className="pt-5">
                {myTheoryProjects.map((project) => 
                    <Theory key={project.id} projectId={project.id} title={project.title} description={project.description} theory={project.theory} href={project.href} tags={project.tags} />
                )}
            </div>
        </section>
    );

}

export default Theories;