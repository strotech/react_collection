import React from 'react';

import Home from './screens/Home'
import HeatMap from './screens/HeatMap'
import ContactUs from './screens/ContactUs'

import {NavigationContainer, DrawerActions} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'

const Drawer=createDrawerNavigator();

export default function App() {


  return (

      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="COVID-19 Heat Map" component={HeatMap} />
          <Drawer.Screen name="Contact Us" component={ContactUs} />
        </Drawer.Navigator>
      </NavigationContainer>      
    
  );
}


