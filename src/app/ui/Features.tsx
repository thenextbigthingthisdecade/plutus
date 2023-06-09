import { Card } from "./Card";

export const Features = () => {
  return (
    <section className="">
      <div className="max-w-container mx-auto flex flex-col items-center">
        <div className="flex gap-2 lg:gap-4 items-baseline">
          <h2 className="text-[32px] leading-[1.25] tracking-[-0.04em] text-transparent bg-hero bg-clip-text font-semibold">
            What&apos;s in Plutus?
          </h2>
          <p className="text-xl leading-6 text-gray-11 font-light tracking-[-0.02em]">
            All the tools you need to get better at Interviewing. Faster.
          </p>
        </div>
        <div className="my-12 grid grid-cols-2 lg:grid-cols-3 gap-8 grid-flow-row-dense">
          <Card href={"/"} title={"Instantly find a partner"} />
          <Card href={"/"} title={""} />
          <Card href={"/"} title={""} />
        </div>
      </div>
    </section>
  );
};
