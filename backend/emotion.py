import cv2
import numpy as np

MODEL_PATH = "models/facial_expression_recognition_mobilefacenet_2022july.onnx"

model = cv2.dnn.readNetFromONNX(MODEL_PATH)

EMOTIONS = [
    "ANGRY",
    "DISGUST",
    "FEARFUL",
    "HAPPY",
    "NEUTRAL",
    "SAD",
    "SURPRISED"
]


def predict_emotion(face):

    face = cv2.resize(face, (112, 112))

    face = cv2.cvtColor(
        face,
        cv2.COLOR_BGR2RGB
    )

    face = face.astype(np.float32) / 255.0

    face = np.transpose(
        face,
        (2, 0, 1)
    )

    face = np.expand_dims(
        face,
        axis=0
    )

    model.setInput(face)

    output = model.forward()

    probabilities = output[0]

    probabilities = np.exp(
        probabilities - np.max(probabilities)
    )

    probabilities = (
        probabilities /
        np.sum(probabilities)
    )

    index = np.argmax(probabilities)

    emotion = EMOTIONS[index]

    confidence = float(
        probabilities[index]
    )

    return emotion, confidence


print("✅ Emotion model ready")