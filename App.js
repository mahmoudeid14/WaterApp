
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import LogoutScreen from './src/screens/LogoutScreen';
import MenuScreen from './src/screens/MenuScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import WaterProvider from './context/WaterContext';
import { connect } from 'react-redux';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Logout: LogoutScreen,
    Menu: MenuScreen,
    Register: RegisterScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Water Application'
    },
    //  navigationOptions: {
    //   // headerRight: <Button
    //   //   onPress={() => this.props.navigation.navigate('Parametres')}
    //   //   title="Parameters"
    //   //   color="#fff" />,
    //     // headerTitle: 'Red', 
    //     // headerRight: (<Button title='Purple' onPress={() => navigation.navigate('Purple')}/>),
    // }
  }
);
var App = createAppContainer(navigator);
//export default App;


const mapStateToProps = state => {
  // console.log(state);
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default App =  () => {
//   return <WaterProvider>  </WaterProvider>;
// };

// class App extends Component {
//   render() {
//     return (<WaterProvider><navigator/></WaterProvider>);
//   }
// }

// export default App;
