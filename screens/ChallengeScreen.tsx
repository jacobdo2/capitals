import * as React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Platform, Pressable, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import WorldMap from "../components/WorldMap";
import { TabOneParamList } from "../types";
import Continents from "../constants/Continents";
import GameMode from "../constants/GameMode.enum";
import { useDispatch, useSelector } from "react-redux";
import { setContinent } from "../redux/game/action";

type Props = {
  navigation: StackNavigationProp<TabOneParamList, "Challenge">;
  route: RouteProp<TabOneParamList, "Challenge">;
};

export default function ChallengeScreen({ navigation, route }: Props) {
  const { continent } = route.params;
  const dispatch = useDispatch();

  return (
    <View style={styles.banner}>
      <WorldMap region={Continents[continent].region} />
      <Text style={styles.bannerTitle}>{route.params.continent}</Text>
      <Text style={styles.bannerCaption}>
        {continent && Continents[continent].countries.length} countries
      </Text>
      <Pressable
        style={styles.startButtonContainer}
        onPress={() => {
          navigation.navigate("Game");
          dispatch(setContinent(continent));
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
    color: "white",
  },
  bannerCaption: {
    color: "white",
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
