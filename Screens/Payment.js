import React from 'react';
import { View, TextInput, Button, Text, ScrollView,StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

 



const Payment= () => { 

  const navigation = useNavigation(); 

  const [Payment_Method,setPayment_Method] =React.useState("");
  const [card_Number,setcard_Number] = React.useState("")
  const [Expiry,setExpiry] = React.useState("")
  const [CVC,setCVC] = React.useState("")
  const [Total_Payment,setTotal_Payment] = React.useState("")
  
  return (
    <ScrollView>
      
 
      <Text >Payment Method</Text>
      <TextInput
         onChangeText={setPayment_Method}
         style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
         value={Payment_Method}
      />

      <Text >card_Number</Text>
      <TextInput
         onChangeText={setcard_Number}
         style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
         value={card_Number}
      />

      <Text  >Expiry</Text>
      <TextInput 
        
         onChangeText={setExpiry}
         style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
         value={Expiry}
      />

      <Text >CVC</Text>
      <TextInput
         onChangeText={setCVC}
         style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
         value={CVC}
      />

      <Text >Total_Payment</Text>
      <TextInput
         onChangeText={setTotal_Payment}
         style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
         value={Total_Payment}
      />

     

<Button
             title="Cancel" onPress={()=>navigation.navigate('Payment') }
            
/>
<Text></Text>
<Button
             title="Pay" onPress={()=>navigation.navigate('Pay') }
            
/>


    </ScrollView>
  );
};


export default Payment;


 