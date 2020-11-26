import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

export default function WorldMap(style, region) {
  return (
    <View style={styles.container}>
        <View styles={styles.mapView}>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      position: "absolute",
      backgroundColor: "#222",
      width: "100%",
      height: "100%",
      zIndex: -1,
    },
    mapView: {
      width: "100%",
      height: "100%",
    },
  });
