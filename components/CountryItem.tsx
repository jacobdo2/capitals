import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Country } from "../types";

type CountryItemProps = {
  answer: string;
  country: Country;
};

export default function CountryItem({ answer, country }: CountryItemProps) {
  const [isCorrect, setIsCorrect] = React.useState(false);

  React.useEffect(() => {
    if (country && country.capital === answer) {
      setIsCorrect(true);
    }
  }, [answer, country]);

  return (
    <View style={styles.country}>
      <Text style={styles.countrylabel}>{country.name}</Text>
      <View style={styles.answerContainer}>
        {answer && answer !== "" && (
          <Text style={[styles.answer, isCorrect ? styles.answerCorrect : []]}>
            {answer}
          </Text>
        )}
        {!isCorrect && (
          <Text style={styles.correctAnswer}>{country.capital}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  country: {
    height: 72,
    padding: 16,
    borderBottomWidth: 1,
    backgroundColor: "white",
    borderBottomColor: "rgba(76, 78, 76, 0.16)",
  },
  countryFocused: {
    backgroundColor: "#FAF7F7",
  },
  countrylabel: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
  },
  answerContainer: {
    display: "flex",
    flexDirection: "row",
  },
  answer: {
    fontSize: 13,
    color: "#FF2D55",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    marginRight: 8,
  },
  answerCorrect: {
    color: "#34C759",
    textDecorationLine: "none",
  },
  correctAnswer: {
    fontSize: 13,
    color: "#8E8E93",
  },
});
