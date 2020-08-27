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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const LoginScreen = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Put your nickname above:</Text>
      <TextInput title = "Nickname">Just A Nickname and a InputText</TextInput>
      <Button 
      title = "Enter The Application"
      onPress = {() => navigation.navigate("Home")}
      />
    </View>
    );
  }

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Here We Got List Of All Available Tracks</Text>
      <Text>Every Track Available MUST BE a accessible in onPress</Text>
      <Button 
      title = "Go to The Map Screen"
      onPress = {() => navigation.navigate("Map")}
      />
      </View>
    );
  }


    const MapScreen = ({navigation}) => {
      return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Map Screen</Text>
          <Button 
          title = "Go to Details of THIS Track"
          onPress = {() => navigation.navigate("Details")}
          />
          <Button 
          title = "Back to Home Screen"
          onPress = {() => navigation.goBack()}
          />          
        </View>
        );
      }

      const DetailsScreen = ({navigation}) => {
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button 
          title = "Back to Map Screen"
          onPress = {() => navigation.goBack()}
          />
        <Button 
        title = "Back to Home Screen"
        onPress = {() => navigation.navigate("Home")}
        />
        <Button 
        title = "Change Your Nickname"
        onPress = {() => navigation.navigate("Login")}
        />        
      </View>
      );
    }

  const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions ={{
          headerStyle: {
          backgroundColor: '#009387',
          },
           headerTintColor: '#fff',
           headerTitleStyle:{
           fontWeight: 'bold'
          }
        }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} options={{
            // headerStyle: {
            //   backgroundColor: '#009387',
            // },
            // headerTintColor: '#fff',
            // headerTitleStyle:{
            //   fontWeight: 'bold'
            // }
          }} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default App;
