import React from 'react'
import {
    BsYoutube,
    BsDiscord,
    BsTwitter,
} from 'react-icons/bs'

const mediumGray = "rgb(55, 57, 62)";
const LINKS = {
    youtube: 'https://www.youtube.com/c/3MV33',
    discord: 'https://discord.com/channels/915807541856968724/916341477355962368',
    twitter: 'https://twitter.com/3MV33',
}

const LINKEDIN_URL = 'https://www.linkedin.com/in/muhammad-haroun-ansari-b01704102/';

export default function Footer() {
    return (
        <footer style={style.footer} className="text-center text-lg-start">
            <div style={style.iconGroup}>
                <a href={LINKS.youtube} target="_blank" rel="noreferrer">
                    <BsYoutube style={style.icon} />
                </a>
                <a href={LINKS.discord} target="_blank" rel="noreferrer">
                    <BsDiscord style={style.icon} />
                </a>
                <a href={LINKS.twitter} target="_blank" rel="noreferrer">
                    <BsTwitter style={style.icon} />
                </a>
            </div>
            <div style={{ backgroundColor: mediumGray }} className="text-center">
                Copyright © 2021 Team Emvee. All Rights Reserved - Created By <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">Haroun Ansari</a>
            </div>
        </footer>

    )
}

const style = {
    footer: {
        backgroundColor: mediumGray,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '3rem'
    },
    iconGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    icon: {
        margin: "10px",
        fontSize: "1.5rem"
    }
}