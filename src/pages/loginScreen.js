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
import { TextInput } from 'react-native-gesture-handler';
import api from '../services/api';



export default LoginScreen = ({ navigation }) => {
    let [nome, nickName] = React.useState('Insira aqui seu Nome');

    async function handleLogin() {
        console.log("Entrou no initUser", nome);
        const response = await api.post('/users', { "name": nome });
        console.log("Olha o response", response.data);
        const id = response.data;
        const responseTrilhas = await api.get(`/trilhas`);
        const trilhasObj = responseTrilhas.data;
        console.log("Olha o id", id);


        navigation.navigate("Home", { nomeUser: nome, idUser: id, trilhas: trilhasObj });
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Put your nickname above:</Text>
            <TextInput title="Nickname" onChangeText={text => nickName(text)} value={nome} />
            <Button
                title="Enter The Application"
                onPress={() => handleLogin()}
            />
        </View>
    );
}

