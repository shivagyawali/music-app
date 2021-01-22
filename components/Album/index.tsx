import React from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';
import { Albums } from '../../types';
import { useNavigation } from '@react-navigation/native';

export type AlbumProps={
    album: Albums,
}

const Album = (props:AlbumProps)=>  {
    const navigation = useNavigation();
    const onPress=()=>{
        // console.log(`Album pressed: ${props.album.artistsHeadline}`);
        navigation.navigate('AlbumScreen',{id:props.album.id});
    
}
    return (
        <TouchableWithoutFeedback  onPress={onPress}>
          <View style={styles.container}>
          <Image source={{uri:props.album.imageUri}} style={styles.image}/>
             <Text style={styles.text}>{props.album.artistsHeadline}</Text>
          </View>
        </TouchableWithoutFeedback>
     )
}
export default Album;
