import React, { useState } from 'react';
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



export default HomeScreen = ({ navigation, route }) => {
    let idUser = route.params?.idUser;
    let nickName = route.params?.nomeUser;
    // async function initUser() {
    //     console.log("Entrou no initUser");
    //     const response = await api.post('/users/', { "name": nickName });
    //     console.log("Olha o response ",response);
    //     const {_id}= response.data;       
        
    // };
    // initUser();
    // console.log("Id usuario", idUser);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Text>Olá {idUser, "  ", nickName}! Escolha uma trilha.</Text>
            </View>

            <Text>Here We Got List Of All Available Tracks</Text>
            <Text>Every Track Available MUST BE a accessible in onPress</Text>
            <Button
                title="Go to The Map Screen"
                onPress={() => navigation.navigate("Map", {})}
            />
        </View>
    );
}