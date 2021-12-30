import React from 'react'

const profilePic = 'https://www.smogon.com/forums/media/data/avatars/o/162/162707.jpg?1513825954';

export default function Home() {
    return (
        <div>
            <img src={profilePic} alt="smogonProfilePic"/>
            <div style={{ margin: "20px 30vw", textAlign: 'left' }}>The Pokémon Master himself! Emvee started focusing his time on Pokémon content back in 2010, and since then has created a fun, thriving community around him. Found on team Tempo Storm, he’s a prominent member of the Smogon community, and has been seen at official Pokémon VGC regional events. He’s worked with various companies including Teespring, Champion, and is a #PokemonInfluencer for The Pokémon Company International. Outside of Pokémon, Emvee plays other games with his friends and spends time with his family.</div>
        </div>
    )
}