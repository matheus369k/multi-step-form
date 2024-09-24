import { ActionType } from "./action-type";

export interface TDuration {
    duration: "mo" | "yr";
}

export interface TPlan {
    rank: "Arcade" | "Advanced" | "Pro";
    price: number;
}

interface TInitialValue extends TPlan, TDuration { }

interface TAction {
    type: string;
    payload: TPlan | TDuration;
}

const initialState: TInitialValue = {
    rank: "Arcade",
    price: 9,
    duration: "mo",
}

export const planReducer = (state = initialState, action: TAction) => {
    console.log(action.payload);
    switch (action.type) {
        case ActionType.REGISTER_PLAN:
            return {
                ...state,
                rank: (action.payload as TPlan).rank,
                price: (action.payload as TPlan).price
            }
        case ActionType.TOGGLE_DURATION:
            if (!state.price) {
                return state;
            }

            let price = state.price;

            if (state.duration === "yr") {
                price /= 10;
            } else {
                price *= 10;
            }
            return {
                ...state,
                price: price,
                duration: (action.payload as TDuration).duration,
            };
        default:
            return state
    }
}