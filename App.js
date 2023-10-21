import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from "./components/HomeScreen";
import {TransactionHistory} from "./components/TransactionHistory";
import {AddTransaction} from "./components/AddTransaction";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="TransactionHistory" component={TransactionHistory}/>
                <Stack.Screen name="AddTransaction" component={AddTransaction}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
