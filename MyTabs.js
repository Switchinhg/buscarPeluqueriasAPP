import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
        <Tab.Navigator screenOptions={{tabBarIconStyle: { display: "none" },tabBarLabelStyle:{fontSize:16},headerShown: false}}>
            <Tab.Screen name="Barberias" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>

  );
}

//para mostrar notificacion badge en los tabs

/* 
    options={{ tabBarBadge: 3 }}
*/

