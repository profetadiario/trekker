import React, { useState } from 'react';
//import Geolocation from '@react-native-community/geolocation';
import { View, Text, Button, Alert } from 'react-native';

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
                    onPress={() => navigation.navigate('Localização atual')
                    }
                />
            </View>

        </View>

    );
}