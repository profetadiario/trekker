import React, { useState, useEffect } from 'react';
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
import api from '../services/api';
import { FlatList } from 'react-native-gesture-handler';



export default HomeScreen = ({ navigation, route }) => {
    let idUser = route.params?.idUser;
    let nickName = route.params?.nomeUser;
    const [trilhas, setTrilhas] = useState([]);
    const idTrilha = "5f48064afb286d1e10fb4327";
    async function handlerHome() {
        const response = await api.put(`/users/${idUser}`, { "idTrilha": idTrilha });
        const user = response.data;
        navigation.navigate("Map", {});
    };
    useEffect(() => {
        async function loadTrilhas() {
            const response = await api.get(`/trilhas`);
            setTrilhas(response.data);
            //console.log("Imprimindo o Respose.Data", response.data);
        };

        loadTrilhas();
        //console.log("Imprindo Trilhas", trilhas.map(trilha => trilha.title));
    });

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', fontSize: 20}}>
                <Text>Olá {idUser, "  ", nickName}! Escolha uma trilha.</Text>

                {trilhas.map(trilha =>
                    <View >
                        <Text key={trilha._id}>{trilha.title}</Text>
                        <Button
                            title="Go to The Map Screen"
                            onPress={() => handlerHome()}
                        />
                    </View>
                )}
            </View>



        </View>
    );
}