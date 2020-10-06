import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import colors from "../utils/colors"
import RNPickerSelect from 'react-native-picker-select';

export default function Form(){
    return(
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput placeholder="Cantidad a pedir" keyboardType="numeric" style={styles.input}/>
                <TextInput placeholder="Interés %" keyboardType="numeric" style={[styles.input, styles.inputPorcentaje]}/>
            </View>
            <RNPickerSelect style={pickerSelectStyles}
                placeholder={{
                    label: 'Selecciona los meses',
                    value: null,
                    color: 'black',
                }}
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}
                useNativeAndroidPickerStyle={false}
            />           
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm:{
        position:"absolute",
        bottom: 0,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: "center",
    },

    viewInputs:{
        flexDirection: "row",
    },

    input:{
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal: 20, 
    },

    inputPorcentaje:{
        width: "40%",
        marginLeft: 5,
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
        marginLeft: -5,
        marginRight: -5,
    },
    inputAndroid:{
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: "#fff",        
    },
});