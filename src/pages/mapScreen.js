
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
import Mapa from './showMap';
import gps from '../services/gps';
import api from '../services/api';

export default MapScreen = ({ navigation, route }) => {
    let idUsuario= route.params?.usuario;
    
    console.log("Parametro   ", route.params?.usuario, route.params?.texto);
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
        <Mapa>
        </Mapa>
    );
}