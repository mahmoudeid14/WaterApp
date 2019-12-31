
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from '../components/Footer';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text>Home Screen</Text>
            </View>
            <Footer navigation={navigation}/>
        </View>
    );
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
    }
});

export default HomeScreen;
