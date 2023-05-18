import React from 'react';
import { Text,
View,
StyleSheet,
Pressable,
Alert
} from 'react-native';
import globalStyle from '../src/style';
import axios from 'axios';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const DetallesCliente = ({route,navigation}) =>{


  const { nombre , telefono , empresa , email , id } = route.params.item



  const eliminarCliente = () => {
    Alert.alert("Advertencia", ` Desea eliminar el cliente ${nombre}?`,[
        {text:"Cancelar",style:'cancel'},{text:"Si, elimininar", onPress: async () => {
      
   try {
       
          await axios.delete(`http://10.0.2.2:3000/clientes/${id}`)
          Alert.alert("Exito","Eliminado correctamente")
          setTimeout(()=>{
            navigation.navigate('Home')
          },2000)

   } catch (error) {
    console.log(error)
   }
  }}])}
  






    return (
      <View style={style.contenedor}>
        <FontAwesomeIcon name='user' style={style.icono}/>
        <Text style={style.titulo}>Nombre:</Text>
        <Text style={style.subTitulo}>{nombre}</Text>
        <Text style={style.titulo}>Correo:</Text>
        <Text style={style.subTitulo}>{email}</Text>
        <Text style={style.titulo}>Telefono:</Text>
        <Text style={style.subTitulo}>{telefono}</Text>
        <Text style={style.titulo}>Empresa:</Text>
        <Text style={style.subTitulo}>{empresa}</Text>
        <View style={style.contenedorBtn}>
        <Pressable 
        onLongPress={() => eliminarCliente()}
        style={style.btn}>
          <Text style={style.textoBtn}>
            Eliminar Cliente
          </Text>
        </Pressable>
        <Pressable
        onLongPress={() => navigation.navigate('nuevoCliente', {id})}
        style={style.btnEditar}>
          <Text style={style.textoBtn}>
            Editar cliente
          </Text>
        </Pressable>
        </View>
      </View>
    );
  }
const style = StyleSheet.create({
  contenedor:{
    ...globalStyle.contenedor,
    flex:1
  },
  titulo:{
    marginTop:20,
    marginBottom:30,
    fontSize:20,
    fontFamily:'WixBold',
    color:'#000'
  },
  subTitulo:{
    fontSize:20,
    fontFamily:'WixSemiBold',
    marginTop:-20
  },
  btn:{
    ...globalStyle.btn,
    height:50,
    marginTop:60,
    backgroundColor:'#CD3717'
  },
  textoBtn:{
    color:'#fff',
    fontSize:20,
    fontFamily:'WixSemiBold',
    
  },
  icono :{
    fontSize:90,
    textAlign:'center',
    color:'#B744E7'
  },
  contenedorBtn:{
    width:360,
    height:150,
  },
  btnEditar:{
    ...globalStyle.btn,
    height:50,
    marginTop:60,
    backgroundColor:'#058806',
    marginTop:20,
    borderColor:'#fff'
  }
})
export default DetallesCliente;