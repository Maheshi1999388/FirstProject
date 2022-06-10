import React from 'react';
import { View, TextInput, Button, Text, ScrollView,StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicon from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"


 
import { useState } from 'react/cjs/react.production.min';
import { Formik } from 'formik';



const Channel_a_Doctor = () => { 

  const navigation = useNavigation(); 

  const [specialization,setSpecialization] =React.useState("");
  const [doctorname,setdoctorname] = React.useState("")
  const [date,setdate] = React.useState("")
  const [charges,setcharges] = React.useState("")
  const [firstname,setfirstname] = React.useState("")
  const [lastname,setlastname] = React.useState("")
  const [dob,setdob] = React.useState("")
  const [mobileno,setmobileno] = React.useState("")
  const [email,setemail] = React.useState("")
  const [address,setaddress] = React.useState("")

//   function sendData(e){
//    e.preventDefault();

//    const resetUser = {  
//      email,         
//      password,   
//      confirmPw    
//    }      
   
//    // axios.post("http://localhost:4000/user/reset",resetUser).then(()=>{        
//    //   alert("reset password success!");
//    // }).catch((err)=>{
//    //   alert(err)
//    // })
 //}





  

  return (
   <ScrollView>
      
   <View style={styles.container}>
     <Text></Text>
     <Text >Specialization</Text>
     <View style= {styles.inputboxcontainer}>
       
       <Ionicon  name="medkit-outline" size={30}/>
     <TextInput style={styles.inputbox}  
     />
     
   </View>
   <Text >Doctor Name</Text>
   <View style= {styles.inputboxcontainer}>
       
   <FontAwesome name="user-md" size={30}/>
     <TextInput style={styles.inputbox}
     />
     </View>
     <Text >Date</Text>
   <View style= {styles.inputboxcontainer}>
       
  <Ionicon name="today-outline" size={30}/>
     <TextInput style={styles.inputbox} placeholder="yyyy-mm-dd" 
     />
     
   </View>
   <Text >Charges</Text>
   <View style= {styles.inputboxcontainer}>
       
  <Ionicon name="card-outline" size={30}/>
     <TextInput style={styles.inputbox} placeholder="Rs.1500" 
     />
     
   </View>
   <Text >First Name</Text>
   <View style= {styles.inputboxcontainer}>
       
  <Ionicon name="person-outline" size={30}/>
     <TextInput style={styles.inputbox} 
     />
     
   </View>
   <Text >Last Name</Text>
   <View style= {styles.inputboxcontainer}>
       
  <Ionicon name="person-outline" size={30}/>
     <TextInput style={styles.inputbox}
     />
     
   </View>
   <Text >Date of Birth</Text>
   <View style= {styles.inputboxcontainer}>
       
  <Ionicon name="today-outline" size={30}/>
     <TextInput style={styles.inputbox}
     />
     
   </View>
   <Text >Mobile Number</Text>
   <View style= {styles.inputboxcontainer}>
       
  <Ionicon name="call-outline" size={30}/>
     <TextInput style={styles.inputbox}
     />
     
   </View>
   <Text >Email</Text>
   <View style= {styles.inputboxcontainer}>
       
  <Ionicon name="mail-outline" size={30}/>
     <TextInput style={styles.inputbox} placeholder="malshi@gmail.com"
     />
     
   </View>
   <Text >Address</Text>
   <View style= {styles.inputboxcontainer}>
       
  <Ionicon name="location-outline" size={30}/>
     <TextInput style={styles.inputbox} 
     />
     
   </View>
   
   </View>

   <Button
          title="Continue" onPress={()=>navigation.navigate('Payment') }
          //title="Continue" onPress={alert("success!")}
/>
   </ScrollView>
   
  );
};

const styles = StyleSheet.create({
   container:{
     flex: 1,
     alignItems:'center',

   },
   inputboxcontainer:{

     alignItems: 'center',
     flexDirection: 'row',


     borderWidth: 2,
     borderColor: 'skyblue',
     margin: 20,
     textAlign: 'center',
     //backgroundColor: Colors.Appbackground,
     flexDirection: "row",
     padding: 4,
     borderRadius: 13,
     width: '90%',
     marginVertical: 15,
     borderColor: 'skyblue',
     paddingHorizontal:10,
     

   },
 inputbox:{
   marginHorizontal: 10,
 },
//  inputboxcontainer:{
//  alignItems: 'center',
// flexDirection: 'row',
// // borderWidth: 2,
// // borderColor: 'skyblue',
// // margin: 20,
// // textAlign: 'center',
// // //backgroundColor: Colors.Appbackground,
// // flexDirection: "row",
// // padding: 4,
// // borderRadius: 13,
// // width: '90%',
// // marginVertical: 15,
// // borderColor: 'skyblue',

//   }
});

export default Channel_a_Doctor;




  //   fetch(`${configdata.baseURL}/addOnline`, {
     
  //     method: 'POST',
  //     body: JSON.stringify({
  //         specialization: this.state.specialization,
  //         doctorname : this.state.DoctorName,
  //         date : this.state.Date,
  //         charges:this.state.charges,
  //         firstname:this.state.firstname,
  //         lastname:this.state.lastname,
  //         dob:this.state.dob,
  //         mobileno: this.state.mobileno,
  //         email :this.state.email,
  //         address : this.state.address,         
  //     }),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }