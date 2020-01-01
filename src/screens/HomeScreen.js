
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button,Image } from 'react-native';
import Footer from '../components/Footer';
import MenuIcon from '../components/MenuIcon';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text>Home Screen 123 e</Text>
            </View>
            {/* <Footer navigation={navigation} /> */}
        </View>
    );
}


HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <MenuIcon navigation={navigation}/>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    } ,
    icon: {
        width: 50,
        height: 50,
    }
});

export default HomeScreen;
