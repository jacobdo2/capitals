import { ActionType } from "./action-type";

export const setContinent = (continent: string) => {
  return {
    type: ActionType.SET_CONTINENT,
    payload: {
      continent,
    },
  };
};
