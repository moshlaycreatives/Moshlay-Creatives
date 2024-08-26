const initialState = {
    blogs: [],
    loading: false,
    error: null,
  };
  
  const DataReducers = (state = initialState, action) => {
    switch (action.type) {
      case 'GET-ALL-BLOGS':
        console.log('Reducer action payload:', action.payload); // Log payload to verify
        return {
          ...state,
          blogs: action.payload,
          loading: false,
        };
  
      case 'GET-ALL-BLOGS-REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case 'GET-ALL-BLOGS-FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default DataReducers;
  