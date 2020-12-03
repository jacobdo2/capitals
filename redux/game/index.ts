import { ActionType } from "./action-type";

const INITIAL_STATE = {
  continent: undefined,
  gameSummaryId: undefined,
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
    case ActionType.SET_GAME_SUMMARY_ID:
      console.log(action.payload.id);
      return {
        ...state,
        gameSummaryId: action.payload.id,
      };
    default:
      return state;
  }
};

export default gameReducer;
