"use client";
import dynamic from "next/dynamic";

const QueryCalculator = dynamic(() => Promise.resolve(function QueryCalculator() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { useSearchParams } = require("next/navigation");
  const searchParams = useSearchParams();
  const aRaw = searchParams.get("a") || "0";
  const bRaw = searchParams.get("b") || "0";
  const a = parseFloat(aRaw);
  const b = parseFloat(bRaw);
  const sum = a + b;
  return (
    <div style={{ padding: 40 }}>
      <h1>Calculator – Query Parameters</h1>
      Raw query values (already decoded by Next.js):
      <p>a = <code>{aRaw}</code></p>
      <p>b = <code>{bRaw}</code></p>
      <h2 style={{ color: "green" }}>Sum = {sum}</h2>
    </div>
  );
}), { ssr: false });

export default function QueryCalculatorPage() {
  return <QueryCalculator />;
}