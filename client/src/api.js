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
    const response = await axiosInstance.get("threads?q='unsubscribe'");
    return response.data.messages;
  } catch (error) {
    console.error(
      "Error fetching emails:",
      error.response ? error.response.data : error.message
    );
    return [];
  }
};

export const retrieveAccessToken = async (user, setProfile, setEmails) => {
  if (user) {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        setProfile(res.data);
        console.log(res.data);
        fetchEmails(user.access_token).then((res) => {
          setEmails(res);
          console.log(res);
        });
      })
      .catch((err) => console.log(err));
  }
}

