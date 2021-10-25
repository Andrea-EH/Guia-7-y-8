import React from 'react'; 
import {createStackNavigator} from '@react-navigation/stack'; 
import Home from '../screens/Contact'; const Stack= createStackNavigator(); 
export default function ContactStack(){
   return( <Stack.Navigator> <Stack.Screen name="contact" component={Contact} options={{title:'Contact'}}/>
    </Stack.Navigator> ); }