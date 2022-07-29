import React, { memo, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Dimensions, Image, Alert } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import Header3 from "../components/Header3";
import Paragraph2 from "../components/Paragraph2";
import Background2 from "../components/Background2";
import { theme } from "../core/theme";
import { emailValidator, passwordValidator } from "../core/utils";
import Toast from "../components/Toast";
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const _onLoginPressed = async () => {

navigation.navigate("ChooseWebSite")
  };

  return (
    <View style={styles.container}>


<Background>
    <View style={{width: "100%",tintColor:'#FEBF00',backgroundColor:'transparent',alignItems:'center'}}>
      <Image source={require('../assets/mywhall.png')} style={{
        width: 150,
        height:150,
        marginTop:10,
        resizeMode:'contain'
      }} />

      </View>


          <Paragraph2>Connectez vous à votre compte et profitez de l'application</Paragraph2>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Mot de passe"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        autoCapitalize="none"
      />



      <Button loading={loading} mode="contained" onPress={_onLoginPressed}>
        Se connecter
      </Button>


      <Toast message={error} onDismiss={() => setError("")} />

    </Background>

    </View>

  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
position: 'absolute',
width:'100%',
height:'100%'
},
container: {
backgroundColor:"white",
  flex: 1,
  width: "100%",
  alignSelf: "center",
  alignItems: "center",
  justifyContent: "center",
},
containerScroll: {
  flex: 1,
  padding: 0,
  marginTop:50,
  width: "100%",
  maxWidth: 340,
  alignSelf: "center",
  alignItems: "center",
  justifyContent: "center",
},
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24
  },
  row: {
    flexDirection: "row",
    marginTop: 4
  },
  label: {
    color: theme.colors.secondary
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  }
});

export default memo(LoginScreen);
