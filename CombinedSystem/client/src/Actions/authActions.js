import axios from 'axios'

export const loginUser = (email, password) => (dispatch, getState) => {
  dispatch({ type: 'LOGIN'});
  try {
    axios.post(`http://localhost:8091/login`, { email, password })
    .then(res => dispatch (
      {
      type: 'LOGIN',
      payload: {
        token: res.data.token,
        user: res.data.user
      }
    })).catch(error => {
      console.log(error.response)
    });
  } catch(err) {
    console.log(err)
  }
}
  
export const logOutUser = email => ({
  type: 'LOGOUT',
  email
})

