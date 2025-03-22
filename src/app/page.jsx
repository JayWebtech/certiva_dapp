import AcademicFraudSection from "@/components/home/AcademicFraud";
import Faq from "../components/home/Faq";
import Footer from "../components/layout/Footer";
import UnichainSolution from "@/components/home/UnichainSolution";
import WhoCanBenefit from "@/components/home/WhoCanBenefit";

export default function Home() {
  return (
    <div>
      <AcademicFraudSection />
      <UnichainSolution />
      <WhoCanBenefit />
      <Faq />
      <Footer />
    </div>
  );
}
