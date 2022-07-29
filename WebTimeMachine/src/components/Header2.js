import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "../core/theme";

const Header2 = ({ children }) => <Text style={styles.header}>{children}</Text>;

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    width:'100%',
    marginBottom:30,
    fontWeight:'600',
    color: theme.colors.primary,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",

  }
});

export default memo(Header2);
