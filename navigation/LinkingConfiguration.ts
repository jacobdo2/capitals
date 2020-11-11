import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Home: {
        screens: {
          Challenges: {
            screens: {
              Challenges: "challenges",
              Challenge: "challenge/:continent",
            },
          },
          Activity: {
            screens: {
              Activity: "activity",
            },
          },
          Settings: {
            screens: {
              Settings: "settings",
            },
          },
        }
      },
      Game: {
        Game: "game",
        Summary: "game-summary",
      },
      NotFound: "*",
    },
  },
};
