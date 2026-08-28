from flask import Flask, request, jsonify
from flask_cors import CORS
from deepface import DeepFace

import base64
import os
import tempfile


# ============================================================
# APP CONFIGURATION
# ============================================================

app = Flask(__name__)

CORS(
    app,
    resources={
        r"/api/*": {
            "origins": "*"
        }
    }
)


# ============================================================
# SONG PLAYLISTS
# 7 MOODS × 40 SONGS = 280 SONGS
# Bollywood + Haryanvi
# ============================================================

PLAYLISTS = {

    # ========================================================
    # HAPPY - 40
    # ========================================================

    "happy": [

        ("Badtameez Dil", "Yeh Jawaani Hai Deewani", "🎉"),
        ("Balam Pichkari", "Yeh Jawaani Hai Deewani", "🎨"),
        ("Gallan Goodiyaan", "Dil Dhadakne Do", "🥳"),
        ("Ilahi", "Yeh Jawaani Hai Deewani", "🌎"),
        ("Senorita", "Zindagi Na Milegi Dobara", "💃"),
        ("Sooraj Dooba Hain", "Roy", "☀️"),
        ("Aankh Marey", "Simmba", "😎"),
        ("Kala Chashma", "Baar Baar Dekho", "🕶️"),
        ("Kar Gayi Chull", "Kapoor & Sons", "🔥"),
        ("Abhi Toh Party Shuru Hui Hai", "Khoobsurat", "🎊"),
        ("London Thumakda", "Queen", "💃"),
        ("Nachde Ne Saare", "Baar Baar Dekho", "🕺"),
        ("Cutiepie", "Ae Dil Hai Mushkil", "🥰"),
        ("Ullu Ka Pattha", "Jagga Jasoos", "😂"),
        ("Sweety Tera Drama", "Bareilly Ki Barfi", "🎵"),
        ("Morni Banke", "Badhaai Ho", "🦚"),
        ("Proper Patola", "Namaste England", "✨"),
        ("High Rated Gabru", "Nawabzaade", "🔥"),
        ("Makhna", "Drive", "🚗"),
        ("Ghungroo", "War", "🎶"),

        ("52 Gaj Ka Daman", "Renuka Panwar", "💃"),
        ("Chand", "Amit Saini Rohtakiya", "🌙"),
        ("Gajban", "Vishvajeet Choudhary", "🔥"),
        ("Desi Desi Na Bolya Kar", "Raju Punjabi", "😎"),
        ("Bahadurgarh", "Gulzaar Chhaniwala", "🎤"),
        ("Filter Shot", "Gulzaar Chhaniwala", "🔥"),
        ("Jaatni", "Khasa Aala Chahar", "💃"),
        ("Yadav Brand 2", "Sunny Yaduvanshi", "😎"),
        ("Chora Baba Ka", "Amit Saini Rohtakiya", "🔥"),
        ("Teri Aakhya Ka Yo Kajal", "Sapna Choudhary", "💃"),
        ("Solid Body", "Raju Punjabi", "💪"),
        ("Bahu Milgi", "Renuka Panwar", "🥳"),
        ("Tagdi", "Khasa Aala Chahar", "🔥"),
        ("Desi Desi", "Masoom Sharma", "🎵"),
        ("Jalebi Juda", "Raju Punjabi", "✨"),
        ("Moj", "Gulzaar Chhaniwala", "😎"),
        ("Tokk", "Khasa Aala Chahar", "🔥"),
        ("Jaat", "Sumit Goswami", "💪"),
        ("Paani Chhalke", "Manisha Sharma", "🎉"),
        ("Balam", "Renuka Panwar", "💃")
    ],


    # ========================================================
    # SAD - 40
    # ========================================================

    "sad": [

        ("Agar Tum Saath Ho", "Tamasha", "😢"),
        ("Channa Mereya", "Ae Dil Hai Mushkil", "💔"),
        ("Hamari Adhuri Kahani", "Hamari Adhuri Kahani", "🥀"),
        ("Tujhe Kitna Chahne Lage", "Kabir Singh", "💔"),
        ("Kaise Hua", "Kabir Singh", "😔"),
        ("Bekhayali", "Kabir Singh", "💔"),
        ("Tadap Tadap", "Hum Dil De Chuke Sanam", "🥀"),
        ("Sach Keh Raha Hai Deewana", "Rehnaa Hai Terre Dil Mein", "😢"),
        ("Tune Jo Na Kaha", "New York", "💔"),
        ("Jiyein Kyun", "Dum Maaro Dum", "😔"),
        ("Phir Le Aaya Dil", "Barfi!", "🥀"),
        ("Laal Ishq", "Goliyon Ki Raasleela Ram-Leela", "❤️‍🩹"),
        ("Iktara", "Wake Up Sid", "🌧️"),
        ("Kabira", "Yeh Jawaani Hai Deewani", "🥀"),
        ("Naina", "Dangal", "😢"),
        ("Aayat", "Bajirao Mastani", "❤️"),
        ("Aaj Jaane Ki Zid Na Karo", "Farida Khanum", "🌙"),
        ("Bhula Dena", "Aashiqui 2", "💔"),
        ("Milne Hai Mujhse Aayi", "Aashiqui 2", "😢"),
        ("Tum Hi Ho", "Aashiqui 2", "❤️‍🩹"),

        ("Feelings", "Sumit Goswami", "💔"),
        ("Wish", "Gulzaar Chhaniwala", "🥀"),
        ("Kalesh", "Khasa Aala Chahar", "😔"),
        ("Jaan", "Raju Punjabi", "❤️"),
        ("Dhokha", "Amit Saini Rohtakiya", "💔"),
        ("Bairan", "Amit Saini Rohtakiya", "😢"),
        ("Ignore", "Gulzaar Chhaniwala", "🥀"),
        ("Karda Karda", "Khasa Aala Chahar", "😔"),
        ("Dildariyan", "Khasa Aala Chahar", "❤️"),
        ("Temporary Pyar", "Kaka", "💔"),
        ("Naina Ke Teer", "Masoom Sharma", "🥀"),
        ("Judaai", "Haryanvi", "😢"),
        ("Yaara", "Haryanvi", "❤️‍🩹"),
        ("Tera Yaar", "Haryanvi", "😔"),
        ("Bawli", "Haryanvi", "🥀"),
        ("Aashiq", "Haryanvi", "💔"),
        ("Mera Yaar", "Haryanvi", "😢"),
        ("Dil Ka Raja", "Haryanvi", "❤️"),
        ("Tera Kardi Aa", "Haryanvi", "🥀"),
        ("Dooriyan", "Haryanvi", "💔")
    ],


    # ========================================================
    # ANGRY - 40
    # ========================================================

    "angry": [

        ("Apna Time Aayega", "Gully Boy", "🔥"),
        ("Zinda", "Bhaag Milkha Bhaag", "💪"),
        ("Sultan", "Sultan", "🥊"),
        ("Brothers Anthem", "Brothers", "🔥"),
        ("Kar Har Maidaan Fateh", "Sanju", "🏆"),
        ("Dangal Title Track", "Dangal", "💪"),
        ("Challa", "Uri", "🔥"),
        ("Chak De India", "Chak De India", "🏆"),
        ("Malhari", "Bajirao Mastani", "⚔️"),
        ("Jee Karda", "Singh Is Kinng", "🔥"),
        ("Sadda Haq", "Rockstar", "🤘"),
        ("Jee Ve", "Luck", "⚡"),
        ("Aarambh Hai Prachand", "Piyush Mishra", "⚔️"),
        ("Lakshya", "Lakshya", "🎯"),
        ("Besabriyaan", "M.S. Dhoni", "🔥"),
        ("Dhoom Again", "Dhoom 2", "🏍️"),
        ("Dhoom Machale", "Dhoom", "🔥"),
        ("Bang Bang", "Bang Bang", "💥"),
        ("Jabra Fan", "Fan", "🔥"),
        ("Sher Khul Gaye", "Fighter", "⚡"),

        ("Desi Desi", "Raju Punjabi", "🔥"),
        ("Jaat", "Sumit Goswami", "💪"),
        ("Gunda Touch", "Khasa Aala Chahar", "😎"),
        ("Afeem", "Khasa Aala Chahar", "🔥"),
        ("Thada Bhartar", "Raju Punjabi", "💪"),
        ("Bawli Tared", "Amit Saini Rohtakiya", "🔥"),
        ("Jaatni", "Khasa Aala Chahar", "😎"),
        ("Badmashi", "Gulzaar Chhaniwala", "🔥"),
        ("Dada Ravan", "Gulzaar Chhaniwala", "⚡"),
        ("Kalesh", "Khasa Aala Chahar", "💥"),
        ("Dada", "Amit Saini Rohtakiya", "🔥"),
        ("Jaat Brand", "Haryanvi", "💪"),
        ("Desi Hood", "Haryanvi", "🔥"),
        ("Attitude", "Haryanvi", "😎"),
        ("Dabangg", "Haryanvi", "💥"),
        ("Dabya Ni Karde", "Haryanvi", "🔥"),
        ("Kartoos", "Haryanvi", "⚡"),
        ("Badmashi Bole", "Haryanvi", "💪"),
        ("System", "Haryanvi", "🔥"),
        ("Raula", "Haryanvi", "💥")
    ],


    # ========================================================
    # NEUTRAL - 40
    # ========================================================

    "neutral": [

        ("Iktara", "Wake Up Sid", "🌿"),
        ("Ilahi", "Yeh Jawaani Hai Deewani", "🌎"),
        ("Khaabon Ke Parinday", "Zindagi Na Milegi Dobara", "☁️"),
        ("Safarnama", "Tamasha", "🚶"),
        ("Phir Se Ud Chala", "Rockstar", "🕊️"),
        ("Aao Milo Chalo", "Jab We Met", "🚂"),
        ("Love You Zindagi", "Dear Zindagi", "🌸"),
        ("Shaam", "Aisha", "🌆"),
        ("Kyun", "Barfi!", "🌿"),
        ("Tu Bin Bataye", "Rang De Basanti", "🌤️"),
        ("Patakha Guddi", "Highway", "✨"),
        ("Journey Song", "Piku", "🚗"),
        ("Yun Hi Chala Chal", "Swades", "🌎"),
        ("Manja", "Kai Po Che!", "🎸"),
        ("Aashiyan", "Barfi!", "🏡"),
        ("Kho Gaye Hum Kahan", "Baar Baar Dekho", "🌙"),
        ("Kasoor", "Prateek Kuhad", "🎧"),
        ("Alag Aasmaan", "Anuv Jain", "☁️"),
        ("Gul", "Anuv Jain", "🌸"),
        ("Riha", "Anuv Jain", "🌿"),

        ("Chand", "Haryanvi", "🌙"),
        ("Feelings", "Sumit Goswami", "🎧"),
        ("Moj", "Gulzaar Chhaniwala", "😎"),
        ("Koka", "Haryanvi", "✨"),
        ("Bahu Milgi", "Renuka Panwar", "💃"),
        ("Gajban", "Vishvajeet Choudhary", "🎵"),
        ("Jutti", "Haryanvi", "👟"),
        ("Balam", "Renuka Panwar", "🌸"),
        ("Jaatni", "Khasa Aala Chahar", "🎧"),
        ("Paani Chhalke", "Manisha Sharma", "💧"),
        ("Mor", "Gulzaar Chhaniwala", "🌿"),
        ("Tokk", "Khasa Aala Chahar", "🎵"),
        ("Jat Sirf Naam", "Haryanvi", "😎"),
        ("Desi Look", "Haryanvi", "✨"),
        ("Yaari", "Haryanvi", "🤝"),
        ("Gaam Ki Chhori", "Haryanvi", "🌾"),
        ("Suit", "Haryanvi", "👗"),
        ("Chora", "Haryanvi", "🎧"),
        ("Meri Jaan", "Haryanvi", "❤️"),
        ("Desi Chhora", "Haryanvi", "😎")
    ],


    # ========================================================
    # SURPRISE - 40
    # ========================================================

    "surprise": [

        ("What Jhumka?", "Rocky Aur Rani Kii Prem Kahaani", "💃"),
        ("Jhoome Jo Pathaan", "Pathaan", "🔥"),
        ("Naatu Naatu", "RRR", "🕺"),
        ("The Breakup Song", "Ae Dil Hai Mushkil", "🎉"),
        ("Aankh Marey", "Simmba", "😎"),
        ("Tamma Tamma Again", "Badrinath Ki Dulhania", "💥"),
        ("Abhi Toh Party Shuru Hui Hai", "Khoobsurat", "🥳"),
        ("Nashe Si Chadh Gayi", "Befikre", "🎊"),
        ("High Heels", "Ki & Ka", "👠"),
        ("Let's Nacho", "Kapoor & Sons", "💃"),
        ("The Humma Song", "OK Jaanu", "🔥"),
        ("Ude Dil Befikre", "Befikre", "🕺"),
        ("Saturday Saturday", "Humpty Sharma Ki Dulhania", "🎉"),
        ("Kala Chashma", "Baar Baar Dekho", "🕶️"),
        ("Galti Se Mistake", "Jagga Jasoos", "😂"),
        ("Sweety Tera Drama", "Bareilly Ki Barfi", "🎵"),
        ("Ainvayi Ainvayi", "Band Baaja Baaraat", "🥳"),
        ("Nagada Sang Dhol", "Goliyon Ki Raasleela Ram-Leela", "🥁"),
        ("Dholi Taro Dhol Baaje", "Hum Dil De Chuke Sanam", "💃"),
        ("Garmi", "Street Dancer 3D", "🔥"),

        ("52 Gaj Ka Daman", "Renuka Panwar", "💃"),
        ("Gajban", "Vishvajeet Choudhary", "🎉"),
        ("Desi Desi Na Bolya Kar", "Raju Punjabi", "😎"),
        ("Teri Aakhya Ka Yo Kajal", "Sapna Choudhary", "🔥"),
        ("Solid Body", "Raju Punjabi", "💪"),
        ("Bahadurgarh", "Gulzaar Chhaniwala", "🎤"),
        ("Moj", "Gulzaar Chhaniwala", "🥳"),
        ("Tokk", "Khasa Aala Chahar", "🔥"),
        ("Bahu Milgi", "Renuka Panwar", "💃"),
        ("Paani Chhalke", "Manisha Sharma", "🎊"),
        ("Chand", "Amit Saini Rohtakiya", "🌙"),
        ("Koka", "Haryanvi", "✨"),
        ("Jaatni", "Khasa Aala Chahar", "🔥"),
        ("Balam", "Renuka Panwar", "💃"),
        ("Desi Look", "Haryanvi", "😎"),
        ("Gaam Ki Chhori", "Haryanvi", "🎉"),
        ("Suit", "Haryanvi", "💃"),
        ("Jaat", "Sumit Goswami", "🔥"),
        ("Raula", "Haryanvi", "🥳"),
        ("Masti", "Haryanvi", "🎊")
    ],


    # ========================================================
    # ANXIOUS / FEAR - 40
    # ========================================================

    "fear": [

        ("Iktara", "Wake Up Sid", "🌿"),
        ("Aabaad Barbaad", "Ludo", "🌙"),
        ("Phir Le Aaya Dil", "Barfi!", "💙"),
        ("Aaj Jaane Ki Zid Na Karo", "Farida Khanum", "🌙"),
        ("Tu Kisi Rail Si", "Masaan", "🌿"),
        ("Manmarziyan", "Lootera", "🍃"),
        ("Kahin To Hogi Woh", "Jaane Tu Ya Jaane Na", "🌸"),
        ("Saibo", "Shor in the City", "💜"),
        ("Pee Loon", "Once Upon a Time in Mumbaai", "🌙"),
        ("Tu Hi Hai", "Dear Zindagi", "🌸"),
        ("Hawayein", "Jab Harry Met Sejal", "🍃"),
        ("Kaise Mujhe", "Ghajini", "💙"),
        ("Tum Se Hi", "Jab We Met", "🌿"),
        ("Ajab Si", "Om Shanti Om", "✨"),
        ("Aahista", "Laila Majnu", "🌙"),
        ("Ranjha", "Shershaah", "💜"),
        ("Apna Bana Le", "Bhediya", "❤️"),
        ("O Maahi", "Dunki", "🌸"),
        ("Ve Kamleya", "Rocky Aur Rani Kii Prem Kahaani", "💙"),
        ("Sajni", "Laapataa Ladies", "🌿"),

        ("Feelings", "Sumit Goswami", "💙"),
        ("Wish", "Gulzaar Chhaniwala", "🌿"),
        ("Chand", "Haryanvi", "🌙"),
        ("Yaari", "Haryanvi", "💜"),
        ("Meri Jaan", "Haryanvi", "❤️"),
        ("Balam", "Renuka Panwar", "🌸"),
        ("Dildariyan", "Khasa Aala Chahar", "💙"),
        ("Jaan", "Raju Punjabi", "❤️"),
        ("Dooriyan", "Haryanvi", "🌙"),
        ("Tera Yaar", "Haryanvi", "🤝"),
        ("Yaara", "Haryanvi", "💜"),
        ("Dil Ka Raja", "Haryanvi", "🌿"),
        ("Mera Yaar", "Haryanvi", "❤️"),
        ("Aashiq", "Haryanvi", "🌙"),
        ("Judaai", "Haryanvi", "💙"),
        ("Sukoon", "Haryanvi", "🌿"),
        ("Shaam", "Haryanvi", "🌆"),
        ("Khamoshi", "Haryanvi", "🌙"),
        ("Raat", "Haryanvi", "✨"),
        ("Saath", "Haryanvi", "💜")
    ],


    # ========================================================
    # DISGUST / UNCOMFORTABLE - 40
    # ========================================================

    "disgust": [

        ("Love You Zindagi", "Dear Zindagi", "🌸"),
        ("Kar Har Maidaan Fateh", "Sanju", "🏆"),
        ("Zinda", "Bhaag Milkha Bhaag", "🔥"),
        ("Ilahi", "Yeh Jawaani Hai Deewani", "🌎"),
        ("Aashiyan", "Barfi!", "🏡"),
        ("Safarnama", "Tamasha", "🚶"),
        ("Khaabon Ke Parinday", "Zindagi Na Milegi Dobara", "☁️"),
        ("Patakha Guddi", "Highway", "✨"),
        ("Lakshya", "Lakshya", "🎯"),
        ("Aarambh Hai Prachand", "Piyush Mishra", "⚔️"),
        ("Besabriyaan", "M.S. Dhoni", "🔥"),
        ("Apna Time Aayega", "Gully Boy", "💪"),
        ("Chak De India", "Chak De India", "🏆"),
        ("Dangal", "Dangal", "🥊"),
        ("Sultan", "Sultan", "🔥"),
        ("Brothers Anthem", "Brothers", "💥"),
        ("Jee Karda", "Singh Is Kinng", "🎵"),
        ("Lakshya Title Track", "Lakshya", "🎯"),
        ("Ruk Ja O Dil Deewane", "Dilwale Dulhania Le Jayenge", "😎"),
        ("Ainvayi Ainvayi", "Band Baaja Baaraat", "🎉"),

        ("Moj", "Gulzaar Chhaniwala", "😎"),
        ("52 Gaj Ka Daman", "Renuka Panwar", "💃"),
        ("Gajban", "Vishvajeet Choudhary", "🔥"),
        ("Desi Desi Na Bolya Kar", "Raju Punjabi", "🎵"),
        ("Bahadurgarh", "Gulzaar Chhaniwala", "💪"),
        ("Jaat", "Sumit Goswami", "🔥"),
        ("Tokk", "Khasa Aala Chahar", "😎"),
        ("Bahu Milgi", "Renuka Panwar", "🎉"),
        ("Solid Body", "Raju Punjabi", "💪"),
        ("Teri Aakhya Ka Yo Kajal", "Sapna Choudhary", "💃"),
        ("Jaatni", "Khasa Aala Chahar", "🔥"),
        ("Paani Chhalke", "Manisha Sharma", "💧"),
        ("Chand", "Haryanvi", "🌙"),
        ("Desi Look", "Haryanvi", "😎"),
        ("Gaam Ki Chhori", "Haryanvi", "🌾"),
        ("Suit", "Haryanvi", "✨"),
        ("Yaari", "Haryanvi", "🤝"),
        ("Masti", "Haryanvi", "🎉"),
        ("Desi Chhora", "Haryanvi", "🔥"),
        ("Raula", "Haryanvi", "💥")
    ]
}


