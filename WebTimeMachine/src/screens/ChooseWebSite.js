import React, { memo, Component } from "react";
import Background2 from "../components/Background2";
import {Text, TouchableOpacity} from "react-native"
import { Image, View,ImageBackground, AsyncStorage, Linking} from 'react-native';
import Logo from "../components/Logo";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import Paragraph from "../components/Paragraph";
import Paragraph2 from "../components/Paragraph2";
import DatePicker from 'react-native-datepicker'
import { Input, Button} from "react-native-elements";
import { theme } from "../core/theme";
import moment from "moment";
export default class ChooseWebSite extends Component
{
  constructor(props) {
    super(props);

    this.state = {
    website:"",
    date:"",
    response:"",
    timestamp:"",
    url:""
  };
  }
  async getDataFromApi() {
try {
  
   const date = moment(this.state.date).toDate();//new Date(this.state.date);
   console.log("date", this.state.date,date);
   const time = date.getTime();
  console.log("date", date,time);
  const url = "http://archive.org/wayback/available?url="+this.state.website+"&timestamp="+time;
  console.log("url", url);
let response = await fetch(
url
);
let responseJson = await response.json();
const str = JSON.stringify(responseJson);
console.log("responsssssse",str);

this.setState({response:str})
} catch (error) {
console.error(error);
}
}
  render()
  {
    return(
  <View style={{width:'100%', flex:1, alignItems: 'center', marginTop:50}}>

<TouchableOpacity style={{
             position: 'absolute',
             right: 20,
             top: 20,
             marginLeft: 0,
             borderRadius:20,
             height:40,
             width:40,
             backgroundColor:"black",
             alignItems:'center',
             justifyContent:'center'
           }}
           onPress={() => this.props.navigation.navigate("InfoScreen")}>
           <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>i</Text>
           </TouchableOpacity>
  <Image source={require('../assets/mywhall.png')} style={{
    width: 250,
    height:170,
    marginTop:70,
    resizeMode:'contain'
  }} />

    <View style={{ margin:0, marginTop:10}}/>



<View />
<Input
  returnKeyType="next"
  autoCapitalize="sentences"
  placeholder="Site web *"
  onChangeText={value => this.setState({ website: value})}
  onSubmitEditing={() => {
  }}
/>
<DatePicker
       style={{width: '95%'}}
       date={this.state.date}
       mode="date"
       placeholder="Sélectionnez une date"
       format="DD/MM/YYYY"
       iconSource={require('../assets/calendar.png')}
       confirmBtnText="Confirmer"
       cancelBtnText="Annuler"
       customStyles={{
         dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 10,
                      marginLeft: 0,
                      height:20,
                      width:20,
                      tintColor:"#6E6E6E"
                    },
         dateInput: {
           marginLeft: 26
         }
         // ... You can check the source to find the other keys.
       }}
       onDateChange={(date) => {this.setState({date: date, timestamp:Date.parse(date)})}}
     />

    <Button
raised
buttonStyle={{ backgroundColor: theme.colors.primary, marginTop:10, width:'100%' }}
textStyle={{ textAlign: "center" }}
title={"Rechercher"}
onPress={() => {
  this.getDataFromApi();
}}
/>
{this.state.response===""?null:<Text style={{fontSize:18, fontWeight:'bold', marginTop:10}}>
Réponse :
</Text>}

<Text style={{fontSize:15,marginTop:10}}>
{this.state.response}
</Text>

{this.state.response===""?null:    <Button
raised
buttonStyle={{ backgroundColor: theme.colors.primary, marginTop:10, width:'100%' }}
textStyle={{ textAlign: "center" }}
title={"Visualiser"}
onPress={() =>     Linking.openURL(this.state.website).catch(err => console.error("Couldn't load page", err))}
/>}
    </View>

)
}
}
