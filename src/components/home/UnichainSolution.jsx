const Step = ({ stepNumber, primaryText, secondaryText, isLastStep }) => {
  return (
    <>
      <div className="flex items-start gap-x-4">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center bg-primary text-black font-bold text-xl rounded-full">
            {stepNumber}
          </div>
          {isLastStep ? null : <div className="h-16 w-1 bg-primary"></div>}
        </div>
        <div className="text-base">
          <p className="">{primaryText}</p>
          <p className="">{secondaryText}</p>
        </div>
      </div>
    </>
  );
};

function SolutionTimeline() {
  return (
    <div className="flex flex-col items-start py-6 text-white">
      {/* Step 1 */}

      <Step
        stepNumber={1}
        primaryText={"Universities Register & Issue Degrees"}
        secondaryText={"(ENS/DNS verified, on-chain storage)"}
      />
      {/* Step 2 */}
      <Step
        stepNumber={2}
        primaryText={"Graduates Receive Secure Credentials"}
        secondaryText={"(Unique Degree ID, ZK-Proofs for Privacy)"}
      />

      {/* Step 3 */}
      <Step
        stepNumber={3}
        primaryText={"Employers & Institutions Instantly Verify"}
        secondaryText={"(Real-time blockchain verification)"}
        isLastStep
      />
    </div>
  );
}

export default function UnichainSolution() {
  return (
    <div className="text-white py-5 lg:py-20 flex flex-col lg:flex-row lg:items-center">
      <div className="md:basis-1/2 grow">
        <h4 className="text-primary text-3xl lg:text-5xl font-bold">
          The Unichain Solution
        </h4>
        <p className="text-xl mt-2">
          Seamless, Secure, and Instant Verification
        </p>

        <div className="mt-8">
          <SolutionTimeline />
        </div>
      </div>
      <div className="basis-1/2 items-center justify-center flex lg:flex">
        {/* globe icon */}
        <img src={"/img/globe.png"} className="w-[50%] lg:w-[80%] h-auto" />
      </div>
    </div>
  );
}
