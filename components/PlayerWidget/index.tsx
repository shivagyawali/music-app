import { AntDesign,FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Song } from '../../types';
import styles from './styles';
import {Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio/Sound';

const song ={
    id:'1',
    uri:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    imageUri:'https://i1.sndcdn.com/artworks-000513586245-p86d1e-t500x500.jpg',
    title:'In the Club',
    artist:'Eminem 50Cent'
}

 const PlayerWidget=()=>{
    const [sound, setsound] = useState<Sound|null>(null);
    const [isPlaying, setisPlaying] = useState<boolean>(true);
    const [duration, setDuration] = useState<number | null>(null);
    const [position, setPosition] = useState<number | null>(null);



     const onPlaybackStatusUpdate=(status)=>{
            setisPlaying(status.isPlaying); 
            setDuration(status.durationMillis) ; 
            setPosition(status.positionMillis) ;       
      
     }
     const playCurrentSong=async()=>{
         if (sound) {
             await sound.unloadAsync();
         }
        const { sound:newSound } = await Audio.Sound.createAsync(
            { uri:song.uri },
            {shouldPlay:isPlaying},
            onPlaybackStatusUpdate
        )

        setsound(newSound)
        
     }
     useEffect(() => {
        //play songs
        playCurrentSong();
        
     }, [])
     const onPlayPausePress=async()=>{
         if (!sound) {
             return;
         }
         if (isPlaying) {
             await sound.stopAsync();
            //  setisPlaying(false);
         }else{
             await sound.playAsync();
            //  setisPlaying(true);

         }
     }
     const getProgress=()=>{
         if (sound === null || duration === null || position ===null) {
             return 0;
         }
         return (position / duration) * 100;
        }
      
        if (!song) {
          return null;
        }

    return(
    


    <View style={styles.container}>
    <View style={[styles.progress, { width: `${getProgress()}%`}]} />
    <View style={styles.row}>
    <Image source={{ uri: song.imageUri }} style={styles.image} />
    <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
        </View>

        <View style={styles.iconsContainer}>
        <AntDesign name="hearto" size={30} color={"white"}/>
        <TouchableOpacity onPress={onPlayPausePress}>
            <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} color={"white"}/>
        </TouchableOpacity>
        </View>
    </View>
    </View>
    </View>
    )
 }

export default PlayerWidget;
