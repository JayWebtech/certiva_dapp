import { v4 as uuidv4 } from "uuid";
import * as passworder from '@metamask/browser-passworder';


const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const REQUIRED_HEADERS = ['name', 'graduation_year', 'grade', 'email', 'major', 'title'];

interface CertificateData {
    name:               string;
    graduation_year:    string;
    grade:              string;
    title:              string;
    major:              string;
    uniqueID:           string;
    school:             string;
}

export const checkCSVHeaders = (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            const text = event.target?.result as string;
            const lines = text.split(/\r\n|\n/);

            const headers = lines[0].split(",").map(h => h.trim());

            // Check if all required headers are present
            const missingHeaders = REQUIRED_HEADERS.filter(header => !headers.includes(header));
            
            if (missingHeaders.length > 0) {
                reject(`Missing headers in CSV: ${missingHeaders.join(", ")}`);
            } else {
                resolve();
            }
        };

        reader.onerror = () => {
            reject("Failed to read file");
        };

        reader.readAsText(file);
    });
};

export const extractCSVData = (file: File): Promise<{ headers: string[], body: string[][] }> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            const text = event.target?.result as string;
            const lines = text.split(/\r\n|\n/);

            // Extract headers (first line)
            const headers = lines[0].split(",").map(h => h.trim());

            // Extract body (remaining lines)
            const body = lines.slice(1).map(line => line.split(",").map(cell => cell.trim()));

            resolve({ headers, body });
        };

        reader.onerror = () => {
            reject("Failed to read file");
        };

        reader.readAsText(file);
    });
};

export const checkCSVData = (body: string[][]): Promise<void> => {
    return new Promise((resolve, reject) => {
        body.forEach((row, index) => {
            REQUIRED_HEADERS.forEach((header, headerIndex) => {
                const value = row[headerIndex]?.trim();
                if (!value) {
                    reject(`Missing value in field "${header}" at row ${index + 2}. Please fill in the missing data.`);
                }
            });
        });
        resolve();
    });
};


export const addUniqueIDToRows = (body: string[][]): string[][] => {
    return body.map(row => {
        const uniqueID = uuidv4();
        return [...row, uniqueID];
    });
};

export const addUniqueIDToHeader = (header: string[]): string[] => {
    return [...header, "uniqueID"];
};
  

export const convertToCSV = (body: string[][], headers: string[]): string => {
    const allRows = [headers, ...body];
    return allRows.map(row => row.join(",")).join("\n");
};

  

export const generate32ByteSecret = async (certificatedData: CertificateData) => {
    let result = '';
    const charactersLength = characters.length;
    
    for (let i = 0; i < 32; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters[randomIndex];
    }

    // Convert the secret to a buffer for hashing
    const encoder = new TextEncoder();
    const data = encoder.encode(result);
    
    // Generate SHA-256 hash
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');


    // Encrypt the data
    const encryptedData = await passworder.encrypt(hash, certificatedData);
  
    return {
        result, 
        hash,
        encryptedData
    };
}