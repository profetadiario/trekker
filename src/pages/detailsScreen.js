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
import api from '../services/api';

const Separator = () => (
    <View style={styles.separator} />
);

export default DetailsScreen = ({ navigation, route }) => {
    let usuario = route.params?.usuario;
    let trilha = route.params?.trilha;
    async function handlerDetails() {
        const responseUser = await api.get(`/users/${usuario._id}`);
        const responseTrilha = await api.get(`/trilhas/${trilha._id}`);
        const userR = responseUser.data;
        const trilhaR = responseTrilha.data;
        //console.log("usuario   ", user._id);
        navigation.navigate("Map", { usuario: userR, trilha: trilhaR});
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderBottomEndRadius: 1 }}>
                <View>
                    <Text h4 style={styles.title}>
                        Detalhes da Trilha:
                    </Text>
                    <Text style={styles.text}>
                        {trilha.detailsTrilha.observations}
                    </Text>
                </View>
                <View>
                    <Text style={styles.text}>
                        Dificuldade: {trilha.detailsTrilha.difficult}
                    </Text>
                    <Text style={styles.text}>
                        Tamanho: {trilha.detailsTrilha.distance}
                    </Text>
                    <Separator />
                    <Button
                        title="Lista de trilhas"
                        onPress={() => navigation.navigate("Home")}
                    />
                    <Separator />
                    <Button
                        title="Iniciar trilha!"
                        onPress={() => handlerDetails()}
                    />
                </View>
            </View>
        </SafeAreaView>
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