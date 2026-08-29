<!-- ========================================================= -->

<!--                    MOODTUNE AI README                     -->

<!-- ========================================================= -->

<p align="center">
  <a href="https://moodtune-ai-z7la.onrender.com">
    <img src="https://img.shields.io/badge/%F0%9F%9A%80%20LIVE%20DEMO-OPEN%20MOODTUNE%20AI-7C4DFF?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Demo">
  </a>
  <a href="https://github.com/riyagarg3729/MoodTuneAI">
    <img src="https://img.shields.io/badge/%F0%9F%92%BB%20SOURCE%20CODE-GITHUB-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
</p>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=7C4DFF&height=250&section=header&text=MoodTune%20AI&fontSize=62&fontColor=ffffff&animation=fadeIn&fontAlignY=38" width="100%" />
</p>

<h1 align="center">🎭 MoodTune AI 🎧</h1>

<p align="center">
  <strong>Your Mood. Your Music.</strong>
</p>

<p align="center">
  <strong>AI-Powered Mood-Based Music Recommendation System</strong>
</p>

<p align="center">
  <i>Detect your facial expression, understand your mood, and discover personalized Bollywood & Haryanvi music.</i>
</p>

<p align="center">
  <a href="https://moodtune-ai-z7la.onrender.com">
    <img src="https://img.shields.io/badge/%F0%9F%8C%90%20OPEN%20LIVE%20WEBSITE-7C4DFF?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Open Live Website">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Python-Backend-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Flask-REST%20API-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask">
  <img src="https://img.shields.io/badge/OpenCV-Computer%20Vision-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" alt="OpenCV">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/AI-Emotion%20Detection-FF6F00?style=for-the-badge" alt="AI">
  <img src="https://img.shields.io/badge/280%2B-Songs-FF4081?style=for-the-badge" alt="Songs">
  <img src="https://img.shields.io/badge/Bollywood-%26-Haryanvi-E91E63?style=for-the-badge" alt="Indian Music">
  <img src="https://img.shields.io/badge/Status-LIVE-22C55E?style=for-the-badge" alt="Status">
</p>

🌟 Project Overview

MoodTune AI is an AI-powered full-stack web application that connects facial emotion recognition with personalized music recommendation.

Instead of manually selecting a playlist, the user can simply open the camera, show their facial expression, and let MoodTune AI analyze the captured image.

The detected emotional state is then mapped to a mood-specific music collection containing Bollywood and Haryanvi songs.

🎯 Core Idea

🎭 Detect the Mood → 🧠 Understand the Emotion → 🎵 Recommend the Music

📷 Camera
     ↓
👤 Face Capture
     ↓
🧠 AI Emotion Analysis
     ↓
🎭 Mood Detection
     ↓
📊 Confidence Score
     ↓
🎵 Mood-Based Playlist
     ↓
🎧 Music Recommendations
     ↓
▶️ Search / Play

💡 Why MoodTune AI?

Traditional music discovery usually follows:

Search
  ↓
Select Genre
  ↓
Choose Playlist
  ↓
Select Song
  ↓
Play

MoodTune AI introduces an emotion-aware approach:

Camera
  ↓
Facial Expression
  ↓
AI Analysis
  ↓
Emotion
  ↓
Mood
  ↓
Playlist
  ↓
Music

The goal is to make music discovery more interactive, personalized, and emotion-aware.

✨ Key Features

Feature

Description

🎭 AI Mood Detection

Detects emotional state from facial expression

📷 Camera Integration

Captures facial input directly from the browser

🧠 Computer Vision

Processes facial information using AI models

📊 Confidence Score

Shows AI prediction confidence

🎵 Dynamic Playlist

Selects songs according to detected mood

🇮🇳 Bollywood Music

Hindi songs across different moods

🪕 Haryanvi Music

Regional Indian music recommendations

🎧 280+ Songs

Large mood-based music collection

▶️ Music Search

Quickly search recommended songs

⚡ Responsive UI

Modern React-based interface

🔌 REST API

Frontend-backend communication

🌐 Live Deployment

Production frontend and backend

🎭 Supported Moods

