import React from 'react';
import { StyleSheet, View,TouchableWithoutFeedback,Keyboard,KeyboardAvoidingView } from 'react-native';
import InputLocation from '../components/js/function/InputLocation'
import Header from '../components/js/function/Header'
import Map from '../components/js/function/Map'

export default function HeatMap() {

  return (          
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
          <KeyboardAvoidingView behavior='padding' style={styles.main}>  
            
                <Header title='Corona Heat Map' />   
                <Map />
                <InputLocation /> 
                    
          </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  main:{
    flex:1
  }
});

