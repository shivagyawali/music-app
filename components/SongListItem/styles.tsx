import React from 'react'
import { StyleSheet } from 'react-native'

const styles =StyleSheet.create({
    container: {
        flexDirection:"row",
        margin:10

      },
      textContainer:{
        justifyContent:'space-around',
        marginLeft:15,


      },
      title: {
        color: 'white',
        fontSize:22,
     
      },
      image:{
        width:75,
        height:75
      },
      artist:{
        color: 'lightgrey',
        fontSize:16
      },

    });

export default styles;