# ============================================================
# MOOD INFORMATION
# ============================================================

MOOD_INFO = {

    "happy": {
        "name": "Happy",
        "emoji": "😊",
        "description": "You seem happy and positive!"
    },

    "sad": {
        "name": "Sad",
        "emoji": "😔",
        "description": "You seem a little low. Here are some emotional tracks."
    },

    "angry": {
        "name": "Angry",
        "emoji": "😠",
        "description": "You seem irritated or frustrated. Here's some high-energy music."
    },

    "fear": {
        "name": "Anxious",
        "emoji": "😟",
        "description": "You seem a little anxious. Relax with these calming songs."
    },

    "surprise": {
        "name": "Surprised",
        "emoji": "😲",
        "description": "You seem surprised and energetic!"
    },

    "disgust": {
        "name": "Uncomfortable",
        "emoji": "😕",
        "description": "You seem slightly uncomfortable. Let's lift your mood."
    },

    "neutral": {
        "name": "Neutral",
        "emoji": "😐",
        "description": "You seem calm and neutral."
    }
}


# ============================================================
# CONVERT PLAYLIST TO FRONTEND FORMAT
# ============================================================

def get_playlist(emotion):

    songs = PLAYLISTS.get(
        emotion,
        PLAYLISTS["neutral"]
    )

    return [
        {
            "title": title,
            "artist": artist,
            "emoji": emoji
        }
        for title, artist, emoji in songs
    ]


