
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, Button, TouchableOpacity } from 'react-native';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { loginAction } from '../../actions/userActions';
import showAlert from '../Helpers';

const devWidth = Dimensions.get('window').width;
const devHeight = Dimensions.get('window').height;
//const LoginScreen = (props) => {
class LoginScreen extends Component {
    state = { userName: '', password: '', error: '' };
    loginCheck = () => {

        this.setState({ ...this.state, error: '' });
        let title = "Login";
        let message = "Enter UserName";
        if (this.state.userName == null || this.state.userName == '') {
            this.setState({ ...this.state, error: message });
            showAlert(title, message);
            return;
        }
        if (this.state.password == null || this.state.password == '') {
            message = "Enter Password And Confirm Password";
            this.setState({ ...this.state, error: message });
            showAlert(title, message);
            return;
        }

        this.props.login(this.state.userName, this.state.password);
        this.props.navigation.navigate('Home');

    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.textLabel}>Login Screen</Text>
                    {this.state.error != '' ?
                    <Text style={styles.textError}>{this.state.error}</Text>
                    : null}

                    <TextInput
                        placeholder="UserName"
                        style={styles.input}
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        value={this.state.userName}
                        onChangeText={(newValue) => this.setState({ ...this.state, userName: newValue })} />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        textContentType="password"
                        secureTextEntry={true}
                        autoCapitalize={'none'}
                        value={this.state.password}
                        onChangeText={(newValue) => this.setState({ ...this.state, password: newValue })} />

                    <View style={styles.buttonV}>
                        <Button title="Log In"
                            onPress={() => {
                                this.loginCheck();
                                //Communications.text('123456789', 'Test Text Here');
                                //Communications.email(['eng.mahmoudeid@gmail.com', 'eng.mahmoudeid@gmail.com'],null,null,'Demo Subject','Demo Content for the mail')
                            }} />
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                            <Text>
                                Create Account
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>
                                Forgot Password
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <Footer navigation={props.navigation} /> */}
            </View>);
    }
}

LoginScreen.navigationOptions = ({ navigation }) => {
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
        marginVertical: 5
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
        login: (userName, password) => {
            dispatch(loginAction(userName, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
