
import React, { useState } from 'react';
import { View, Alert, Text, StyleSheet, TextInput, Dimensions, Button, TouchableOpacity } from 'react-native';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import showAlert from '../Helpers';

const devWidth = Dimensions.get('window').width;
const devHeight = Dimensions.get('window').height;
const RegisterScreen = (props) => {
    const initialValue = { mobile: '', password: '', confirmPassword: '', error: '' };
    const [newUser, setNewUser] = useState(initialValue);

    const createNewAccount = () => {
        setNewUser({ ...newUser, error: '' });
        let title = "Create New Account";
        let message = "Enter Mobile";
        if (newUser.mobile == null || newUser.mobile == '') {
            setNewUser({ ...newUser, error: message });
            showAlert(title, message);
            return;
        }
        if (newUser.password == null || newUser.password == ''
            || newUser.confirmPassword == null || newUser.confirmPassword == '') {
            message = "Enter Password And Confirm Password";
            setNewUser({ ...newUser, error: message });
            showAlert(title, message);
            return;
        }

        if (newUser.password != newUser.confirmPassword) {
            message = "Password And Confirm Password Not The Same";
            setNewUser({ ...newUser, error: message });
            showAlert(title, message);
            return;
        }

    }
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.textLabel}>Crate New Account</Text>
                {newUser.error != '' ?
                    <Text style={styles.textError}>{newUser.error}</Text>
                    : null}

                <TextInput
                    placeholder="Mobile Number"
                    style={styles.input}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    value={newUser.mobile}
                    onChangeText={(newValue) => {
                        setNewUser({ ...newUser, mobile: newValue });
                    }} />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry={true}
                    autoCapitalize={'none'}
                    value={newUser.password}
                    onChangeText={(newValue) => {
                        setNewUser({ ...newUser, password: newValue });
                    }} />

                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    textContentType="password"
                    secureTextEntry={true}
                    autoCapitalize={'none'}
                    value={newUser.confirmPassword}
                    onChangeText={(newValue) => {
                        setNewUser({ ...newUser, confirmPassword: newValue });
                    }} />

                <View style={styles.buttonV}>
                    <Button title="Create" onPress={createNewAccount} />
                </View>



            </View>
            <Footer navigation={props.navigation} />
        </View>);
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
    input: {
        borderWidth: 1,
        width: devWidth - 20,
        borderRadius: 5,
        marginVertical: 5,
        paddingHorizontal:20
    },
    textLabel: {
        fontSize: 25,
        marginVertical: 10
    },
    buttonV: {
        marginVertical: 10,
        width: 100
    },
    buttonView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '70%',
        marginVertical: 20
    },
    textError: {
        color: 'red',
        fontSize: 15
    }
});

//export default LoginScreen;
const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
