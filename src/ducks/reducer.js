// 4 necessary steps for the reducer
// initial state
// action type (action name)
// action creator
// reducer

// initial state
const initialState = {
  user: null
  // user: 'yourself',
  // picture: 'myurlhere'
};

//  action type (action name)
const LOGIN = 'LOGIN';

// action creator
export const login = (user) => {
  return {
    type: LOGIN,
    payload: user,
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state, user: action.payload
      };
    default: return state;
  }
};

export default reducer