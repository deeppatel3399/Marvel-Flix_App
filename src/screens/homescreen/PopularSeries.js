import React,{useEffect,useState} from 'react';
import {FlatList, View,StyleSheet,Text,Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PopularSeries = () => {

const navigation = useNavigation();

const[mydata,setMyData] = useState([]);

const getData = async () => {

    try{
      const response = await fetch("https://deeppatel3399.github.io/Marvel-Flix-API/db.json");
      const data = await response.json();
      setMyData(data.POPULARSERIES[0].data);
    }
    catch(error){
         console.log(error);
    }
};

useEffect(()=>{
   getData();
},[])

  return (
    <View style={Styles.maincontainer}>

    <Text style={Styles.heading}>Popular Series</Text>
      
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={mydata}
        renderItem={({item})=>{
            return(
                <View style={Styles.poster}>
                <TouchableOpacity 
                onPress={()=>navigation.navigate('seriesinfo',{paramKey:item.id})}>
                    <Image
                        style={Styles.imagestyle}
                        source={{uri:item.poster}}
                        resizeMode = "cover"
                    />
                </TouchableOpacity>
                </View>
            );
        }}
      />

    </View>
  );
};

const Styles = StyleSheet.create({
    maincontainer:
    {
        backgroundColor: 'black',
        width: '100%',
        height: 280
    },
    heading:
    {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10
    },
    poster:
    {
        width: 125,
        height: 200,
        margin: 10
    },
    imagestyle:
    {
        width: '100%',
        height: '100%'
    }
    
});

export default PopularSeries;