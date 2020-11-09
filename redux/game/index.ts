import { ActionType } from "./action-type";

const INITIAL_STATE = {
  continent: undefined,
};

const gameReducer = (
  state = INITIAL_STATE,
  action: { type: ActionType; payload: any }
) => {
  switch (action.type) {
    case ActionType.SET_CONTINENT:
      return {
        ...state,
        continent: action.payload.continent,
      };
    default:
      return state;
  }
};

export default gameReducer;
