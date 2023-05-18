import React , { useState, useEffect } from 'react';
import { Text,
View,
StyleSheet,
ScrollView,
Pressable,
TouchableNativeFeedback,
} from 'react-native';
import BarraSuperior from '../src/components/BarraSuperior';
import axios from 'axios';
import globalStyle from '../src/style';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';







const Home = ({navigation}) =>{

  const [ clientes , setClientes ] = useState([])
  const [ consultarAPI , setConsultarAPI] = useState(true)



  //recibir los datos de los clientes de la base de datos.

  useEffect(() => {

    const datosDb = async () =>{
      const resultado = await axios.get('http://10.0.2.2:3000/clientes');
      setClientes(resultado.data)
      setConsultarAPI(false)
    }

    if(consultarAPI){
      datosDb();
    }
   
    


  },[consultarAPI])






    return (
      <View style={style.container}>
      
       <BarraSuperior/>

     <ScrollView>
       <View style={style.containerClientes}>
        
        <Text style={style.titulo}>{ clientes.length > 0 ? "" : "No hay Clientes"}</Text>
        {clientes.length > 0 && 
         <Pressable style={style.btnActualizar} onPress = {()=>{ setConsultarAPI(true)}}>
          <Text style={style.textoBtn}><FontAwesomeIcon name="refresh" style={style.icono}/> Actualizar lista</Text></Pressable>}

            {clientes.map ( item => {
              return(
              <TouchableNativeFeedback
              key={item.id}
              onPress={ () => navigation.navigate('detallesCliente',{item}) }
              >
              <View key={item.id} style={style.cardCliente}>
                 <Text style={style.texto}>Nombre:{''} <Text style={style.subTexto}>{ item.nombre }</Text></Text>
                 <Text style={style.texto}>Telefono:{''} <Text style={style.subTexto}>{ item.telefono }</Text></Text>
                 <Text style={style.texto}>Correo:{''} <Text style={style.subTexto}>{ item.email }</Text></Text>
                 <Text style={style.texto}>Empresa:{''} <Text style={style.subTexto}>{ item.empresa }</Text></Text>
              </View>
              </TouchableNativeFeedback>
              )
             
             })}
      </View>
    </ScrollView>

      </View>
    );
  }


const style = StyleSheet.create({
  titulo:{
  fontSize:40,
  fontFamily:'WixSemiBold',
  textAlign:'center'
  },
texto:{
  fontSize:20,
  color:'#B744E7',
  fontFamily:'WixSemiBold'
},
subTexto:{
  color:'#1d1d1d'
},
container :{
  flex:1,
},
containerClientes:{
  width:'100%',
  height:'auto',
  paddingBottom:80,
},
cardCliente:{
  width:'95%',
  height:160,
  ...globalStyle.contenedor,
  marginBottom:20,
  
  
},
textoBtn:{
color:'#B744E7',
fontSize:20,
textAlign:'center'
},
icono:{
fontSize:20,
},

btnActualizar:{
 borderWidth:1,
 borderColor:'#B744E7',
 padding:10,
 width:'70%',
 marginHorizontal:60
}


})
export default Home;