<h1 align="center">🎭 MoodTune AI 🎧</h1>



<p align="center">

&#x20; <strong>AI-Powered Mood-Based Music Recommendation System</strong>

</p>



<p align="center">

&#x20; <i>Detect your mood. Discover your music. Enjoy the moment.</i>

</p>



<p align="center">

















</p>



<p align="center">













</p>



📌 Table of Contents



About The Project



Problem Statement



Core Concept



Key Features



Supported Moods



AI \& Computer Vision



How It Works



System Architecture



Project Structure



Music Recommendation Engine



Music Library



Screenshots



Demo



Technology Stack



API Documentation



Installation



Running The Application



Configuration



Deployment



Privacy



Security



Troubleshooting



Future Enhancements



Project Highlights



Resume-Friendly Highlights



Learning Outcomes



Challenges Solved



Contributing



Support



Author



License



🌟 About The Project



MoodTune AI is an AI-powered full-stack web application that combines Artificial Intelligence, Facial Emotion Recognition, Computer Vision, React, Python, Flask, and a mood-based music recommendation engine.



The core idea is simple:



🎭 Your Mood → 🧠 AI Detection → 🎵 Personalized Music



Instead of manually searching for music or selecting a playlist, users can allow MoodTune AI to access their camera and analyze their facial expression. The application processes the captured image through an AI-powered computer-vision pipeline, determines an emotional category, and then recommends songs associated with that mood.



The project focuses on Indian music, particularly Bollywood and Haryanvi songs, making the recommendation experience more relevant to the target audience.



MoodTune AI demonstrates how AI can be combined with a modern web interface to create an interactive and personalized user experience.



🎯 Problem Statement



Music discovery is traditionally based on manual search, genre selection, playlists, or listening history.



A user who wants music matching their current emotional state may still need to:



Search for songs manually



Select a playlist



Choose a genre



Decide what type of music fits their mood



Browse through multiple recommendations



This creates unnecessary interaction when the user's primary goal is simply to find suitable music.



💡 Proposed Solution



MoodTune AI introduces an emotion-aware interaction model:



Facial Expression

&#x20;      ↓

AI Emotion Detection

&#x20;      ↓

Mood Classification

&#x20;      ↓

Mood-to-Music Mapping

&#x20;      ↓

Personalized Recommendations



The application attempts to make music discovery more interactive by using facial-expression information as an input for recommendations.



💡 Core Concept



MoodTune AI follows an Emotion → Recommendation workflow.



The user does not have to manually select a mood.



Instead:



📷 Camera

&#x20;   ↓

👤 Face Capture

&#x20;   ↓

🧠 AI Analysis

&#x20;   ↓

🎭 Emotion Detection

&#x20;   ↓

📊 Confidence Score

&#x20;   ↓

🎵 Mood-Based Playlist

&#x20;   ↓

🎧 Recommended Songs

&#x20;   ↓

▶️ Search / Play



This creates a simple user journey:



Show your expression → let AI understand the mood → discover music.



✨ Key Features



🎭 1. AI-Based Mood Detection



MoodTune AI uses facial-expression recognition to identify the user's emotional category.



The detected mood is presented directly in the application interface.



📷 2. Camera-Based Interaction



The application provides a browser-based camera interface.



Users can:



Start the camera



Allow camera permission



Position their face



Capture an image



Analyze their expression



Detect their mood



Stop the camera



Camera access is controlled through the browser's permission system.



🧠 3. Facial Emotion Recognition



The backend processes the captured facial image using computer-vision and model assets.



The overall pipeline is:



Input Image

&#x20;    ↓

Face Detection

&#x20;    ↓

Face Processing

&#x20;    ↓

Expression Recognition

&#x20;    ↓

Emotion Classification



📊 4. Confidence Score



The detected mood can be accompanied by a confidence score.



Example:



CURRENT MOOD



😊 HAPPY



Emotion detected by AI



92.40%

Confidence



