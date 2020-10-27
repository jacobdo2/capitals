import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import GameScreen from "../screens/GameScreen";
import GameSummaryScreen from "../screens/GameSummaryScreen";
import { GameStackParamList } from "../types";

const GameStack = createStackNavigator<GameStackParamList>();

export default function GameStackNavigation() {
  return (
    <GameStack.Navigator>
      <GameStack.Screen name="Game" component={GameScreen} />
      <GameStack.Screen name="Summary" component={GameSummaryScreen} />
    </GameStack.Navigator>
  );
}
