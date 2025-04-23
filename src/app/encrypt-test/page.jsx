'use client'; 

import { useState } from 'react';
import * as passworder from '@metamask/browser-passworder';

export default function CertificateDemo() {
  const [isLoading, setIsLoading] = useState(false);
  const [encryptedData, setEncryptedData] = useState(null);
  const [decryptedData, setDecryptedData] = useState(null);
  const [error, setError] = useState(null);

  const certificateData = {
    name: "Adamu Jethro",
    grade: "First Class",
    school: "ABU Zaria",
    course: "Computer Science"
  };

  const handleEncrypt = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const verificationSecret = "123456";
      
      // Encrypt the data
      const encryptedCertificate = await passworder.encrypt(
        verificationSecret, 
        certificateData
      );
      
      setEncryptedData(btoa(JSON.stringify(encryptedCertificate, null, 2)));
      
      // Decrypt the data to verify
      const decrypted = await passworder.decrypt(
        verificationSecret,
        encryptedCertificate
      );
      
      setDecryptedData(decrypted);
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred during encryption/decryption");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6">Certificate Encryption Demo</h1>
      
      <div className="flex flex-col gap-6">
        <div className="border border-gray-200 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Original Certificate Data</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            {JSON.stringify(certificateData, null, 2)}
          </pre>
        </div>
        
        <button
          onClick={handleEncrypt}
          disabled={isLoading}
          className={`px-4 py-2 rounded text-white font-medium ${
            isLoading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          {isLoading ? 'Encrypting...' : 'Encrypt Data'}
        </button>
        
        {error && (
          <div className="text-red-500 p-3 bg-red-50 rounded">
            {error}
          </div>
        )}
        
        {encryptedData && (
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Encrypted Data</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
              {encryptedData}
            </pre>
          </div>
        )}
        
        {decryptedData && (
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Decrypted Data</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
              {JSON.stringify(decryptedData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}