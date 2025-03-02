import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { auth } from "@/config/firebaseConfig";

export default function EditProfileScreen() {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleSave = () => {
    Alert.alert("Perfil actualizado", `Tu nombre ahora es: ${name}`);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre</Text>
      <TextInput style={styles.input} placeholder="Tu nombre" value={name} onChangeText={setName} />
      <Button title="Guardar Cambios" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 15, borderRadius: 5 },
});
