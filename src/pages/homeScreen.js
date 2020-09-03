import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
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
                <Text style={styles.title}>Olá {idUser, "  ", nickName}! Escolha uma trilha:</Text>
            </View>
            <View>
            <Text>Aqui estarão as trilhas disponíveis</Text>
            </View>
            <Text>Cada trilha deve ter sua propria view e o button OnPress pra direcionar pra ela</Text>
            <Button
                title="Veja a trilha"
                onPress={() => navigation.navigate("Map", {})}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        fontWeight: "bold",
        marginVertical: 8,
        fontSize: 35
    },
    text: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});