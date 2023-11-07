import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AndroidLarge11 = () => {
  return (
    <View style={styles.androidLarge1}>
      <Text style={styles.teste}>Teste</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  teste: {
    position: "absolute",
    top: 115,
    left: 30,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
  },
  androidLarge1: {
    backgroundColor: Color.colorWhite,
    width: 360,
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge11;
