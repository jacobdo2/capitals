import React, { useEffect, useRef } from "react";
import { Country } from "../types";
import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { TextInput } from "react-native-gesture-handler";

type CountryItemProps = {
  country: Country;
  handleAnswer: (country: Country, text: string) => void;
  handleRequestNext: (country: Country) => void;
  isFocused: boolean;
  isLast: boolean;
  setFocused: (country: Country) => void;
};

export default function CountryItem({
  country,
  handleAnswer,
  handleRequestNext,
  isFocused,
  isLast,
  setFocused,
}: CountryItemProps) {
  let inputRef: any = useRef();

  useEffect(() => {
    isFocused && inputRef.current.focus();
  }, [isFocused]);

  return (
    <Pressable
      onPress={() => setFocused(country)}
      style={[styles.country, isFocused ? styles.countryFocused : {}]}
      key={country.name}
    >
      <Text style={styles.countrylabel}>{country.name}</Text>
      <View>
        <TextInput
          style={[styles.input, isFocused ? styles.inputFocused : {}]}
          ref={inputRef}
          onChangeText={(text: string) => handleAnswer(country, text)}
          returnKeyType={isLast ? "done" : "next"}
          blurOnSubmit={false}
          onFocus={() => setFocused(country)}
          onSubmitEditing={() => handleRequestNext(country)}
        />
      </View>
    </Pressable>
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
  input: {
    backgroundColor: "white",
  },
  inputFocused: {
    backgroundColor: "#FAF7F7",
  },
});
