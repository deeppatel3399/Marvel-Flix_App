import React,{useEffect,useState} from 'react'
import { View,StyleSheet,Text,Image, TouchableOpacity, FlatList, ScrollView, Button} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';


const SeriesInfo = ({route}) => {

    const id = route.params.paramKey;

    const[mydata,setMyData] = useState([]);

    const[season,setSeason] = useState([]);

    const[currentSeason,setCurrentSeason] = useState([]);

    const getData = async (index) => {
    
        try{
          const response = await fetch("https://deeppatel3399.github.io/Marvel-Flix-API/db.json");
          const data = await response.json();
          setMyData(data.SERIESLIST[0].data[id-1]);
          setSeason(data.SERIESLIST[0].data[id-1].seasons.items.map(seasons=>seasons.name));
          setCurrentSeason(data.SERIESLIST[0].data[id-1].seasons.items[index].episodes);
        }
        catch(error){
             console.log(error);
        }
    };
    useEffect(()=>{
       getData();
    },[]);

  return (
    <View style={Styles.maincontainer}>
    <ScrollView>
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

        <Text style={Styles.genre}>{mydata.generes}  <Text style={Styles.yearnruntime}>{mydata.releaseDate}  {mydata.rating}</Text></Text>

        <TouchableOpacity style={Styles.play}>
            <Text style={Styles.playtext}><Entypo name="controller-play" size={22} color="black" />Play</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.dwnld}>
            <Text style={Styles.dwnldtext}><Foundation name="download" size={22} color="white" />Download</Text>
        </TouchableOpacity>

        <Text style={Styles.description}>{mydata.overview}</Text>

        <View style={Styles.otherbtns}>
            <TouchableOpacity><Text style={Styles.otherbtnstyle}><Entypo name="add-to-list" size={26} color="red" /></Text></TouchableOpacity>
            <TouchableOpacity><Text style={Styles.otherbtnstyle}><AntDesign name="like1" size={26} color="red" /></Text></TouchableOpacity>
            <TouchableOpacity><Text style={Styles.otherbtnstyle}><FontAwesome name="share-alt" size={26} color="red" /></Text></TouchableOpacity>
        </View>

        </View>

      </View>


      <View style={Styles.othercontent}>
        <TouchableOpacity>
        <Text style={Styles.titles}>EPISODES</Text>
        </TouchableOpacity>
         <TouchableOpacity>
        <Text style={Styles.titles}>MORE LIKE THIS</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={Styles.titles}>TRAILERS & MORE</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.episodescontainer}>
      
        <SelectDropdown
        data={season}
        defaultButtonText='Select Season'
        onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
            getData(index)
        }}
        />

        <FlatList
        data={currentSeason}
        renderItem={({item})=>{
            return(
                <View style={Styles.postercontainer}>
                   
                <View style={Styles.row}>

                <View style={Styles.left}>  

                <Image
                style={Styles.episodeposter}
                    source={{uri:item.poster}}
                    resizeMode='cover'
                />

                <View style={Styles.texts}>
                <Text style={Styles.eptitle}>{item.title}</Text>
                <Text style={Styles.eplength}>{item.length}</Text>
                </View>
                </View>

                <Text style={Styles.eptitle}>Dwn</Text>
                </View>

                <Text style={Styles.epdesc}>{item.overview}</Text>
                   
                </View>
            );
        }}
        />

      </View>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({

    maincontainer:
    {
        width: '100%',
        backgroundColor: 'black',
        position: 'absolute',
        height: '100%'
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
        alignItems: 'center'
    },
    genre:
    {
        color: 'green',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15
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
        color: '#ffffff',
        marginTop: 25,
        paddingHorizontal: 15,
        fontSize: 16
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
    },
    episodescontainer:
    {
        marginHorizontal: 10,
        marginTop: 20
    },
    postercontainer:
    {
        width: '100%',
        height: 150,
        marginTop: 50,
        paddingHorizontal: 10,
    },
    row:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    left:
    {
         flexDirection: 'row',
         alignItems: 'center',
    },
    episodeposter:
    {
        width: 150,
        height: 100
    },
    texts:
    {
      flexDirection: 'column',
      marginLeft: 15
    },
    eptitle:
    {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold',
        width: 120
    },
    eplength:
    {
        color: 'red',
        fontSize: 15,
        fontWeight: 'bold',
    },
    epdesc:
    {
       color: '#ffffff',
       marginTop: 10
    }

});

export default SeriesInfo;