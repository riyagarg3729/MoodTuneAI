import cv2
from emotion import predict_emotion
from music import recommend_music

# =========================
# Face Detection Model
# =========================

FACE_MODEL = "models/face_detection_yunet_2023mar.onnx"

detector = cv2.FaceDetectorYN.create(
    FACE_MODEL,
    "",
    (320, 320),
    0.9,
    0.3,
    5000
)

# =========================
# Camera
# =========================

camera = cv2.VideoCapture(0)

if not camera.isOpened():
    print("❌ Camera open nahi ho raha")
    exit()

print("✅ MoodTune AI Started")
print("Press Q to exit")

# =========================
# Main Loop
# =========================

while True:

    success, frame = camera.read()

    if not success:
        print("❌ Frame nahi mila")
        break

    # Mirror camera
    frame = cv2.flip(frame, 1)

    height, width = frame.shape[:2]

    detector.setInputSize((width, height))

    _, faces = detector.detect(frame)

    if faces is not None:

        for face in faces:

            x, y, w, h = face[:4].astype(int)

            # Keep coordinates inside frame
            x = max(0, x)
            y = max(0, y)
            w = min(w, width - x)
            h = min(h, height - y)

            face_crop = frame[y:y+h, x:x+w]

            if face_crop.size > 0:

                try:

                    # =========================
                    # Emotion Detection
                    # =========================

                    emotion, confidence = predict_emotion(face_crop)

                    # =========================
                    # Music Recommendation
                    # =========================

                    songs = recommend_music(emotion)

                    label = f"{emotion} {confidence * 100:.1f}%"

                    music_label = f"Music: {songs[0]}"

                    # =========================
                    # Face Box
                    # =========================

                    cv2.rectangle(
                        frame,
                        (x, y),
                        (x + w, y + h),
                        (0, 255, 0),
                        2
                    )

                    # =========================
                    # Emotion Text
                    # =========================

                    cv2.putText(
                        frame,
                        label,
                        (x, max(30, y - 10)),
                        cv2.FONT_HERSHEY_SIMPLEX,
                        0.8,
                        (0, 255, 0),
                        2
                    )

                    # =========================
                    # Music Recommendation
                    # =========================

                    cv2.putText(
                        frame,
                        music_label,
                        (x, y + h + 30),
                        cv2.FONT_HERSHEY_SIMPLEX,
                        0.65,
                        (255, 255, 0),
                        2
                    )

                except Exception as e:

                    print("Emotion error:", e)

    # =========================
    # App Title
    # =========================

    cv2.putText(
        frame,
        "MoodTune AI",
        (20, 40),
        cv2.FONT_HERSHEY_SIMPLEX,
        1,
        (0, 255, 0),
        2
    )

    # =========================
    # Display
    # =========================

    cv2.imshow(
        "MoodTune AI - Emotion + Music",
        frame
    )

    # Press Q to exit
    if cv2.waitKey(1) & 0xFF == ord("q"):
        break


# =========================
# Cleanup
# =========================

camera.release()
cv2.destroyAllWindows()

print("👋 MoodTune AI stopped")