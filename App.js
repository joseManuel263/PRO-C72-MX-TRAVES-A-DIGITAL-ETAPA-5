import React, { Component } from "react";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";
import { Header } from 'react-native-elements';
import { View,StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import BottomTabNavigator from "./components/BottomTabNavigator";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    });
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return(
      <SafeAreaProvider>
      <View style={styles.container}>
      <Header
            backgroundColor={'#00CED1'} 
            centerComponent={{
              text: 'TRAVESÍA DIGITAL ETAPA 5 ʕ•́ᴥ•̀ʔっ.',
              style: { color: '#000000', fontSize: 12 },
            }}
          />

      <BottomTabNavigator/>
      </View>
      </SafeAreaProvider>
    );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})