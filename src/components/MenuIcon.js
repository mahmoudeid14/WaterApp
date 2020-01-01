
import React from 'react';
import {  StyleSheet, Image, TouchableOpacity } from 'react-native';
const MenuIcon = ({navigation}) => {

    return (<TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <Image source={require('../../assets/menu1.png')} style={styles.icon} />
    </TouchableOpacity>);
}



const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50,
    }
});

export default MenuIcon;

