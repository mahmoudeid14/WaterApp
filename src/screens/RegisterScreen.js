
import React, { useState, Component } from 'react';
import { View, Alert, Text, StyleSheet, TextInput, Dimensions, Button, TouchableOpacity } from 'react-native';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import showAlert from '../Helpers';
import InputComponent from '../components/InputComponent';
import { registerAction } from '../../actions/userActions';

const devWidth = Dimensions.get('window').width;
const devHeight = Dimensions.get('window').height;

class RegisterScreen extends Component {
    state = { userName: '', mobile: '', password: '', error: '' };

    createNewAccount = () => {
        //     //smsSendFunction('+96895342154');

        this.setState({ ...this.state, error: '' });
        let title = "Create New Account";
        let message = "Enter UserName";
        if (this.state.userName == null || this.state.userName == '') {
            this.setState({ ...this.state, error: message });
            showAlert(title, message);
            return;
        }
        if (this.state.mobile == null || this.state.mobile == '') {
            message = "Enter Mobile";
            this.setState({ ...state, error: message });
            showAlert(title, message);
            return;
        }
        if (this.state.password == null || this.state.password == '') {
            message = "Enter Password And Confirm Password";
            this.setState({ ...this.state, error: message });
            showAlert(title, message);
            return;
        }

        this.props.registerUser(this.state.userName, this.state.mobile, this.state.password);
        this.props.navigation.navigate('Home');


    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.textLabel}>Crate New Account</Text>
                    {this.state.error != '' ?
                        <Text style={styles.textError}>{this.state.error}</Text>
                        : null}

                    <TextInput
                        style={styles.input}
                        placeholder="UserName"
                        autoCapitalize={'none'}
                        value={this.state.userName}
                        onChangeText={(newValue) => {
                            this.setState({ ...this.state, userName: newValue });
                        }} />
                    <TextInput
                        placeholder="Mobile Number"
                        style={styles.input}
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        value={this.state.mobile}
                        onChangeText={(newValue) => {
                            this.setState({ ...this.state, mobile: newValue });
                        }}
                        keyboardType="phone-pad" />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        textContentType="password"
                        secureTextEntry={true}
                        autoCapitalize={'none'}
                        value={this.state.password}
                        onChangeText={(newValue) => {
                            this.setState({ ...this.state, password: newValue });
                        }} />



                    <View style={styles.buttonV}>
                        <Button title="Create" onPress={this.createNewAccount} />
                    </View>

                    <View style={styles.buttonView}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{fontSize:25}}>
                                Have an Account
                        </Text>
                        </TouchableOpacity>
                        
                    </View>



                </View>

            </View>);
    }

}

RegisterScreen.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: null
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
    input: {
        borderWidth: 1,
        width: devWidth - 20,
        borderRadius: 5,
        marginVertical: 5,
        paddingHorizontal: 20
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
        justifyContent: 'center',
        marginVertical: 20
    },
    textError: {
        color: 'red',
        fontSize: 15
    },
});

//export default LoginScreen;
const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}


const mapDispatchToProps = dispatch => {
    return {
        registerUser: (userName, mobile, password) => {
            dispatch(registerAction(userName, mobile, password))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