This gives the user additional context about the AI prediction.



🎵 5. Automatic Playlist Selection



After detecting the mood, MoodTune AI selects the corresponding music category.



Example:



😊 HAPPY

&#x20;  ↓

Energetic / Feel-Good Songs



😢 SAD

&#x20;  ↓

Emotional / Comforting Songs



😠 ANGRY

&#x20;  ↓

Powerful / High-Energy Songs



😐 NEUTRAL

&#x20;  ↓

Chill / Balanced Songs



🇮🇳 6. Bollywood + Haryanvi Music



MoodTune AI is designed around Indian music.



The project includes:



🎬 Bollywood



Hindi songs across different emotional categories.



🪕 Haryanvi



Haryanvi songs for users who prefer regional Indian music.



🎧 7. 280+ Songs



The project contains a music library of 280+ songs, organized around the supported moods.



This provides a larger variety of recommendations instead of relying on only a few hard-coded songs.



▶️ 8. One-Click Music Search



Recommended songs can be opened through an external music search action.



This provides a simple path from:



Mood

&#x20;↓

Recommendation

&#x20;↓

Song

&#x20;↓

Listen



🎭 Supported Moods



MoodTune AI currently supports seven emotional categories:



Mood



Emoji



Recommendation Style



Happy



😊



Energetic \& Feel-Good



Sad



😢



Emotional \& Comforting



Angry



😠



Powerful \& High-Energy



Neutral



😐



Chill \& Balanced



Surprised



😲



Fun \& Exciting



Anxious



😟



Calm \& Relaxing



Uncomfortable



😕



Soothing \& Positive



🧠 AI \& Computer Vision



The backend contains ONNX model assets inside:



backend/models/



Current model files include:



face\_detection\_yunet\_2023mar.onnx

face\_recognition\_sface\_2021dec.onnx

facial\_expression\_recognition\_mobilefacenet\_2022july.onnx



These model assets are part of the facial analysis pipeline.



AI Processing Flow



&#x20;               IMAGE

&#x20;                 │

&#x20;                 ▼

&#x20;       ┌──────────────────┐

&#x20;       │  Face Detection  │

&#x20;       └────────┬─────────┘

&#x20;                │

&#x20;                ▼

&#x20;       ┌──────────────────┐

&#x20;       │ Face Processing  │

&#x20;       └────────┬─────────┘

&#x20;                │

&#x20;                ▼

&#x20;       ┌──────────────────┐

&#x20;       │    Expression    │

&#x20;       │    Recognition   │

&#x20;       └────────┬─────────┘

&#x20;                │

&#x20;                ▼

&#x20;       ┌──────────────────┐

&#x20;       │ Emotion / Mood   │

&#x20;       │ Classification   │

&#x20;       └────────┬─────────┘

&#x20;                │

&#x20;                ▼

&#x20;         Confidence Score

&#x20;                │

&#x20;                ▼

&#x20;      Music Recommendation



🔄 How MoodTune AI Works



Step 1 — Open the Application



The user opens MoodTune AI in a supported browser.



Step 2 — Start Camera



The user starts the camera feature and grants permission when requested.



Step 3 — Capture Facial Expression



The application captures an image containing the user's face.



Step 4 — Send Image to Backend



The frontend sends the captured image to the Flask REST API.



React Frontend

&#x20;     │

&#x20;     │ HTTP POST

&#x20;     ▼

Flask Backend



Step 5 — Process Image



The backend processes the image through the computer-vision and emotion-recognition pipeline.



Step 6 — Detect Mood



The system returns the detected emotional category and confidence information.



Example:



Mood: Happy

Confidence: 94.72%



Step 7 — Map Mood to Music



The application maps the detected mood to the corresponding music collection.



Happy

&#x20; ↓

Happy Playlist

&#x20; ↓

Bollywood + Haryanvi Songs



Step 8 — Display Recommendations



The frontend updates the recommendation section with songs associated with the detected mood.



