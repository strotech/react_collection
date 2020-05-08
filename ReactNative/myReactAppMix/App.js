import React,{useState} from 'react';
import Toast from 'react-native-simple-toast';
import { StyleSheet, Text,TextInput,ScrollView, Button, View , FlatList} from 'react-native';

import LocationItem from './components/LocationItem'
import LocationInput from './components/LocationInput'

export default function App() {

  
  const [locations,setLocations]=useState([])  
  const [isAddMode,setIsAddMode]=useState(false)

  const displayInputDetails=locationTx=>{
    Toast.show('You have entered the latitude as '+locationTx.latitude+' and longitude as '+locationTx.longitude+'!!');
    setLocations(currentList=>[...currentList,{key:Math.random().toString(),locValue:locationTx}])
    setIsAddMode(false)
 //   setLocation({...location,latitude:'',longitude:''})
  }

  const removeItem=itemKey=>{
    setLocations(currentLocations=>{
      return currentLocations.filter(item=>item.key !==itemKey)
    })      
  }

  const cancelHandlerModal=()=>{
    setIsAddMode(false)
  }

  return (
    
      <View style={styles.screen}> 
          <Button title="Add New Location" onPress={()=>setIsAddMode(true)}/>     
          <LocationInput visible={isAddMode} displayFn={displayInputDetails} cancelHandler={cancelHandlerModal} />
          {/*
          <FlatList 
            data={locations} 
            renderItem={
              itemData=>{
                <View style={styles.listItem}>
                  <Text>{itemData.item.locValue.latitude +' '+itemData.item.locValue.longitude}</Text>
                </View>
              }
          }
          />
        */}
          
                  
          <ScrollView>
            {locations.map((loc)=><LocationItem key={loc.key} onDelete={removeItem}  locationDetail={loc}/>)}
          </ScrollView>
          
        
          
         
      </View>
    
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    backgroundColor: '#dfd46d',
  },
  textOutput:{
    color: 'green',
  }
});
