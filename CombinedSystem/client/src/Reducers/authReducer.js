const initialState = { 
  token: null,
  user: null,
  isUserLoggedIn: false 
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
          console.log(action.payload)
          return {
            ...state,
            token: action.payload,
            user: action.payload,
            isUserLoggedIn: true
          }
        case 'LOGOUT':
          return {
            ...state,
            token: null,
            user: null,
            isUserLoggedIn: false
          } 
        default:
            return state;
    }
}

export default authReducer;