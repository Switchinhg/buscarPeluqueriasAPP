import { Button, FlatList, StyleSheet, Text, TouchableHighlight, View, Image} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react'
import Toast from 'react-native-toast-message';
import StackNav from './Stack'
import Detalle from './Detalle';

const Stack = createStackNavigator();

const showToast = (e) => {
    Toast.show({
        type: 'success',
        text1: 'Hola',
        text2: 'La app esta en desarrollo!',
        position: "bottom"
    });
}

const Barberias = [
  {"key":1,"name":"Barberia n°1","img":null,"description":"test description"},
  {"key":2,"name":"Barberia n°2","img":null,"description":"test description"},
  {"key":3,"name":"Barberia n°3","img":null,"description":"test description"},
  {"key":4,"name":"Barberia n°4","img":null,"description":"test description"},
  {"key":5,"name":"Barberia n°5","img":null,"description":"test description"},
  {"key":6,"name":"Barberia n°6","img":null,"description":"test description"},
  {"key":7,"name":"Barberia n°7","img":null,"description":"test description"},
]

const showDATA = () =>{}



const display = ({item, separators}) =>{
    return  <TouchableHighlight
              key={item.key}
              onPress={() => showDATA(item)}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
              >
              <View style={styles.list} >

                <Image
                  style={styles.img}

                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Blank_Square.svg/1024px-Blank_Square.svg.png',
                  }}
                />
                <View style={styles.nameAndDescription}>
                  <Text style={{color:'red'}}>{item.name}</Text>
                  <Text>{item.description}</Text>
                </View>
              </View>
            </TouchableHighlight>
}

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
  
    // Perform the refresh operation here, such as fetching new data from an API.
    // Once the refresh operation is complete, set refreshing back to false.
    setTimeout(() => {
    setRefreshing(false);
    }, 1000);
  };

  /* 

  */

  return (

    <Stack.Navigator>
      <Stack.Screen name="Buscar Barberias" component={StackNav} options={{ title: 'Barberias' }}/>
      <Stack.Screen name="Detalle" component={Detalle} options={({ route }) => ({ title: route.params.name })}/>
    </Stack.Navigator>
      // <FlatList
      //   data={Barberias}
      //   renderItem={display}
      //   onRefresh={handleRefresh}
      //   refreshing={refreshing}
      // />

    // 

    // <View style={{ backgroundColor:'#F9F6EE', height:'100%'}}>
    //     <Button 
    //         onPress={showToast}
    //         title='Encontrá barberias'
    //         color='black'
    //         accessibilityLabel="Button encontra barberias"
    //     />
    // </View>
  )
}

const styles = StyleSheet.create({
  list:{
    backgroundColor:'white',
    padding:10,
    flex:1,
    flexDirection:'row'
  },
  nameAndDescription:{
    paddingLeft:20,
    flex:1,
    justifyContent:'center'
  },
  img:{
    width:100,
    height:100
  }
})


