"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

// Lazy-load syntax highlighter to keep bundle small
const SyntaxHighlighter = dynamic(() => import("react-syntax-highlighter"), {
  ssr: false,
});

export default function LegendreSection() {
  const [a, setA] = useState("");
  const [p, setP] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleCompute = async () => {
    const res = await fetch(
      `http://localhost:8000/legendre?a=${a}&p=${p}`
    );
    const data = await res.json();
    setResult(data.legendre);
  };

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container max-w-4xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-6">
          Legendre Symbol Calculator
        </h2>
        
        {/* Theory */}
        <p className="text-lg mb-6 leading-relaxed">
          The <em>Legendre symbol</em> is defined as:
        </p>
        <BlockMath math="\left(\frac{a}{p}\right) = a^{\frac{p-1}{2}} \pmod{p}" />
        <p className="mt-4 text-gray-700">
          It determines whether <code>a</code> is a quadratic residue modulo an odd prime <code>p</code>.
          If the value is <strong>1</strong>, <code>a</code> is a square mod <code>p</code>; if <strong>-1</strong>, it is not.
        </p>

        {/* Code Snippet */}
        <div className="bg-black text-white rounded-xl p-4 my-8 overflow-x-auto">
          <SyntaxHighlighter language="python">
{`def legendre(a, p):
    \"\"\"Compute the Legendre symbol (a/p).\"\"\"
    result = pow(a, (p - 1) // 2, p)
    return -1 if result == p - 1 else result`}
          </SyntaxHighlighter>
        </div>

        {/* Interactive Demo */}
        <div className="border rounded-xl p-6 shadow-md bg-white">
          <h3 className="text-2xl font-semibold mb-4">Try It Yourself</h3>
          <div className="flex gap-2 mb-4">
            <input
              value={a}
              onChange={(e) => setA(e.target.value)}
              placeholder="Enter a"
              className="border p-2 rounded w-1/2"
            />
            <input
              value={p}
              onChange={(e) => setP(e.target.value)}
              placeholder="Enter prime p"
              className="border p-2 rounded w-1/2"
            />
          </div>
          <button
            onClick={handleCompute}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Compute
          </button>
          {result !== null && (
            <p className="mt-4 text-lg">
              Result:{" "}
              <span className="font-bold text-blue-600">
                {result}
              </span>
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
