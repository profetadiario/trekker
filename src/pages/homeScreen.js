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


export default HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Here We Got List Of All Available Tracks</Text>
            <Text>Every Track Available MUST BE a accessible in onPress</Text>
            <Button
                title="Go to The Map Screen"
                onPress={() => navigation.navigate("Map")}
            />
        </View>
    );
}