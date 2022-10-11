export const historyReducer = (state, action) => {
  switch (action.type) {
    case 'RETRIEVE_CACHE':
      return JSON.parse(action.storedHistory)
      case 'ADD_HISTORY_ITEM':
        return state.history.length < 10 ?  {
          history: [...state.history,action.searchTerm],
          isShowHistory: true
        }
        :{
          history:  [...state.history.slice(1,10),action.searchTerm],
          isShowHistory: true
        };
      case 'REMOVE_HISTORY_ITEM':
        return {
          ...state,
          history: state.history.filter((item) => item !== action.name),
        };
      default:
        throw new Error();
    }
  };