Step 9 — Listen



The user can select a recommendation and search for the song through the available external music platform.



🏗️ System Architecture



&#x20;                        ┌─────────────────┐

&#x20;                        │      USER       │

&#x20;                        └────────┬────────┘

&#x20;                                 │

&#x20;                                 ▼

&#x20;                        ┌─────────────────┐

&#x20;                        │ Browser Camera  │

&#x20;                        └────────┬────────┘

&#x20;                                 │

&#x20;                                 ▼

&#x20;             ┌─────────────────────────────────┐

&#x20;             │          REACT FRONTEND         │

&#x20;             │                                 │

&#x20;             │  Camera Interface              │

&#x20;             │  Mood Display                  │

&#x20;             │  Confidence Display            │

&#x20;             │  Music Recommendations         │

&#x20;             └────────────────┬────────────────┘

&#x20;                              │

&#x20;                              │ HTTP Request

&#x20;                              ▼

&#x20;             ┌─────────────────────────────────┐

&#x20;             │          FLASK BACKEND          │

&#x20;             │                                 │

&#x20;             │  REST API                      │

&#x20;             │  Image Handling                │

&#x20;             │  AI Processing                 │

&#x20;             └────────────────┬────────────────┘

&#x20;                              │

&#x20;                              ▼

&#x20;             ┌─────────────────────────────────┐

&#x20;             │      COMPUTER VISION / AI      │

&#x20;             │                                 │

&#x20;             │  Face Detection                │

&#x20;             │  Facial Processing             │

&#x20;             │  Expression Recognition        │

&#x20;             └────────────────┬────────────────┘

&#x20;                              │

&#x20;                              ▼

&#x20;             ┌─────────────────────────────────┐

&#x20;             │       MOOD CLASSIFICATION       │

&#x20;             └────────────────┬────────────────┘

&#x20;                              │

&#x20;                              ▼

&#x20;             ┌─────────────────────────────────┐

&#x20;             │    MUSIC RECOMMENDATION ENGINE │

&#x20;             │                                 │

&#x20;             │ Mood → Playlist → Songs        │

&#x20;             └────────────────┬────────────────┘

&#x20;                              │

&#x20;                              ▼

&#x20;                    🎧 RECOMMENDATIONS



📂 Project Structure



MoodTuneAI/

│

├── backend/

│   │

│   ├── app.py

│   ├── camera.py

│   ├── emotion.py

│   ├── music.py

│   │

│   └── models/

│       ├── face\_detection\_yunet\_2023mar.onnx

│       ├── face\_recognition\_sface\_2021dec.onnx

│       └── facial\_expression\_recognition\_mobilefacenet\_2022july.onnx

│

├── frontend/

│   │

│   ├── public/

│   │   ├── favicon.svg

│   │   └── icons.svg

│   │

│   ├── src/

│   │   ├── assets/

│   │   │   ├── hero.png

│   │   │   ├── react.svg

│   │   │   └── vite.svg

│   │   │

│   │   ├── App.jsx

│   │   ├── App.css

│   │   ├── index.css

│   │   └── main.jsx

│   │

│   ├── index.html

│   ├── package.json

│   ├── package-lock.json

│   └── vite.config.js

│

├── .gitignore

└── README.md



🎵 Music Recommendation Engine



The recommendation engine connects the detected emotional state with the project's music library.



The basic logic is:



Detected Emotion

&#x20;      ↓

Mood Category

&#x20;      ↓

Mood Playlist

&#x20;      ↓

Song Selection

&#x20;      ↓

Recommendation UI



Example Mapping



Happy

→ Happy Songs



Sad

→ Emotional Songs



Angry

→ High-Energy Songs



Neutral

→ Chill Songs



Surprised

→ Fun Songs



Anxious

→ Calm Songs



Uncomfortable

→ Soothing Songs



The recommendation engine is designed to keep the application simple and responsive while providing multiple song choices for each mood.



