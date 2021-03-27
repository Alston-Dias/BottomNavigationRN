import React from 'react'
import { View, Text, StatusBar, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Home = () =>{
    return(
        <View style={{alignContent:"center", justifyContent:"center"}}>
            <StatusBar backgroundColor = "#000000" barStyle="light-content"/>
            <MapView style={{height: Dimensions.get('window').height, width:Dimensions.get('window').width}} initialRegion={{
                latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,}}>
            
            </MapView>
        </View>
    );
}

export default Home;