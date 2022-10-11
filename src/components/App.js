import React, {useState} from 'react';
import { SearchInput } from './SearchInput/SearchInput';
import {getConfig} from "../config";
import {Spinner} from "./Spinner/Spinner"
import {RepoList} from "./RepoList/RepoList"
import { listReducer } from "../reducers/listReducer"
import axios from 'axios';

const testData =[

  {"id":1, "name": "test1"},
  {"id":2, "name": "test2"},
  {"id":3, "name": "test3"}
 ]

export const App = () => {
  
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [listData, dispatchListData] = React.useReducer(listReducer, {
    list: testData,
    isShowList: true,
  });
  
  

  const handleRemove = (id) => {
    dispatchListData({ type: 'REMOVE_ITEM', id });
  }
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

  return (
    loading ? (<Spinner/>)
    :
    (
    <div className="App">
      <SearchInput searchTerm={searchTerm} onChange={handleChange}/>
      <button onClick={handleClick}> Call GITHUB </button>
      <br></br>
      <br></br>
      <br></br>
      {listData.isShowList && <RepoList repolist={listData.list} onRemove={handleRemove}/>}
    </div>
    )
  );
}



