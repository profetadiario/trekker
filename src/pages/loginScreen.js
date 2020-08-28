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

export default LoginScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Put your nickname above:</Text>
            <TextInput title="Nickname">Just A Nickname and a InputText</TextInput>
            <Button
                title="Enter The Application"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    );
}

