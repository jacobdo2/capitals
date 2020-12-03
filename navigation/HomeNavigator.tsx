import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ChallengesTab from "../screens/ChallengesTab";
import Challenge from "../screens/ChallengeScreen";
import ActivityTabScreen from "../screens/ActivityTabScreen";
import {
  TabOneParamList,
  ActivityTabParamList,
  TabThreeParamList,
  HomeNavigatorParamList,
} from "../types";
import { Feather } from "@expo/vector-icons";
import GameSummaryScreen from "../screens/GameSummaryScreen";

const BottomTab = createBottomTabNavigator<HomeNavigatorParamList>();

export default function HomeNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Challenges"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Challenges"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="map-pin" color={color} size={20} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Activity"
        component={ActivityTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="activity" color={color} size={20} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="settings" color={color} size={20} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen name="Challenges" component={ChallengesTab} />
      <TabOneStack.Screen name="Challenge" component={Challenge} />
    </TabOneStack.Navigator>
  );
}

const ActivityTabStack = createStackNavigator<ActivityTabParamList>();

function ActivityTabNavigator() {
  return (
    <ActivityTabStack.Navigator>
      <ActivityTabStack.Screen name="Activity" component={ActivityTabScreen} />
      <ActivityTabStack.Screen
        name="Summary"
        component={GameSummaryScreen}
        options={{
          headerLeft: () => undefined,
        }}
      />
    </ActivityTabStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen name="Settings" component={ActivityTabScreen} />
    </TabThreeStack.Navigator>
  );
}
