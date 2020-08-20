import React, { useState } from 'react';
//import Geolocation from '@react-native-community/geolocation';
import { View, Text, Button, Alert } from 'react-native';
import Teste from '../mapjson/viewTrilha';
import Trilha from './trilha';
//import Trilha from './trilha';

export default function Main({ navigation }) {
    /*
    Aqui foi um teste para usar a localização
    const [info, setInfo] = useState(0);
    Geolocation.getCurrentPosition(data => { setInfo(data.coords) });
    console.log("Geolocation","latitude", info.altitude,"longitude", info.longitude);
    */
    return (
        <View>
            <View>
                <Text>Pagina Main</Text>
            </View>
            <View>
                <Text>Texto 2</Text>
                <Button
                    //botão para chamar a página de trilha de teste
                    title="Ir para pagina de Morro do Cristo"
                    onPress={() => navigation.navigate('Trilha',
                        { nomeTrilha: 'Teste de Envio de Paramentro' })

                    }
                />
                <Button
                    //botão para chamar o mapa de teste, mostrando a localização atual
                    title="Mostrar minha localização atual"
                    onPress={() => navigation.navigate('Localização atual', { Trilha: Teste})
                    }
                />

                <Button
                    //botão para chamar o mapa de teste, mostrando a localização atual
                    title="Teste  1"
                    onPress={() => navigation.navigate('viewTrilha')
                    }
                />
            </View>

        </View>

    );
}