
import React from 'react';
import 'react-native-gesture-handler';
import Mapa from './showMap';
import gps from '../services/gps';
import api from '../services/api';

export default MapScreen = ({ navigation, route }) => {
    let idUsuario= route.params?.user._id;
    console.log("Parametro", idUsuario);
    let position = gps();
    async function updateUser(req, res) {
        const response = await api.put('/users/' + idUsuario,
            {
                "coordinates": {
                    "latitude": position.latitute,
                    "longitude": position.longitude,
                },
                "idTrilha": 0,

            });
            return res.json(response);
    };
    updateUser();
    return (
        <Mapa>
        </Mapa>
    );
}