📚 Music Library



MoodTune AI includes a 280+ song collection.



The library is organized according to mood categories.



🎵 MUSIC LIBRARY



├── 😊 Happy

│   ├── Bollywood

│   └── Haryanvi

│

├── 😢 Sad

│   ├── Bollywood

│   └── Haryanvi

│

├── 😠 Angry

│   ├── Bollywood

│   └── Haryanvi

│

├── 😐 Neutral

│   ├── Bollywood

│   └── Haryanvi

│

├── 😲 Surprised

│   ├── Bollywood

│   └── Haryanvi

│

├── 😟 Anxious

│   ├── Bollywood

│   └── Haryanvi

│

└── 😕 Uncomfortable

&#x20;   ├── Bollywood

&#x20;   └── Haryanvi



🖼️ Screenshots



The repository can contain a dedicated screenshots directory:



screenshots/

├── home.png

├── camera.png

├── mood-detection.png

├── recommendations.png

└── mobile-view.png



🏠 Home Screen







📷 Camera Interface







🎭 Mood Detection







🎧 Music Recommendations







📱 Responsive View







Note: Add the actual screenshot files to the screenshots/ directory before using these image paths.



🎬 Demo



🎥 Demo Flow



A complete demonstration of MoodTune AI can follow this flow:



1️⃣ Open MoodTune AI

&#x20;       ↓

2️⃣ Start Camera

&#x20;       ↓

3️⃣ Allow Camera Permission

&#x20;       ↓

4️⃣ Capture Facial Expression

&#x20;       ↓

5️⃣ Send Image to AI Backend

&#x20;       ↓

6️⃣ Detect Mood

&#x20;       ↓

7️⃣ Display Confidence Score

&#x20;       ↓

8️⃣ Generate Mood Playlist

&#x20;       ↓

9️⃣ Display Recommended Songs

&#x20;       ↓

🔟 Search / Play Selected Song



🌐 Live Demo



Coming Soon



Once the application is deployed, replace the above section with the live website URL.



Example:



https://your-moodtune-domain.com



📹 Demo Video



A project demonstration video can showcase:



Project introduction



Home screen



Camera activation



Camera permission



Facial expression capture



AI emotion detection



Confidence score



Mood-based playlist



Song recommendations



Music search



Recommended demo structure:



Introduction

&#x20;    ↓

Problem

&#x20;    ↓

MoodTune AI Solution

&#x20;    ↓

Live Demo

&#x20;    ↓

AI Detection

&#x20;    ↓

Music Recommendation

&#x20;    ↓

Technology Stack

&#x20;    ↓

Future Scope



🛠️ Technology Stack



Frontend



Technology



Purpose



React



Interactive user interface



Vite



Development and build tooling



JavaScript



Application logic



CSS



Styling and layout



Browser Camera API



Camera interaction



Backend



Technology



Purpose



Python



Backend and AI programming



Flask



REST API



Flask-CORS



Frontend-backend communication



OpenCV



Computer vision



NumPy



Numerical and image processing



AI / Computer Vision



Component



Purpose



Face Detection



Detect faces in captured images



Facial Processing



Prepare face information



Expression Recognition



Analyze facial expression



ONNX Models



Model inference



Emotion Classification



Determine emotional category



🔌 API Documentation



MoodTune AI uses a Flask REST API to connect the React frontend with the backend AI pipeline.



POST /api/detect-mood



Detects a mood from an uploaded facial image.



Endpoint



POST http://localhost:5000/api/detect-mood



Content Type



multipart/form-data



Request Parameter



Parameter



Type



Required



Description



image



File



Yes



Captured facial image



Example Request



const formData = new FormData();



formData.append(

&#x20; "image",

&#x20; blob,

&#x20; "mood-capture.jpg"

);



const response = await fetch(

&#x20; "http://localhost:5000/api/detect-mood",

&#x20; {

&#x20;   method: "POST",

&#x20;   body: formData

&#x20; }

);



