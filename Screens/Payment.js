import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; 

const Payment = () => { 

    const navigation = useNavigation();
  
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
            <Text>Payment</Text>
        </TouchableOpacity> 
  
      </View> 
    );
  };
  
  export default Payment; 