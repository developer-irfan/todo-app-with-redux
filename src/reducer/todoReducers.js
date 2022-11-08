const initialState = {
  list: [],
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE":
      const new_List = state.list.filter((elem) => elem.id != action.id);
      return {
        ...state,
        list: new_List,
      };

      case "REMOVE_ALL":
        return {
          ...state,
          list:[]
        }


    default:
      return state;
  }
};
export default todoReducers;
