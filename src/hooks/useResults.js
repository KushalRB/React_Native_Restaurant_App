import {useEffect,useState} from "react";
import yelp from "../api/yelp";

export default () => {
  const [result, setResult] = useState([]);
  const [errorMessage, setError] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("Hi");
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchTerm ,
          location: "san jose",
        },
      });
      console.log(response);
      setResult(response.data.businesses);
    } catch (e) {
        console.log(e)
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi();
  }, []);

  return[searchApi, errorMessage, result]
};
