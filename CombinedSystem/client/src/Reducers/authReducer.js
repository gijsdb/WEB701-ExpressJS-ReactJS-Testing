const authReducer = (state = null, action) => {
    switch(action.type) {
        case 'LOGIN':
          return [
            ...state,
            {
              token: action.token.text,
              user: action.email.text,
              isUserLoggedIn: true
            }
          ]
        case 'LOGOUT':
          return [
            ...state,
            {
              token: null,
              user: null,
              isUserLoggedIn: false
            }
          ]   
        default:
            return state;
    }
}

export default authReducer;