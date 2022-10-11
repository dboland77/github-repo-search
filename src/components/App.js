import React, {useState, useReducer, useEffect} from 'react';
import { SearchInput } from './SearchInput/SearchInput';
import {getConfig} from "../config";
import {Spinner} from "./Spinner/Spinner"
import {RepoList} from "./RepoList/RepoList"
import { SearchHistory } from './SearchInput/SearchHistory';
import { listReducer, historyReducer } from "../reducers"
import axios from 'axios';

export const App = () => {

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [listData, dispatchListData] = useReducer(listReducer, 
    {
    list: [],
    isShowList: false,
  }
  );
  const [searchHistory, dispatchSearchHistory] = useReducer(historyReducer, 
    window.localStorage.getItem("CACHED_SEARCH_HISTORY") ?
    {
    history: JSON.parse(window.localStorage.getItem("CACHED_SEARCH_HISTORY")) ,
    isShowHistory: true
  }
:
  {history: [],
  isShowHistory: false})
  

  const handleRemoveResult = (id) => {
    dispatchListData({ type: 'REMOVE_LIST_ITEM', id });
  }

  const handleRemoveHistory = (name) => {
    dispatchSearchHistory({ type: 'REMOVE_HISTORY_ITEM', name});
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }
  
  const handleSearchClick = async () => {
    dispatchSearchHistory({ type: 'ADD_HISTORY_ITEM', searchTerm});
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


//Write to local storage every time the search history changes
  useEffect(() => {
    window.localStorage.setItem('CACHED_SEARCH_HISTORY', JSON.stringify(searchHistory.history))
  }, [searchHistory.history])
  

  return (
    loading ? (<Spinner/>)
    :
    (
    <div className="App">
      <SearchInput searchTerm={searchTerm} onChange={handleChange}/>
      <button onClick={handleSearchClick}> Search Github </button>
      <br></br>
      <br></br>
      <br></br>
      {listData.isShowList && <RepoList repolist={listData.list} onRemove={handleRemoveResult}/>}
      {searchHistory.isShowHistory && <SearchHistory searchHistory={searchHistory.history} onRemove={handleRemoveHistory}/>}
    </div>
    )
  );
}



