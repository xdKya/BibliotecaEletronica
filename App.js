import React, { Component } from "react";
import { Text } from "react-native-elements";
import * as Font from "expo-font";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import BottomTab from "./screens/bottomTabNavigator";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontsLoaded: false,
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold,
    });
    this.setState({
      fontsLoaded: true,
    });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (this.state.fontsLoaded) {
      return <BottomTab />;
    } else {
      return null;
    }
  }
}
