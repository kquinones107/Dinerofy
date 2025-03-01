import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '../components/theme';
import { router, useRouter } from 'expo-router'; 
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const notifications = [
  { id: '1', message: 'Has recibido una transferencia de $500', date: 'May 5, 2024' },
  { id: '2', message: 'Tu pago en Fauget Cafe fue exitoso', date: 'May 4, 2024' },
  { id: '3', message: 'Tu transferencia a Claudia Alves ha fallado', date: 'May 3, 2024' },
  { id: '4', message: 'Se ha actualizado tu información de seguridad', date: 'May 2, 2024' },
];

export default function NotificationScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
      <Ionicons name="arrow-back" size={24} color={COLORS.white} style={{ marginBottom: 20 }} />
      </TouchableOpacity>
      
      <Text style={styles.title}>Notifications</Text>
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
      />
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
    marginRight: 130,
  },
  notificationItem: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
  },
  date: {
    fontSize: 14,
    color: COLORS.gray,
    marginTop: 5,
  },
});