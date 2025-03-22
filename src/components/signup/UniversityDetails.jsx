"use client";
import { useState } from "react"
import Input  from "@/components/form/Input"
import  Button  from "@/components/form/Button"
// import  Select  from "@/components/form/Select"
import AuthSideBar from "../layout/AuthSideBar";
import { ChevronDown } from "lucide-react"


export default function UniversityRegistrationForm() {
  const [country, setCountry] = useState("Nigeria")
  const [showDropdown, setShowDropdown] = useState(false)

  const countries = ["Nigeria", "USA", "UK", "Canada"]

  return (
    <div className="flex w-full flex-col lg:flex-row rounded-3xl overflow-hidden">
      <div className="w-full lg:w-1/2 p-8 lg:p-12">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-white">uni</span>
            <span className="text-[#A3FF50]">chain</span>
          </h2>
          <p className="text-zinc-400">
            Register your university to start issuing verifiable, fraud-proof academic credentials.
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="university-name" className="block mb-2 text-white">
              University name
            </label>
            <Input
              id="university-name"
              placeholder="e.g Harvard"
            />
          </div>

          <div>
            <label htmlFor="official-domain" className="block mb-2 text-white">
              Official Domain
            </label>
            <Input
              id="official-domain"
              placeholder="e.g www.harvard.edu"
            />
          </div>

          <div className="relative">
            <label htmlFor="country" className="block mb-2 text-white">
              Country
            </label>
            <div
              className="w-full bg-transparent border border-[#444645] text-white h-14  rounded-[12px] flex items-center justify-between px-4 py-[12px] cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span>{country}</span>
              <ChevronDown className="h-5 w-5 text-[#A3FF50] border border-[#A3FF50] rounded-full" />
            </div>

            {showDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-zinc-900 border rounded-md shadow-lg">
                {countries.map((option) => (
                  <div
                    key={option}
                    className="px-4 py-2 hover:bg-zinc-800 cursor-pointer text-white"
                    onClick={() => {
                      setCountry(option)
                      setShowDropdown(false)
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <label htmlFor="accreditation" className="block mb-2 text-white">
              Accreditation Body (Optional)
            </label>
            <Input
              id="accreditation"
              placeholder="e.g U.S. Department of Education"
            />
          </div>

          
          <Button className="mt-8" title="Next step" />
        </form>
      </div>

      <div className="w-full lg:w-1/2 bg-black">
        <AuthSideBar title="University Details" currentStep={1} totalSteps={3} showIndicators={true}/>
      </div>
    </div>
  )
}