const data = await response.json();



Example Successful Response



{

&#x20; "success": true,

&#x20; "mood": "Happy",

&#x20; "confidence": 94.72,

&#x20; "songs": \[

&#x20;   {

&#x20;     "title": "Example Song",

&#x20;     "artist": "Example Artist"

&#x20;   }

&#x20; ]

}



Response Fields



Field



Type



Description



success



Boolean



Indicates whether the request succeeded



mood



String



Detected mood



confidence



Number



AI confidence score



songs



Array



Recommended songs



Example Error Response



{

&#x20; "success": false,

&#x20; "error": "Mood detection failed."

}



🚀 Installation



Prerequisites



Make sure the following are installed:



Python 3.x



Node.js



npm



Git



Modern web browser



Camera-enabled device



1️⃣ Clone Repository



git clone https://github.com/riyagarg3729/MoodTuneAI.git



Then:



cd MoodTuneAI



2️⃣ Backend Setup



Navigate to the backend:



cd backend



Create a Python virtual environment:



python -m venv venv



Activate it on Windows:



venv\\Scripts\\activate



Install dependencies:



pip install flask flask-cors opencv-python numpy



Start the backend:



python app.py



The backend should run at:



http://localhost:5000



3️⃣ Frontend Setup



Open a second terminal.



Navigate to the frontend:



cd MoodTuneAI/frontend



Install dependencies:



npm install



Start the Vite development server:



npm run dev



Open the URL shown in the terminal.



Example:



http://localhost:5173



▶️ Running The Complete Application



MoodTune AI requires the backend and frontend to run simultaneously.



Terminal 1 — Backend



cd MoodTuneAI/backend

venv\\Scripts\\activate

python app.py



Terminal 2 — Frontend



cd MoodTuneAI/frontend

npm run dev



Then open the frontend URL in your browser.



🖥️ Local Development Architecture



&#x20;            Browser

&#x20;               │

&#x20;               ▼

&#x20;      ┌─────────────────┐

&#x20;      │ React + Vite    │

&#x20;      │ localhost:5173  │

&#x20;      └────────┬────────┘

&#x20;               │

&#x20;               │ HTTP API

&#x20;               ▼

&#x20;      ┌─────────────────┐

&#x20;      │ Flask Backend   │

&#x20;      │ localhost:5000  │

&#x20;      └────────┬────────┘

&#x20;               │

&#x20;               ▼

&#x20;      ┌─────────────────┐

&#x20;      │ OpenCV + AI     │

&#x20;      │ Model Pipeline  │

&#x20;      └────────┬────────┘

&#x20;               │

&#x20;               ▼

&#x20;         Mood Detection

&#x20;               │

&#x20;               ▼

&#x20;     Music Recommendation



⚙️ Configuration



During local development, the frontend communicates with the Flask backend through the local backend URL.



Example:



const API\_URL =

&#x20; import.meta.env.VITE\_API\_URL ||

&#x20; "http://localhost:5000";



API call:



fetch(`${API\_URL}/api/detect-mood`, {

&#x20; method: "POST",

&#x20; body: formData

});



For production, use an environment variable instead of hard-coding the backend address.



Example .env:



VITE\_API\_URL=https://your-backend-domain.com



☁️ Deployment



MoodTune AI can be deployed using a separate frontend and backend architecture.



Frontend



React + Vite

&#x20;     ↓

Production Build

&#x20;     ↓

Static Hosting



Backend



Python + Flask

&#x20;     ↓

Production Server

&#x20;     ↓

REST API



Production Architecture



&#x20;                   INTERNET

&#x20;                      │

&#x20;           ┌──────────┴──────────┐

&#x20;           │                     │

&#x20;           ▼                     ▼

&#x20;    Frontend Hosting       Flask Backend

&#x20;           │                     │

&#x20;           │                     ▼

&#x20;           │              AI / OpenCV

&#x20;           │                     │

