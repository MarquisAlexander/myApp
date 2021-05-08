import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login ';
import List from './pages/List';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen 
                    name="home" 
                    component={Login}
                />
                <Stack.Screen 
                    name="list" 
                    component={List} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;