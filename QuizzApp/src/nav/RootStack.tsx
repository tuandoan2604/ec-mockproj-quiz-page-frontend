import {StyleSheet} from 'react-native';
// @ts-ignore
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/Home/HomeScreen";

export type RootStackParamsList = {
    LoginScreen: undefined;
    SignInScreen: undefined;
    SignUpScreen: undefined;
    HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="SignInScreen"
                    component={SignInScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="SignUpScreen"
                    component={SignUpScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;

const styles = StyleSheet.create({});
