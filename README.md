<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=7C4DFF&height=240&section=header&text=MoodTune%20AI&fontSize=58&fontColor=ffffff&animation=fadeIn&fontAlignY=38" width="100%" />
</p>

<p align="center">
  <strong>🎭 Your Mood. Your Music. 🎧</strong>
</p>

<p align="center">
  AI-powered facial emotion detection meets personalized Bollywood & Haryanvi music recommendations.
</p>

<p align="center">
  <a href="https://github.com/riyagarg3729/MoodTuneAI">
    <img src="https://img.shields.io/badge/GitHub-MoodTune%20AI-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Python-Backend-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Flask-REST%20API-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask">
  <img src="https://img.shields.io/badge/OpenCV-Computer%20Vision-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" alt="OpenCV">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/AI-Emotion%20Detection-FF6F00?style=for-the-badge" alt="AI">
  <img src="https://img.shields.io/badge/280%2B-Songs-FF4081?style=for-the-badge" alt="Songs">
  <img src="https://img.shields.io/badge/Bollywood-%26%20Haryanvi-E91E63?style=for-the-badge" alt="Music">
  <img src="https://img.shields.io/badge/Status-Working-22C55E?style=for-the-badge" alt="Status">
</p>

🌟 Project Overview

MoodTune AI is an AI-powered full-stack web application that connects facial emotion recognition with personalized music recommendation.

Instead of asking the user to manually choose a playlist, MoodTune AI uses a browser camera to capture facial expressions, analyzes the emotional state through an AI/computer-vision pipeline, and dynamically recommends music based on the detected mood.

🎯 The Core Idea

🎭 Detect the Mood → 🧠 Understand the Emotion → 🎵 Recommend the Music

The application is designed around a simple and engaging user experience:

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

Most music applications depend heavily on manual actions such as:

Searching for a song

Choosing a genre

Selecting a playlist

Creating a personal queue

Remembering what to play based on mood

MoodTune AI introduces an additional interaction layer:

Traditional Approach
User → Search → Select → Play

MoodTune AI
User → Camera → AI → Mood → Playlist → Play

The goal is to make music discovery more interactive, personalized, and emotion-aware.

✨ Key Features

Feature

What it Does

🎭 AI Mood Detection

Detects emotional state from facial expression

📷 Camera Integration

Captures facial input directly from the browser

🧠 Computer Vision

Processes facial information using AI models

📊 Confidence Score

Shows prediction confidence

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

Modern and interactive React interface

🎭 Supported Moods

MoodTune AI supports seven emotional categories:

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

The project uses a computer-vision based pipeline for facial analysis.

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
             │   Face Detection   │
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

The user opens MoodTune AI in a supported browser.

02 — Start Camera

The user clicks Start Camera and grants browser permission.

📷 Start Camera
       ↓
🔐 Camera Permission
       ↓
🎥 Live Camera Feed

03 — Capture Facial Expression

The application captures the current camera frame and prepares the image for analysis.

04 — Send Image to Backend

The React frontend sends the captured image to the Flask backend through an HTTP request.

React Frontend
      │
      │ POST Request
      ▼
Flask Backend

05 — AI Emotion Analysis

The backend processes the image through the facial-analysis pipeline.

Image
 ↓
Face Detection
 ↓
Expression Analysis
 ↓
Emotion Classification

06 — Detect Mood

The backend returns the detected mood and confidence information.

Example:

🎭 Mood: Happy
📊 Confidence: 94.72%

07 — Select Matching Playlist

The detected emotional category is mapped to the corresponding music collection.

😊 Happy
   ↓
Happy Playlist
   ↓
Bollywood + Haryanvi

08 — Display Recommendations

The React interface updates the recommendation section dynamically.

09 — Discover Music

The user can select a song and search for it through the available external music platform.

