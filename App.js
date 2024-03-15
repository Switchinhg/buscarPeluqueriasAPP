import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import Login from './Login';
import MyTabs from './MyTabs';

export default function App() {
  const [logged, setLogged] = useState(true);
  return (
    <View style={styles.container}>
      {logged?
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
        // <Text >Hi</Text>
        :  
        <Login/>
        // <Text >Hi2</Text>
      }
       <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
