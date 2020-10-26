import * as React from "react";
import { Pressable, StyleSheet } from "react-native";

import Continents from "../constants/Continents";
import { Text, View, ScrollView } from "../components/Themed";

export default function ChallengesScreen({ navigation }) {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Capitals</Text>
      <Text style={styles.sectionTitle}>Parts of the world</Text>
      <ScrollView horizontal style={styles.continentContainer}>
        {Object.keys(Continents).map((continent: string) => (
          <Pressable
            key={continent}
            onPressOut={() =>
              navigation.navigate("Challenge", {
                continent,
              })
            }
          >
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{continent}</Text>
              <Text style={styles.cardCaption}>
                {Continents[continent].length} countries
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 16,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 34,
    fontWeight: "normal",
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "normal",
    paddingTop: 16,
  },
  continentContainer: {
    display: "flex",
    width: "100%",
    paddingTop: 12,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    marginRight: 12,
    backgroundColor: "grey",
    color: "white",
    width: 150,
    height: 200,
    padding: 16,
  },
  cardTitle: {
    color: "white",
    fontSize: 22,
  },
  cardCaption: {
    color: "white",
    fontSize: 12,
  },
});
