import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import COLORS from '../components/theme';
import { CustomButton } from '../components/CustomButton';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { sendMoney } from '@/services/transactionService';
import { auth } from '@/config/firebaseConfig';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const handleTransfer = async (receiverEmail: string, amount: number, note: string) => {
  try {

    if (!receiverEmail || amount <= 0) {
      alert("Ingrese un destinatario y un monto válido");
      return;
    }

    const userStr = await AsyncStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      await sendMoney(user.email, receiverEmail, amount, note);
      alert("Transferencia exitosa");
      router.push("/dashboard");
    }
  } catch (error) {
    console.error("Error en la transferencia:", (error as any));
    alert("Error en la transferencia: " + (error as any));
  }
};


export default function TransferScreen() {
  const [receiverEmail, setReceiverEmail] = useState('');
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <TouchableOpacity onPress={() => router.back()}>
      <Ionicons name="arrow-back" size={24} color={COLORS.white} style={{ marginBottom: 20 }} />
      </TouchableOpacity>
      <Text style={styles.title}>Nueva Transferencia</Text>
      </View>
      
      <Text style={styles.label}>Destinatario</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre o número de cuenta"
        placeholderTextColor={COLORS.gray}
        onChangeText={setReceiverEmail}
      />
      
      <Text style={styles.label}>Cantidad</Text>
      <TextInput
        style={styles.input}
        placeholder="$0.00"
        placeholderTextColor={COLORS.gray}
        keyboardType="numeric"
        onChangeText={(text) => setAmount(parseFloat(text) || 0)}
      />
      
      <Text style={styles.label}>Nota (Opcional)</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Escribe un mensaje"
        placeholderTextColor={COLORS.gray}
        onChangeText={(text) => setNote(text)}
        multiline
      />
      
      <CustomButton title="Enviar" onPress={() => handleTransfer(receiverEmail, amount, note)} style={styles.button} />
        
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
    color: COLORS.accent,
    fontWeight: 'bold',
    marginBottom: 20,
    marginRight: 60,
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
