import React,{useEffect,useState} from 'react'
import { View , Text, TextInput,StyleSheet,FlatList,Image, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const SearchScreen = () => {

const navigation = useNavigation();
 
const[mydata,setMyData] = useState([]); 
const[filterData,setFilterData] = useState([]); 
const[filterDataTwo,setFilterDataTwo] = useState([]); 
const[searchTerm,setSearchTerm] = useState('');
const[SOM,setSOM] = useState('movies');

const getData = async () => {

    try{
      const response = await fetch("https://deeppatel3399.github.io/Marvel-Flix-API/db.json");
      const data = await response.json();
      setFilterData(data.MOVIESLIST[0].data);
      setFilterDataTwo(data.SERIESLIST[0].data);
    }
    catch(error){
         console.log(error);
    }
};

useEffect(()=>{
   getData();
},[])

const searchFilter = (text)=>{

   if(text)
   {
    const newData = filterData.filter((item)=>{
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    const newDatatwo = filterDataTwo.filter((item)=>{
      const itemDataTwo = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textDataTwo = text.toUpperCase();
      return itemDataTwo.indexOf(textDataTwo) > -1;
    });

    if(SOM=='movies')
    {
      setMyData(newData);
      setSearchTerm(text);
    }
    else
    {
      setMyData(newDatatwo);
      setSearchTerm(text);
    }
   }

   else
   {
    setMyData(mydata);
    setSearchTerm(text);
   }
}


const itemView = ({item}) =>
{
  return(
    <View>
    <TouchableOpacity
    onPress={()=>{
      if(SOM=='movies')
      {
        navigation.navigate('movieinfo',{paramKey:item.id});
      }
      else
      {
        navigation.navigate('seriesinfo',{paramKey:item.id});
      }
      }
    }>
      <View style={Styles.secondcard}>
         <Image style={Styles.postertwo}
          source={{uri:item.poster}}
          resizeMode= 'cover'
         />
      </View>
      </TouchableOpacity>
    </View>
  );
};


// const itemView = ({item}) =>
// {
//   return (
//     <View style={Styles.firstcard}>

//     <View style={Styles.left}>
//      <Image
//        style={Styles.poster}
//        source={{uri:item.poster}}
//        resizeMode='stretch'
//      />

//      <Text style={Styles.title}>
//        {item.title}
//      </Text>
//    </View>

//      <View>
//      <Text style={Styles.play}>Play</Text>
//      </View>

//    </View>
//   );
// };


  return (
    <View style={Styles.maincontainer}>

   <View style={Styles.searchbar}>
    <TextInput style={Styles.search}
      placeholder='Search for a show,movie,genre,etc'
      placeholderTextColor='white'
      value={searchTerm}
      onChangeText={(text)=>
          searchFilter(text)
      }
    />
    </View>
 
    <Text style={Styles.heading2}>TV SHOWS & MOVIES</Text>

    <View style={{flexDirection: 'row',justifyContent: 'center'}}>
    <TouchableOpacity
    onPress={()=>{setSOM('movies'),setMyData(filterData)}}
    style={Styles.switch}>
      <Text style={Styles.switchtext}>MOVIES</Text>
    </TouchableOpacity>

    <TouchableOpacity
    onPress={()=>{setSOM('series'),setMyData(filterDataTwo)}}
    style={Styles.switch}>
      <Text style={Styles.switchtext}>SERIES</Text>
    </TouchableOpacity>
    </View>

      <FlatList
        data={mydata}
        renderItem={itemView}
        numColumns={3} />

    </View>
  );
};



const Styles =  StyleSheet.create({
  
  maincontainer:
  {
     backgroundColor: 'black',
     height: '100%',
  },
  searchbar:
  {
      padding: 10
  },
  search:
  {
    backgroundColor: '#323232',
    color: '#ffffff',
    height: 46,
    padding: 10,
    fontSize: 14,
    borderRadius: 5
  },
  heading:
  {
    marginTop: 8,
    marginBottom: 15,
    marginLeft: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  heading2:
  {
    marginTop: 8,
    marginBottom: 15,
    backgroundColor: '#323232',
    color: '#ffffff',
    fontSize: 15,
    height: 28,
    paddingLeft: 10,
    paddingTop: 5
  },
  firstcard:
  {
    width: '100%',
    height: 83,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
    backgroundColor: '#323232'
  },
  left:
  {
      flexDirection: 'row',
      alignItems: 'center'
  },
  poster:
  {
    width: 128,
    height: 83,
  },
  title:
  {
    color: '#ffffff',
    width: 180,
    paddingLeft: 15,
    fontSize: 16
  },
  play:
  {
    color: '#ffffff',
    paddingRight: 20,
    fontSize: 16
  },
  secondcard:
  { 
    width: 129,
    height: 191,
    margin: 3
  },
  postertwo:
  {
    width: '100%',
    height: '100%'
  },
  switch:
  {
    width: '30%',
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 15,
    padding: 5,
    margin: 10,
    justifyContent: 'center'
  },
  switchtext:
  {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 16
  }

});

export default SearchScreen;