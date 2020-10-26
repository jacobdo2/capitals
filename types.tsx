import GameMode from "./constants/GameMode.enum";
import Continents from "./constants/Continents";

export type RootStackParamList = {
  Game: undefined;
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Challenges: undefined;
  Activity: undefined;
  Settings: undefined;
};

export type TabOneParamList = {
  Challenges: undefined;
  Challenge: { continent: string };
  Game: { mode: GameMode; name: string };
  GameSummary: { id: string };
};

export type ActivityTabParamList = {
  ActivityTabScreen: undefined;
  GameSummaryScreen: undefined;
};

export type TabThreeParamList = {
  SettingsTabScreen: undefined;
};

export type Country = {
  name: string;
  capital: string;
  continent: string;
};

export type Answers = {
  [key: string]: string;
};
