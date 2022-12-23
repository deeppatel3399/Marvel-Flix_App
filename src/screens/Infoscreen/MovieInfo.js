import React,{useEffect,useState} from 'react'
import { View,StyleSheet,Text,Image,TouchableOpacity, ScrollView} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MovieInfo = ({route}) => {

    const[mydata,setMyData] = useState([]);

    const navigation = useNavigation();

    const id = route.params.paramKey;

    const getData = async () => {

        try{
          const response = await fetch("https://deeppatel3399.github.io/Marvel-Flix-API/db.json");
          const data = await response.json();
          setMyData(data.MOVIESLIST[0].data[id-1]);
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

      <View style={Styles.infocontainer}>

        
        <Image
            style={Styles.image}
            source={{uri:mydata.poster}}
            resizeMode = 'cover'
            blurRadius={90}
        />


        <View style={Styles.upperposter}>

        <Image
            style={Styles.poster}
            source={{uri:mydata.poster}}
            resizeMode = 'cover'
        />

        <Text style={Styles.genre}>{mydata.generes}  <Text style={Styles.yearnruntime}>{mydata.releaseDate}  {mydata.length}</Text></Text>

        <TouchableOpacity style={Styles.play} onPress={()=>navigation.navigate('watchscreen',{paramKey:id-1})}>
            <Text style={Styles.playtext}><Entypo name="controller-play" size={22} color="black" />Play</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.dwnld}>
            <Text style={Styles.dwnldtext}><Foundation name="download" size={22} color="white" />Download</Text>
        </TouchableOpacity>

        <ScrollView style={Styles.description}><Text style={{color:'white',fontSize:17}}>{mydata.overview}</Text></ScrollView>

        <View style={Styles.otherbtns}>
            <TouchableOpacity><Text style={Styles.otherbtnstyle}><Entypo name="add-to-list" size={26} color="red" /></Text></TouchableOpacity>
            <TouchableOpacity><Text style={Styles.otherbtnstyle}><AntDesign name="like1" size={26} color="red" /></Text></TouchableOpacity>
            <TouchableOpacity><Text style={Styles.otherbtnstyle}><FontAwesome name="share-alt" size={26} color="red" /></Text></TouchableOpacity>
        </View>

        </View>

      </View>

      <View style={Styles.othercontent}>
         <TouchableOpacity>
        <Text style={Styles.titles}>MORE LIKE THIS</Text>
        </TouchableOpacity>
        <TouchableOpacity>

        <Text style={Styles.titles}>TRAILERS & MORE</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const Styles = StyleSheet.create({

    maincontainer:
    {
        width: '100%',
        backgroundColor: 'black',
        position: 'absolute'
    },
    infocontainer:
    {
        width: '100%',
        height: 650,
    },
    image:
    {
        width: '100%',
        height: '100%',
        elevation: -1
    },
    poster:
    {
        width: 200,
        height: 280,
    },
    upperposter:
    {
        top: '-95%',
        alignItems: 'center',
    },
    genre:
    {
        color: 'green',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15,
    },
    yearnruntime:
    {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold'
    },
    play:
    {
        width: '95%',
        height: 40,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 15
    },
    playtext:
    {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 8
    },
    dwnld:
    {
        width: '95%',
        height: 40,
        backgroundColor: '#323232',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 15
    },
    dwnldtext:
    {
        color: '#ffffff',
        paddingTop: 8,
        fontWeight: 'bold',
        fontSize: 18,
    },
    description:
    {
        marginTop: 25,
        paddingHorizontal: 10,
        maxHeight: '15%'
    },
    otherbtns:
    {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        marginTop: 15,
        alignSelf: 'center'
    },
    otherbtnstyle:
    {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    othercontent:
    {
        flexDirection: 'row',
        padding: 10
    },
    titles:
    {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 30
    }

});

export default MovieInfo;