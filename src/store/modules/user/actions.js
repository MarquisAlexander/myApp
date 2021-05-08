export function setUser(user) {
    return {
      type: 'SET_USER',
      payload: {user},
    };
  }
  
  export function setToken(token) {
    return {
      type: 'SET_TOKEN',
      payload: {token},
    };
  }