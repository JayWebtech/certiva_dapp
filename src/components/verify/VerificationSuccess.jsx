import Image from "next/image";
import { Button } from "../form";

export default function VerificationSuccess() {
  let code = "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa";

  return (
    <div className="flex flex-col gap-8 text-white p-[90px] bg-black">
      <header>
        <Image width={215} height={60} src="/img/logo.svg" alt="" />
        <p className="text-lg lg:text-3xl text-white mt-2 mb-6">
          Verification details for <span className="text-primary">{code}</span>
        </p>
        <p className="text-[#3D3D3D] text-xs lg:text-2xl">
          This certificate has been successfully verified on UniChain.com,
          confirming its authenticity and legitimacy. It is securely recorded on
          the blockchain, ensuring it is tamper-proof and verifiable in real
          time.
        </p>
      </header>

      <section className="flex justify-between gap-5 border border-neutral-700 rounded-3xl px-3 md:px-11 py-10">
        <div className="flex flex-col gap-8">
          <span>
            <p className="text-primary">University Name:</p>
            <p className="text-lg lg:text-3xl">Harvard University</p>
          </span>
          <span>
            <p className="text-primary">Degree Title & Major:</p>
            <p className="text-lg lg:text-3xl">
              Bachelor of Science in Computer Science
            </p>
          </span>
          <span>
            <p className="text-primary">Graduation Year:</p>
            <p className="text-lg lg:text-3xl">2023</p>
          </span>
          <span>
            <p className="text-primary">Verification Timestamp:</p>
            <p className="text-lg lg:text-3xl">12th Oct, 2025</p>
          </span>
          <span>
            <p className="text-primary">Blockchain Proof:</p>
            <p className="text-lg lg:text-3xl">
              0x421fef00327d2f6f5b451c6f8dfc2bb38e5246
            </p>
          </span>
          <span>
            <p className="text-primary">Security Status: </p>
            <p className="text-lg lg:text-3xl">✅ Verified & Tamper-Proof</p>
          </span>
        </div>

        <div>
          <img src="/img/qr-code.svg" alt="" />
          <h5 className="font-medium text-xl text-white text-center">
            Scan to view on explorer
          </h5>
        </div>
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
