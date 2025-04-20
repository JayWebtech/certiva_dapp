# Certiva: Decentralized Academic Credential Verification 🎓🔗

Certiva is a **decentralized, blockchain-based platform** built on **Starknet** that revolutionizes the way academic credentials are issued, stored, and verified. By leveraging **Zero-Knowledge Proofs (ZKPs)** and **tamper-proof blockchain technology**, Certiva eliminates academic fraud, ensures privacy, and provides instant verification for employers and institutions.

---

## 🌟 Why Certiva?

Academic credential fraud is a growing problem, and traditional verification methods are slow, costly, and prone to errors. Certiva solves this by:

- **Eliminating fraud** with blockchain-backed, tamper-proof degrees.
- **Protecting privacy** using hashed identifiers and ZKPs.
- **Enabling instant verification** for employers and institutions.
- **Seamlessly integrating** with HR platforms, job portals, and university systems via APIs.

---

## 🛠️ How It Works

### 1. Degree Issuance by Universities

- Universities issue degrees through Certiva’s platform.
- Each degree is **digitally signed** and stored on the blockchain.
- Universities prove domain ownership using **DNS verification** to ensure authenticity.

### 2. Secure Storage

- Degree metadata is stored on **Starknet** for immutability.

### 3. Privacy-Preserving Verification

- Employers and institutions can verify degrees in **real-time** without accessing sensitive student data.
- **Zero-Knowledge Proofs (ZKPs)** ensure privacy by allowing verification without exposing personal information.

### 4. Student Consent for Verification

- Before certificates are published on-chain, the student must provide their **public wallet address**.
- When an employer initiates verification, the student must **sign a message** off-chain to approve the verification request.
- This ensures that even if someone has access to the student’s ID, they cannot verify the certificate without the student’s explicit permission.

---

### **Key Points**

1. **Public Wallet Address:**

   - The student provides their public wallet address during certificate issuance.
   - This address is used to verify the student’s identity during the verification process.

2. **Off-Chain Signing:**

   - The student signs a structured message (e.g., containing the certificate hash and employer’s address) using their wallet.
   - This signature proves that the student has authorized the verification request.

3. **On-Chain Verification:**

   - The employer submits the signed message to the blockchain.
   - A smart contract verifies the student’s signature and the certificate’s validity.

4. **Explicit Permission:**
   - Without the student’s signature, the verification request cannot proceed.
   - This prevents unauthorized parties from verifying the certificate, even if they have access to the student’s ID.

---

### 5. Seamless Integration

- Certiva provides **APIs** for easy integration with HR platforms, job portals, and university systems.

---

## 🚀 Key Features

- **Decentralized Verification:** Built on StarkNet for secure, scalable, and low-cost transactions.
- **Tamper-Proof Degrees:** Blockchain-backed credentials that cannot be forged.
- **Instant Verification:** Real-time credential checks for employers and institutions.
- **Privacy Protection:** Hashed identifiers and ZKPs ensure student data remains private.
- **Student Consent:** Verification requires the student’s explicit approval via wallet signature.
- **API Integration:** Easy integration with existing systems for universities and employers.

---

## 🧩 Tech Stack

- **Blockchain Layer:** StarkNet (Cairo for smart contracts).
- **Storage:** IPFS/Arweave for off-chain data.
- **Privacy:** Zero-Knowledge Proofs (ZKPs).
- **Frontend:** React.js for user-friendly interfaces.