🏗️ System Architecture

                           👤 USER
                              │
                              ▼
                     ┌─────────────────┐
                     │ Browser Camera  │
                     └────────┬────────┘
                              │
                              ▼
              ┌─────────────────────────────┐
              │       ⚛️ REACT FRONTEND      │
              │                             │
              │  • Camera Interface         │
              │  • Mood Dashboard           │
              │  • Confidence Display       │
              │  • Playlist UI              │
              └──────────────┬──────────────┘
                             │
                             │ HTTP / REST API
                             ▼
              ┌─────────────────────────────┐
              │       🐍 FLASK BACKEND       │
              │                             │
              │  • Request Handling         │
              │  • Image Processing         │
              │  • Emotion Analysis         │
              │  • Recommendation Logic     │
              └──────────────┬──────────────┘
                             │
                             ▼
              ┌─────────────────────────────┐
              │     🧠 AI / COMPUTER VISION │
              │                             │
              │  • Face Detection           │
              │  • Face Processing          │
              │  • Expression Recognition   │
              └──────────────┬──────────────┘
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
                   🎧 PERSONALIZED
                      PLAYLIST

🔁 Complete Application Flow

┌──────────────┐
│ Open Website │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Start Camera │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Capture Face │
└──────┬───────┘
       │
       ▼
┌────────────────┐
│ AI Processing  │
└──────┬─────────┘
       │
       ▼
┌────────────────┐
│ Mood Detected  │
└──────┬─────────┘
       │
       ▼
┌────────────────┐
│ Mood Mapping   │
└──────┬─────────┘
       │
       ▼
┌────────────────┐
│ Playlist Ready │
└──────┬─────────┘
       │
       ▼
┌────────────────┐
│ Listen / Search│
└────────────────┘

🎵 Music Recommendation Engine

The recommendation engine follows a simple mapping process:

Detected Emotion
       ↓
Mood Category
       ↓
Playlist Category
       ↓
Song Collection
       ↓
Recommended Songs

Example Mood Mapping

😊 HAPPY
    ↓
Energetic / Feel-Good
    ↓
Bollywood + Haryanvi
    ↓
Personalized Playlist

😢 SAD
    ↓
Emotional / Comforting
    ↓
Bollywood + Haryanvi
    ↓
Personalized Playlist

😠 ANGRY
    ↓
Powerful / High-Energy
    ↓
Bollywood + Haryanvi
    ↓
Personalized Playlist

😐 NEUTRAL
    ↓
Chill / Balanced
    ↓
Bollywood + Haryanvi
    ↓
Personalized Playlist

🇮🇳 Indian Music Focus

MoodTune AI focuses on Indian music with two major categories.

🎬 Bollywood

Hindi songs across different emotional states, genres, and listening situations.

🪕 Haryanvi

Regional Haryanvi songs are included to make the recommendation experience more diverse and culturally relevant.

📚 280+ Song Library

The project contains 280+ songs distributed across mood categories.

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
║             😊 Happy             ║
║                                  ║
║          94.72% Confidence       ║
╚══════════════════════════════════╝

The detected mood is then used to update the recommendation section.

🎧 Personalized Playlist

The playlist section changes according to the detected mood.

Example:

😊 HAPPY PLAYLIST

🎵 Song 01
🎵 Song 02
🎵 Song 03
🎵 Song 04
🎵 Song 05
...
🎵 Song 40

The system can provide a larger set of mood-specific recommendations instead of relying on only a few static cards.

🖼️ Screenshots

Store project screenshots in:

screenshots/
├── home.png
├── camera.png
├── mood-detection.png
├── playlist.png
└── how-it-works.png

Then add them here.

🏠 Home Page



📷 AI Camera



🎭 Mood Detection



🎧 Personalized Playlist



⚙️ How It Works



🎬 Demo

🎥 Demo Flow

🎵 Open MoodTune AI
        ↓
📷 Start Camera
        ↓
🔐 Allow Permission
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

🌐 Live Demo

🚧 Coming Soon

Once deployed, add the production URL:

https://your-moodtune-demo.com

📹 Demo Video

The demo video can showcase:

Project introduction

Home interface

Camera activation

Camera permission

Facial expression capture

AI mood detection

Confidence score

Automatic playlist generation

Bollywood recommendations

Haryanvi recommendations

Song search

🛠️ Technology Stack

Frontend

Technology

Purpose

⚛️ React.js

Interactive user interface

⚡ Vite

Frontend development and build

🟨 JavaScript

Application logic

🎨 CSS3

Styling and responsive design

📷 Browser Camera API

Camera access

Backend

Technology

Purpose

🐍 Python

Backend and AI programming

🌶️ Flask

REST API

🔗 Flask-CORS

Cross-origin communication

👁️ OpenCV

