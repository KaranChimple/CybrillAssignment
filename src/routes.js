import React from 'react';
import {View} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MainPage from './screens/MainPage';
import DataUpdate from './screens/DataUpdate';
import History from './screens/History';

const Dashboard = createStackNavigator({
    mainPage: {screen: MainPage},
    dataUpdate: {screen: DataUpdate},
}, {
    initialRouteName: 'mainPage',
    headerMode: 'none'
});

const tabs = createBottomTabNavigator({
    dashboard: {
        screen: Dashboard,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                    <MaterialIcons size={25} name={'home'} />
                ),
            activeColor: '#f60c0d',
            inactiveColor: '#f65a22',
            barStyle: { backgroundColor: '#f69b31' },
        }
    },
    history: {
        screen: History,
        navigationOptions: {
            tabBarLabel: 'History',
            tabBarIcon: ({ tintColor }) => (
                    <MaterialIcons size={25} name={'history'} />
                ),
            activeColor: '#f60c0d',
            inactiveColor: '#f65a22',
            barStyle: { backgroundColor: '#f69b31' },
        }
    },
}, {
    initialRouteName: 'dashboard',
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    barStyle: { backgroundColor: '#3BAD87' },
});


export default Routes = createAppContainer(tabs);