# ============================================================
# HOME
# ============================================================

@app.route("/", methods=["GET"])
def home():

    return jsonify({
        "success": True,
        "message": "MoodTune AI Backend is running",
        "mood_detection": "enabled",
        "total_songs": 280
    })


# ============================================================
# HEALTH CHECK
# ============================================================

@app.route("/api/health", methods=["GET"])
def health():

    return jsonify({
        "success": True,
        "message": "Backend is healthy",
        "deepface": "enabled",
        "playlists": 7,
        "songs": 280
    })


# ============================================================
# PLAYLIST API
# ============================================================

@app.route("/api/playlist/<emotion>", methods=["GET"])
def playlist(emotion):

    emotion = emotion.lower()

    if emotion not in PLAYLISTS:

        return jsonify({
            "success": False,
            "error": "Unknown mood",
            "available_moods": list(PLAYLISTS.keys())
        }), 404

    return jsonify({
        "success": True,
        "mood": MOOD_INFO[emotion]["name"],
        "emotion": emotion,
        "songs": get_playlist(emotion),
        "count": len(PLAYLISTS[emotion])
    })


# ============================================================
# MOOD DETECTION
# ============================================================

@app.route("/api/detect-mood", methods=["POST"])
def detect_mood():

    temp_file = None

    try:

        print("")
        print("========================================")
        print("📥 MOOD DETECTION REQUEST RECEIVED")
        print("========================================")


        # ====================================================
        # CASE 1: MULTIPART FORM DATA
        # Frontend currently sends this
        # ====================================================

        if "image" in request.files:

            uploaded_file = request.files["image"]

            if uploaded_file.filename == "":

                return jsonify({
                    "success": False,
                    "error": "Empty image file"
                }), 400

            print(
                "📸 Image received:",
                uploaded_file.filename
            )

            with tempfile.NamedTemporaryFile(
                suffix=".jpg",
                delete=False
            ) as temp:

                uploaded_file.save(temp.name)

                temp_file = temp.name


        # ====================================================
        # CASE 2: JSON BASE64
        # Also support old frontend
        # ====================================================

        elif request.is_json:

            print("📦 JSON request received")

            data = request.get_json()

            image_data = data.get("image")

            if not image_data:

                return jsonify({
                    "success": False,
                    "error": "No image received"
                }), 400


            # Remove base64 header

            if "," in image_data:

                image_data = image_data.split(
                    ",",
                    1
                )[1]


            try:

                image_bytes = base64.b64decode(
                    image_data
                )

            except Exception:

                return jsonify({
                    "success": False,
                    "error": "Invalid base64 image"
                }), 400


            with tempfile.NamedTemporaryFile(
                suffix=".jpg",
                delete=False
            ) as temp:

                temp.write(image_bytes)

                temp_file = temp.name


        # ====================================================
        # INVALID REQUEST
        # ====================================================

        else:

            return jsonify({
                "success": False,
                "error": "No image received. Send multipart image."
            }), 400


        print(
            "🖼️ Image saved:",
            temp_file
        )


        # ====================================================
        # CHECK FILE
        # ====================================================

        if not os.path.exists(temp_file):

            raise Exception(
                "Temporary image file was not created"
            )


        file_size = os.path.getsize(
            temp_file
        )

        print(
            "📦 Image size:",
            file_size,
            "bytes"
        )


        if file_size == 0:

            raise Exception(
                "Uploaded image is empty"
            )


        # ====================================================
        # DEEPFACE
        #
        # IMPORTANT:
        # detector_backend="skip"
        #
        # This avoids the OpenCV Haarcascade error:
        # cv2/data/haarcascade_frontalface_default.xml
        #
        # Camera already provides a face-focused image.
        # ====================================================

        print("")
        print("========================================")
        print("🤖 STARTING DEEPFACE")
        print("========================================")


        result = DeepFace.analyze(

            img_path=temp_file,

            actions=["emotion"],

            enforce_detection=False,

            detector_backend="skip"

        )


        print("")
        print("🤖 DeepFace result:")
        print(result)


        # ====================================================
        # HANDLE LIST / DICT
        # ====================================================

        if isinstance(result, list):

            if len(result) == 0:

                raise Exception(
                    "DeepFace returned empty result"
                )

            result = result[0]


        # ====================================================
        # GET EMOTIONS
        # ====================================================

        emotions = result.get(
            "emotion",
            {}
        )


        dominant_emotion = result.get(
            "dominant_emotion",
            "neutral"
        )


        dominant_emotion = dominant_emotion.lower()


        # ====================================================
        # SAFETY
        # ====================================================

        if dominant_emotion not in PLAYLISTS:

            dominant_emotion = "neutral"


        # ====================================================
        # CONFIDENCE
        # ====================================================

        confidence = emotions.get(
            dominant_emotion,
            0
        )


        try:

            confidence = float(
                confidence
            )

        except Exception:

            confidence = 0.0


        confidence = round(
            confidence,
            2
        )


        # ====================================================
        # MOOD INFO
        # ====================================================

        mood_info = MOOD_INFO[
            dominant_emotion
        ]


        # ====================================================
        # PLAYLIST
        # ====================================================

        recommended_songs = get_playlist(
            dominant_emotion
        )


        # ====================================================
        # RESPONSE
        # ====================================================

        response = {

            "success": True,

            "mood": mood_info["name"],

            "emotion": dominant_emotion,

            "emoji": mood_info["emoji"],

            "description": mood_info["description"],

            "confidence": confidence,

            "emotions": {
                key: round(
                    float(value),
                    2
                )
                for key, value in emotions.items()
            },

            "songs": recommended_songs,

            "playlist_count": len(
                recommended_songs
            )
        }


        # ====================================================
        # LOG
        # ====================================================

        print("")
        print("========================================")
        print("✅ MOOD DETECTION SUCCESSFUL")
        print("========================================")

        print(
            "🎭 Emotion:",
            dominant_emotion
        )

        print(
            "😊 Mood:",
            mood_info["name"]
        )

        print(
            "📊 Confidence:",
            confidence
        )

        print(
            "🎵 Songs:",
            len(recommended_songs)
        )

        print("========================================")
        print("")


        return jsonify(
            response
        ), 200


    # ========================================================
    # ERROR
    # ========================================================

    except Exception as e:

        print("")
        print("========================================")
        print("❌ MOOD DETECTION ERROR")
        print("========================================")

        print(
            type(e).__name__,
            ":",
            str(e)
        )

        print("========================================")
        print("")


        return jsonify({

            "success": False,

            "error": str(e),

            "message": "Mood detection failed",

            "hint":
                "Make sure camera image is clear and face is visible."

        }), 500


    # ========================================================
    # CLEANUP
    # ========================================================

    finally:

        if (
            temp_file
            and
            os.path.exists(temp_file)
        ):

            try:

                os.remove(
                    temp_file
                )

                print(
                    "🗑️ Temporary image deleted"
                )

            except Exception as cleanup_error:

                print(
                    "⚠️ Could not delete temp file:",
                    cleanup_error
                )


# ============================================================
# RUN SERVER
# ============================================================

if __name__ == "__main__":

    print("")
    print("🎵 =================================")
    print("🎵       MOODTUNE AI BACKEND")
    print("🎵 =================================")
    print("🌐 http://localhost:5000")
    print("🤖 DeepFace Mood Detection Enabled")
    print("📸 POST /api/detect-mood")
    print("❤️  7 Mood Playlists")
    print("🎵 280 Songs")
    print("🇮🇳 Bollywood + Haryanvi")
    print("====================================")
    print("")


    app.run(

        host="0.0.0.0",

        port=5000,

        debug=True

    )