Computer vision

🔢 NumPy

Numerical and image processing

AI / Computer Vision

Component

Purpose

👤 Face Detection

Locate faces

🧠 Expression Recognition

Analyze facial expression

📦 ONNX Models

Model inference

🎭 Emotion Classification

Determine emotional state

🔌 API Documentation

The frontend communicates with the Flask backend through REST endpoints.

GET /

Purpose

Checks whether the backend is running.

Local URL

http://localhost:5000/

GET /api/health

Purpose

Provides a basic backend health check.

Local URL

http://localhost:5000/api/health

POST /api/detect-mood

Purpose

Receives an image from the frontend and performs mood detection.

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

✅ Yes

Captured facial image

Example Frontend Request

const formData = new FormData();

formData.append(
  "image",
  blob,
  "mood-capture.jpg"
);

const response = await fetch(
  "http://localhost:5000/api/detect-mood",
  {
    method: "POST",
    body: formData
  }
);

const data = await response.json();

Example Successful Response

{
  "success": true,
  "mood": "Happy",
  "emotion": "happy",
  "confidence": 94.72,
  "songs": [
    {
      "title": "Example Song",
      "artist": "Example Artist",
      "emoji": "😊"
    }
  ]
}

Response Fields

Field

Type

Description

success

Boolean

Request status

mood

String

User-friendly detected mood

emotion

String

Detected emotion category

confidence

Number

Prediction confidence

songs

Array

Mood-based recommendations

Example Error Response

{
  "success": false,
  "error": "Mood detection failed",
  "message": "Unable to process image"
}

📂 Project Structure

MoodTuneAI/
│
├── README.md
├── .gitignore
│
├── backend/
│   ├── app.py
│   ├── camera.py
│   ├── emotion.py
│   ├── music.py
│   │
│   └── models/
│       ├── face_detection_yunet_2023mar.onnx
│       ├── face_recognition_sface_2021dec.onnx
│       └── facial_expression_recognition_mobilefacenet_2022july.onnx
│
├── frontend/
│   ├── public/
│   │   ├── favicon.svg
│   │   └── icons.svg
│   │
│   ├── src/
│   │   ├── assets/
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
└── screenshots/
    ├── home.png
    ├── camera.png
    ├── mood-detection.png
    ├── playlist.png
    └── how-it-works.png

🚀 Installation

📋 Prerequisites

Before running MoodTune AI, install:

Python 3.x

Node.js

npm

Git

Modern browser

Camera-enabled device

1️⃣ Clone the Repository

git clone https://github.com/riyagarg3729/MoodTuneAI.git

cd MoodTuneAI

🐍 Backend Setup

Navigate to the backend:

cd backend

Create a virtual environment:

python -m venv venv

Activate it on Windows:

venv\Scripts\activate

Install backend dependencies:

pip install flask flask-cors opencv-python numpy

If the project contains a requirements.txt:

pip install -r requirements.txt

Start Flask:

python app.py

Backend:

http://localhost:5000

⚛️ Frontend Setup

Open a second terminal.

Navigate to the frontend:

cd MoodTuneAI/frontend

Install dependencies:

npm install

Start the frontend:

npm run dev

Vite will show the local development URL.

Example:

http://localhost:5173

▶️ Run the Complete Application

Two terminals are required.

Terminal 1 — Backend

cd MoodTuneAI/backend
venv\Scripts\activate
python app.py

Terminal 2 — Frontend

cd MoodTuneAI/frontend
npm run dev

Then open the frontend URL displayed by Vite.

🖥️ Local Architecture

             🌐 Browser
                  │
                  ▼
        ┌───────────────────┐
        │ React + Vite      │
        │ localhost:5173    │
        └─────────┬─────────┘
                  │
                  │ HTTP
                  ▼
        ┌───────────────────┐
        │ Flask Backend     │
        │ localhost:5000    │
        └─────────┬─────────┘
                  │
                  ▼
        ┌───────────────────┐
        │ OpenCV + AI Models│
        └─────────┬─────────┘
                  │
                  ▼
             🎭 Mood
                  │
                  ▼
             🎵 Playlist

⚙️ Configuration

During development, the frontend communicates with:

http://localhost:5000

For production, the backend URL should be configurable.

Example:

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000";

Then:

