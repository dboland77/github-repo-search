import React, {useState, useReducer} from 'react';
import { SearchInput } from './SearchInput/SearchInput';
import {getConfig} from "../config";
import {Spinner} from "./Spinner/Spinner"
import {RepoList} from "./RepoList/RepoList"
import { SearchHistory } from './SearchInput/SearchHistory';
import { listReducer } from "../reducers/listReducer"
import axios from 'axios';

const testData =[

  // {"id":1, "name": "test1", "stars": 3, "url": "https://github.com/ktonga/reactive-turtle"},
  // {"id":2, "name": "test2", "url":"https://www.google.com"},
  // {"id":3, "name": "test3", "url": "https://www.firefox.com"}
 ]

export const App = () => {
  
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [listData, dispatchListData] = useReducer(listReducer, {
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
      dispatchListData({ type: 'SET_LIST', result});
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
      {listData.isShowList && <SearchHistory searchHistory={listData.list} onRemove={handleRemove}/>}
    </div>
    )
  );
}



