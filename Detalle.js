import { View, Text , StyleSheet, Image} from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'

export default function Detalle(item) {
  let barberia = item.route.params
  


  // <Text>⭐</Text>
  const rep = (n)=>{
    const stars = [];
    for (let i = 1; i <= 5; i++) {

      if(i>n){
        stars.push( <Text key={i}>🌑</Text>)

      }else{
        stars.push( <Text key={i}>⭐</Text>)
      }
    }
    return stars

  }

  return (
    <View>
          <View style={styles.test}>
      {/* Here would go the Gallery */}
      {/* <Text>test</Text> */}
        <Swiper style={styles.wrapper} showsButtons={false}>

          {barberia.imgs.map((img)=> 
                <View key={img} style={styles.slide1}>
                  <Image style={styles.img} source={{uri:img}} />
                </View>
          )}

      </Swiper>
    </View>
    <View style={styles.infoWrapper}> 

      <Text style={styles.title}>{barberia.name}</Text>
      <View style={styles.stars}>
          {rep(barberia.stars)}
      </View>
      <View>
        <Text style={styles.text}>⤴ {barberia.street}</Text>
      </View>
      <Text style={{marginBottom:5,marginTop:5}}>Horarios</Text>
      {/* Boxes */}
      <View>
        {barberia.hours.map(time=>
                <View key={Math.floor(Math.random() * (10000 - 20 + 1) + 20)} style={styles.box}>
                  <Text>{time.time} {time.amPM}</Text>
                  <Text></Text>
                  <Text>Disponibles: {time.spots}</Text>
                </View>
                )}
      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height:100
  },
  infoWrapper:{
    padding:20
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:20
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  test:{
    height:200
  },
  img:{
    height:200,
    width:'100%',
  },
  stars:{
    marginTop:-5,
    marginBottom:10,
    flexDirection:'row'
  },
  text:{
    fontSize:17,
    marginBottom:10
  },
  box:{
    backgroundColor:'#FBFBFB',
    borderRadius:10,
    padding:20,
    margin:5
  }
})