import React from 'react';

//import bibloteca de gestos, para botões e tals
import 'react-native-gesture-handler';

//import react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import pages
import LoginScreen from './src/pages/loginScreen';
import HomeScreen from './src/pages/homeScreen';
import MapScreen from './src/pages/mapScreen';
import DetailsScreen from './src/pages/detailsScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Map" component={MapScreen}/>
      <Tab.Screen name="Details" component={DetailsScreen}  />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#2196f3',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: '400'  
        }
      }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen}  options={{
          headerShown: 'false'
        }}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Map" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
