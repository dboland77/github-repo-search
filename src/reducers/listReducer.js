export const listReducer = (state, action) => {
    switch (action.type) {
      case 'REMOVE_ITEM':
        return {
          ...state,
          list: state.list.filter((item) => item.id !== action.id),
        };
      default:
        throw new Error();
    }
  };