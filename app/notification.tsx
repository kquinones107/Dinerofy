import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '../components/theme';
import { router, useRouter } from 'expo-router'; 
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getNotifications } from '../services/notificationService';
import { DocumentData } from 'firebase/firestore';


export default function NotificationScreen() {

  const [notifications, setNotifications] = React.useState<DocumentData>([]);

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp * 1000); // Convertir segundos a milisegundos
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }); // Formato dd/mm/yyyy según el locale
  };



  const getUserNotifications = async () => {
    const userNotifications = await getNotifications('Pt9C1vJRf2N0B1vLK7cVpbjaoda2');
    setNotifications(userNotifications.data);
  }

  useEffect(() => {
    getUserNotifications();
  }, [])

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
            <Text style={styles.date}>{formatTimestamp(item.createdAt.seconds)}</Text>
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