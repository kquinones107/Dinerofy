import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import COLORS from '../components/theme';
import { CustomButton } from '../components/CustomButton';
import { router } from 'expo-router';

const transactions = [
  { id: '1', title: 'Fauget Cafe', date: 'May 4th, 2024', type: 'Payment', status: 'Success' },
  { id: '2', title: 'Larana, Inc.', date: 'May 3rd, 2024', type: 'Payment', status: 'Success' },
  { id: '3', title: 'Claudia Alves', date: 'May 2nd, 2024', type: 'Transfer', status: 'Failed' },
  { id: '4', title: 'Borcelle Cafe', date: 'May 1st, 2024', type: 'Payment', status: 'Success' },
  { id: '5', title: 'Avery Clinic', date: 'April 30th, 2024', type: 'Transfer', status: 'Success' },
];

export default function DashboardScreen() {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome back</Text>
        <Text style={styles.username}>Kevin Quiñones</Text>
        <Image source={{ uri: 'https://example.com/user.png' }} style={styles.profileImage} />
      </View>
      
      <View style={styles.balanceCard}>
        <Text style={styles.balanceAmount}>$5,500.50</Text>
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.cardInfo}>**** 123-456-7890</Text>
        <Text style={styles.bankName}>Fauget Bank Credit Card</Text>
      </View>
      
      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.actionButton}
         onPress={() => router.push('/transfer')}>
          <Text style={styles.actionText}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Request</Text>
        </TouchableOpacity>
      </View>
      
      <TextInput style={styles.searchBar} placeholder="Search here" placeholderTextColor={COLORS.gray} />
      
      <Text style={styles.transactionTitle}>Transaction</Text>
      
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text style={styles.transactionText}>{item.title}</Text>
            <Text style={styles.transactionDate}>{item.date}</Text>
            <Text style={styles.transactionType}>{item.type}</Text>
            <Text style={[styles.transactionStatus, item.status === 'Success' ? styles.success : styles.failed]}>
              {item.status}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 16,
    color: COLORS.white,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.accent,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  balanceCard: {
    backgroundColor: COLORS.secondary,
    borderRadius: 15,
    padding: 20,
    marginVertical: 20,
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  balanceLabel: {
    fontSize: 14,
    color: COLORS.white,
  },
  cardInfo: {
    fontSize: 12,
    color: COLORS.white,
  },
  bankName: {
    fontSize: 12,
    color: COLORS.white,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  actionButton: {
    backgroundColor: COLORS.accent,
    padding: 10,
    borderRadius: 10,
  },
  actionText: {
    color: COLORS.white,
    fontSize: 16,
  },
  searchBar: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.accent,
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginBottom: 10,
  },
  transactionText: {
    fontSize: 16,
  },
  transactionDate: {
    fontSize: 14,
    color: COLORS.gray,
  },
  transactionType: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  transactionStatus: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  success: {
    color: 'green',
  },
  failed: {
    color: 'red',
  },
});