import React, { memo, Component } from "react";
import Background2 from "../components/Background2";
import {Text, TouchableOpacity} from "react-native"
import { Image, View,ImageBackground, AsyncStorage} from 'react-native';
import Logo from "../components/Logo";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import Paragraph from "../components/Paragraph";
import Paragraph2 from "../components/Paragraph2";
import DatePicker from 'react-native-datepicker'
import { Input, Button} from "react-native-elements";
import { theme } from "../core/theme";
import moment from "moment";
export default class InfoScreen extends Component
{
  constructor(props) {
    super(props);

    this.state = {
    website:"",
    date:"",
    response:"",
    timestamp:""
  };
  }

  render()
  {
    return(
  <View style={{width:'100%', flex:1, alignItems: 'center', marginTop:50}}>
  <TouchableOpacity style={{
               position: 'absolute',
               left: 20,
               top: 20,
               marginLeft: 0,
               borderRadius:20,
               height:40,
               width:40,
               backgroundColor:"black",
               alignItems:'center',
               justifyContent:'center'
             }}
             onPress={() => this.props.navigation.navigate("ChooseWebSite")}>
             <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>X</Text>
             </TouchableOpacity>

<Text style={{fontSize:20,marginTop:70, fontWeight:'bold'}}>
Bienvenue !!!
</Text>
<Text style={{fontSize:18,marginTop:10}}>
Merci de nous avoir rejoins!
</Text>
<Button
raised
buttonStyle={{ backgroundColor: theme.colors.primary, marginTop:10, width:'100%' }}
textStyle={{ textAlign: "center" }}
title={"Activer les notifications pour plus de détails"}
onPress={() => {
}}
/>
    </View>

)
}
}