MoodTune AI supports seven emotional categories.

Mood

Emoji

Playlist Style

Happy

😊

Energetic & Feel-Good

Sad

😢

Emotional & Comforting

Angry

😠

Powerful & High-Energy

Neutral

😐

Chill & Balanced

Surprised

😲

Fun & Exciting

Anxious

😟

Calm & Relaxing

Uncomfortable

😕

Soothing & Positive

🧠 AI & Computer Vision

The project uses a computer-vision based facial analysis pipeline.

Model assets are stored in:

backend/models/

Included Model Files

face_detection_yunet_2023mar.onnx
face_recognition_sface_2021dec.onnx
facial_expression_recognition_mobilefacenet_2022july.onnx

🔬 AI Processing Pipeline

                 📷 INPUT IMAGE
                        │
                        ▼
              ┌───────────────────┐
              │   Face Detection  │
              └─────────┬─────────┘
                        │
                        ▼
              ┌───────────────────┐
              │  Face Processing  │
              └─────────┬─────────┘
                        │
                        ▼
              ┌───────────────────┐
              │ Expression Analysis│
              └─────────┬─────────┘
                        │
                        ▼
              ┌───────────────────┐
              │ Emotion Detection │
              └─────────┬─────────┘
                        │
                        ▼
                 📊 CONFIDENCE
                        │
                        ▼
                 🎭 DETECTED MOOD

🔄 How MoodTune AI Works

01 — Open the Application

Open the live website:

https://moodtune-ai-z7la.onrender.com

02 — Start Camera

Click:

📷 Start Camera

Allow browser camera permission.

03 — Capture Facial Expression

The browser camera displays a live feed and the current frame is captured.

04 — Send Image to Backend

The React frontend sends the captured image to the Flask API.

React Frontend
      │
      │ HTTP POST
      ▼
Flask Backend

05 — Analyze Emotion

The backend processes the image through the computer-vision pipeline.

Image
 ↓
Face Detection
 ↓
Expression Analysis
 ↓
Emotion Classification

06 — Detect Mood

Example result:

🎭 Mood: Happy
📊 Confidence: 94.72%

07 — Select Matching Playlist

😊 Happy
   ↓
Happy Playlist
   ↓
Bollywood + Haryanvi

08 — Display Recommendations

The React interface updates the recommendation section dynamically.

09 — Discover Music

The user can select a recommended song and search for it through the available external music platform.

🏗️ System Architecture

                           👤 USER
                              │
                              ▼
                     ┌─────────────────┐
                     │ Browser Camera  │
                     └────────┬────────┘
                              │
                              ▼
              ┌──────────────────────────────┐
              │       ⚛️ REACT FRONTEND       │
              │                              │
              │  • Camera Interface          │
              │  • Mood Dashboard            │
              │  • Confidence Display        │
              │  • Playlist UI               │
              └──────────────┬───────────────┘
                             │
                             │ HTTPS / REST API
                             ▼
              ┌──────────────────────────────┐
              │       🐍 FLASK BACKEND        │
              │                              │
              │  • Request Handling          │
              │  • Image Processing          │
              │  • Emotion Analysis          │
              │  • Recommendation Logic      │
              └──────────────┬───────────────┘
                             │
                             ▼
              ┌──────────────────────────────┐
              │      🧠 AI / COMPUTER VISION │
              │                              │
              │  • Face Detection            │
              │  • Face Processing           │
              │  • Expression Recognition    │
              └──────────────┬───────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ 🎭 MOOD ENGINE  │
                    └────────┬────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │ 🎵 MUSIC RECOMMENDER │
                 └──────────┬────────────┘
                            │
                            ▼
                   🎧 PERSONALIZED PLAYLIST

🔁 Complete Application Flow

┌──────────────┐
│ Open Website │
└──────┬───────┘
       ↓
┌──────────────┐
│ Start Camera │
└──────┬───────┘
       ↓
┌──────────────┐
│ Capture Face │
└──────┬───────┘
       ↓
┌────────────────┐
│ AI Processing  │
└──────┬─────────┘
       ↓
┌────────────────┐
│ Mood Detected  │
└──────┬─────────┘
       ↓
