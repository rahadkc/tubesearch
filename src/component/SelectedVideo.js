import React from 'react';
const SelectedVideo = (props) => {
    // const id = props.video.id;
    // console.log(typeof(id));
    // if(typeof(id) !== 'object'){
    //     return <div className="col-8">No selected item to show!</div>
    // }
    // const videoId = id.videoId;
    const { id, snippet } = props.video;
    const videoId = id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-container">
            <iframe title="video_yt" src={url} width="700" height="350" />

            <div className="desc">
                <p><b>{snippet.title}</b></p>
                <p>{snippet.description}</p>
                <div>Channel: {snippet.channelTitle}</div>
                <div>Publish at: {snippet.publishedAt}</div>
            </div>
        </div>
    );
}

export default SelectedVideo;