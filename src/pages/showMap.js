
//Página responsavel por mostrar o mapa

import MapboxGL from '@react-native-mapbox-gl/maps'; //biblioteca mapBox
import React from 'react';
import { View, StyleSheet,Button } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Trilha from '../mapjson/viewTrilha';
import Eu from '../services/gps'

//mapBox tokken, pretendo colocar na pasta de config ou de services
MapboxGL.setAccessToken(
    'pk.eyJ1Ijoiam9uYXRoZWxvbyIsImEiOiJja2R5amIxcjYxM2k4MnhvYTRjcWNpZnc1In0.I7SDQB90tun0gGQ2VFlfmw'
);

export default function Mapa() {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.container}>

                <MapboxGL.MapView
                    style={styles.container}

                >
                    {/* <MapboxGL.Camera
                        zoomLevel={15}
                        centerCoordinate={[-70.55217762081767, 41.61376979061129]}
                    >

                    </MapboxGL.Camera>  */}

                    <Trilha></Trilha>
                    <Eu></Eu>

                    <Button
                    style={styles.container}
                        title="Go to Details of THIS Track"
                        onPress={() => navigation.navigate("Details")}
                    />
                </MapboxGL.MapView>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
