import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../components/theme';
import { router, useRouter } from 'expo-router';

export default function MenuScreen() {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      
      <TouchableOpacity style={styles.menuItem} 
        onPress={() => router.push('/dashboard')}>
        <Text style={styles.menuText}>🏠 Dashboard</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.menuItem} 
        onPress={() => router.push('/notification')}>
        <Text style={styles.menuText}>🔔 Notification</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.menuItem} 
        onPress={() => router.push('/settings')}>
        <Text style={styles.menuText}>⚙️ Setting</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: COLORS.accent,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
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
});
