export const historyReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_HISTORY_ITEM':
        return {
          history: [...state.history,action.searchTerm],
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

