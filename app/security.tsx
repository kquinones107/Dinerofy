import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SecurityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seguridad</Text>
      <Text style={styles.description}>Aquí puedes cambiar tu contraseña y configurar autenticación en dos pasos.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold" },
  description: { fontSize: 16, marginTop: 10 },
});
