import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import COLORS from '../components/theme';
import { CustomButton } from '../components/CustomButton';
import { router, useRouter } from 'expo-router';
import { loginUser } from '@/services/authService';
import { useAuth } from '@/contexts/AuthContext';



export default function LoginScreen() {

  const authContext = useAuth();
  const login = authContext ? authContext.login : null;
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    try {
      if (login) {
        await login(email, password);
      } else {
        Alert.alert("Error", "El servicio de autenticación no está disponible");
      }
      router.replace("/dashboard");
    } catch (error) {
      Alert.alert("Error", "Correo o contraseña incorrectos");
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://example.com/logo.png' }} // Reemplaza con el enlace o ruta local de tu logo
        style={styles.logo}
      />
      <Text style={styles.title}>Bienvenido a Dinerofy</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        placeholderTextColor={COLORS.gray}
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor={COLORS.gray}
        secureTextEntry
        onChangeText={setPassword}
      />
      <CustomButton title="Iniciar Sesión" onPress={handleLogin} style={styles.button} />
      <TouchableOpacity>
        <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={styles.register}>Registrate</Text>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary, // Color morado oscuro
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: COLORS.accent, // Color morado claro
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
    backgroundColor: COLORS.secondary, // Color morado intermedio
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
  },
  link: {
    color: COLORS.accent, // Color morado claro
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  register: {
    color: COLORS.accent, // Color morado claro
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,  
  },
});