import axios from "axios";


export const fetchEmails = async (access_token) => {
  // Set up Axios instance with base URL and headers
  const axiosInstance = axios.create({
    baseURL: "https://gmail.googleapis.com/gmail/v1/users/me/",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  try {
    const response = await axiosInstance.get("messages");
    return response.data.messages;
  } catch (error) {
    console.error(
      "Error fetching emails:",
      error.response ? error.response.data : error.message
    );
    return [];
  }
};

