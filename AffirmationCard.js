import React from "react";
import { View, Text, StyleSheet } from "react-native";
import affirmations from "../../data/affirmations.json";
import { colors } from "../styles/theme";


export default function AffirmationCard() {
  const random =
    affirmations[Math.floor(Math.random() * affirmations.length)];


  return (
    <View style={styles.card}>
      <Text style={styles.text}>{random}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    padding: 32,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});