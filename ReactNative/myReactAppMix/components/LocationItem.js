import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

const LocationItem= props =>{
    return(
        <TouchableOpacity onPress={props.onDelete.bind(this,props.locationDetail.key)}>
            <View style={styles.listItem}>
                <Text>{props.locationDetail.locValue.latitude + ' ' + props.locationDetail.locValue.longitude}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem:{
        padding:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        borderWidth:1,
        marginVertical:5
      }
})

export default LocationItem