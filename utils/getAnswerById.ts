import AsyncStorage from "@react-native-async-storage/async-storage";
import { Answers } from "../types";
import { LocalStorageKey } from "../constants/LocalStorage.enum";

export default async function getAnswerById(id: string): Promise<Answers> {
  const answers: { [key: string]: Answers } = JSON.parse(
    (await AsyncStorage.getItem(LocalStorageKey.ANSWERS)) || "{}"
  );

  console.log({ answers });

  const answer = await answers[id];

  if (!answer) {
    throw new Error(`answer set ${id} was not found`);
  }

  return answer;
}
