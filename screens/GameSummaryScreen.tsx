import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Answers, Country } from "../types";
import getAnswerById from "../utils/getAnswerById";
import Continents from "../constants/Continents";
import secondsToTimer from "../utils/secondsToTimer";
import { ScrollView } from "../components/Themed";
import CountryItem from "../components/CountryItem";
import WorldMap from "../components/WorldMap";

export default function GameSummaryScreen({ navigation, route }) {
  const {
    params: { id },
  } = route;

  const [summary, setSummary] = useState<Answers | undefined>();
  const [countries, setCountries] = useState<Country[] | undefined>();

  const getSummary = async () => {
    const summary = await getAnswerById(id);
    setSummary(summary);
  };

  useEffect(() => {
    getSummary();
  }, []);

  useEffect(() => {
    if (!summary) {
      return;
    }

    setCountries(Continents[summary.continent].countries);
  }, [summary]);

  return (
    <View style={styles.container}>
      {summary?.answers && countries && (
        <>
          <View style={styles.banner}>
            <WorldMap region={Continents[summary.continent].region} />
            <Text style={styles.bannerTitle}>{summary.continent}</Text>
            <Text style={styles.bannerSubtitle}>
              {countries.length} countries
            </Text>
          </View>

          <View style={styles.totals}>
            <View>
              <Text style={styles.totalsNumber}>
                {secondsToTimer(Number(summary.duration))}
              </Text>
              <Text style={styles.totalsText}>Duration</Text>
            </View>
            <View>
              <Text style={styles.totalsNumber}>
                {
                  Object.entries(summary.answers).filter(([c, a]) => {
                    return (
                      a ===
                      countries.find((country) => country.name === c)?.capital
                    );
                  }).length
                }
                /{countries.length}
              </Text>
              <Text style={styles.totalsText}>Score</Text>
            </View>
          </View>

          <ScrollView style={styles.answerList}>
            {summary &&
              countries.map((country) => (
                <CountryItem
                  country={country}
                  key={country.name}
                  answer={summary.answers[country.name as any]}
                />
              ))}
          </ScrollView>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    flex: 0.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  bannerSubtitle: {
    fontSize: 12,
    color: "white",
    fontWeight: "400",
  },
  totals: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 24,
  },
  totalsNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  totalsText: {
    fontSize: 12,
    fontWeight: "400",
    color: "gray",
    textAlign: "center",
  },
  answerList: {
    flex: 10,
  },
});
