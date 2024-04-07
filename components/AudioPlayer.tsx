import React, { useState } from "react";

const AudioPlayer = ({ songs }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const handleSongEnd = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "5px",
        }}
      >
        {songs.map((song, index) => (
          <img
            src={song.imageURL} // Assuming each song has an imageURL property
            alt={song.text}
            key={index}
            onClick={() => setCurrentSongIndex(index)}
            className={
              index === currentSongIndex
                ? "w-64"
                : "filter grayscale opacity-50 w-64"
            }
            style={{ width: "250px" }}
          />
        ))}
      </div>
      <audio controls onEnded={handleSongEnd} autoPlay key={currentSongIndex}>
        <source src={songs[currentSongIndex].songURL} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default AudioPlayer;
