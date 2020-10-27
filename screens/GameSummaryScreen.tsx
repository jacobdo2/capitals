import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Answers } from "../types";
import getAnswerById from "../utils/getAnswerById";

export default function GameSummaryScreen({ navigation, route }) {
  const {
    params: { id },
  } = route;

  const [summary, setSummary] = useState<Answers | undefined>();

  const getSummary = async () => {
    const answer = await getAnswerById(id);
    setSummary(answer);
  };

  useEffect(() => {
    getSummary();
  }, []);

  console.log(summary);

  return (
    <View>
      <Text>ello</Text>
    </View>
  );
}