┌────────────────┐
│ Mood Mapping   │
└──────┬─────────┘
       ↓
┌────────────────┐
│ Playlist Ready │
└──────┬─────────┘
       ↓
┌────────────────┐
│ Listen / Search│
└────────────────┘

🎵 Music Recommendation Engine

The recommendation engine connects emotional state to a mood-specific music collection.

Detected Emotion
       ↓
Mood Category
       ↓
Playlist Category
       ↓
Song Collection
       ↓
Recommended Songs

😊 Happy

Happy
 ↓
Energetic / Feel-Good
 ↓
Bollywood + Haryanvi
 ↓
Happy Playlist

😢 Sad

Sad
 ↓
Emotional / Comforting
 ↓
Bollywood + Haryanvi
 ↓
Sad Playlist

😠 Angry

Angry
 ↓
Powerful / High-Energy
 ↓
Bollywood + Haryanvi
 ↓
Angry Playlist

😐 Neutral

Neutral
 ↓
Chill / Balanced
 ↓
Bollywood + Haryanvi
 ↓
Neutral Playlist

😲 Surprised

Surprised
 ↓
Fun / Exciting
 ↓
Bollywood + Haryanvi
 ↓
Surprised Playlist

😟 Anxious

Anxious
 ↓
Calm / Relaxing
 ↓
Bollywood + Haryanvi
 ↓
Calm Playlist

😕 Uncomfortable

Uncomfortable
 ↓
Soothing / Positive
 ↓
Bollywood + Haryanvi
 ↓
Soothing Playlist

🇮🇳 Indian Music Focus

MoodTune AI focuses on Indian music.

🎬 Bollywood

Hindi songs across different emotional states, genres, and listening situations.

🪕 Haryanvi

Regional Haryanvi songs are included to make the recommendation experience more diverse and culturally relevant.

📚 280+ Song Library

The project contains a 280+ song collection distributed across mood categories.

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
    ├── Bollywood
    └── Haryanvi

📊 Example AI Result

╔══════════════════════════════════╗
║          CURRENT MOOD            ║
║                                  ║
║             😊 HAPPY             ║
║                                  ║
║          94.72% CONFIDENCE       ║
╚══════════════════════════════════╝

🎧 Personalized Playlist

After mood detection, the recommendation section changes according to the detected mood.

😊 HAPPY PLAYLIST

🎵 Song 01
🎵 Song 02
🎵 Song 03
🎵 Song 04
🎵 Song 05
...
🎵 Song 40

🖼️ Screenshots

Project screenshots are stored inside:

frontend/screenshots/

🏠 Home Page



📷 AI Camera



🎭 Detected Mood



🎧 Personalized Playlist



⚙️ How It Works



🎬 Live Demo

<p align="center">
  <a href="https://moodtune-ai-z7la.onrender.com">
    <img src="https://img.shields.io/badge/🚀%20OPEN%20MOODTUNE%20AI%20LIVE-7C4DFF?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Demo">
  </a>
</p>

🌐 Frontend

https://moodtune-ai-z7la.onrender.com

🐍 Backend

https://moodtune-ai-backend.onrender.com

🎥 Demo Flow

🎵 Open MoodTune AI
        ↓
📷 Start Camera
        ↓
🔐 Allow Camera Permission
        ↓
👤 Show Face
        ↓
🧠 AI Analyzes Expression
        ↓
🎭 Mood Detected
        ↓
📊 Confidence Displayed
        ↓
🎵 Playlist Automatically Updated
        ↓
🎧 Select Song
        ↓
▶️ Search / Play

ℹ️ The free backend may spin down after inactivity, so the first request can take longer while the service wakes up.

🛠️ Technology Stack

⚛️ Frontend

Technology

Purpose

React.js

Interactive user interface

Vite

Development and build tooling

JavaScript

Application logic

HTML5

Web structure

CSS3

Styling

Browser Camera API

Camera access

🐍 Backend

Technology

Purpose

Python

Backend and AI programming

Flask

REST API

Flask-CORS

Frontend-backend communication

Gunicorn

Production WSGI server

