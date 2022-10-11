import React, {useState} from 'react';
import { SearchInput } from './SearchInput/SearchInput';
import {getConfig} from "../config";
import {Spinner} from "./Spinner/Spinner"
import axios from 'axios';

export const App = () => {
  
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }
  
  const handleClick = async () => {
    setLoading(true)
    const axiosConfig = getConfig(searchTerm)
    try {
      const result = await axios.request(axiosConfig);
      setResponse(result);
    } catch( err ) {
      if (error){
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  }



  console.log(response);

  return (
    loading ? (<Spinner/>)
    :
    <div className="App">
      <SearchInput searchTerm={searchTerm} onChange={handleChange}/>
      <button onClick={handleClick}> Call GITHUB </button>
    </div>
  );
}



