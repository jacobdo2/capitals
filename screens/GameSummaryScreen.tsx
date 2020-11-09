import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Answers, Country } from "../types";
import getAnswerById from "../utils/getAnswerById";
import Continents from "../constants/Continents";
import secondsToTimer from "../utils/secondsToTimer";
import { ScrollView } from "../components/Themed";
import CountryItem from "../components/CountryItem";
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

    setCountries(Continents[summary.continent]);
  }, [summary]);

  return (
    <View style={styles.container}>
      {summary?.answers && countries && (
        <>
          <View style={styles.banner}>
            <Text>{summary.continent}</Text>
            <Text>{countries.length} countries</Text>
          </View>

          <View style={styles.totals}>
            <View>
              <Text>{secondsToTimer(Number(summary.duration))}</Text>
              <Text>Duration</Text>
            </View>
            <View>
              <Text>
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
              <Text>Score</Text>
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
  },
  totals: {
    flex: 0,
  },
  answerList: {
    flex: 10,
  },
});
