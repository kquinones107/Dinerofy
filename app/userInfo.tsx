import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function UserInfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Información</Text>
      <Text style={styles.description}>Aquí puedes ver los datos personales de tu cuenta.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold" },
  description: { fontSize: 16, marginTop: 10 },
});
