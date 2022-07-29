import React, { PureComponent } from "react";
import {
  View,
  TouchableOpacity,
  Platform,
  Image,
  ImageBackground,
  ActivityIndicator
} from "react-native";
import ImagePicker from "react-native-image-picker";
import firebase from "firebase/app";
import 'firebase/storage';
import "firebase/auth";
import Icon from "react-native-vector-icons/MaterialIcons";
import CardSection from "./CardSection";

class ProfilImageUploader extends PureComponent {
  uploadImage(path) {
    return new Promise((resolve, reject) => {
      const sessionId = new Date().getTime();
      const imageRef = firebase
        .storage()
        .ref("images")
        .child(`${sessionId}`);
      this.props.setImageURL("");
      imageRef
        .put(path)
        .then(() => {
          return imageRef.getDownloadURL();
        })
        .then(url => {
          resolve(url);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  async _UpdateImage(image) {
    console.log("_UpdateImage", image);
    console.log("_UpdateImage 5");

const response = await fetch(image);
console.log("_UpdateImage 1", response);

const blob = await response.blob()
console.log("_UpdateImage 2");

const user = firebase.auth().currentUser;
console.log("_UpdateImage 3");

if (user) {
  console.log("isuser");

    const storageRef = firebase.storage().ref();
    const sessionId = new Date().getTime();
    const imageRef = firebase
      .storage()
      .ref("images")
      .child(`${sessionId}`);

      const snap = await firebase.storage().ref("images").child(`${sessionId}`).put(blob);

       const downloadURL = await snap.ref.getDownloadURL();
       this.props.setImageURL(downloadURL)
        // console.log('Uploaded a blob or file!',snapshot.metadata.fullPath);
        // return snapshot.metadata.fullPath;
        console.log("yeesss", downloadURL);

    }
    console.log("after _UpdateImage");

}

async _UpdateImageWithData(data) {
  //console.log("_UpdateImage", image);
  console.log("_UpdateImage 5");

// const response = await fetch(image);
// console.log("_UpdateImage 1", response);

const blob = await data.blob()
console.log("_UpdateImage 2", blob);

const user = firebase.auth().currentUser;
console.log("_UpdateImage 3");

if (user) {
console.log("isuser");

  const storageRef = firebase.storage().ref();
  const sessionId = new Date().getTime();
  const imageRef = firebase
    .storage()
    .ref("images")
    .child(`${sessionId}`);

    const snap = await firebase.storage().ref("images").child(`${sessionId}`).put(blob);

     const downloadURL = await snap.ref.getDownloadURL();
     this.props.setImageURL(downloadURL)
      // console.log('Uploaded a blob or file!',snapshot.metadata.fullPath);
      // return snapshot.metadata.fullPath;
      console.log("yeesss", downloadURL);

  }
  console.log("after _UpdateImage");

}
  pickImage() {
    const options = {
      title: "Sélectionnez l'image",
      takePhotoButtonTitle: "Prenez une photo",
      chooseFromLibraryButtonTitle: "Sélectionner dans la galerie",
      quality: 0.5,
      storageOptions: {
         skipBackup: true,
         path: 'images',
       },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        console.log("urrrlll", response);

        let path = "";

        path = response.uri;
        console.log("urrrlll", path);

      //  const url = this._UpdateImageWithData(data);
        const url = this._UpdateImage(path);



      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {(() => {
          switch (this.props.imageURL) {
            case null:
              return (
                <TouchableOpacity style={styles.imageContainer} onPress={() => this.pickImage()}>
                  <Image
                    style={styles.imageAdd}
                    source={require("../assets/photo.png")} //eslint-disable-line
                  />
                </TouchableOpacity>
              );
            case "":
              return (
                <CardSection>
                  <ActivityIndicator />
                </CardSection>
              );
            default:
              return (
                <View>
                <Image
                  source={{ uri: this.props.imageURL }}
                  style={styles.image}
                />
                <Icon
                  onPress={() => this.props.setImageURL(null)}
                  name="close"
                  size={30}
                  color="white"
                  style={styles.deleteButtonStyle}
                />

                </View>
              );
          }
        })()}
      </View>
    );
  }
}

const styles = {
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  imageContainer:{
  height:70,
  width:70,
backgroundColor:'transparent',
justifyContent: 'center',
alignItems: 'center',
borderColor:'#6E6E6E',
borderWidth:0.7,
borderRadius:35,
marginTop:10,
marginBottom:10
},
imageAdd:{
  width: 40,
  height: 40,
  resizeMode: "contain",

},
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    backgroundColor: "white",
    borderRadius:50,
  },
  view: {
    width: 100,
    height: 100,
    backgroundColor: "#373737",
    marginTop:50,
    marginBottom:50,
    borderRadius:50,
  },
  upload: {
    textAlign: "center",
    color: "#333333",
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "white"
  },
  deleteButtonStyle: {
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "flex-end",
    position:'absolute'
  }
};

export default ProfilImageUploader;
