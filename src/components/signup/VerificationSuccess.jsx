import Logo from "../layout/Logo";
import Button from "@/components/form/Button";

export default function VerificationSuccess() {
  return (
    <div className="py-16">
      <Logo size="text-4xl" />
      <p className="mt-2 text-[#5B5858]">
        Register your university to start issuing verifiable, fraud-proof
        academic credentials.
      </p>
      <p className="text-white mt-8">
        Verification successful! Please bind your wallet to enable secure login
        and access your dashboard in the future.
      </p>
      <Button className="mt-8" title="Connect Wallet" />
    </div>
  );
}
