"use client";
import dynamic from "next/dynamic";

const QueryCalculator = dynamic(
  () => import("./QueryCalculatorContent"),
  { ssr: false }
);

export default function QueryCalculatorPage() {
  return <QueryCalculator />;
}