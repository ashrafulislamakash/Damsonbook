import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import cons from "../components/Constant";

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.Image}
        source={require("../assets/youtubevailogo.png")}
      />
      <Text style={styles.title}>Youtuve Vai</Text>
      <Text style={styles.body}>
        "YouTube Vai" is one of the most popular Tutorial-based YouTube channels
        in Bangladesh. Bringing you quality Tutorials. Subscribe to be a Master
        Technologist.
      </Text>
      <TouchableOpacity
        style={styles.exploreBtn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.exploreBtnTxt}>Wow Facebook!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: cons.colors.primary,
    justifyContent: "center",
  },
  Image: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    width: "70%",
    textAlign: "center",
    marginBottom: 10,
    lineHeight: 49,
  },
  body: {
    width: "80%",
    color: "white",
    fontSize: 14,
    lineHeight: 24,
  },
  exploreBtn: {
    width: "70%",
    backgroundColor: cons.colors.secondary,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  exploreBtnTxt: {
    color: "white",
    fontFamily: "Rubik_400Regular",
  },
});

export default Splash;
