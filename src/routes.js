//Pagina responsavel pelas 'rotas' 
import * as React from 'react';
//import 'react-native-gesture-handler'; //Se pá era isso que tava zoando o seu css ele importa uns estilos se não me engano
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/main';
import Mapa from './pages/showMap'; //importação da página

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator >
                <Stack.Screen
                    name="Home"
                    component={Main}
                />
                <Stack.Screen
                    name="showMapa" //nome de chamada que vai ser passado por um botão por exemplo
                    component={Mapa} //pagina que será chamada que deve ter sido importada
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default Routes;


