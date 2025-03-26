import { useState } from "react";
import { Button, Field } from "../form";
import Input from "../form/Input";
import Logo from "../layout/Logo";
import { Copy } from "lucide-react";

const Approval = () => {
  const handleSubmit = (e) => {};

  return (
    <div className="container mx-auto  py-14 ">
      <div className="flex  justify-between gap-[100px]  w-full text-white">
        <div className="w-full  space-y-8 px-4">
          <div className="mb-10 max-w-[771px]">
            <Logo />
            <p className="mt-4 text-gray-400">
              0x458586 is requesting your approval to verify your degree
              certificate. Please grant them access.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input type={"password"} Icon={Copy} />
            </div>
            <div className="flex gap-[20px]">
              <Button title={"Approve"} />
              <Button title={"Reject"} variant="error" />
            </div>
          </form>
        </div>
        <div className=" bg-hero bg-no-repeat w-full  bg-[length:80%_100%] bg-top relative border-[3px] rounded-[30px]  max-w-[810px] min-h-[900px] max-xl:hidden  overflow-hidden">
          <div className="absolute max-xl:inset-x-0  inset-x-0 bottom-[50px]  w-full z-10 flex justify-center">
            <p className="text-[#A3FF50]  text-[2.5rem]  font-extrabold text-center">
              Approve Verification
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approval;
