import React from 'react';
import { View, Text, TouchableOpacity,Button,StyleSheet,Image,card} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { FlatList, ScrollView } from 'react-native-gesture-handler';


const LogIn = () => { 
    const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={styles.container}>

<Image style={styles.services} source={require('../assets/img/services.png')}/>
<Text></Text>

<TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Channel_a_Doctor')}>
    <Image style={styles.cardImage} source={require('../assets/img/Channel.png')}/>
      <Text style={styles.cardText}>Channel a Doctor</Text>
  </TouchableOpacity>
  
  <Text></Text>

  <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Req_Lab_report')}>
    <Image style={styles.cardImage} source={require('../assets/img/request.png')}/>
      <Text style={styles.cardText}>Req Lab report</Text>
  </TouchableOpacity>

  <Text></Text>


     
  <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Req_medical_report')}>
      <Image style={styles.cardImage} source={require('../assets/img/request.png')}/>
      <Text style={styles.cardText}>Req Medical report</Text>
  </TouchableOpacity>

  <Text></Text>


     
<TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Ask_a_Doctor')}>
<Image style={styles.cardImage} source={require('../assets/img/Ask.png')}/>
<Text style={styles.cardText}>Ask a Doctor</Text>
</TouchableOpacity>

<Text>Find your Doctor</Text>



 
</View>

    </ScrollView>

  );
};
const styles = StyleSheet.create({
  title: {
    color:'black',
    textAlign: 'center',
    marginVertical: 8,
    
  },
  container:{
    flex:1,
    padding:20,
    alignItems:'center',
    justifyContent:'center',
    color: 'black',

  },
  card:{
    backgroundColor: '#DBECFF',
    marginBottom:10,
    marginLeft: '2%',
    width:'90%',
    height: '15%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  card1:{
    backgroundColor: '#DBECFF',
    marginBottom:10,
    marginLeft: '2%',
    width:'90%',
    height: '50%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  cardImage:{
    width: '30%',
    height: 50,
    resizeMode: 'cover',
    alignItems:'flex-start',
    marginLeft: 190,
    marginTop:10,
  

  },
  cardImage1:{
    width: '30%',
    height: 50,
    resizeMode: 'cover',
    alignItems:'flex-start',
    marginLeft: 100,
    marginTop:20,
  

  },
  cardText:{
    padding:1,
    fontSize:16,
    marginBottom: 10,
    marginTop: 1,
    marginStart:1,
    textAlign:'center',
    marginLeft:10,
    

  },
  cardText1:{
    padding:1,
    fontSize:16,
    marginBottom: 10,
    marginTop: 1,
    marginStart:1,
    textAlign:'center',
    marginLeft:10,
    

  },
  services:{
    width:'88%',
    height: 140,
  }
});





export default LogIn;
