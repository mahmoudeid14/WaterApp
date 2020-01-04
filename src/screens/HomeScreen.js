
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Button, Image, Picker, TextInput } from 'react-native';
import Footer from '../components/Footer';
import MenuIcon from '../components/MenuIcon';
import { connect } from 'react-redux';
//import {Dropdown as DROD} from 'react-native-dropdown';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';
import MapPicker from "react-native-map-picker";
import MapView from 'react-native-maps';

// const {
//     Select,
//     Option,
//     OptionList,
//     updatePosition
//   } = DROD;
const devWidth = Dimensions.get('window').width;
class HomeScreen extends Component {
    state = {
        gallonType: 0, count: 1, date: new Date()
    };
 
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.mainText}>New Order </Text>
                    <View style={styles.viewItem}>
                        <Picker
                            selectedValue={this.state.gallonType}
                            style={{ height: 50, width: 170 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ ...this.state, gallonType: itemValue })
                            }
                        >
                            <Picker.Item label="Select Gallon" value="0" />
                            <Picker.Item label="One Gallon" value="1" />
                            <Picker.Item label="Two Gallons" value="2" />
                            <Picker.Item label="Three Gallons" value="3" />
                            <Picker.Item label="Four Gallons" value="4" />
                        </Picker>
                    </View>
                    <View style={styles.viewItem}>
                        {/* <Dropdown
                            label='Count'
                            data={[{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]}/> */}
                        <Picker
                            selectedValue={this.state.count}
                            style={{ height: 50, width: 170 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ ...this.state, count: itemValue })
                            }>
                            <Picker.Item label="Select Count" value="0" />
                            <Picker.Item label="1" value="0" />
                            <Picker.Item label="2" value="1" />
                            <Picker.Item label="3" value="2" />
                            <Picker.Item label="4" value="4" />

                        </Picker>
                    </View>
                    <View style={styles.viewItem}>
                        {/* <DatePicker
                            style={{ width: 200 }}
                            date={this.state.date} //initial date from state
                            mode="date" //The enum of date, datetime and time
                            placeholder="select date"
                            format="DD-MM-YYYY"
                            minDate={new Date()}
                            //maxDate="01-01-2022"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            }}
                            onDateChange={(newDate) => { this.setState({ date: newDate }) }}
                        /> */}
                    </View>
                    <View style={styles.viewItem}>
                       <Button title="Select Location"
                       onPress = {()=> this.props.navigation.navigate('Map')}/>
                    </View>

                </View>
            </View>
        );
    }
}


HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <MenuIcon navigation={navigation} />,
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
    icon: {
        width: 50,
        height: 50,
    },
    mainText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red'
    },
    viewItem: {
        marginVertical: 5,
        justifyContent: 'center'
    },
    mapView: {
        width: devWidth - 20,
        height: 200
    }
});

//export default HomeScreen;
const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
