import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Card = props => {
  let tableA = [2, 3, 9, 2, 5, 1, 3, 7, 10];
  let tableB = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10];

  const task = (tableA, tableB) => {
    const mapForCompare = new Map();

    let newMap = tableB.map(objB => {
      if (mapForCompare.has(objB)) {
        let countOfB = mapForCompare.get(objB);

        countOfB++;
        mapForCompare.set(objB, countOfB);
      } else {
        mapForCompare.set(objB, 1);
      }
    });

    let arrayOutput = tableA;

    let newMapA = tableA.map(objA => {
      //console.log(tableA,"__",objA)
      let countInArray = mapForCompare.get(objA);
      if (countInArray === undefined) return;

      if (checkIsPrime(countInArray)) {
        arrayOutput.pop(objA);
      }
    });

    return console.log(arrayOutput);
  };
  let checkIsPrime = number => {
    if (number === 1) return false;
    for (let i = 2; i < number; i++) {
      if (number % i === 1) return false;
    }
    return true;
  };
  console.log(task(tableA, tableB));

  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};
const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10
  }
});
export default Card;
