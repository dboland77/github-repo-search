export const historyReducer = (state, action) => {
  const listLength = state.history.length
  
  switch (action.type) {
      case 'ADD_HISTORY_ITEM':
        return listLength < 10 ?  {
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
          history: state.history.filter((item) => item.id !== action.id),
        };
      default:
        throw new Error();
    }
  };

