
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, } from 'react-native';
import Footer from '../components/Footer';
import MenuIcon from '../components/MenuIcon';
import { connect } from 'react-redux';

//import MapView from 'react-native-maps';
//import LocationView from "react-native-location-view";

const devWidth = Dimensions.get('window').width;
class MapScreen extends Component {
    // state = {
    //     region: {
    //         latitude: 37.78825,
    //         longitude: -122.4324,
    //         latitudeDelta: 0.0922,
    //         longitudeDelta: 0.0421,
    //     }
    // };
    // onRegionChange(region) {
    //     this.setState({ region });
    // }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text>Map Screen</Text>
                    <View >
                        {/* <MapView
                            region={this.state.region}
                            onRegionChange={this.onRegionChange}
                        /> */}
                        <View style={{ flex: 1 }}>
                            {/* <LocationView
                                apiKey={"AIzaSyC2kj1B0siJ8__rBidfpor_3-6Tc6hCCiw"}
                                initialLocation={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                }}
                               
                            /> */}
                        </View>
                    </View>

                </View>
            </View>
        );
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

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)
