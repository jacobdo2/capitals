import { Answers } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuidv4 from "uuid/v4";

const ANSWER_KEY = "@answers";

export default async function storeAnswers(answers: Answers): Promise<string> {
  const id = uuidv4();
  const existingAnswers = (await AsyncStorage.getItem(ANSWER_KEY)) || "{}";
  await AsyncStorage.setItem(
    ANSWER_KEY,
    JSON.stringify({
      ...JSON.parse(existingAnswers),
      [id]: answers,
    })
  );
  return id;
}
