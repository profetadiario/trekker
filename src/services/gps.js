// Essa aqui é responsavel por tratar o gps


import React, { useState } from 'react';
import Geolocation from '@react-native-community/geolocation'; //biblioteca de Geolacalização
import { PermissionsAndroid } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';


export default function gps(){
//objeto para colocar a localização atual, pode ser feito em outro lugar, fazer um array disso pra poder colocar todas e plotar na tela, talvez
const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
});
//chamando a localização atual e setando no objeto acima.
setTimeout(permitirLocalizacao, 5000);
//função pra pedir permição pra localização
async function permitirLocalizacao() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Permissão de Localização',
                message: 'A aplicação precisa da permissão de localização.',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //não tenho certeza como isso aqui funciona direito
            Geolocation.getCurrentPosition(
                pos => {
                    //console.log("TesteDeChamada", pos.coords)
                    setPosition({
                        ...position,
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude,

                    });
                },
                error => {
                    console.log(error);
                    Alert.alert('Houve um erro ao pegar a latitude e longitude.');
                },
            );

        } else {
            Alert.alert('Permissão de localização não concedida');
        }
    } catch (err) {
        console.log(err);
    }
};

const viewItem = (
        <MapboxGL.UserLocation>

        </MapboxGL.UserLocation>
);
return position;
}