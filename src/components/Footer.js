
import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import Icon from "react-native-vector-icons/Ionicons";
import { connect } from 'react-redux';

const Footer = (props) => {
    console.log(props);
    return (
        <View style={styles.footer}>
            <View style={styles.iconView}>
                <TouchableOpacity>
                    <Icon name="home" size={50} onPress={() => props.navigation.navigate('Home')} />
                </TouchableOpacity>

            </View>
            {
                props.currentUser.isLogin === false
                    ? <View style={styles.iconView}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                            <Text style={{ fontSize: 25 }}>
                                Log In
                    </Text>
                        </TouchableOpacity>
                    </View>
                    : <View style={styles.iconView}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Logout')}>
                            <Text style={{ fontSize: 25 }}>
                                Log Out
                        </Text>
                        </TouchableOpacity>
                    </View>
            }

            <View style={styles.iconView}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Menu')}>
                    <Image source={require('../../assets/menu1.png')} style={styles.icon} />
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        justifyContent: "space-between",
        alignItems: "center",
        //backgroundColor: 'gold',
        height: 50,
        flexDirection: "row"
    },
    iconView: {
        paddingHorizontal: 5,
        fontSize: 40
    },
    icon: {
        width: 50,
        height: 50,
    }
});

//export default Footer;
const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //   addMyPlace: (name) => {
        //     dispatch(addPlace(name))
        //   } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
