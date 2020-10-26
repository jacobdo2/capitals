import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Challenges: {
            screens: {
              ChallengesTabScreen: "challenges",
            },
          },
          Game: {
            screens: {
              GameScreen: "game",
              GameSummaryScreen: "game-summary",
            },
          },
          Activity: {
            screens: {
              ActivityTabScreen: "activity",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
