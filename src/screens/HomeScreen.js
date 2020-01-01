
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Footer from '../components/Footer';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text>Home Screen 123 s</Text>
            </View>
            <Footer navigation={navigation} />
        </View>
    );
}


// HomeScreen.navigationOptions = ({ navigation }) => {
//     return {
//         headerRight: <TouchableOpacity onPress={() => props.navigation.navigate('Menu')}>
//             <Image source={require('../../assets/menu1.png')} style={styles.icon} />
//         </TouchableOpacity>
//     }
// }
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
