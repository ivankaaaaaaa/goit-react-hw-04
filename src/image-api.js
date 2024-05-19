import axios from "axios";

const baseURL = "https://api.unsplash.com/";
const API_KEY = "r-WvdyEszBNa-AavVNeDrFW7HusauF4iozCHJxYvpiE";

export const fetchImages = async (topic, page) => {
    try {
      const response = await axios.get(`${baseURL}/search/photos`, {
        params: {
          query: topic,
          client_id: API_KEY,
          page,
        },
      });
  
      console.log(response.data);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching articles:", error);
      throw error;
    }
  };