import 'react-native-gesture-handler'
import React from 'react';
import { Text,
View,
StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TransitionPresets } from '@react-navigation/stack';
import Home from './screens/Home';
import NuevoCliente from './screens/NuevoCliente';
import DetallesCliente from './screens/DetallesCliente';

const Stack = createNativeStackNavigator();



const App = () =>{




    return (
     <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        
        animation: 'slide_from_right', // Transición de derecha a izquierda
        config: {
          duration: 280, // Duración de la transición en milisegundos
        },
        styleInterpolator: ({ current }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [300, 0], // Transición de derecha a izquierda
                  }),
                },
              ],
            },
          };
        },
      }}
      >

        <Stack.Screen 
        name='Home' 
        component={Home}
        options={{
          headerTitleAlign:'center'
        }}
        />
        <Stack.Screen 
        name='nuevoCliente' 
        component={NuevoCliente}
        options={{
          headerTitleAlign:'center',
          title:'Nuevo Cliente'
        }}
        />
        <Stack.Screen 
        name='detallesCliente' 
        component={DetallesCliente}
        options={{
          headerTitleAlign:'center',
          title:'Detalles cliente'
        }}
        />

      </Stack.Navigator>
     </NavigationContainer>
    );
  }









const style = StyleSheet.create({

texto:{
  fontFamily:'WixBold',
  fontSize:30,
  textAlign:'center'
}

})
export default App;