import React from 'react';
import {
    View,
    Button,
} from 'react-native';
import 'react-native-gesture-handler';
import { TextInput } from 'react-native-gesture-handler';
import api from '../services/api';
import { Text, Input, Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default LoginScreen = ({ navigation }) => {
    let [nome, nickName] = React.useState('Qual seu nome?');

    async function handleLogin() {
        console.log("Entrou no initUser", nome);
        const response = await api.post('/users', { "name": nome });
        console.log("Olha o response", response.data);
        const id = response.data;
        console.log("Olha o id", id);


        navigation.navigate("Home", { nomeUser: nome, idUser: id });
    }

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
            <Input title="Nickname" onChangeText={text => nickName(text)} value={nome}
                placeholder='Qual seu nome?'
            />
            <Button
                title="Veja as trilhas disponíveis"
                onPress={() => handleLogin()}
            />
        </View>
    );
}

