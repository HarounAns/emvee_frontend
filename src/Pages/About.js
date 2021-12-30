import React from 'react'

const profilePic = 'https://www.smogon.com/forums/media/data/avatars/o/162/162707.jpg?1513825954';

export default function Home() {
    return (
        <div>
            <img src={profilePic} alt="smogonProfilePic" />
            <div style={{ margin: "20px 30vw", textAlign: 'left' }}>
                As one of the greatest Pokémon team builders to touch the game, Emvee has proven that he can build a successful team around virtually any Pokémon. He started producing content towards the end of 2013 and since then has created a fun, thriving community founded on the belief that anyone can win with their favorite Pokémon. He has peaked the online ladder numerous times in his career and has a knack for thinking outside the box, making him a formidable opponent in creative formats such as Draft Leagues. Outside of Pokémon, Emvee enjoys going to nice restaurants, visiting wineries, hitting the gym, partying on the weekend, and hanging out with his friends and family.
            </div>
        </div>
    )
}