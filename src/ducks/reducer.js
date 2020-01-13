const initalState = {
  username: "",
  profile_pic: ""
};

const UPDATE_USER = "UPDATE_USER";
const CLEAR_USER = "CLEAR_USER";

export function updateUser(username, profile_pic) {
  console.log(username, profile_pic);

  return {
    type: UPDATE_USER,
    payload: { username, profile_pic }
  };
}

export function clearUser() {
  return { type: CLEAR_USER, payload: {} };
}

export default function reducer(state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_USER:
      return {
        ...state,
        username: payload.username,
        profile_pic: payload.profile_pic
      };
    case CLEAR_USER:
      return initalState;
    default:
      return state;
  }
}
