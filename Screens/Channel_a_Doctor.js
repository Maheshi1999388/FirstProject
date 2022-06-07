import React from 'react';
import { View, TextInput, Button, Text, ScrollView,StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

 
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


  

  return (
    <ScrollView>
      
 
      <Text >Specialization</Text>
      <TextInput
         onChangeText={setSpecialization}
         style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
         value={specialization}
      />

      <Text >Doctor Name</Text>
      <TextInput
         onChangeText={setdoctorname}
         style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
         value={doctorname}
      />

      <Text  >Date</Text>
      <TextInput 
        
         onChangeText={setdate}
         style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
         value={date}
      />

      <Text >Charges</Text>
      <TextInput
         onChangeText={setcharges}
         style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
         value={charges}
      />

      <Text >FirstName</Text>
      <TextInput
         onChangeText={setfirstname}
         style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
         value={firstname}
      />

      <Text >LastName</Text>
      <TextInput
         onChangeText={setlastname}
         style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
         value={lastname}
      />

      <Text >Date of Birth</Text>
      <TextInput
         onChangeText={setdob}
         style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
         value={dob}
      />

      <Text >Mobile Number</Text>
      <TextInput
         onChangeText={setmobileno}
         style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
         value={mobileno}
      />

      <Text >Email</Text>
      <TextInput
         onChangeText={setemail}
         style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
         value={email}
      />

      <Text >Address</Text>
      <TextInput
         onChangeText={setaddress}
         style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
         value={address}

      /> 

<Button
             title="Continue" onPress={()=>navigation.navigate('Payment') }
             //title="Continue" onPress={alert("success!")}
/>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Channel_a_Doctor;


 /* const [specialization,setSpecialization] = useState({value:'', error:''})
  const [doctorname,setdoctorname] = useState({value:'', error:''})
  const [date,setdate] = useState({value:'', error:''})
  const [charges,setcharges] = useState({value:'', error:''})
  const [firstname,setfirstname] = useState({value:'', error:''})
  const [lastname,setlastname] = useState({value:'', error:''})
  const [dob,setdob] = useState({value:'', error:''})
  const [mobileno,setmobileno] = useState({value:'', error:''})
  const [email,setemail] = useState({value:'', error:''})
  const [address,setaddress] = useState({value:'', error:''})*/


/*const [specialization,setSpecialization] = useState("")
  const [doctorname,setdoctorname] = useState("")
  const [date,setdate] = useState("")
  const [charges,setcharges] = useState("")
  const [firstname,setfirstname] = useState("")
  const [lastname,setlastname] = useState("")
  const [dob,setdob] = useState("")
  const [mobileno,setmobileno] = useState("")
  const [email,setemail] = useState("")
  const [address,setaddress] = useState("")
*/


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
  
 
//     return (
//       <ScrollView>
//         <View style={{ margin: 20 }}>



//           <Text >Specialization</Text>
//           <TextInput
//             onChangeText={(text) => { this.setState({ Specialization: text }) }}
//             style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
//           />
          

//           <Text>Doctor Name</Text>
//           <TextInput

            
//             onChangeText={(text) => { this.setState({ DoctorName: text }) }}
//             style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
//           />
          

//           <Text>Date</Text>
//           <TextInput


//             onChangeText={(text) => { this.setState({ Date: text }) }}
//             style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
//           />
          
//           <Text>Charges</Text>
//           <TextInput

//             placeholder="Rs.1000.00"
//             onChangeText={(text) => { this.setState({ Charges: text }) }}
//             style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
//           />
//           <Text>FirstName</Text>
//           <TextInput


//             onChangeText={(text) => { this.setState({ FirstName: text }) }}
//             style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
//           />
//            <Text>LastName</Text>
//           <TextInput


//             onChangeText={(text) => { this.setState({ LastName: text }) }}
//             style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
//           />
//           <Text>dob</Text>
//           <TextInput


//             onChangeText={(text) => { this.setState({ dob: text }) }}
//             style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
//           />
//           <Text>mobileno</Text>
//           <TextInput

//             keyboardType="numeric"
//             maxLength={10}
//             onChangeText={(text) => { this.setState({ Phone: text }) }}
//             style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
//           />
//            <Text>email</Text>
//           <TextInput


//             onChangeText={(text) => { this.setState({ email: text }) }}
//             style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
//           />
//            <Text>address</Text>
//           <TextInput


//             onChangeText={(text) => { this.setState({ address: text }) }}
//             style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
//           />
//           <Text>Test</Text>
//           <TextInput

//             placeholder="test"
//             secureTextEntry={true}
//             onChangeText={(text) => { this.setState({ test: text }) }}
//             style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
//           />


//           <Button
//             title="Continue" onPress={()=>navigation.navigate('Payment') }

          
//           />

//         </View>

//       </ScrollView>
//     );
    
  
// };

//export default Channel_a_Doctor;