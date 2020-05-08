import React from 'react';
import { StyleSheet, View,Text,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from '../components/js/function/Header'

export default function Home() {

  return (          
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
          <View style={styles.main}>   
              <Header title='COVID-19 Assistance Portal' />   
              <View style={styles.centeredData}>
                    <Text>DISHA</Text>
                    <Text>1056</Text>
                </View>       
          </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    main:{
        flex:1
    },
    centeredData:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

