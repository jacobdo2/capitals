import * as React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { TabOneParamList } from "../types";
import Continents from "../constants/Continents";
import GameMode from "../constants/GameMode.enum";

type Props = {
  navigation: StackNavigationProp<TabOneParamList, "Challenge">;
  route: RouteProp<TabOneParamList, "Challenge">;
};

export default function ChallangeScreen({ navigation, route }: Props) {
  const { continent } = route.params;

  return (
    <View style={styles.banner}>
      <Text style={styles.bannerTitle}>{route.params.continent}</Text>
      <Text style={styles.bannerCaption}>
        {continent && Continents[continent].length} countries
      </Text>
      <Pressable
        style={styles.startButtonContainer}
        onPressOut={() => {
          navigation.navigate("Game", {
            mode: GameMode.CONTINENT,
            name: continent,
          });
        }}
      >
        <View style={styles.startButton}>
          <Text style={styles.startButtonLabel}>Start</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 400,
    backgroundColor: "rgba(255,255,255, .2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  bannerTitle: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 8,
  },
  bannerCaption: {
    fontSize: 16,
  },
  startButtonContainer: {},
  startButton: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 24,
    padding: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 30,
    alignItems: "center",
  },
  startButtonLabel: {
    color: "black",
    fontSize: 14,
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
