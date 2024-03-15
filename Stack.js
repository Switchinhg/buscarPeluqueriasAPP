import { View, Text, Button, TouchableHighlight,StyleSheet ,FlatList, Image} from 'react-native'
import React, { useState } from 'react'

export default function StackNav({navigation}) {
    
    const Barberias = [
        {"key":1,"name":"The Dapper Den","img":null,"description":"Tu estilo, nuestra pasión. En nuestra barbería, expertos en cortes te ofrecen looks auténticos y frescos. ¡Ven a disfrutar de la experiencia única de un corte de pelo excepcional","imgs":['https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg','https://assets-global.website-files.com/644a9d9ce529ef8812f82a28/647fb85c69e95444243ef9bd_Henley%27s%20Gentlemen%27s%20Grooming%20-%20Barbershop%20and%20Mens%20Grooming.webp','https://whyy.org/wp-content/uploads/2018/02/2018-02-02-e-lee-mike-jordan-mark-belle-philadelphia-south-street-barbers-2-768x512.jpg'],"stars":2,"street":"Maicra Avenue","hours":[{"time":10,"amPM":"AM","spots":2},{"time":12,"amPM":"AM","spots":5}]},
        {"key":2,"name":"Slick Shears Barbershop","img":null,"description":"Cortes con estilo, ambiente único. Ven y descubre la esencia de nuestra barbería. 💈✂️","imgs":['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLFHiOb9k1h7tkMemoWXA53k6zUf55fwF_H0FexCM4Uw&s','https://i.etsystatic.com/29168372/r/il/aebae3/3409034905/il_570xN.3409034905_eyid.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrgtPtCYViVfhGvO8acv3ioNmDOlocTFwyISKluDtiA&s'],"stars":4,"street":"Valorant Street","hours":[{"time":1,"amPM":"PM","spots":1},{"time":3,"amPM":"PM","spots":3}]},
      ]
      const display = ({item, separators}) =>{
        return  <TouchableHighlight
                  key={item.key}
                  onPress={()=>{
                        navigation.setParams({ param: item.name }),
                        navigation.push('Detalle', item)}
                    }

                  onShowUnderlay={separators.highlight}
                  onHideUnderlay={separators.unhighlight}
                  
                  >
                  <View style={styles.list} >
    
                    <Image
                      style={styles.img}
    
                      source={{
                        uri: item.imgs[0],
                      }}
                    />
                    <View style={styles.nameAndDescription}>
                      <Text style={{color:'red'}}>{item.name}</Text>
                      <Text>{item.description}</Text>
                    </View>
                  </View>
                </TouchableHighlight>
    }
    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = () => {
      setRefreshing(true);
    
      // Perform the refresh operation here, such as fetching new data from an API.
      // Once the refresh operation is complete, set refreshing back to false.
      setTimeout(() => {
      setRefreshing(false);
      }, 1000);
    }
  return (
        <FlatList
        data={Barberias}
        renderItem={display}
        onRefresh={handleRefresh}
        refreshing={refreshing}
      />
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
  
  
  