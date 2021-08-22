import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/screens/Login";
import {Screen} from "react-native-screens";
import Register from "./src/screens/Register";
import Home from "./src/screens/Home";

const Stack = createNativeStackNavigator()

export default function App() {

  let loggedin = true

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group>
            {loggedin?(<>
              <Stack.Screen name={'home'} component={Home}/>
            </>):(<>
              <Stack.Screen name={"login"} component={Login}/>
              <Stack.Screen name={'register'} component={Register}/>
            </>)}
          </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
