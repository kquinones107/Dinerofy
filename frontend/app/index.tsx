import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, ImageBackground, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import COLORS from '../components/theme';
import { CustomButton } from "@/components/CustomButton";
import { auth } from "@/config/firebaseConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Index() {

  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  

  const onboardingData = [
    {
      image: require("../assets/images/billeteras-digitales.png"),
      buttonLabel: "Siguiente",
    },
    {
      image: require("../assets/images/Imagen_1.png"),
      buttonLabel: "Siguiente",
    },
    {
      image: require("../assets/images/imagen_2.png"),
      buttonLabel: "Comenzar",
    },
  ];

  const handleIndicatorPress = (index: number) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push('/login'); 
    }
  };

  const { image,  buttonLabel } = onboardingData[currentIndex];

  return (
    <ImageBackground source={image} style={styles.container}>
      <View style={styles.content}>

        <View style={styles.indicators}>
          {onboardingData.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.indicator,
                index === currentIndex && styles.activeIndicator,
              ]}
              onPress={() => handleIndicatorPress(index)}
            />
          ))}
        </View>

        <CustomButton title={buttonLabel} onPress={handleNext} style={styles.button} />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
    paddingBottom: 100,
    paddingHorizontal: 40,
    
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#000",
    backgroundColor: "rgba(64, 3, 111, 0.3)",
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#000",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  indicators: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: COLORS.accent,
    width: 50,
    height: 10,
  },
  button: {
    marginTop: 20,
    paddingHorizontal: 80,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});