&#x20;           └──────────┬──────────┘

&#x20;                      ▼

&#x20;              Mood Recommendation



For production deployment, remember to configure:



HTTPS



Backend URL



CORS



Environment variables



Production server



Camera permissions



Secure API configuration



🔐 Privacy



MoodTune AI requires camera access only when the user chooses to use the mood detection feature.



Camera access is controlled through browser permissions.



During local development, the captured image can be sent to the local Flask backend for analysis.



The project should be deployed with appropriate privacy and data-handling practices if used with real users.



🛡️ Security Considerations



For production deployment, consider implementing:



HTTPS



Secure environment variables



Restricted CORS configuration



Input validation



Image-type validation



File-size restrictions



Rate limiting



Secure error handling



Proper logging



Protection of API endpoints



📊 Project Highlights



Category



Implementation



🤖 Artificial Intelligence



Facial Emotion Recognition



📷 Computer Vision



Camera + Face Processing



⚛️ Frontend



React + Vite



🐍 Backend



Python + Flask



🔌 Communication



REST API



🎭 Mood Categories



7



🎵 Music Library



280+ Songs



🇮🇳 Music



Bollywood + Haryanvi



📊 AI Output



Mood + Confidence



🎧 Recommendation



Mood-Based Playlist



▶️ Music Access



External Search



💼 Resume-Friendly Project Description



MoodTune AI — AI-Powered Mood-Based Music Recommendation System



Tech Stack: React, Vite, Python, Flask, OpenCV, ONNX, REST API



Resume Points



Developed an AI-powered full-stack web application using React, Vite, Python, and Flask to detect facial emotions and generate mood-based music recommendations.



Integrated computer vision and facial-expression recognition with a browser-based camera interface to classify user moods and display AI confidence scores.



Built a 280+ song Bollywood and Haryanvi music library with mood-specific recommendation logic and external music search functionality.



Designed a REST API-based frontend-backend architecture for image processing, emotion inference, mood classification, and personalized recommendation delivery.



🏆 Why This Project Stands Out



MoodTune AI combines multiple areas of software engineering and AI in one working application.



🌐 Web Development



React

&#x20;↓

Interactive UI

&#x20;↓

Camera Interface

&#x20;↓

Dynamic Recommendations



🐍 Backend Development



Python

&#x20;↓

Flask

&#x20;↓

REST API

&#x20;↓

Image Processing



🤖 AI / Computer Vision



Face

&#x20;↓

Expression

&#x20;↓

Emotion

&#x20;↓

Mood



🎵 Recommendation System



Mood

&#x20;↓

Playlist Category

&#x20;↓

Song Collection

&#x20;↓

Recommendation



Therefore, the project demonstrates:



Full-Stack Development + Artificial Intelligence + Computer Vision + Recommendation Systems



📚 Learning Outcomes



Developing MoodTune AI provides practical experience with:



React development



Vite workflow



Python programming



Flask REST APIs



Frontend-backend integration



Browser camera APIs



Image processing



OpenCV



ONNX model integration



Facial expression recognition



JSON communication



Git and GitHub



Project architecture



API design



Responsive UI development



Deployment concepts



🧩 Challenges Solved



Challenge 1 — Camera Integration



Connecting the browser camera with the React interface.



Challenge 2 — Image Transfer



Sending captured image data from the frontend to Flask.



Challenge 3 — AI Processing



Processing the captured image through computer-vision models.



Challenge 4 — Mood Mapping



Converting detected emotions into usable music categories.



Challenge 5 — Music Recommendation



Connecting mood categories with a large music collection.



Challenge 6 — User Experience



Presenting AI results and recommendations in a clear and interactive interface.



Challenge 7 — Full-Stack Integration



Connecting the React frontend, Flask backend, AI processing, and recommendation engine into one workflow.



🔮 Future Enhancements



🎧 Spotify Integration



Integrate Spotify APIs for richer music discovery and playlist generation.



▶️ YouTube Music Integration



