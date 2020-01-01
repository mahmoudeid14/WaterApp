
import React from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, Button, TouchableOpacity } from 'react-native';
import Footer from '../components/Footer';
import MenuIcon from '../components/MenuIcon';
import { connect } from 'react-redux';

const devWidth = Dimensions.get('window').width;
const devHeight = Dimensions.get('window').height;
const LoginScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.textLabel}>Login Screen</Text>

                <TextInput
                    placeholder="Mobile Number"
                    style={styles.input}
                    autoCorrect={false}
                    autoCapitalize={'none'} />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry={true}
                    autoCapitalize={'none'} />

                <View style={styles.buttonV}>
                    <Button title="Log In"
                        onPress={() => props.setUserIsLogin(true)} />
                </View>


                {/* <Button title="Log Out" style={styles.button}
             onPress={()=> props.setUserIsLogin(false)}/> */}
                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={()=> props.navigation.navigate('Register')}>
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

LoginScreen.navigationOptions = ({ navigation }) => {
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
        width : 100
    },
    buttonView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '70%',
        marginVertical: 20
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
        setUserIsLogin: (isLogin) => {
            dispatch({ type: 'SetIsLogin', payload: isLogin })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
