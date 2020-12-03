import AsyncStorage from "@react-native-async-storage/async-storage";
import { Answers, Summary } from "../types";
import { LocalStorageKey } from "../constants/LocalStorage.enum";
import getAnswers from "./getAnswers";

export default async function getAnswerById(id: string): Promise<Summary> {
  const answer = (await getAnswers())[id];

  if (!answer) {
    throw new Error(`${id} was not found`);
  }

  return answer;
}
