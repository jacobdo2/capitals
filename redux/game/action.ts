import { ActionType } from "./action-type";

export const setContinent = (continent: string) => {
  return {
    type: ActionType.SET_CONTINENT,
    payload: {
      continent,
    },
  };
};

export const setGameSummaryId = (id: string) => {
  return {
    type: ActionType.SET_GAME_SUMMARY_ID,
    payload: {
      id,
    },
  };
};
