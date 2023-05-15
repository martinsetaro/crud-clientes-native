const globalStyle = {
    btn:{
        shadowColor: '#3e7327',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 14,
        elevation: 7,
        backgroundColor: '#8E44AD',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#B744E7',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
        width:'80%',
        height:80,
        marginHorizontal:40,
        marginTop:30
    },
    contenedor :{
      backgroundColor:'#fff',
        marginHorizontal:'2.5%',
        borderRadius:10,
        paddingVertical:20,
        paddingHorizontal:20,
        transform:[{ translateY:50}],
        shadowColor:"#000",
        shadowOffset:{
           width:0,
           height:2,
        },
        shadowOpacity:0.23,
        shadowRadius:2.62,
        elevation:4,
        
    },
    titulo:{
      textAlign:'center',
      marginTop:20,
      marginBottom:30,
      fontSize:30,
      fontFamily:'WixBold',
      color:'#000'
    },
    label:{
      fontFamily:'WixSemiBold',
      fontSize:18,
      marginBottom:10,
      color:'#000'
    },
    input:{
      paddingVertical: 12,
      paddingHorizontal: 16,
      fontSize: 16,
      borderBottomWidth: 1.5,
      paddingLeft:10,
      marginBottom:40
    }
}

export default globalStyle;