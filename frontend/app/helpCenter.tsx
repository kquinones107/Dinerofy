import COLORS from "@/components/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HelpCenterScreen() {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={COLORS.white} style={{ marginBottom: 20 }} />
        </TouchableOpacity>
        <Text style={styles.title}>Centro de Ayuda</Text>
      </View>

      <Text style={styles.description}>Consulta preguntas frecuentes o contacta con soporte.</Text>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 20,
  },
  title: { 
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.white,
    marginBottom: 20,
    marginRight: 130,
  },
  description: { 
    fontSize: 16, 
    marginTop: 10,
    color: COLORS.white,
  },
  backButton: {
    marginBottom: 10,
  },
});

