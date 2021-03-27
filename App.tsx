import React, { Component, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './BottomNavigation';
const App = () => {
   return(
           <NavigationContainer>
              <BottomNavigator/>
           </NavigationContainer>
);
}
export default App;