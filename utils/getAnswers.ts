import AsyncStorage from "@react-native-async-storage/async-storage";
import { Summary } from "../types";
import { LocalStorageKey } from "../constants/LocalStorage.enum";

export default async function getAnswers(): Promise<{
  [key: string]: Summary;
}> {
  return JSON.parse(
    (await AsyncStorage.getItem(LocalStorageKey.ANSWERS)) || "{}"
  );
}