Provide deeper integration with external music platforms.



🧠 Advanced Emotion Models



Improve recognition performance using more advanced deep-learning models and larger datasets.



👥 Multi-Face Detection



Support multiple faces and generate group-level mood insights.



📈 Mood History



Allow users to track mood patterns over time.



Example:



Monday       😊 Happy

Tuesday      😐 Neutral

Wednesday    😢 Sad

Thursday     😊 Happy

Friday       😲 Surprised



❤️ Personal Preferences



Allow users to select:



Favorite artists



Favorite genres



Preferred languages



Bollywood preference



Haryanvi preference



Future recommendations could combine:



Detected Mood

&#x20;     +

User Preferences

&#x20;     +

Listening History

&#x20;     =

Advanced Personalization



📱 Mobile Application



Build Android and iOS versions using:



React Native

&#x20;       or

Flutter



☁️ Cloud AI Inference



Deploy the AI inference pipeline as a scalable cloud service.



🎙️ Voice-Based Mood Input



Allow users to optionally describe their mood through voice or text and combine that information with facial-expression analysis.



🧪 Example User Journey



Imagine a user opens MoodTune AI after a long day.



The user starts the camera.



Camera

&#x20; ↓

Facial Expression

&#x20; ↓

AI Analysis



The system detects:



😊 HAPPY

Confidence: 94%



The application then selects:



Happy Playlist

&#x20;     ↓

Bollywood + Haryanvi

&#x20;     ↓

Recommended Songs



The user can select a recommendation and search for the song.



This demonstrates the complete:



INPUT → AI → DECISION → RECOMMENDATION



pipeline.



🐛 Troubleshooting



npm run dev Shows Port Already in Use



Vite automatically attempts another available port.



Example:



Port 5173 is in use.

Port 5174 is in use.



Local: http://localhost:5175/



Open the URL shown in the terminal.



Camera Does Not Open



Check:



Browser camera permission



Camera availability



Whether another application is using the camera



Browser security settings



HTTPS when deployed



Backend Connection Error



Make sure the Flask backend is running:



python app.py



Then verify:



http://localhost:5000



Also verify that the frontend is using the correct API URL.



Frontend Dependencies Are Missing



Run:



cd frontend

npm install

npm run dev



Python Dependencies Are Missing



Activate the virtual environment:



venv\\Scripts\\activate



Then:



pip install flask flask-cors opencv-python numpy



🤝 Contributing



Contributions are welcome.



1\. Fork the repository



Create your own copy of the project.



2\. Create a feature branch



git checkout -b feature/new-feature



3\. Make your changes



Implement and test your feature.



4\. Commit



git add .

git commit -m "Add new feature"



5\. Push



git push origin feature/new-feature



6\. Open a Pull Request



Describe your changes and submit the pull request.



⭐ Support



If you like MoodTune AI, consider supporting the project:



⭐ Star the repository

🍴 Fork the project

🐛 Report bugs

💡 Suggest features

🔧 Contribute improvements



🔗 Repository



GitHub



MoodTune AI



https://github.com/riyagarg3729/MoodTuneAI



👩‍💻 Author



Riya Garg



Engineering Student | AI \& Web Development Enthusiast



GitHub



https://github.com/riyagarg3729



📄 License



This project is developed for educational, learning, portfolio, and project demonstration purposes.



Music metadata and external music-search links are intended for recommendation purposes. Actual music playback is handled by the respective external music platforms and remains subject to their terms and policies.



🎵 MoodTune AI



<p align="center">



🎭 Your Mood. Your Music.



Detect → Understand → Recommend → Listen



</p>



<p align="center">



🎭 → 🧠 → 🎵 → 🎧



</p>



<p align="center">



<strong>Made with ❤️ using React, Python, Flask, OpenCV \& AI</strong>



</p>



<p align="center">



⭐ <strong>If you like MoodTune AI, star the repository!</strong> ⭐



</p>

