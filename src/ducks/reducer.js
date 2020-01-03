const initalState = {
  username: "",
  profile_pic: ""
};

const UPDATE_USER = "UPDATE_USER";
const CLEAR_USER = "CLEAR_USER";

export function updateUser(username, profile_pic) {}

export function clearUser() {
  return { type: CLEAR_USER, payload: {} };
}

export default function reducer() {}
