import React,{useState} from 'react'
import {View,TextInput,Button,Modal,StyleSheet} from 'react-native'

const LocationInput=props=>{

    const [location,setLocation]=useState({latitude:'',longitude:''})

    const getLatitudeHandler=(textEntered)=>{
        setLocation({...location,latitude:textEntered})
      }
    
      const getLongitudeHandler=(textEntered)=>{
        setLocation({...location,longitude:textEntered})
      }

      const displayHandler=()=>{
        props.displayFn(location)
        setLocation({latitude:'',longitude:''})
      }

    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder="Latitude" 
                value={location.latitude}
                onChangeText={getLatitudeHandler}
                />
                <TextInput 
                placeholder="Longitude" 
                value={location.longitude}
                onChangeText={getLongitudeHandler}
                />
                {/* <Button title='Add Location' onPress={props.displayFn.bind(this,location)}/> */}
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title='Add' onPress={displayHandler}/></View>
                    <View style={styles.button}><Button title='Cancel' color="red" onPress={props.cancelHandler}/></View>
                </View>
            </View>  
        </Modal> 
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'50%'
      },
      button:{
        width:'40%'
      }
})

export default LocationInput