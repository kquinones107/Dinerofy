import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { auth } from "@/config/firebaseConfig";
import COLORS from "@/components/theme";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from "@/components/CustomButton";

export default function EditProfileScreen() {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleSave = () => {
    Alert.alert("Perfil actualizado", `Tu nombre ahora es: ${name}`);
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={COLORS.white} style={{ marginBottom: 20 }} />
        </TouchableOpacity>
        <Text style={styles.title}>Editar Perfil</Text>
      </View>

      <Text style={styles.label}>Nombre</Text>
      <TextInput style={styles.input} placeholder="Tu nombre" value={name} onChangeText={setName} />
      <CustomButton title="Guardar Cambios" onPress={handleSave} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 20,
  },
  label: { 
    fontSize: 16, 
    fontWeight: "bold", 
    marginBottom: 5,
    color: COLORS.white,   
  },
  input: { 
    width: '100%',
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.white,
    marginBottom: 20,
    marginRight: 130,
  },
  backButton: {
    marginBottom: 10,
  },
});
