import { ActionType } from "./action-type";

interface TUser {
  name: string;
  email: string;
  phoneNumber: string;
}

interface TAction {
  type: string;
  payload?: TUser;
}

const initialState: { user: TUser | null } = {
  user: null,
};

export const userReducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case ActionType.REGISTER_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
