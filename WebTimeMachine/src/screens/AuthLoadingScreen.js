import React, { memo } from "react";
import { ActivityIndicator } from "react-native";
import Background from "../components/Background";
import { theme } from "../core/theme";


const AuthLoadingScreen = ({ navigation }) => {
  navigation.navigate("LoginScreen");

  return (
    <Background>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Background>
  );
};

export default memo(AuthLoadingScreen);
