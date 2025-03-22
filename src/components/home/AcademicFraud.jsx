class AcademicCard {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}
const CARDS = [
  new AcademicCard(
    "⏳ Manual Verification is Slow & Inefficient",
    "Traditional processes take weeks, delaying hiring and increasing costs."
  ),
  new AcademicCard(
    "📜 Fake Degrees Cost Companies Millions",
    "Fraudulent credentials lead to unqualified hires, financial losses, and compliance risks."
  ),
  new AcademicCard(
    "🔐 Privacy Concerns in Traditional Systems",
    "Fraudulent credentials lead to unqualified hires, financial losses, and compliance risks."
  ),
  new AcademicCard(
    "🔐 Privacy Concerns in Traditional Systems",
    "Fraudulent credentials lead to unqualified hires, financial losses, and compliance risks."
  ),
];
export default function AcademicFraudSection() {
  return (
    <div className="text-white py-20">
      <h2 className="text-3xl font-medium">
        <span className="text-primary">Academic Fraud</span>
        <span> is a</span>
      </h2>
      <h1 className="text-5xl font-medium">
        <span className="text-primary">$1 Billion+</span>
        <span> Problem</span>
      </h1>

      <div className="flex flex-col gap-4 md:gap-6 md:grid grid-cols-2 grid-rows-2 mt-16 grid-flow-row-dense">
        {/* cards container  */}

        {CARDS.map((c, index) => (
          <div
            key={c.title + index.toString()}
            className="py-6 px-6 border-[1px] border-[#393131] rounded-4xl"
          >
            <div className=" text-xl text-primary font-bold"> {c.title}</div>
            <div className="mt-4 md:text-lg">{c.content} </div>
          </div>
        ))}
      </div>
    </div>
  );
}
