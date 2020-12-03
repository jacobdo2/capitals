import React, { useEffect, useState, useCallback } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import EditableCountryItem from "../components/EditableCountryItem";
import { Answers, Country, TabOneParamList, Region } from "../types";
import Continents from "../constants/Continents";
import differenceInSeconds from "date-fns/differenceInSeconds";
import shuffleCountries from "../utils/shuffleCountries";
import secondsToTimer from "../utils/secondsToTimer";
import storeSummary from "../utils/storeSummary";
import { useDimensions } from "@react-native-community/hooks";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { Form as AutoFocusForm } from "react-native-autofocus";
import { useSelector } from "react-redux";
import WorldMap from "../components/WorldMap";

type Props = {
  navigation: StackNavigationProp<any, "Game">;
  route: RouteProp<TabOneParamList, "Game">;
};

export default function GameScreen({ navigation, route }: Props) {
  const state = useSelector((state) => state);
  const { continent: continentName } = useSelector((state) => state.game);

  const { height } = useDimensions().window;
  const [bannerLabel, setBannerLabel] = useState("");
  const [answers, setAnswers] = useState<Answers>({});
  const [countries, setCountries] = useState<Country[]>([]);
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [focused, setFocused] = useState<Country | undefined>(countries[0]);
  const [region, setRegion] = useState<Region | undefined>(
    Continents[continentName].region
  );
  const gameStart = new Date();

  const handleAnswer = (country: Country, answer: string) => {
    setAnswers({
      ...answers,
      [country.name]: answer,
    });
  };

  const handleRequestNext = (country: Country) => {
    const nextCountry =
      countries[countries.findIndex((c) => c.name === country.name) + 1];

    nextCountry ? setFocused(nextCountry) : completeGame();
  };

  const completeGame = useCallback(async () => {
    const id = await storeSummary({
      continent: continentName,
      answers,
      duration: secondsElapsed,
    });
    navigation.navigate("Summary", {
      id,
    });
  }, [answers, secondsElapsed]);

  /** Timer */
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed(differenceInSeconds(new Date(), gameStart));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  /** Set country list */
  useEffect(() => {
    continentName &&
      setCountries(shuffleCountries(Continents[continentName].countries));
  }, [continentName]);

  /** Update focused country */
  useEffect(() => {
    setBannerLabel(focused ? focused.name : "Select country");
    setRegion(focused ? focused.region : Continents[continentName].region);
  }, [focused]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.banner, { height: height * 0.3 }]}>
        <WorldMap region={region} />
        <Text style={styles.bannerTitle}>{bannerLabel}</Text>
        <Text style={styles.timer}>{secondsToTimer(secondsElapsed)}</Text>
      </View>
      <KeyboardAwareScrollView
        style={{ ...styles.countries, height: height * 0.7 }}
      >
        <AutoFocusForm>
          {countries.map((country) => {
            return (
              <EditableCountryItem
                country={country}
                handleAnswer={handleAnswer}
                handleRequestNext={handleRequestNext}
                isLast={countries[countries.length - 1] === country}
                isFocused={focused === country}
                key={country.name}
                setFocused={setFocused}
              />
            );
          })}
        </AutoFocusForm>
        <Pressable
          style={styles.completeGameButton}
          onPress={() => completeGame()}
        >
          <Text style={styles.completeButtonText}>Finish challenge</Text>
        </Pressable>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  timer: {
    fontSize: 14,
    position: "absolute",
    top: 16,
    right: 16,
    color: "white",
    fontWeight: "bold",
  },
  challengeLabel: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(76, 78, 76, 0.16)",
    display: "flex",
    alignItems: "center",
    color: "white",
    paddingLeft: 16,
  },
  countries: {
    flex: 5,
    backgroundColor: "white",
  },
  completeGameButton: {
    height: 56,
    flex: 1,
    borderRadius: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    margin: 16,
  },
  completeButtonText: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 1.5,
  },
});
