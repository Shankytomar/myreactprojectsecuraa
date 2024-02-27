import axios from "axios";
import { useState } from "react";
async function ApiCall() {
    const [result, setResult] = useState([]);
    const [counts, setCounts] = useState("");
    let response=0;
    try {
      response = await axios.get('https://swapi.dev/api/planets/');
      
    } catch (error) {
      // Handle errors here
      console.error('Error fetching planets data:', error);
      throw error; // Re-throw the error to propagate it to the caller
    }
    setCounts(response.data.count)
    setResult(response.data.results)
    console.log(response.data);
    console.log("counts",counts);
    return [counts,result];
  }

export default ApiCall;