import React from "react";
import {StyleSheet, View, Text, SafeAreaView, StatusBar, YellowBox} from "react-native";
import colors from "./src/utils/colors";
import Form from "./src/components/Form";
import Picker from "react-native-picker-select";

YellowBox.ignoreWarnings(['Picker has been extracted']);

export default function App(){
  return(
    <>
    <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}/>
        <Text style={styles.titleApp}>Cotizador de Préstamos</Text>
        <Form />
      </SafeAreaView>

      <View>
        <Text>Resultado</Text> 
      </View>

      <View>
        <Text>Footer</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea:{    
    height: 290,    
    alignItems: "center",
  },

  background:{
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1,
  },

  titleApp:{
    fontSize: 25,
    fontWeight: 'bold',
    color:"#fff",
    marginTop: 15,
  }
});