fetch(`${API_URL}/api/detect-mood`, {
  method: "POST",
  body: formData
});

Example production environment variable:

VITE_API_URL=https://your-backend-domain.com

☁️ Deployment

MoodTune AI can be deployed using separate frontend and backend hosting.

                    🌐 INTERNET
                         │
              ┌──────────┴──────────┐
              │                     │
              ▼                     ▼
      ⚛️ FRONTEND              🐍 BACKEND
      React + Vite                Flask
              │                     │
              │                     ▼
              │                🧠 AI Models
              │                     │
              └──────────┬──────────┘
                         ▼
                🎵 Recommendations

For production deployment, configure:

HTTPS

Production API URL

CORS

Environment variables

Secure model/configuration handling

Camera permissions

Production server

🔐 Privacy

MoodTune AI requires camera permission only when the user chooses to use the mood-detection feature.

During local development, the captured image is processed through the local Flask backend.

For production deployment, the application should implement clear privacy practices, secure data handling, and appropriate consent.

🛡️ Security Considerations

For production use, consider:

HTTPS

Restricted CORS

Image validation

File-size restrictions

Rate limiting

Secure environment variables

Input sanitization

Safe error handling

Avoiding unnecessary image storage

Proper authentication where needed

🐛 Troubleshooting

npm run dev shows "port already in use"

Vite may automatically select another port.

Example:

Port 5173 is in use.
Port 5174 is in use.

Local: http://localhost:5175/

Open the URL shown by Vite.

📷 Camera is not opening

Check:

Camera permission is allowed.

Camera is connected.

Another application is not using the camera.

Browser supports camera access.

Production deployment uses HTTPS.

❌ Backend connection error

Make sure Flask is running:

python app.py

Verify:

http://localhost:5000/

Then check the frontend API URL.

🧠 Mood detection fails

Check:

The backend is running.

AI model files exist.

Camera frame is available.

Face is clearly visible.

The captured image is valid.

Frontend and backend URLs match.

💼 Resume-Friendly Project Description

MoodTune AI — AI-Powered Mood-Based Music Recommendation System

Tech Stack: React.js, Vite, Python, Flask, OpenCV, ONNX, REST API

Resume Highlights

Developed an AI-powered full-stack web application using React, Vite, Python, Flask, and OpenCV to analyze facial expressions and recommend mood-based music.

Implemented a computer-vision emotion detection pipeline with browser camera integration, facial-expression analysis, emotion classification, and confidence-score visualization.

Built a 280+ song Bollywood and Haryanvi recommendation library with dynamic mood-specific playlist selection and external music search functionality.

Designed a REST API-based frontend-backend architecture for image processing, emotion inference, mood classification, and personalized recommendation delivery.

🏆 Technical Highlights

Area

Skills Demonstrated

🤖 Artificial Intelligence

Emotion Recognition

👁️ Computer Vision

Face Detection & Image Processing

⚛️ Frontend

React + Vite

🐍 Backend

Python + Flask

🔌 APIs

REST API Integration

🧠 Models

ONNX Model Integration

🎵 Recommendation

Mood-Based Playlist Engine

🇮🇳 Music

Bollywood + Haryanvi

🎧 Content

280+ Songs

📊 AI Output

Mood + Confidence

🔧 Development

Git + GitHub

🌐 Product

Full-Stack Web Application

🎯 Skills Demonstrated

Artificial Intelligence
Computer Vision
Facial Expression Recognition
Machine Learning Integration
Python
Flask
React.js
Vite
JavaScript
HTML5
CSS3
REST APIs
OpenCV
ONNX
Image Processing
API Integration
Frontend Development
Backend Development
Git
GitHub
Responsive Web Design
Debugging

🧩 Challenges Solved

📷 Camera Integration

Connected browser camera functionality with React while managing camera permissions and stream lifecycle.

🖼️ Image Processing

Captured camera frames and prepared image data for backend processing.

🔌 Frontend–Backend Integration

Connected the React interface with Flask through REST API communication.

🧠 AI Integration

Integrated facial-analysis model assets into the backend processing pipeline.

🎭 Mood Mapping

Converted detected emotional categories into useful music categories.

🎵 Recommendation Logic

Mapped moods to curated music collections containing Bollywood and Haryanvi songs.

🎨 User Experience

