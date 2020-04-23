export const loginUser = (email, token) => ({
  type: 'LOGIN',
  email,
  token
})
  
export const logOutUser = email => ({
  type: 'LOGOUT',
  email
})

