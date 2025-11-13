import axios from "axios";

export const fetchTranslations = async (langCode) => {
  try {
    const response = await axios.get(`/locales/${langCode}/translation.json`);
    return response.data;
  } catch (error) {
    console.error("Error fetching translations:", error);
    return {};
  }
};
