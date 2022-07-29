import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "../core/theme";

const Paragraph = ({ children }) => <Text style={styles.text}>{children}</Text>;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight:'400',
    color: "#3357A7",//"#1D1D1B",//theme.colors.primary,
    textAlign: "center",
    marginBottom: 14,
    fontFamily: "Montserrat-Regular"
  }
});

export default memo(Paragraph);
