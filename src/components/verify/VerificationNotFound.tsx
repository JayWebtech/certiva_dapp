import Image from "next/image";
import { Button } from "../form";

export default function VerificationNotFound() {
  let code = "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa";

  return (
    <div className="flex flex-col gap-8 text-white">
      <header>
        <Image width={100} height={60} src="/img/logo.svg" alt="" />
        <p className="text-lg lg:text-3xl text-white">
          Verification details for <span className="text-primary">{code}</span>
        </p>
      </header>

      <section className="flex flex-col gap-8 border border-neutral-700 rounded-3xl px-3 md:px-16 py-12">
        <h1 className="text-3xl lg:text-6xl text-primary">
          <span>⚠️</span>
          Degree not Found
        </h1>

        <span>
          <p className="text-primary">Message:</p>
          <p className="text-lg lg:text-3xl">
            No record found for this Degree ID. Please check the details and try
            again.
          </p>
        </span>
        <span>
          <p className="text-primary">CTA: </p>
          <p className="text-lg lg:text-3xl">
            Contact University for Clarification
          </p>
        </span>
      </section>

      <div className="w-full md:max-w-5xl mx-auto flex flex-col md:flex-row gap-2 lg:gap-8">
        <Button variant="primary" title="Download Report" size="lg" />
        <Button
          variant="secondary"
          title="View on explorer"
          className="bg-white !text-black"
          size="lg"
        />
      </div>
    </div>
  );
}
