import React, { useEffect, useState } from 'react';
import { Text,
View,
StyleSheet,
TextInput,
ScrollView,
Pressable,
Alert,
Platform
} from 'react-native';
import globalStyle from '../src/style';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';






const NuevoCliente = ({navigation , route}) =>{

const editarCliente = route.params;

 
  const [focusedInput, setFocusedInput] = useState(null);
  const [ nombre , setNombre ] = useState('')
  const [ empresa , setEmpresa ] = useState('')
  const [ email , setEmail ] = useState('')
  const [ telefono , setTelefono ] = useState('')
 


  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

 //Registrar cliente

 const handlerRegistrarCliente = async () => {
// Validar 

if (!nombre || !telefono || !empresa || !email) {
  Alert.alert('Error', 'No pueden existir campos vacíos');
  return;
}


//Generar cliente nuevo

const cliente = {
  nombre,
  telefono,
  email,
  empresa
}


//Guardar cliente en API

try {

  if(Platform.OS === 'android'){
        await axios.post('http://10.0.2.2:3000/clientes',cliente)
  }else{
         await axios.post('http://localhost:3000/clientes',cliente)
  }
  
  
} catch (error) {
  console.log(error)
}

//redireccionar

 const exito = () => {

  Alert.alert("Exito","Usuario registrado exitosamente")
    setTimeout(()=>{
     navigation.navigate('Home')

    },3000)
  }
     
    exito();


//Limpiar el form

setNombre('');
setTelefono('');
setEmail('');
setEmpresa('');

 }
 // Editar cliente

useEffect(()=>{

if(editarCliente)
{
editar();
}


},[])


 const editar = async () => {
   try {
    const resultado = await axios.get(`http://10.0.2.2:3000/clientes/${editarCliente.id}`)
      setNombre(resultado.data.nombre)
      setEmail(resultado.data.email)
      setTelefono(resultado.data.telefono)
      setEmpresa(resultado.data.empresa)
    
   } catch (error) {
    console.log(error)
   }
 }

//Editar base de datos

const handlerEditarCliente = async () => {

  if (!nombre || !telefono || !empresa || !email) {
    Alert.alert('Error', 'No pueden existir campos vacíos');
    return;
  } 


  const clienteEditado = {
    nombre,
    telefono,
    email,
    empresa
  }

  try {

      await axios.put(`http://10.0.2.2:3000/clientes/${editarCliente.id}`,clienteEditado)
  
    
  } catch (error) {
    console.log(error)
  }

  setNombre('');
setTelefono('');
setEmail('');
setEmpresa('');


const exito = () => {

  Alert.alert("Exito","Usuario Editado correctamente")
    setTimeout(()=>{
     navigation.navigate('Home')

    },2000)
  }
     
    exito();

}



 

  return (

<ScrollView>
  <View style={{height: 950 , backgroundColor:'#F2DEFB', flex:1}} >
     
 
     <View style={style.contenedor}>
     
      {editarCliente ? <Text style={globalStyle.titulo}>Editar cliente</Text> : 
      <Text style={globalStyle.titulo}>Agregar nuevo cliente</Text>}

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
        onChangeText={texto => setNombre(texto)}
        value={nombre}
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
        onChangeText={texto => setTelefono(texto)}
        value={telefono}
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
        onChangeText={texto => setEmail(texto)}
        value={email}
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
        onChangeText={texto => setEmpresa(texto)}
        value={empresa}
      />

      {editarCliente ?  
      (<Pressable
      onPress={ () => handlerEditarCliente()}
      style={globalStyle.btn}>
         <FontAwesomeIcon name="pencil-square-o" style={style.icono} />
        <Text style={style.textoBtn}>
          Editar Cliente
        </Text>
      </Pressable>) :
      (<Pressable
      onPress={ () => handlerRegistrarCliente()}
      style={globalStyle.btn}>
         <FontAwesomeIcon name="pencil" style={style.icono} />
        <Text style={style.textoBtn}>
          Registrar cliente
        </Text>
      </Pressable>)

      }
      
    </View>
  
    </View>
     </ScrollView> 
  );
};
const style = StyleSheet.create({
 contenedor:{
  ...globalStyle.contenedor,
    height:850,
    marginTop:-30
 
 },
 inputFocused: {
  borderColor: '#B744E7', // Cambia el color del borde cuando se hace clic
},
textoBtn:{
  color:'#fff',
  fontFamily:'WixSemiBold',
  fontSize:25
},
icono:{
  fontSize:30,
  color:'#fff',
  marginRight:20
}
})
export default NuevoCliente;