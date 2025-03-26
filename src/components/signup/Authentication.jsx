'use client';

import React from 'react';
import AuthSideBar from '../layout/AuthSideBar';
import Input from '@/components/form/Input'
import Button from '@/components/form/Button'
import Logo from '../layout/Logo';

const Authentication = () => {
  const txtRecord = "cb4b2af445a8a5e0d5b8f6f5d2c";

  const handleDownload = () => {
    // Create a blob with the TXT record content
    const blob = new Blob([txtRecord], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'unichain_txt_record.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleVerify = () => {
    // Add verification logic here
    console.log('Verifying TXT record...');
  };

  return (
    <div className="w-full">
      
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 rounded-3xl overflow-hidden w-full justify-center'>
      <div className="flex flex-col w-full  p-6">
      <Logo />
          <p className="text-dim lg:text-2xl font-light">
            Register your university to start issuing verifiable, fraud-proof
            academic credentials.
          </p>
        <div className="w-full text-left mb-6">
          <h2 className="text-2xl font-semibold mb-2">Authentication & Security</h2>
          <p className="text-white text-sm lg:text-2xl font-light">
            Download and add this TXT record to the university domain
          </p>
        </div>

        <div className="w-full space-y-4">
          <div className="relative w-full">
            <Input
              type="text"
              value={txtRecord}
              readOnly
              className="pr-12 font-mono"
            />
            <button
              onClick={handleDownload}
              className="absolute rounded-[20px] right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-[#A3FF50]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
          </div>

          <Button
                type="submit"
                className="mt-8"
                title="Verify"
                onClick={handleVerify}
              />

        </div>
      </div>
      <AuthSideBar
        title="Authentication & Security"
        currentStep={3}
        totalSteps={3}
        showIndicators={true}
      />
      </div>

    </div>
  );
};

export default Authentication; 