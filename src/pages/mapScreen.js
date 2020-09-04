
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
} from 'react-native';
import 'react-native-gesture-handler';
import MapboxGL from '@react-native-mapbox-gl/maps';
//import Mapa from './showMap';
import gps from '../services/gps';
import api from '../services/api';

export default MapScreen = ({ navigation, route }) => {
    let usuario = route.params?.usuario;
    let trilha = route.params?.trilha;

    let cameraCoords = [trilha.coodernadasCamera.longitude, trilha.coodernadasCamera.latitute];
    let dataSourceSave = {
        type: 'Feature',
        geometry: trilha.geometryPropietes,
    };
    console.log(cameraCoords, dataSourceSave);
    //let position = gps();
    // async function updateUser(req, res) {
    //     const response = await api.put(`/users/${idUser}`,
    //         {
    //             "coordinates": {
    //                 "latitude": position.latitute,
    //                 "longitude": position.longitude,
    //             },
    //             "idTrilha": 0,

    //         });
    //         return res.json(response);
    // };

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
                    <MapboxGL.Camera

                        zoomLevel={15}
                        centerCoordinate={cameraCoords}
                    >

                    </MapboxGL.Camera>
                    <MapboxGL.ShapeSource
                        id={'routeSource'}
                        shape={dataSourceSave}
                    >
                        <MapboxGL.LineLayer
                            id={'exampleLineLayer'}
                            style={
                                {
                                    lineColor: 'red',
                                    lineWidth: 5,
                                }
                            }
                        >

                        </MapboxGL.LineLayer>
                    </MapboxGL.ShapeSource>
                    <MapboxGL.UserLocation>
                    </MapboxGL.UserLocation>
                </MapboxGL.MapView>
            </View>
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})