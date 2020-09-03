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

const Separator = () => (
    <View style={styles.separator} />
);

export default DetailsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderBottomEndRadius: 1 }}>
                <View>
                    <Text h4 style={styles.title}>
                        Detalhes da Trilha:
                </Text>
                    <Text style={styles.text}>
                        Aqui teremos os detalhes sobre as trilhas que virão com do mongoDb
                    </Text>
                </View>
                <View>
                    <Text style={styles.text}>
                        Aqui a dificuldade e o tamanho em kilometros
                    </Text>
                    <Separator />
                    <Button
                        title="Lista de trilhas"
                        onPress={() => navigation.navigate("Home")}
                    />
                    <Separator />
                    <Button
                        title="Iniciar trilha!"
                        disabled
                        onPress={() => Alert.alert('Função ainda em testes')}
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