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

export default DetailsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Back to Map Screen"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Back to Home Screen"
                onPress={() => navigation.navigate("Home")}
            />
            <Button
                title="Change Your Nickname"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    );
}
