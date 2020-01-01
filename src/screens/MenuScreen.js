
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from '../components/Footer';
import MenuIcon from '../components/MenuIcon';
import connect from 'react-redux';

const MenuScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.viewItem}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textItem}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewItem}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.textItem}>Create New Account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewItem}>
                    <TouchableOpacity onPress={() => navigation.navigate('Logout')}>
                        <Text style={styles.textItem}>Logout</Text>
                    </TouchableOpacity>
                </View>
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
            {/* <Footer navigation={navigation} /> */}
        </View>
    );
}

MenuScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <MenuIcon navigation={navigation} />
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
    },
    textItem: {
        fontSize: 26
    },
    viewItem: {
        marginVertical: 5
    }
});

//export default MenuScreen;
const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen)
