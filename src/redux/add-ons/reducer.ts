import { ActionType } from "./action.type";

type TDuration = "mo" | "yr";

interface TTitle {
    title: string;
}

interface TInitialValue extends TTitle {
    price: number;
    duration: TDuration;
    description: string;
}

interface TAction {
    type: string;
    payload: TInitialValue | TTitle;
}

const initialValue: TInitialValue[] = [];

export const AddOnsReducer = (state = initialValue, action: TAction) => {
    switch (action.type) {
        case ActionType.REGISTER_ONS:
            const { title, description, duration, price } = action.payload as TInitialValue

            return [
                ...state,
                {
                    title,
                    price,
                    duration,
                    description

                }
            ]
        case ActionType.REMOVE_ONS:
            const newState = state.filter((ons) => ons.title !== action.payload.title);

            return [...newState]
        default:
            return state;
    }
}