import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
  LoginScreen,
  InfoScreen,
  ChooseWebSite,
  AuthLoadingScreen

} from "./screens";

const Router = createStackNavigator(
  {
    LoginScreen,
    InfoScreen,
    ChooseWebSite,
    AuthLoadingScreen
  },
  {
    initialRouteName: "AuthLoadingScreen",
    headerMode: "none"
  }
);

export default createAppContainer(Router);
