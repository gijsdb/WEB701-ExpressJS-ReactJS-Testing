const initialState = { 
  token: null,
  user: null,
  isUserLoggedIn: false 
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
          return {
            ...state,
            isUserLoggedIn: true,
            token: action.token,
            user: action.user,
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