import React from 'react';
import { StyleSheet, View,Text,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from '../components/js/function/Header'

export default function ContactUs() {

  return (          
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
          <View style={styles.main}>   
                <Header title='Contact Us' />   
                <View style={styles.centeredData}>
                    <Text>Developer</Text>
                    <Text>Sijil.S</Text>
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

