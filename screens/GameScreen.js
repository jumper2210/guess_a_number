import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Alert,
  ScrollView
} from "react-native";
import NumberContainer from "../components/NumberContainer";
import { Ionicons } from "@expo/vector-icons";
import BodyText from "../components/BodyText";
import Card from "../components/Card";
import TitleText from "../components/TitleText";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderListItem = (vaule, numOfRound) => (
  <View key={vaule} style={styles.list}>
    <BodyText>#{numOfRound}</BodyText>
    <BodyText>{vaule}</BodyText>
  </View>
);
const GameScreen = props => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong ... :)", [
        { text: "Sorry!", style: "cancel" }
      ]);

      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current
    );
    setCurrentGuess(nextNumber);
    setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
  };

  return (
    <View style={styles.screen}>
      <TitleText>Opponents guess</TitleText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.btnContainer}>
        <Button title="Lower" onPress={nextGuessHandler.bind(this, "lower")}>
          {" "}
          <Ionicons name="md-remove" size={24} color="white" />
        </Button>

        <Button
          title="Greater"
          onPress={nextGuessHandler.bind(this, "greater")}
        >
          <Ionicons name="md-add" size={24} color="white" />
        </Button>
      </Card>

      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 400,
    maxWidth: "90%"
  },
  listItem: {
    borderColor: "#ccc",
    padding: 15,
    backgroundColor: "white",
    borderWidth: 1,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  listContainer: {
    width: "80%",
    flex: 1
  },
  list: {
    alignItems: "center"
  }
});
export default GameScreen;
