import React, { memo } from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  View
} from "react-native";

const Background2 = ({ children }) => (
  <View style={styles.background}>
  <ImageBackground
    source={require("../assets/bkg.jpeg")}
      resizeMode="cover"
    style={styles.background}
  >
  <View style={styles.overlay} />
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>

  </View>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    tintColor:'#FEBF00',
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)'
  //  backgroundColor:'#2A1F6E'//'#1D1D1B'//'white'

  },
  overlay: {
     ...StyleSheet.absoluteFillObject,
     backgroundColor: 'rgba(255,255,255,0.6)'
   },
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default memo(Background2);
