import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import GameScreen from "../screens/GameScreen";
import { GameNavigatorParamList } from "../types";

const GameStack = createStackNavigator<GameNavigatorParamList>();

export default function GameNavigator() {
  return (
    <GameStack.Navigator>
      <GameStack.Screen name="Game" component={GameScreen} />
    </GameStack.Navigator>
  );
}
