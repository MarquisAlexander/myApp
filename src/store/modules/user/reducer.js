import produce from 'immer';

const initialState = {
  user: null,
  token: null,
};

export default function reducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'SET_USER':
        draft.user = action.payload.user;
        return;
      case 'SET_TOKEN':
        draft.token = action.payload.token;
        return;
      default:
        return state;
    }
  });
}