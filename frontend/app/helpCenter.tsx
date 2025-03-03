import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HelpCenterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Centro de Ayuda</Text>
      <Text style={styles.description}>Consulta preguntas frecuentes o contacta con soporte.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold" },
  description: { fontSize: 16, marginTop: 10 },
});
