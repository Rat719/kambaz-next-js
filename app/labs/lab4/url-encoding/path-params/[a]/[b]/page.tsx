export default async function QueryCalculator({
  searchParams,
}: {
  searchParams: Promise<{ a?: string; b?: string }>;
}) {
  const { a: aParam, b: bParam } = await searchParams;
  const aRaw = aParam || "0";
  const bRaw = bParam || "0";
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
}