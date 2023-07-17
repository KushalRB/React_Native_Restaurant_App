import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResult] = useState([]);
  const [errorMessage, setError] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("Hi");
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchTerm,
          location: "san jose",
          limit: 50,
        },
      });
      setResult(response.data.businesses);
    } catch (e) {
      console.log(e);
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, errorMessage, results];
};
