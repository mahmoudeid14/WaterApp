
import React from 'react';
import { View, Alert, Text, StyleSheet, TextInput, Dimensions, Button, TouchableOpacity } from 'react-native';
import Footer from '../components/Footer';
const devWidth = Dimensions.get('window').width;
const devHeight = Dimensions.get('window').height;
const InputComponent = (props) => {

    return (<View >
        <TextInput
            placeholder={props.placeholder}
            style={styles.input}
            autoCorrect={false}
            autoCapitalize={'none'} />
    </View>);
}



const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: devWidth - 20,
        borderRadius: 5,
        marginVertical: 5,
        paddingHorizontal: 20
    },

});

export default InputComponent;

