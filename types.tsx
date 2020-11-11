import GameMode from "./constants/GameMode.enum";
import Continents from "./constants/Continents";

export type RootStackParamList = {
  Game: undefined;
  Home: undefined;
  NotFound: undefined;
};

export type HomeNavigatorParamList = {
  Challenges: undefined;
  Activity: undefined;
  Settings: undefined;
};

export type GameNavigatorParamList = {
  Game: { mode: GameMode; name: string };
  Summary: { id: string };
};

export type TabOneParamList = {
  Challenges: undefined;
  Challenge: { continent: string };
  Game: undefined;
};

export type ActivityTabParamList = {
  Activity: undefined;
};

export type TabThreeParamList = {
  Settings: undefined;
};

export type Country = {
  name: string;
  capital: string;
  continent: string;
};

export type Answers = {
  [key: string]: string;
};

export type Summary = {
  duration: number;
  continent: string;
  answers: Answers;
};
