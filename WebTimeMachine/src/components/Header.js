import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "../core/theme";

const Header = ({ children }) => <Text style={styles.header}>{children}</Text>;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    lineHeight:32,
    fontWeight:'600',
    color: "#3357A7",//"#2A1F6E",//"#1D1D1B",//theme.colors.primary,
    paddingVertical: 14,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",

  }
});

export default memo(Header);