NumPy

Numerical processing

OpenCV

Computer vision

🤖 AI / Computer Vision

Component

Purpose

Face Detection

Locate facial regions

Facial Processing

Process face information

Expression Recognition

Analyze facial expression

ONNX Models

Model inference

Emotion Classification

Determine emotional state

🔌 API Documentation

GET /

Basic backend availability endpoint.

Production

https://moodtune-ai-backend.onrender.com/

POST /api/detect-mood

Receives a captured facial image and performs mood detection.

Production Endpoint

https://moodtune-ai-backend.onrender.com/api/detect-mood

Content Type

multipart/form-data

Request Parameter

Parameter

Type

Required

Description

image

File

✅ Yes

Captured facial image

Example Request

const formData = new FormData();

formData.append(
  "image",
  blob,
  "mood-capture.jpg"
);

const response = await fetch(
  "https://moodtune-ai-backend.onrender.com/api/detect-mood",
  {
    method: "POST",
    body: formData
  }
);

const data = await response.json();

Example Response

{
  "success": true,
  "mood": "Happy",
  "confidence": 94.72,
  "songs": [
    {
      "title": "Example Song",
      "artist": "Example Artist",
      "emoji": "😊"
    }
  ]
}

📂 Project Structure

MoodTuneAI/
│
├── README.md
├── .gitignore
├── .python-version
│
├── backend/
│   ├── app.py
│   ├── camera.py
│   ├── emotion.py
│   ├── music.py
│   ├── requirements.txt
│   │
│   └── models/
│       ├── face_detection_yunet_2023mar.onnx
│       ├── face_recognition_sface_2021dec.onnx
│       └── facial_expression_recognition_mobilefacenet_2022july.onnx
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    │
    ├── screenshots/
    │   ├── home.png
    │   ├── camera.png
    │   ├── detected-mood.png
    │   ├── how-it-works.png
    │   └── playlist.png
    │
    ├── index.html
    ├── package.json
    ├── package-lock.json
    └── vite.config.js

🚀 Installation

Prerequisites

Install:

Python 3.x

Node.js

npm

Git

Modern browser

Camera-enabled device

Clone Repository

git clone https://github.com/riyagarg3729/MoodTuneAI.git
cd MoodTuneAI

Backend

cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py

Frontend

Open another terminal:

cd MoodTuneAI/frontend
npm install
npm run dev

▶️ Running The Complete Application

Terminal 1 — Backend

cd MoodTuneAI/backend
venv\Scripts\activate
python app.py

Terminal 2 — Frontend

cd MoodTuneAI/frontend
npm run dev

⚙️ Configuration

Local Development

Frontend:
http://localhost:5173

Backend:
http://localhost:5000

Production

Frontend:
https://moodtune-ai-z7la.onrender.com

Backend:
https://moodtune-ai-backend.onrender.com

Production mood detection endpoint:

https://moodtune-ai-backend.onrender.com/api/detect-mood

☁️ Deployment

MoodTune AI is deployed using two Render services from the same GitHub repository.

                    🌐 INTERNET
                         │
              ┌──────────┴──────────┐
              │                     │
              ▼                     ▼
       ⚛️ FRONTEND             🐍 BACKEND
       React + Vite               Flask
       Render Static Site         Render Web Service
              │                     │
              │                     ▼
              │                🧠 AI Models
              │                     │
              └──────────┬──────────┘
                         ▼
                 🎵 Recommendations

Frontend

https://moodtune-ai-z7la.onrender.com

Backend

https://moodtune-ai-backend.onrender.com

🌐 Production Frontend-Backend Connection

The live frontend communicates with the live backend using:

Live React Frontend
        ↓
HTTPS Request
        ↓
Live Flask API
        ↓
AI / Computer Vision
        ↓
Mood Detection
        ↓
Song Recommendations
        ↓
React UI Update

🔐 Privacy

MoodTune AI requests camera access only when the user chooses the mood-detection feature.

The camera is accessed through browser APIs.

The captured image is sent to the configured backend for processing.

For real-world deployment, appropriate privacy, consent, and secure data-handling practices should be implemented.

