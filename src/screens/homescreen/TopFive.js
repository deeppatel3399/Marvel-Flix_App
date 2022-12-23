import React,{useEffect,useState} from 'react'
import { View ,FlatList,StyleSheet,Image,Button, TouchableOpacity,Text} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
// import { useRoute } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const TopFive = () => {

    const navigation = useNavigation();

    const[mydata,setMyData] = useState([]);

    const getData = async () => {
    
        try{
          const response = await fetch("https://deeppatel3399.github.io/Marvel-Flix-API/db.json");
          const data = await response.json();
          setMyData(data.TOPFIVE[0].data);
        }
        catch(error){
             console.log(error);
        }
    };
    
    useEffect(()=>{
       getData();
    },[])


  return (
    
        <FlatList
            data={mydata}
            horizontal
            showsHorizontalScrollIndicator={false}
            numRows={2}
            renderItem={({item})=>
            {
                return(
                    <View style={Styles.maincontainer}>

                    
                    <Image style={Styles.imagestyle}
                        source={{uri:item.mainposter}}
                        resizeMode = "cover"
                    />

                    <Image
                        source={{uri:item.titlelogo}}
                        style={Styles.titlelogo}
                        resizeMode= "cover"
                    />

                    <View style={Styles.btns}>
                    <TouchableOpacity style={Styles.playbutton}>
                    <Entypo name="add-to-list" size={40} color="white"/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{backgroundColor:'white',width:101,padding:5,flexDirection:'row',justifyContent:'center',
                    alignItems:'center',borderRadius:15}}
                    onPress={()=>navigation.navigate('watchscreen',{paramKey:item.id})}>
                    <Fontisto name="play" size={23} color="black"/><Text style={{fontSize: 16,fontWeight: 'bold',paddingLeft:15}}>Play</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.playbutton}
                    onPress={()=>navigation.navigate('movieinfo',{paramKey:item.id})}>
                    <Octicons name="info" size={40} color="white" />
                    </TouchableOpacity>
                    </View>
                      
                    </View>
                );
            }}
        />
    
  )
};


const Styles = StyleSheet.create({
    maincontainer:
    {
        height: 550,
        width: 410
    },
    imagestyle:
    {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    titlelogo:
    {
          width: 200,
          height: 100,
          marginLeft: 30,
          marginTop: 120,
          elevation: 1
    },
    title:
    {
        color: 'red',
        backgroundColor: 'black'
    },
    btns:
    {
        flexDirection: 'row',
        marginTop: '65%',
        justifyContent: 'space-around',
        elevation: 1,
    },


})

export default TopFive;