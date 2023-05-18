import React, { useState } from 'react';
import { Text,
View,
StyleSheet,
Pressable,
Animated,
} from 'react-native';
import  globalStyle  from '../style';
import { useNavigation } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';






const BarraSuperior = () =>{

const navigation = useNavigation()
const [ animacion ] = useState (new Animated.Value(1))


const presionar = () => {

    Animated.spring(animacion , {
        toValue: .9,
        friction: 4,
        tension:30,
        useNativeDriver: true,
    }).start();

} 

const soltar = () => {
    Animated.spring(animacion , {
        toValue: 1,
        friction: 4,
        tension:30,
        useNativeDriver: true,
    }).start();
}


const registarCliente = ()=>{
    navigation.navigate('nuevoCliente')
}


    return (
  
      <View style={style.contenedor}>
        <Animated.View
        style={{ transform: [{ scale: animacion }] }}
        >
    
   
        <Pressable 
        
        onPress={() => registarCliente()}
        onPressIn={()=> presionar()}
        onPressOut={()=> soltar()}
        style={style.btn }>
           <FontAwesomeIcon name="plus-circle" style={style.icono} />
            <Text style={style.textoCliente}>
                Agregar nuevo cliente
            </Text>
        </Pressable>
      </Animated.View>
      </View>
    );
  }


const style = StyleSheet.create({
    btn:{
      ...globalStyle.btn  
    },
    textoCliente:{
        fontFamily:'WixBold',
        color:'#fff',
        fontSize:20
    },
    icono:{
        color:'#fff',
        fontSize:30,
        marginRight:20
    },
    contenedor:{
     
        height:150,
        marginBottom:20
    }

})
export default BarraSuperior;