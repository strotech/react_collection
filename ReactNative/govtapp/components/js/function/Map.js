import React from 'react'
import {StyleSheet,Dimensions} from 'react-native'
import MapView from 'react-native-maps';
import Card from '../style/Card'

const Map=props=>{
    return(
        <Card style={styles.cardStyle} >
            <MapView  style={styles.mapStyle} 
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            />
        </Card>
    )
}

const styles=StyleSheet.create({
    cardStyle:{
        flex:1,
        padding:0,
    },
    mapStyle: {
        flex:1,
      },
})

export default Map