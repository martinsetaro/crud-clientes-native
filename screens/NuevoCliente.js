import React, { useState } from 'react';
import { Text,
View,
StyleSheet,
TextInput,
ScrollView,
Pressable
} from 'react-native';
import globalStyle from '../src/style';
import { red200 } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';





const NuevoCliente = () =>{

 
  const [focusedInput, setFocusedInput] = useState(null);


  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  return (

<ScrollView>
  <View style={{height: 950 , backgroundColor:'#F2DEFB', flex:1}} >
     
 
     <View style={style.contenedor}>
     
      <Text style={globalStyle.titulo}>Agregar nuevo cliente</Text>

      <Text style={globalStyle.label}>Nombre :</Text>
      <TextInput
        style={[
          globalStyle.input,
          focusedInput === 'nombre' ? style.inputFocused : null,
        ]}
        placeholder="Ingrese su nombre"
        placeholderTextColor="#999"
        onFocus={() => handleFocus('nombre')}
      onBlur={handleBlur}
      />

      <Text style={globalStyle.label}>Telefono :</Text>
      <TextInput
         style={[
          globalStyle.input,
          focusedInput === 'telefono' ? style.inputFocused : null,
        ]}
        placeholder="Ingrese numero de telefono"
        placeholderTextColor="#999"
        onFocus={() => handleFocus('telefono')}
        onBlur={handleBlur}
        keyboardType='numeric'
      />
      <Text style={globalStyle.label}>Correo electronico :</Text>
      <TextInput
         style={[
          globalStyle.input,
          focusedInput === 'correo' ? style.inputFocused : null,
        ]}
        placeholder="Ingrese numero de telefono"
        placeholderTextColor="#999"
        onFocus={() => handleFocus('correo')}
        onBlur={handleBlur}
        keyboardType='email-address'
      />
      <Text style={globalStyle.label}>Empresa :</Text>
      <TextInput
         style={[
          globalStyle.input,
          focusedInput === 'empresa' ? style.inputFocused : null,
        ]}
        placeholder="Ingrese numero de telefono"
        placeholderTextColor="#999"
        onFocus={() => handleFocus('empresa')}
        onBlur={handleBlur}
       
      />
      <Pressable style={globalStyle.btn}>
        <Text style={style.textoBtn}>
          Registrar cliente
        </Text>
      </Pressable>

      
      
    </View>
  
    </View>
     </ScrollView> 
  );
};
const style = StyleSheet.create({
 contenedor:{
  ...globalStyle.contenedor,
    height:850,
 
 },
 inputFocused: {
  borderColor: '#B744E7', // Cambia el color del borde cuando se hace clic
},
textoBtn:{
  color:'#fff',
  fontFamily:'WixSemiBold',
  fontSize:25
}
})
export default NuevoCliente;