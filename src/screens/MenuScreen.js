
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from '../components/Footer';
import MenuIcon from '../components/MenuIcon';
import { connect } from 'react-redux';

const MenuScreen = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                {props.currentUser.isLogin === false ?  
                <View style={styles.viewItem}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                        <Text style={styles.textItem}>Login</Text>
                    </TouchableOpacity>
                </View>
                : null}
                {props.currentUser.isLogin === false ? 
                <View style={styles.viewItem}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                        <Text style={styles.textItem}>Create New Account</Text>
                    </TouchableOpacity>
                </View>
                : null}
                {props.currentUser.isLogin === true ? 
                <View style={styles.viewItem}>
                    <TouchableOpacity onPress={() => {
                        props.setUserIsLogin(false);
                    }}>
                        <Text style={styles.textItem}>Logout</Text>
                    </TouchableOpacity>
                </View>
                : null}
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
                {props.currentUser.isLogin === true ? 
                <View style={styles.viewItem}>
                    <TouchableOpacity>
                        <Text style={styles.textItem}>Profile</Text>
                    </TouchableOpacity>
                </View>
                : null}
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
        setUserIsLogin: (isLogin) => {
            dispatch({ type: 'SetIsLogin', payload: isLogin })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen)
