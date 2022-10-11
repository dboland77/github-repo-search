import React, {useState} from 'react';
import { SearchInput } from './SearchInput/SearchInput';
import {useAxios} from "../hooks";
import {getConfig} from "../config";
import axios from 'axios';

let axiosConfig = getConfig('react')

export const App = () => {

  const [searchTerm, setSearchTerm] = useState("");

  
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }
  const { response, loading, error, sendData } = useAxios(axiosConfig)
  
  const handleClick = async (e) => {
    axiosConfig = getConfig(searchTerm)
   const result = await sendData(axiosConfig)
  }

  return (
    <div className="App">
      <SearchInput searchTerm={searchTerm} onChange={handleChange}/>
      <button onClick={handleClick}> Call GITHUB </button>
    </div>
  );
}

