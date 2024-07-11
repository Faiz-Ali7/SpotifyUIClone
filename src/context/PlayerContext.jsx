/* eslint-disable react/prop-types */
import { createContext, useRef, useState ,useEffect} from "react";
import { songsData } from "../assets/assets";

export const PlayerContext= createContext();
const  PlayerContextProvider =(props)=>{
    const audioRef=useRef();
    const seekBg=useRef();
    const seekBar=useRef();
const [track,setTrack] =useState(songsData[3]);
const [playStatus,setPlayStatus] =useState(false);
const [time,setTime]=useState({
    currentTime:{
        second:0,
        minute:0
    },
    TotalTime:{
        second:0,
        minute:0
    }
})
useEffect(()=>{
    setTimeout(()=>{
        audioRef.current.ontimeupdate=()=>{
            seekBar.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";
            setTime({
                currentTime:{
                    second:Math.floor(audioRef.current.currentTime%60),
                    minute:Math.floor(audioRef.current.currentTime/60)
                },
                TotalTime:{
                    second:Math.floor(audioRef.current.duration%60),
                    minute:Math.floor(audioRef.current.duration/60)
                }})
        }
    },1000)
    },[audioRef])
    
const play=()=>{
    audioRef.current.play();
    setPlayStatus(true);
}
const pause=()=>{
    audioRef.current.pause();
    setPlayStatus(false);
}
const playwithID=async(id)=>{
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
}
const previous=async()=>{
    if(track.id>0)
        {
            await setTrack(songsData[track.id-1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
}
const next=async()=>{
    if(track.id<songsData.length-1)
        {
            await setTrack(songsData[track.id+1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
}
const shuffle=async ()=>{
    let randomIndex=Math.floor(Math.random()*songsData.length);
    await setTrack(songsData[randomIndex]);
    await audioRef.current.play();
    setPlayStatus(true);
}

const seekSong=async (e)=>{
audioRef.current.currentTime=(e.nativeEvent.offsetX/seekBg.current.offsetWidth*audioRef.current.duration)
}
    const contextValue={
        audioRef,seekBar,seekBg,track,setTrack,playStatus,setPlayStatus,time,setTime,play,pause,playwithID,previous,next
,shuffle,seekSong
    }
    return(
<PlayerContext.Provider value={contextValue}>
{props.children}
</PlayerContext.Provider>
    )
};
export default PlayerContextProvider;