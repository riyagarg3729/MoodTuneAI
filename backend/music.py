MUSIC = {
    "HAPPY": [
        "Happy Vibes",
        "Feel Good Hits",
        "Party Mix"
    ],

    "SAD": [
        "Calm & Healing",
        "Peaceful Melodies",
        "Soft Acoustic"
    ],

    "ANGRY": [
        "Relax & Chill",
        "Stress Relief",
        "Lo-Fi Calm"
    ],

    "FEARFUL": [
        "Peaceful Music",
        "Relaxation Sounds",
        "Calm Piano"
    ],

    "SURPRISED": [
        "Feel Good Hits",
        "Energetic Mix",
        "Upbeat Music"
    ],

    "DISGUST": [
        "Chill Vibes",
        "Lo-Fi Beats",
        "Relaxing Music"
    ],

    "NEUTRAL": [
        "Focus Music",
        "Lo-Fi Beats",
        "Study Playlist"
    ]
}


def recommend_music(emotion):

    emotion = emotion.upper()

    return MUSIC.get(
        emotion,
        MUSIC["NEUTRAL"]
    )


if __name__ == "__main__":

    print("🎵 MoodTune AI Music Engine")

    for emotion in MUSIC:

        print(
            emotion,
            "→",
            recommend_music(emotion)
        )