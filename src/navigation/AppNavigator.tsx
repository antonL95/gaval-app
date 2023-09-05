import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import CameraReader from "../screens/CameraReader";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName: string;

                        switch (route.name) {
                            case 'Home':
                                iconName = focused ? 'home' : 'home-outline';
                                break;
                            case 'Details':
                                iconName = focused ? 'list' : 'list-outline';
                                break;
                            case 'Camera':
                                iconName = focused ? 'camera' : 'camera-outline';
                                break;
                            default:
                                iconName = 'alert-circle-outline';
                                break;
                        }

                        return <Icon name={iconName} size={size} color={color}/>;
                    },
                    headerShown: false,
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Details" component={DetailScreen}/>
                <Tab.Screen name="Camera" component={CameraReader} options={{
                    unmountOnBlur: true,
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
