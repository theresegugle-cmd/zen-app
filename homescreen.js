import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../styles/theme";
import AffirmationCard from "../components/AffirmationCard";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ZEN</Text>
      <Text style={styles.subtitle}>Ta et rolig øyeblikk</Text>
      <AffirmationCard />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 40,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 32,
  },
});