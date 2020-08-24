//Pagina responsavel pelas 'rotas' 
import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/main';
import Trilha from './pages/trilha';
import ViewTrilha from './mapjson/viewTrilha';
import Mapa from './pages/showMap'; //importação da página

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator >
                <Stack.Screen
                    name="Home"
                    component={Main}
                    options={
                        {
                            title: 'Bem-Vindo',
                            headerStyle: {
                                backgroundColor: 'black'
                                
                            },
                            headerTintColor: '#FFF',
                        }
                    }
                />

                <Stack.Screen
                    name="Localização atual" //nome de chamada que vai ser passado por um botão por exemplo
                    component={Mapa} //pagina que será chamada que deve ter sido importada
                />

                <Stack.Screen
                    name="Trilha"
                    component={Trilha}
                />

<Stack.Screen
                    name="viewTrilha"
                    component={ViewTrilha}
                />


            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default Routes;


