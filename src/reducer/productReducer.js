const productReducer = (state, action) => {
switch (action.type) {
  case "SET_LOADING" :
    return {
          ...state,
          isLoading: true,
        };
    break;
  case "SET_API_DATA" :
     return {
      ...state,
      isLoading: false,
      isError: false,
      products: action.payload,
    };
    break;
  case "API_ERROR" :
    return {
          ...state,
          isLoading: false,
          isError: true,
        };
    break;

  default:
    return state;
    break;
}

};

export default productReducer;
