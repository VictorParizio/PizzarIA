const token = sessionStorage.getItem("token");

const initialState = {
  user: null || token,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "user/login":
      return { ...state, user: action.payload };
    case "user/logout":
      return { ...state, user: null };
    default:
      return state;
  }
};