Created a clear interface that allows users to understand the complete AI workflow without technical knowledge.

📚 Learning Outcomes

Through the development of MoodTune AI, practical experience was gained in:

Full-stack application development

React component development

Flask backend development

REST API communication

Computer vision

Facial-expression recognition

AI model integration

Image processing

Browser camera APIs

Dynamic UI rendering

Git and GitHub

Debugging

Application architecture

Deployment preparation

🔮 Future Enhancements

🎧 Spotify Integration

Create and manage personalized playlists through Spotify APIs.

▶️ YouTube Music Integration

Improve external music integration and playback workflows.

🧠 Advanced Emotion Models

Use newer and more accurate emotion-recognition models.

👥 Multi-Face Detection

Analyze multiple faces and determine group mood.

📈 Mood History

Track and visualize mood patterns over time.

Example:

Monday      😊 Happy
Tuesday     😐 Neutral
Wednesday   😢 Sad
Thursday    😊 Happy
Friday      😲 Surprised

❤️ Personal Preferences

Combine mood with:

Favorite artists

Favorite genres

Preferred language

Listening history

Bollywood/Haryanvi preference

Future recommendation formula:

Detected Mood
      +
User Preferences
      +
Listening History
      ↓
Advanced Personalized Recommendation

📱 Mobile Application

Build dedicated Android/iOS versions.

☁️ Cloud AI Inference

Deploy the AI processing layer as a scalable cloud service.

🎙️ Voice + Emotion

Combine facial expression with optional voice/text-based mood input.

🛣️ Development Roadmap

✅ Completed

React frontend

Vite development setup

Flask backend

Browser camera integration

Face detection pipeline

Facial-expression recognition

Mood classification

Confidence score display

Mood-based recommendations

Bollywood music library

Haryanvi music library

280+ song collection

External music search

GitHub repository

🔜 Planned

Production deployment

Spotify integration

User accounts

Mood history

Advanced recommendation engine

Mobile application

Improved AI accuracy

Real-time recommendation updates

🧪 Example User Journey

Imagine a user opens MoodTune AI after a long day.

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

The entire experience is designed around:

INPUT → AI → DECISION → RECOMMENDATION

🌈 Product Vision

MoodTune AI can evolve from a simple mood-based recommendation application into a broader emotion-aware music assistant.

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
          🧠 Smart Recommendation
                    ↓
               🎧 Playlist

The long-term goal is to make music discovery more contextual, adaptive, and personalized.

🤝 Contributing

Contributions are welcome.

1. Fork the Repository

Create your own fork.

2. Clone It

git clone https://github.com/riyagarg3729/MoodTuneAI.git

3. Create a Branch

git checkout -b feature/new-feature

4. Make Changes

Implement and test your improvements.

5. Commit

git add .
git commit -m "Add new feature"

6. Push

git push origin feature/new-feature

7. Pull Request

Open a Pull Request with a clear description of your changes.

⭐ Support

If you like MoodTune AI, consider supporting the project:

⭐ Star the repository
🍴 Fork the project
🐛 Report bugs
💡 Suggest improvements
🔧 Contribute features

🔗 Repository

GitHub

MoodTune AI

https://github.com/riyagarg3729/MoodTuneAI

👩‍💻 Author

Riya Garg

Engineering Student | AI & Web Development Enthusiast

Interested in:

Artificial Intelligence

Machine Learning

Computer Vision

Full-Stack Development

Automation

Innovative Software Solutions

GitHub

https://github.com/riyagarg3729

📄 License

This project is intended for:

Educational purposes

Portfolio demonstration

Learning

AI experimentation

Full-stack development practice

Music metadata and external music-search links are used for recommendation purposes. Actual music playback is handled by the respective external platform and remains subject to its terms and policies.

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=7C4DFF&height=120&section=footer" width="100%" />
</p>

<p align="center">
  <strong>🎵 MoodTune AI</strong>
</p>

<p align="center">
  <strong>Your Mood. Your Music.</strong>
</p>

<p align="center">
  🎭 Detect &nbsp; • &nbsp; 🧠 Understand &nbsp; • &nbsp; 🎵 Recommend &nbsp; • &nbsp; 🎧 Enjoy
</p>

<p align="center">
  Made with ❤️ using React • Python • Flask • OpenCV • AI
</p>