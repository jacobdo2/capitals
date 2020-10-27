import { Answers } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuidv4 from "uuid/v4";
import { LocalStorageKey } from "../constants/LocalStorage.enum";

export default async function storeAnswers(answers: Answers): Promise<string> {
  const id = uuidv4();
  const existingAnswers =
    (await AsyncStorage.getItem(LocalStorageKey.ANSWERS)) || "{}";
  await AsyncStorage.setItem(
    LocalStorageKey.ANSWERS,
    JSON.stringify({
      ...JSON.parse(existingAnswers),
      [id]: answers,
    })
  );
  return id;
}