🛡️ Security Considerations

For production use, consider:

HTTPS

Restricted CORS

Input validation

Image validation

File-size limits

Rate limiting

Secure environment variables

Safe error handling

Authentication where required

Avoiding unnecessary image storage

🐛 Troubleshooting

npm run dev shows "port already in use"

Vite may automatically select another port.

Example:

Port 5173 is in use.
Port 5174 is in use.
Local: http://localhost:5175/

Open the URL shown in the terminal.

📷 Camera is not opening

Check:

Camera permission

Camera availability

Other applications using the camera

Browser camera support

HTTPS in production

❌ Backend connection error

Check the production backend:

https://moodtune-ai-backend.onrender.com

Also verify that App.jsx uses:

https://moodtune-ai-backend.onrender.com/api/detect-mood

instead of:

http://localhost:5000/api/detect-mood

🧠 Mood detection fails

Check:

Backend is live

AI model files exist

Camera frame is available

Face is clearly visible

Correct API URL is configured

⏳ First request is slow

The free Render backend may spin down after inactivity. The first request can therefore take longer while the service starts.

📊 Project Highlights

Category

Implementation

🤖 Artificial Intelligence

Facial Emotion Recognition

👁️ Computer Vision

Face & Expression Processing

⚛️ Frontend

React + Vite

🐍 Backend

Python + Flask

🔌 API

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

🌐 Deployment

Render

💻 Version Control

Git + GitHub

💼 Resume-Friendly Highlights

MoodTune AI — AI-Powered Mood-Based Music Recommendation System

Tech Stack: React.js, Vite, Python, Flask, OpenCV, ONNX, REST API

Developed an AI-powered full-stack web application using React, Vite, Python, Flask, and OpenCV to analyze facial expressions and generate mood-based music recommendations.

Integrated a browser-based camera workflow with facial emotion recognition, enabling mood classification and confidence-score visualization.

Built a 280+ song Bollywood and Haryanvi recommendation library with dynamic mood-specific playlist selection and external music search.

Designed and deployed a REST API-based frontend-backend architecture, connecting the React client with a production Flask AI backend.

Implemented support for 7 emotional categories including Happy, Sad, Angry, Neutral, Surprised, Anxious, and Uncomfortable.

🏆 Why This Project Stands Out

MoodTune AI combines:

🌐 Full-Stack Development
          +
🤖 Artificial Intelligence
          +
👁️ Computer Vision
          +
🎵 Recommendation Systems
          +
☁️ Cloud Deployment
          =
🎭 MoodTune AI

The project demonstrates how an AI pipeline can be integrated into a practical, user-facing web application.

🎯 Skills Demonstrated

Frontend

React.js

Vite

JavaScript

HTML5

CSS3

Responsive UI

Browser APIs

Backend

Python

Flask

REST API

Flask-CORS

Gunicorn

Image Processing

AI / ML

Computer Vision

Face Detection

Facial Expression Recognition

Emotion Classification

ONNX Model Integration

Development

Git

GitHub

Debugging

API Integration

Cloud Deployment

Full-Stack Architecture

🧩 Challenges Solved

📷 Camera Integration

Connected browser camera functionality with React while handling permissions and camera stream lifecycle.

🖼️ Image Transfer

Captured browser video frames and converted them into image data for backend processing.

🔌 Frontend-Backend Integration

Connected the React frontend with Flask through REST API requests.

🧠 AI Integration

Integrated facial-analysis model assets into the backend processing workflow.

🎭 Mood Mapping

Mapped detected emotional categories into meaningful music categories.

🎵 Recommendation Logic

Connected mood categories with curated Bollywood and Haryanvi song collections.

🌐 Production Deployment

Deployed the frontend and backend as live services and connected them using a production API URL.

📚 Learning Outcomes

This project provided practical experience in:

Full-stack application development

React component development

Flask backend development

REST API communication

Browser camera APIs

Image processing

OpenCV

Facial-expression recognition

ONNX model integration

Dynamic UI rendering

Git and GitHub

Cloud deployment

Debugging

API architecture

Production configuration

🛣️ Development Roadmap

✅ Completed

