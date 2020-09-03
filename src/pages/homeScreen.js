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
    const trilhas = route.params?.trilhas;
    console.log("id: ",idUser);
    async function handlerHome(idTrilha) {
        const responseUser = await api.put(`/users/${idUser}`, { "idTrilha": idTrilha  });
        const responseTrilha = await api.get(`/trilhas/${idTrilha}`);
        const user = responseUser.data;
        const trilha = responseTrilha.data;
        console.log("usuario   ", user._id);
        navigation.navigate("Details", {usuario: user, });
    };


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', fontSize: 20}}>
                <Text>Olá {nickName}! Escolha uma trilha.</Text>

                {trilhas.map((trilha, index) =>
                    <View >
                        <Text key={index}>{trilha.title}</Text>
                        <Button
                            title="Go to The Map Screen"
                            onPress={() => handlerHome(trilha._id)}
                        />
                    </View>
                )}
            </View>



        </View>
    );
}