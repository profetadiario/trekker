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
    const trilhas = route.params?.trilhas;
    // console.log("id: ",idUser);
    async function handlerHome(idTrilha) {
        const responseUser = await api.put(`/users/${idUser}`, { "idTrilha": idTrilha });
        const responseTrilha = await api.get(`/trilhas/${idTrilha}`);
        const user = responseUser.data;
        const trilha = responseTrilha.data;
        //console.log("usuario   ", user._id);
        navigation.navigate("Details", { usuario: user, trilha: trilha});
    };


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Text style={styles.title}>Olá {nickName}! Escolha uma trilha:</Text>
                <Separator/>
                {trilhas.map((trilha, index) =>
                    <View key={index} >
                        <Button
                            title=  {trilha.title}
                            onPress={() => handlerHome(trilha._id)}
                        />
                        <Separator/>
                    </View>
                )}
            </View>



        </View>
    );
}
const Separator = () => (<View style = {styles.separator}/>)
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