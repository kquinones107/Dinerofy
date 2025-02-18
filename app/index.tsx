import React, { useEffect } from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
    router.push("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView
      style={styles.container}
      >
      <View style={styles.container}>
      <Text style={styles.text}>Welcome to the app</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CCA9DD"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
