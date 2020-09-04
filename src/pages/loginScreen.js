import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Button,

} from 'react-native';
import 'react-native-gesture-handler';
import { Text, Input, Tile } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import api from '../services/api';



export default LoginScreen = ({ navigation }) => {
    let [nome, nickName] = React.useState('Qual o seu nome');

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

    //<TextInput title="Nickname" onChangeText={text => nickName(text)} value={nome} />

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Tile
                //imageSrc={require('./img/path')}
                title="Lorem ipsum dolor sit amet, consectetur"
                icon={{ name: 'play-circle', type: 'font-awesome' }} // optional
                contentContainerStyle={{ height: 70 }}
            >
                <View
                    style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
                >
                    <Text>Caption</Text>
                    <Text>Caption</Text>
                </View>
            </Tile>; */}
            <Text h4 h4Style={{ alignItems: 'center' }}>Trekker's App</Text>
            <Input title="Nickname" onChangeText={text => nickName(text)}
                placeholder='Qual seu nome?'
            />
            <Button
                title="Veja as trilhas disponíveis"
                onPress={() => handleLogin()}
            />
        </View>
    );
}

