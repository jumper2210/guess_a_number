import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";
const MainBtn = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.btn}>
        <Text>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  btnText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18
  }
});
export default MainBtn;
