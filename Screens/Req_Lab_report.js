import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; 

const Req_Lab_report = () => { 

    const navigation = useNavigation();
  
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
            <Text>Req_Lab_report</Text>
        </TouchableOpacity> 
  
      </View> 
    );
  };
  
  export default Req_Lab_report;