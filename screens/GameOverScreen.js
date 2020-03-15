import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainBtn from "../components/MainBtn";
const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The game is over</TitleText>
      <View style={styles.imgContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed:{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
      </View>
      <MainBtn onPress={props.newRestart}>New Game </MainBtn>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  },
  resultText: {
    textAlign: "center",
    fontSize: 20
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  }
});
export default GameOverScreen;
