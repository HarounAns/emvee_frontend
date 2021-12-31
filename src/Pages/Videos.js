import React from 'react'

const latestVideoIframeURL = "https://www.youtube.com/embed/?listType=user_uploads&list=3MV33";
const videosURL = "https://www.youtube.com/c/3MV33/videos";

export default function Home() {
    return (
        <div>
            <h4>Latest Video: </h4>
            <iframe
                title="latestVideo"
                src={latestVideoIframeURL}
                width="50%"
                height="600" />
            <p style={{ marginTop: "50px" }}>
                <a href={videosURL} target="_blank" rel="noreferrer">See other videos</a>
            </p>
        </div>
    )
}
