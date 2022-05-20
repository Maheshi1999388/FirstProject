import React from 'react';
import { View, TextInput, Button, Text, ScrollView,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react/cjs/react.production.min';


const Channel_a_Doctor = () => { 

  const navigation = useNavigation();


  //const [specialization,setSpecialization] = useState({value:'', error:''})




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
  
 
    return (
      <ScrollView>
        <View style={{ margin: 20 }}>



          <Text >Specialization</Text>
          <TextInput


           
            onChangeText={(text) => { this.setState({ Specialization: text }) }}
            style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
          />
          

          <Text>Doctor Name</Text>
          <TextInput

            
            onChangeText={(text) => { this.setState({ DoctorName: text }) }}
            style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
          />
          

          <Text>Date</Text>
          <TextInput


            onChangeText={(text) => { this.setState({ Date: text }) }}
            style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
          />
          
          <Text>Charges</Text>
          <TextInput

            placeholder="Rs.1000.00"
            onChangeText={(text) => { this.setState({ Charges: text }) }}
            style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
          />
          <Text>FirstName</Text>
          <TextInput


            onChangeText={(text) => { this.setState({ FirstName: text }) }}
            style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
          />
           <Text>LastName</Text>
          <TextInput


            onChangeText={(text) => { this.setState({ LastName: text }) }}
            style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
          />
          <Text>dob</Text>
          <TextInput


            onChangeText={(text) => { this.setState({ dob: text }) }}
            style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
          />
          <Text>mobileno</Text>
          <TextInput

            keyboardType="numeric"
            maxLength={10}
            onChangeText={(text) => { this.setState({ Phone: text }) }}
            style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
          />
           <Text>email</Text>
          <TextInput


            onChangeText={(text) => { this.setState({ email: text }) }}
            style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
          />
           <Text>address</Text>
          <TextInput


            onChangeText={(text) => { this.setState({ address: text }) }}
            style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
          />
          <Text>Test</Text>
          <TextInput

            placeholder="test"
            secureTextEntry={true}
            onChangeText={(text) => { this.setState({ test: text }) }}
            style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
          />


          <Button
            title="Continue" onPress={()=>navigation.navigate('Payment') }

          
          />

        </View>

      </ScrollView>
    );
    
  
};

export default Channel_a_Doctor;