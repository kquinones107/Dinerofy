import React, {useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import COLORS from '../components/theme';
import { CustomButton } from '../components/CustomButton';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {getUserData} from '@/services/userService';
import { auth } from '@/config/firebaseConfig';
import { DocumentData } from 'firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getTransactions } from '../services/transactionService';



export default function DashboardScreen() {

  const [userData, setUserData] = React.useState<DocumentData | null>(null);
  const [transactions, setTransactions] = React.useState<DocumentData>([]);



  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // if (auth.currentUser) {
          const user = await getUserData('Pt9C1vJRf2N0B1vLK7cVpbjaoda2');
          setUserData(user);
        // }
      } catch (error) {
        console.error("Error obteniendo datos",error);
      }
    };

    const getUserTransactions = async () => {
      const userTransactions = await getTransactions('Pt9C1vJRf2N0B1vLK7cVpbjaoda2');
      setTransactions(userTransactions.data);
    } 
  
    (async () => {
      await fetchUserData();
      await getUserTransactions();
    })();
   
  }, []);

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp * 1000); // Convertir segundos a milisegundos
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }); // Formato dd/mm/yyyy según el locale
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome back</Text>
        <Text style={styles.username}>{userData?.fullName}</Text>
        <Image source={{ uri: 'https://example.com/user.png' }} style={styles.profileImage} />
        <TouchableOpacity onPress={() => router.push('/menu')}>
          <Ionicons name="menu" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.balanceCard}>
        <Text style={styles.balanceAmount}>${userData?.balance}</Text>
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.cardInfo}>**** 123-456-7890</Text>
        <Text style={styles.bankName}>Fauget Bank Credit Card</Text>
      </View>
      
      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.actionButton}
         onPress={() => router.push('/transfer')}>
          <FontAwesome6 style={styles.actionButton} name="money-bill-transfer" size={24} color={COLORS.white} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}
         onPress={() => router.push('/request')}>
          <MaterialIcons style={styles.actionButton} name="request-page" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      
      <TextInput style={styles.searchBar} placeholder="Search here" placeholderTextColor={COLORS.gray} />
      
      <Text style={styles.transactionTitle}>Transaction</Text>
      
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text style={styles.transactionText} numberOfLines={1}>{item.receiverEmail}</Text>
            <Text style={styles.transactionDate}>{formatTimestamp(item.timestamp.seconds)}</Text>
            <Text style={styles.transactionType}>Payment</Text>
            <Text style={[styles.transactionStatus, styles.success]}>
              Success
            </Text>
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
    gap: 10
  },
  transactionText: {
    fontSize: 16,

    textOverflow: 'ellipsis',
    overflow: 'hidden',
    maxWidth: 100
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