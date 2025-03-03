import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import COLORS from '../components/theme';
import { CustomButton } from '../components/CustomButton';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RequestScreen() {
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={COLORS.white} style={{ marginBottom: 20 }} />
            </TouchableOpacity>
            <Text style={styles.title}>Solicitar Dinero</Text>
        </View>
        
        <Text style={styles.label}>De</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre o número de cuenta"
          placeholderTextColor={COLORS.gray}
        />
        
        <Text style={styles.label}>Cantidad</Text>
        <TextInput
          style={styles.input}
          placeholder="$0.00"
          placeholderTextColor={COLORS.gray}
          keyboardType="numeric"
        />
        
        <Text style={styles.label}>Mensaje (Opcional)</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Escribe un mensaje"
          placeholderTextColor={COLORS.gray}
          multiline
        />
        
        <CustomButton title="Solicitar" onPress={() => {}} style={styles.button} />
      </SafeAreaView>
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
      marginBottom: 20,
      marginRight: 90,
    },
    label: {
      fontSize: 16,
      color: COLORS.white,
      marginBottom: 5,
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
    textArea: {
      height: 80,
    },
    button: {
      width: '100%',
      marginTop: 20,
    },
  });