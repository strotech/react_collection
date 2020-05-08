import React,{useState} from 'react';
import Toast from 'react-native-simple-toast';
import { StyleSheet,Text, TextInput, Button, View,Alert,Keyboard } from 'react-native';

import Constants from '../theme/Constants'

import Card from '../style/Card'
import Input from '../style/Input'

export default function InputLocation() {

  const [location,setLocation]=useState({latitude:'',longitude:''})

  const getLatitudeHandler=(textEntered)=>{
    checkMultipleDecimal(textEntered);
    setLocation({...location,latitude:textEntered.replace(/^[+-]?(\\d*\.)?\\d+$/g,'')})
  }

  const getLongitudeHandler=(textEntered)=>{
    checkMultipleDecimal(textEntered);
    setLocation({...location,longitude:textEntered.replace(/^[+-]?(\\d*\.)?\\d+$/g,'')})
  }

  const displayInputDetails=()=>{
    Toast.show('You have entered the latitude as '+location.latitude+' and longitude as '+location.longitude+'!!');
    setLocation({...location,latitude:'',longitude:''})
    Keyboard.dismiss();
  }

  const checkMultipleDecimal=textEntered=>{
    if((textEntered.match(/\./g) || []).length > 1){
      Alert.alert(
        'Invalid input',
        'Location cannot contain more than one decimal',
        [{text:'Ok',style:'destructive',onPress:()=>setLocation({latitude:'',longitude:''})}]
      )
      return
    }
  }

  return (
        <View style={styles.screen}>            
            <Card style={styles.inputContainer}>   
            <Text style={styles.title}> Add co-ordinates to heat map</Text>         
                <Input style={styles.input} 
                blurOnSubmit
                keyboardType="numeric"
                placeholder="Latitude" 
                value={location.latitude}
                onChangeText={getLatitudeHandler}
                />
                <Input style={styles.input} 
                blurOnSubmit
                keyboardType='numeric'
                placeholder="Longitude" 
                value={location.longitude}
                onChangeText={getLongitudeHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title='Add' color={Constants.buttonPositive} onPress={displayInputDetails}/></View>
                    <View style={styles.button}><Button title='Clear' color={Constants.buttonNegative} onPress={()=>setLocation({latitude:'',longitude:''})}/></View>
                </View>
            </Card>
          </View>
    
  );
}

const styles = StyleSheet.create({
    screen:{
    //    flex:1,
        padding:10,
        alignItems:'center',
        
    },
    inputContainer: {
        width:300,
        maxWidth:'80%',
        alignItems:'center',   
    },
    title:{
        fontSize:15,
        marginVertical:10
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around',
        paddingHorizontal:15        
    },
    button:{
      width:'40%'
    },
    input:{
      width:'50%',
      textAlign:'center'
    }
});

