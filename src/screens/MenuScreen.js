
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from '../components/Footer';

const MenuScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.viewItem}>
                    <TouchableOpacity>
                        <Text style={styles.textItem}>New Order</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewItem}>
                    <TouchableOpacity>
                        <Text style={styles.textItem}>Order History</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewItem}>
                    <TouchableOpacity>
                        <Text style={styles.textItem}>Settings</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewItem}>
                    <TouchableOpacity>
                        <Text style={styles.textItem}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Footer navigation={navigation} />
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
    },
    textItem:{
        fontSize:26
    },
    viewItem:{
        marginVertical:5
    }
});

export default MenuScreen;
