
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from '../components/Footer';
import MenuIcon from '../components/MenuIcon';
import { connect } from 'react-redux';
import { logoutAction } from '../../actions/userActions';

const MenuScreen = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                {props.currentUser.isLogin === true ?
                    <View style={styles.viewItem}>
                        <Text style={styles.welcomeText}> Welcome: {props.currentUser.userName}</Text>
                    </View>
                    : null}

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

                <View style={styles.viewItem}>
                    <TouchableOpacity>
                        <Text style={styles.textItem}>New Order</Text>
                    </TouchableOpacity>
                </View>
                
                {props.currentUser.isLogin === true ?
                    <View style={styles.viewItem}>
                        <TouchableOpacity>
                            <Text style={styles.textItem}>Profile</Text>
                        </TouchableOpacity>
                    </View>
                    : null}

                {props.currentUser.isLogin === true ?
                    <View style={styles.viewItem}>
                        <TouchableOpacity onPress={() => {
                            props.logout();
                            props.navigation.navigate('Login');
                        }}>
                            <Text style={styles.textItem}>Logout</Text>
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
        //headerRight: <MenuIcon navigation={navigation} />,
        title: 'Menu'
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
    },
    welcomeText:{
        fontSize:25,
        fontWeight:'bold',
        color:'red'
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
        logout: () => {
            dispatch(logoutAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen)
