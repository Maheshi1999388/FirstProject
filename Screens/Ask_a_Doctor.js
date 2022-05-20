import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; 

const Ask_a_Doctor = () => { 

    const navigation = useNavigation();
  
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
            <Text>Ask_a_Doctor</Text>
        </TouchableOpacity> 
  
      </View> 
    );
  };
  
  export default Ask_a_Doctor;