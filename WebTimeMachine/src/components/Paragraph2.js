import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "../core/theme";

const Paragraph2 = ({ children }) => <Text style={styles.text}>{children}</Text>;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight:'400',
    color: theme.colors.primary,
    textAlign: "left",
    marginTop:10,
    marginBottom: 14,
    fontFamily: "Montserrat-Regular"
  }
});

export default memo(Paragraph2);