React frontend

Vite setup

Flask backend

Browser camera integration

Face processing

Emotion detection

Mood classification

Confidence score

Mood-based recommendations

Bollywood library

Haryanvi library

280+ songs

External music search

GitHub repository

Professional README

Frontend deployment

Backend deployment

Production frontend-backend connection

🔜 Planned

Spotify integration

YouTube Music integration

User accounts

Mood history

Advanced recommendation engine

Multi-face detection

Improved emotion model

Mobile application

Voice + text mood input

🔮 Future Enhancements

🎧 Spotify Integration

Generate and manage personalized playlists using Spotify.

▶️ YouTube Music Integration

Improve integration with external music platforms.

🧠 Advanced Emotion Models

Use newer and more accurate emotion-recognition models.

👥 Multi-Face Detection

Analyze multiple faces and determine group mood.

📈 Mood History

Track and visualize mood patterns.

Example:

Monday      😊 Happy
Tuesday     😐 Neutral
Wednesday   😢 Sad
Thursday    😊 Happy
Friday      😲 Surprised

❤️ Personal Preferences

Combine:

Detected Mood
      +
Favorite Artists
      +
Favorite Genres
      +
Listening History
      ↓
Advanced Personalization

📱 Mobile Application

Create Android/iOS versions.

🎙️ Voice + Emotion

Combine facial expression with optional voice or text mood input.

🌈 Product Vision

MoodTune AI can evolve into a broader emotion-aware music assistant.

A future intelligent recommendation engine could combine:

              Facial Emotion
                    +
             Listening History
                    +
             User Preferences
                    +
               Time of Day
                    +
              Music Feedback
                    ↓
          🧠 SMART RECOMMENDER
                    ↓
             🎧 PERSONALIZED
                PLAYLIST

The long-term vision is to make music discovery more:

Contextual • Adaptive • Interactive • Personalized

🧪 Example User Journey

👤 User
   ↓
📷 Starts Camera
   ↓
🙂 Shows Expression
   ↓
🧠 AI Analyzes Face
   ↓
🎭 Mood Detected
   ↓
📊 Confidence Score
   ↓
🎵 Matching Playlist
   ↓
🎧 Music Recommendation

The overall experience follows:

INPUT → AI → DECISION → RECOMMENDATION

🤝 Contributing

Contributions are welcome.

Clone

git clone https://github.com/riyagarg3729/MoodTuneAI.git
cd MoodTuneAI

Create a branch

git checkout -b feature/new-feature

Make changes

Implement and test your changes.

Commit

git add .
git commit -m "Add new feature"

Push

git push origin feature/new-feature

Then open a Pull Request.

⭐ Support

If you like MoodTune AI, consider:

⭐ Starring the repository
🍴 Forking the project
🐛 Reporting bugs
💡 Suggesting features
🔧 Contributing improvements

🔗 Important Links

🚀 Live Website

https://moodtune-ai-z7la.onrender.com

🐍 Backend API

https://moodtune-ai-backend.onrender.com

💻 GitHub Repository

https://github.com/riyagarg3729/MoodTuneAI

👩‍💻 Author

Riya Garg

Engineering Student | AI & Web Development Enthusiast

Areas of Interest

Artificial Intelligence

Machine Learning

Computer Vision

Full-Stack Development

Automation

Innovative Software Solutions

GitHub

https://github.com/riyagarg3729

📄 License

This project is developed for educational, portfolio, learning, and demonstration purposes.

Music metadata and external music-search links are used for recommendation purposes. Actual music playback is handled by the respective external music platforms and remains subject to their terms and policies.

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=7C4DFF&height=150&section=footer&text=Your%20Mood.%20Your%20Music.&fontSize=32&fontColor=ffffff" width="100%" />
</p>

<p align="center">
  <strong>🎭 Detect • 🧠 Understand • 🎵 Recommend • 🎧 Enjoy</strong>
</p>

<p align="center">
  Made with ❤️ using React • Python • Flask • OpenCV • AI
</p>

<p align="center">
  ⭐ <strong>If you like MoodTune AI, star the repository!</strong> ⭐
</p>