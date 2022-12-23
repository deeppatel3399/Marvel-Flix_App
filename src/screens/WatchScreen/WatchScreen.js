import React,{useEffect,useState} from 'react';
import { View } from 'react-native';
import { Video } from 'expo-av';

const WatchScreen = ({route}) => {

 const[mydata,setMyData] = useState([]);
 const[apiKey,setApiKey] = useState([]);

 const id = route.params.paramKey;

 const getdata = async () => {
   
     try{
      const url = await fetch("https://deeppatel3399.github.io/Marvel-Flix-API/db.json");
      const urlData = await url.json();
      setMyData(urlData.MOVIESLIST[0].data[0].hd);

      const api = await fetch("https://deeppatel3399.github.io/Marvel-Flix-API/serverapi.json");
      const apiData = await api.json();
      setApiKey(apiData.APIKEYS[1].key);

     }
     catch(error){
      console.log(error);
     }
 };

 useEffect(()=>{
  getdata()},[]);

  // console.log(mydata);
  console.log(mydata+apiKey);

  return (
    <View>

        <Video
        rate={1.0}
        volume={2.0}
        isMuted={false}
        style={{width: 500,height:500}}
        source={{
          uri: mydata+apiKey
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        />

    </View>
  );
}

export default WatchScreen;