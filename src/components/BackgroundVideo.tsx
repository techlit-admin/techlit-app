import React from "react";
import './BackgroundVideo.css'

export default function BackgroundVideo(){
    return(
        <div>
            <video loop autoPlay muted id="bg-video">
                <source src={require('../assets/background-video.mp4')} type="video/mp4" />
            </video>
        </div>
    )
}