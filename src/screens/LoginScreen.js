
import React from 'react';
import { View, Text, StyleSheet,TextInput,Dimensions,Button } from 'react-native';
import Footer from '../components/Footer';
import { connect } from 'react-redux';

const devWidth = Dimensions.get('window').width;
const devHeight = Dimensions.get('window').height;
const LoginScreen = (props) => {
    return (
    <View style={styles.container}>
        <View style={styles.body}>
            <Text style={styles.textLabel}>Login Screen</Text>
            <TextInput placeholder="Email"  style={styles.input}/>
            <TextInput
            style={styles.input}
             placeholder="Password"  
             textContentType="password"/>

             <Button title="Log In" style={styles.button}
             onPress={()=> props.setUserIsLogin(true)}/>
             
             <Button title="Log Out" style={styles.button}
             onPress={()=> props.setUserIsLogin(false)}/>
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
    input:{
        borderWidth:1,
        width: devWidth - 20,
        borderRadius:5,
        marginVertical:5
    },
    textLabel:{
        fontSize:25,
        marginVertical:10
    },
    button:{
        width:100,
        height:50,
        color:'black'
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
        dispatch({type: 'SetIsLogin',payload: isLogin})
      } 
    }
  }  
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
