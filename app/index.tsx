import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import COLORS from '../components/theme';
import { CustomButton } from "@/components/CustomButton";


export default function Index() {

  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);

  const onboardingData = [
    {
      image: require("../assets/images/billeteras-digitales.png"),
      //title: "Agrega tus tarjetas favoritas",
      //description: "Tu billetera digital siempre a la mano. Agrega tus tarjetas, realiza pagos sin complicaciones y mantén tus fondos organizados en un solo lugar.",
      buttonLabel: "Siguiente",
    },
    {
      image: require("../assets/images/Imagen_1.png"),
      //title: "Realiza tus pagos sin contacto",
      //description: "Paga fácil y sin efectivo. Usa tu billetera digital para realizar pagos rápidos, seguros y sin contacto en cualquier momento",
      buttonLabel: "Siguiente",
    },
    {
      image: require("../assets/images/imagen_2.png"),
      //title: "Transfiere dinero a tus amigos",
      //description: "Gestiona tu dinero de forma rápida y segura. Visualiza tu saldo, revisa tu historial de transacciones y mantén el control de tus finanzas en todo momento",
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
        {/*<Text style={styles.title}>{title}</Text> */}
        {/*<Text style={styles.description}>{description}</Text> */}

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
});