import React,{useState} from 'react'
import { View , Text, TextInput, TouchableOpacity,StyleSheet,Image} from 'react-native'

const LoginScreen = ({navigation}) => {

   const [username,setUserName] = useState("");
   const [password,setPassword] = useState("");
   
   const submit = () => {

        if(username=='deeppatel' && password=='Deeppatel@666444')
        {
           alert('sign in successfully');
           navigation.navigate('home');
        } 
        else
        {
          alert('invalid username and password');
        }

   };

  return (
    <View style={Styles.maincontainer}>
     
     <Image
     style={Styles.applogo}
     source={require('../../../assets/images/marvelflix.png')}
     resizeMode='contain'
     />

     <TextInput style={Styles.inputstyle}
       placeholder='Email or phone number'
       autoCapitalize='none'
       autoCorrect={false}
       value={username}
       onChangeText={(usernametext)=>{setUserName(usernametext)}}
     />

     <TextInput style={Styles.inputstyle}
       placeholder='password'
       autoCapitalize='none'
       autoCorrect={false}
       secureTextEntry={true}
       value={password}
       onChangeText={(passwordtext)=>{setPassword(passwordtext)}}
     />

     <TouchableOpacity style={Styles.btn}
     onPress={()=> submit()}  >
      <Text style={Styles.signin}>Sign In</Text>
     </TouchableOpacity>
      
      <TouchableOpacity>
      <Text style={Styles.newuser}>Not a member yet? Start your free month!</Text>
      </TouchableOpacity>

      <TouchableOpacity>
      <Text style={Styles.forgot}>Forgot Your Password?</Text>
      </TouchableOpacity>
        
    </View>
  );
};


const Styles = StyleSheet.create({

  maincontainer:
  {
    padding : 50,
    backgroundColor: 'black',
    width: '100%',
    height: '100%'
  },
  applogo:
  {
      width: 250,
      height: 150,
      alignSelf:'center'
  },
  inputstyle:
  {
    marginVertical: 30,
    backgroundColor: '#323232',
    color: '#ffffff',
    borderRadius: 5,
    height: 45,
    fontSize: 18,
    fontWeight: '500',
    paddingHorizontal: 20
  },
  btn:
  {
    width: 140,
    height: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 30
  },
  signin:
  {
    color: 'white',
    fontSize: 20,
    fontWeight: '900'
  },
  newuser:
  {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
    marginTop: 25
  },
  forgot:
  {
    color: '#323232',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 30,
    alignSelf: 'center'
  }

});

export default LoginScreen;