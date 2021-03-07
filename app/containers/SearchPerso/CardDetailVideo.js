import React from 'react'

export default function CardDetailVideo(props) {

    return (
        <div>
            <video src={props.jeuInfo.clip.clip} style={{width:'100vh'}} controls>
                
            </video>
        </div>
    )
}
