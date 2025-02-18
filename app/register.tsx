import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import COLORS from '../components/theme';
import { CustomButton } from '../components/CustomButton';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://example.com/logo.png' }} // Reemplaza con la ruta correcta del logo
        style={styles.logo}
      />
      <Text style={styles.title}>Crear una cuenta en Dinerofy</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
        placeholderTextColor={COLORS.gray}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        placeholderTextColor={COLORS.gray}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor={COLORS.gray}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        placeholderTextColor={COLORS.gray}
        secureTextEntry
      />
      
      <CustomButton title="Registrarse" onPress={() => {}} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: COLORS.accent,
    fontWeight: 'bold',
    marginBottom: 20,
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
  button: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
  },
});