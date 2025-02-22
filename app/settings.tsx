import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../components/theme';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export default function SettingsScreen() {
  

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color={COLORS.white} style={{ marginBottom: 20 }} />
      </TouchableOpacity>
      
      <Text style={styles.title}>Configuración</Text>
      </View>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>👤 Editar Perfil</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>🔒 Seguridad</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>👤 Mi Información</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>💬 Centro de Ayuda</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>🚪 Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    color: COLORS.accent,
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    color: COLORS.accent,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    marginRight: 120,
  },
  menuItem: {
    backgroundColor: COLORS.secondary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  menuText: {
    fontSize: 18,
    color: COLORS.white,
  },
  logoutButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 18,
    color: COLORS.white,
  },
});

