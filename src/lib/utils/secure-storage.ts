import CryptoJS from "crypto-js";

const SECRET_KEY = "5AyxUULpTIB5BJPLTUaQxeSntkjGDXymr8158vkJeaU=";

const encode = <T>(data: T): string => {
  try {
    const jsonData = JSON.stringify(data);

    return CryptoJS.AES.encrypt(jsonData, SECRET_KEY).toString();
  } catch (error) {
    console.error("Encode error:", error);

    return "";
  }
};

const decode = <T>(cipherText: string): T | null => {
  try {
    const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);

    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

    return JSON.parse(decryptedData);
  } catch (error) {
    console.error("Decode error:", error);

    return null;
  }
};

export const setItem = <T>(key: string, value: T) => {
  try {
    const encoded = encode(value);

    localStorage.setItem(key, encoded);
  } catch (error) {
    console.error("setItem error:", error);
  }
};

export const getItem = <T>(key: string): T | null => {
  try {
    const stored = localStorage.getItem(key);

    if (!stored) return null;

    return decode(stored);
  } catch (error) {
    console.error("getItem error:", error);

    return null;
  }
};

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

export const clearStorage = () => {
  localStorage.clear();
};
