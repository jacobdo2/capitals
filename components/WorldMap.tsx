import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

export default function WorldMap({ region }) {
  return (
    <View style={styles.container}>
      <View style={styles.mapView}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#222",
    zIndex: -1,
  },
  mapView: {
    width: "100%",
    height: "100%",
  },
});
