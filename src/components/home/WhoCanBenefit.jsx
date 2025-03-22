class BenficiaryCard {
  constructor(title, items) {
    this.title = title;
    this.items = items;
  }
}
const CARDS = [
  new BenficiaryCard("For universities", [
    "Issue verified, tamper-proof degrees",
    "Protect reputation & combat fraud",
    "Improve graduate employability",
  ]),
  new BenficiaryCard("For Employers & HR Platforms", [
    "Instantly verify academic credentials",
    "Reduce hiring risks & compliance issues",
    "Integrate verification via API",
  ]),
  new BenficiaryCard("For Students & Graduates", [
    "Own and share verifiable degrees",
    "No paperwork, no delays",
    "Protect your academic reputation",
  ]),
  new BenficiaryCard("For Developers", [
    "Build on UniChain’s API",
    "Secure integrations for EdTech & HR platforms",
    "Open-source development opportunities",
  ]),
];
export default function WhoCanBenefit() {
  return (
    <div className="text-white py-20 ">
      <h4 className="text-primary text-5xl font-bold">Who Can Benefit? </h4>
      <p className="text-2xl mt-2">
        Bringing Trust, Speed, and Security to Academic Credentials{" "}
      </p>
      <div className="flex flex-col gap-4 md:gap-6 md:grid grid-cols-2 grid-rows-2 mt-20 grid-flow-row-dense">
        {/* cards contianer  */}

        {CARDS.map((c, index) => (
          <div
            key={c.title + index.toString()}
            className="py-6 px-6 border-[1px] border-[#393131] rounded-4xl text-white relative"
          >
            <div className=" text-2xl text-primary font-bold"> {c.title}</div>
            <ul className="mt-4 list-disc px-6 leading-loose">
              {c.items.map((item, itemIndex) => (
                <li key={"a " + itemIndex.toString()}>{item} </li>
              ))}{" "}
            </ul>
            <img
              src={"/img/pentagons.svg"}
              className="absolute bottom-2 right-2 w-[160px] h-[auto]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
