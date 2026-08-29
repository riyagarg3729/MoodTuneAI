import { useEffect, useRef, useState } from "react";
import "./App.css";


// ============================================================
// MOOD PLAYLISTS
// 7 MOODS × 40 SONGS = 280 SONGS
// Bollywood + Haryanvi
// ============================================================

const PLAYLISTS = {

  Happy: [
    ["Gallan Goodiyaan", "Dil Dhadakne Do", "🎉"],
    ["Badtameez Dil", "Yeh Jawaani Hai Deewani", "🔥"],
    ["London Thumakda", "Queen", "💃"],
    ["Kar Gayi Chull", "Kapoor & Sons", "😎"],
    ["Abhi Toh Party Shuru Hui Hai", "Khoobsurat", "🎊"],
    ["Nachde Ne Saare", "Baar Baar Dekho", "💃"],
    ["Kala Chashma", "Baar Baar Dekho", "🕶️"],
    ["Morni Banke", "Badhaai Ho", "🦚"],
    ["What Jhumka?", "Rocky Aur Rani Kii Prem Kahaani", "✨"],
    ["Jhoome Jo Pathaan", "Pathaan", "🔥"],
    ["Ghungroo", "War", "🎵"],
    ["Nashe Si Chadh Gayi", "Befikre", "🥳"],
    ["Ullu Ka Pattha", "Jagga Jasoos", "🦉"],
    ["Aankh Marey", "Simmba", "😎"],
    ["Makhna", "Drive", "🎶"],
    ["High Heels Te Nachche", "Ki & Ka", "👠"],
    ["Sweety Tera Drama", "Bareilly Ki Barfi", "😂"],
    ["Tamma Tamma Again", "Badrinath Ki Dulhania", "💃"],
    ["The Breakup Song", "Ae Dil Hai Mushkil", "🎤"],
    ["Cutiepie", "Ae Dil Hai Mushkil", "❤️"],
    ["Gal Ban Gayi", "T-Series", "🎵"],
    ["Dil Chori", "Sonu Ke Titu Ki Sweety", "🥳"],
    ["Bom Diggy Diggy", "Sonu Ke Titu Ki Sweety", "🔥"],
    ["Coca Cola", "Luka Chuppi", "🥤"],
    ["Proper Patola", "Namaste England", "💃"],
    ["Milegi Milegi", "Stree", "🎶"],
    ["Kamariya", "Stree", "🔥"],
    ["Chogada", "Loveyatri", "💃"],
    ["Dholida", "Gangubai Kathiawadi", "🥁"],
    ["Param Sundari", "Mimi", "✨"],
    ["Genda Phool", "Delhi-6", "🌸"],
    ["Ainvayi Ainvayi", "Band Baaja Baaraat", "🎉"],
    ["Sadi Gali", "Tanu Weds Manu", "💃"],
    ["Aahun Aahun", "Love Aaj Kal", "🎵"],
    ["Nagada Sang Dhol", "Goliyon Ki Raasleela Ram-Leela", "🥁"],
    ["Mauja Hi Mauja", "Jab We Met", "😄"],
    ["Hawa Hawai", "Shaitaan", "🎶"],
    ["Tauba Tauba", "Bad Newz", "🔥"],
    ["Aaj Ki Party", "Bajrangi Bhaijaan", "🎊"],
    ["What Makes You Beautiful", "One Direction", "🎵"]
  ],

  Sad: [
    ["Agar Tum Saath Ho", "Tamasha", "💔"],
    ["Channa Mereya", "Ae Dil Hai Mushkil", "🥀"],
    ["Kabira", "Yeh Jawaani Hai Deewani", "💙"],
    ["Hamari Adhuri Kahani", "Hamari Adhuri Kahani", "💔"],
    ["Phir Bhi Tumko Chaahunga", "Half Girlfriend", "🥺"],
    ["Tujhe Kitna Chahne Lage", "Kabir Singh", "❤️"],
    ["Bekhayali", "Kabir Singh", "💔"],
    ["Kaise Hua", "Kabir Singh", "🥀"],
    ["Thodi Jagah", "Marjaavaan", "💙"],
    ["Tera Ban Jaunga", "Kabir Singh", "❤️"],
    ["Hawayein", "Jab Harry Met Sejal", "🌧️"],
    ["Ae Dil Hai Mushkil", "Ae Dil Hai Mushkil", "💔"],
    ["Bhula Dena", "Aashiqui 2", "🥀"],
    ["Tum Hi Ho", "Aashiqui 2", "💔"],
    ["Hum Mar Jayenge", "Aashiqui 2", "🥺"],
    ["Piya Aaye Na", "Aashiqui 2", "💙"],
    ["Milne Mujhse Aayi", "Aashiqui 2", "🥀"],
    ["Sun Raha Hai", "Aashiqui 2", "🎧"],
    ["Lo Maan Liya", "Raaz Reboot", "💔"],
    ["Main Phir Bhi Tumko Chaahunga", "Half Girlfriend", "🥺"],
    ["Duaa", "Shanghai", "🌙"],
    ["Iktara", "Wake Up Sid", "🌃"],
    ["Tu Jaane Na", "Ajab Prem Ki Ghazab Kahani", "💙"],
    ["Tere Bina", "Guru", "🥀"],
    ["Saiyyan", "Kailash Kher", "💔"],
    ["Tujhse Naraz Nahi Zindagi", "Masoom", "🌧️"],
    ["Chitthi", "Shiddat", "📜"],
    ["Phir Le Aya Dil", "Barfi!", "💙"],
    ["Kahani Suno 2.0", "Kaifi Khalil", "🎧"],
    ["Maan Meri Jaan", "King", "❤️"],
    ["Alag Aasmaan", "Anuv Jain", "🌌"],
    ["Husn", "Anuv Jain", "💙"],
    ["Baarishein", "Anuv Jain", "🌧️"],
    ["Gul", "Anuv Jain", "🌸"],
    ["Jo Tum Mere Ho", "Anuv Jain", "❤️"],
    ["Ranjish Hi Sahi", "Ali Sethi", "🥀"],
    ["Afsos", "Anuv Jain", "💔"],
    ["Choo Lo", "The Local Train", "🎧"],
    ["Aaoge Tum Kabhi", "The Local Train", "🌧️"]
  ],

  Angry: [
    ["Sadda Haq", "Rockstar", "🔥"],
    ["Zinda", "Bhaag Milkha Bhaag", "⚡"],
    ["Apna Time Aayega", "Gully Boy", "💪"],
    ["Sher Khul Gaye", "Fighter", "🔥"],
    ["Jai Jai Shivshankar", "War", "⚡"],
    ["Malhari", "Bajirao Mastani", "🔥"],
    ["Dangal", "Dangal", "💪"],
    ["Brothers Anthem", "Brothers", "🔥"],
    ["Chak De India", "Chak De India", "🏆"],
    ["Kar Har Maidaan Fateh", "Sanju", "💪"],
    ["Sultan", "Sultan", "🔥"],
    ["Ziddi Dil", "Mary Kom", "⚡"],
    ["Bhaag DK Bose", "Delhi Belly", "😎"],
    ["Jee Karda", "Singh Is Kinng", "🔥"],
    ["Aarambh Hai Prachand", "Piyush Mishra", "⚔️"],
    ["Get Ready To Fight", "Baaghi", "🔥"],
    ["Dus Bahane", "Dus", "🎵"],
    ["Dhoom Again", "Dhoom 2", "🏍️"],
    ["Dhoom Machale", "Dhoom", "🔥"],
    ["Bang Bang", "Bang Bang", "⚡"],
    ["Jee Veerey", "Piyush Mishra", "🔥"],
    ["Soorma Anthem", "Soorma", "🏆"],
    ["Parwah Nahi", "M.S. Dhoni", "💪"],
    ["Bhaag Milkha Bhaag", "Bhaag Milkha Bhaag", "🏃"],
    ["Chale Chalo", "Lagaan", "🏆"],
    ["Lakshya", "Lakshya", "🎯"],
    ["Aashayein", "Iqbal", "💪"],
    ["Ruk Ja O Dil Deewane", "DDLJ", "🔥"],
    ["Jai Ho", "Slumdog Millionaire", "🏆"],
    ["Jhoom Barabar Jhoom", "Jhoom Barabar Jhoom", "🔥"],
    ["Tunak Tunak Tun", "Daler Mehndi", "🎵"],
    ["Bhangra Ta Sajda", "Veere Di Wedding", "🔥"],
    ["Haryanvi Beat", "Various", "🎵"],
    ["Desi Desi Na Bolya Kar", "Raju Punjabi", "🔥"],
    ["Yaar Haryane Te", "Masoom Sharma", "💪"],
    ["Afeem", "KD Desi Rock", "🔥"],
    ["Solid Body", "Raju Punjabi", "💪"],
    ["Bawli Tared", "Diler Kharkiya", "🔥"],
    ["Bahadurgarh", "Sumit Goswami", "⚡"],
    ["Tagdi", "Haryanvi", "🔥"]
  ],

  Neutral: [
    ["Iktara", "Wake Up Sid", "🌙"],
    ["Khaabon Ke Parinday", "Zindagi Na Milegi Dobara", "🌤️"],
    ["Safarnama", "Tamasha", "🛣️"],
    ["Ilahi", "Yeh Jawaani Hai Deewani", "🌄"],
    ["Phir Se Ud Chala", "Rockstar", "🕊️"],
    ["Aao Milo Chalo", "Jab We Met", "🚶"],
    ["Love You Zindagi", "Dear Zindagi", "🌸"],
    ["Shaam", "Aisha", "🌆"],
    ["Kho Gaye Hum Kahan", "Baar Baar Dekho", "🌃"],
    ["Kasoor", "Prateek Kuhad", "🎧"],
    ["cold/mess", "Prateek Kuhad", "🌙"],
    ["Co2", "Prateek Kuhad", "🎵"],
    ["Gul", "Anuv Jain", "🌸"],
    ["Alag Aasmaan", "Anuv Jain", "🌌"],
    ["Husn", "Anuv Jain", "✨"],
    ["Riha", "Anuv Jain", "🎧"],
    ["Baarishein", "Anuv Jain", "🌧️"],
    ["Choo Lo", "The Local Train", "🎸"],
    ["Aaoge Tum Kabhi", "The Local Train", "🎵"],
    ["Dil Mere", "The Local Train", "❤️"],
    ["Aaftab", "The Local Train", "🌅"],
    ["Monta Re", "Lootera", "🎶"],
    ["O Rangrez", "Bhaag Milkha Bhaag", "🎨"],
    ["Tu Bin Bataye", "Rang De Basanti", "🌤️"],
    ["Kyun", "Barfi!", "🌙"],
    ["Aashiyan", "Barfi!", "🏠"],
    ["Kyon", "Barfi!", "🎧"],
    ["Nazm Nazm", "Bareilly Ki Barfi", "🌸"],
    ["Bolna", "Kapoor & Sons", "❤️"],
    ["Pehli Dafa", "Atif Aslam", "🎵"],
    ["Tera Hone Laga Hoon", "Ajab Prem Ki Ghazab Kahani", "❤️"],
    ["Ajab Si", "Om Shanti Om", "✨"],
    ["Pee Loon", "Once Upon a Time in Mumbaai", "🎵"],
    ["Tum Se Hi", "Jab We Met", "❤️"],
    ["Aankhon Se Batana", "Dikshant", "👀"],
    ["Bikhra", "Abdul Hannan", "🎧"],
    ["Faasle", "Aditya Rikhari", "🌌"],
    ["Sajni", "Laapataa Ladies", "🌸"],
    ["Ve Kamleya", "Rocky Aur Rani Kii Prem Kahaani", "❤️"],
    ["O Maahi", "Dunki", "🌙"]
  ],

  Surprised: [
    ["Jhoome Jo Pathaan", "Pathaan", "🔥"],
    ["What Jhumka?", "Rocky Aur Rani Kii Prem Kahaani", "✨"],
    ["Ghungroo", "War", "🎵"],
    ["Tauba Tauba", "Bad Newz", "🔥"],
    ["Aaj Ki Party", "Bajrangi Bhaijaan", "🎉"],
    ["Kala Chashma", "Baar Baar Dekho", "🕶️"],
    ["Aankh Marey", "Simmba", "😎"],
    ["Morni Banke", "Badhaai Ho", "🦚"],
    ["Kamariya", "Stree", "🔥"],
    ["Chogada", "Loveyatri", "💃"],
    ["Dholida", "Gangubai Kathiawadi", "🥁"],
    ["Milegi Milegi", "Stree", "🎵"],
    ["Muqabla", "Street Dancer 3D", "🔥"],
    ["Illegal Weapon 2.0", "Street Dancer 3D", "⚡"],
    ["Garmi", "Street Dancer 3D", "🔥"],
    ["Nach Meri Rani", "Guru Randhawa", "💃"],
    ["High Rated Gabru", "Guru Randhawa", "🔥"],
    ["Lahore", "Guru Randhawa", "🎵"],
    ["Suit Suit", "Hindi Medium", "👗"],
    ["Ban Ja Tu Meri Rani", "Tumhari Sulu", "❤️"],
    ["Proper Patola", "Namaste England", "💃"],
    ["Coca Cola", "Luka Chuppi", "🥤"],
    ["Bom Diggy Diggy", "Sonu Ke Titu Ki Sweety", "🔥"],
    ["Dil Chori", "Sonu Ke Titu Ki Sweety", "🎉"],
    ["Tamma Tamma Again", "Badrinath Ki Dulhania", "💃"],
    ["Sweety Tera Drama", "Bareilly Ki Barfi", "😂"],
    ["The Breakup Song", "Ae Dil Hai Mushkil", "🎤"],
    ["Cutiepie", "Ae Dil Hai Mushkil", "❤️"],
    ["Kar Gayi Chull", "Kapoor & Sons", "😎"],
    ["London Thumakda", "Queen", "💃"],
    ["Sadi Gali", "Tanu Weds Manu", "🎵"],
    ["Nagada Sang Dhol", "Ram-Leela", "🥁"],
    ["Malhari", "Bajirao Mastani", "🔥"],
    ["Desi Girl", "Dostana", "💃"],
    ["It's Magic", "Koi Mil Gaya", "✨"],
    ["Haryanvi Beat", "Haryanvi", "🔥"],
    ["Gajban", "Vishvajeet Choudhary", "💃"],
    ["Bahadurgarh", "Sumit Goswami", "🔥"],
    ["Desi Desi Na Bolya Kar", "Raju Punjabi", "🎵"],
    ["Chora Haryane Aala", "Haryanvi", "🔥"]
  ],

  Anxious: [
    ["Iktara", "Wake Up Sid", "🌸"],
    ["Shaam", "Aisha", "🌆"],
    ["Love You Zindagi", "Dear Zindagi", "💜"],
    ["Khaabon Ke Parinday", "ZNMD", "🌤️"],
    ["Ilahi", "YJHD", "🌄"],
    ["Safarnama", "Tamasha", "🛣️"],
    ["Aashiyan", "Barfi!", "🏠"],
    ["Tu Bin Bataye", "Rang De Basanti", "🌿"],
    ["Nazm Nazm", "Bareilly Ki Barfi", "🌸"],
    ["Kho Gaye Hum Kahan", "Baar Baar Dekho", "🌃"],
    ["Aao Milo Chalo", "Jab We Met", "🚶"],
    ["Phir Se Ud Chala", "Rockstar", "🕊️"],
    ["O Rangrez", "Bhaag Milkha Bhaag", "🎨"],
    ["Kun Faya Kun", "Rockstar", "🕌"],
    ["Arziyan", "Delhi-6", "🙏"],
    ["Maula Mere Maula", "Anwar", "💙"],
    ["Tu Hi Hai", "Dear Zindagi", "💜"],
    ["Love Me Thoda Aur", "Yaariyan", "🎵"],
    ["Aaj Jaane Ki Zid Na Karo", "Farida Khanum", "🌙"],
    ["Aahista", "Laila Majnu", "🌸"],
    ["Phir Le Aya Dil", "Barfi!", "💙"],
    ["Dariya", "Baar Baar Dekho", "🌊"],
    ["Manjha", "Kai Po Che!", "🪁"],
    ["Shaam Tanha", "Karwaan", "🌆"],
    ["Chota Sa Fasana", "Karwaan", "🛣️"],
    ["Bade Achhe Lagte Hain", "Balika Badhu", "🌸"],
    ["Yeh Haseen Wadiyan", "Roja", "🏔️"],
    ["Pani Da Rang", "Vicky Donor", "💙"],
    ["Kyon", "Barfi!", "🌙"],
    ["Saibo", "Shor in the City", "❤️"],
    ["Tum Se Hi", "Jab We Met", "💜"],
    ["Ajab Si", "Om Shanti Om", "✨"],
    ["Tera Hone Laga Hoon", "Ajab Prem", "❤️"],
    ["Pee Loon", "Once Upon a Time", "🎵"],
    ["O Maahi", "Dunki", "🌙"],
    ["Sajni", "Laapataa Ladies", "🌸"],
    ["Husn", "Anuv Jain", "🎧"],
    ["Alag Aasmaan", "Anuv Jain", "🌌"],
    ["Baarishein", "Anuv Jain", "🌧️"],
    ["Choo Lo", "The Local Train", "🎸"]
  ],

  Uncomfortable: [
    ["Calm Down", "Rema", "🌿"],
    ["Kun Faya Kun", "Rockstar", "🕊️"],
    ["Iktara", "Wake Up Sid", "🌸"],
    ["Shaam", "Aisha", "🌆"],
    ["Love You Zindagi", "Dear Zindagi", "💜"],
    ["Khaabon Ke Parinday", "ZNMD", "🌤️"],
    ["Safarnama", "Tamasha", "🛣️"],
    ["Ilahi", "YJHD", "🌄"],
    ["Aashiyan", "Barfi!", "🏠"],
    ["Tu Bin Bataye", "Rang De Basanti", "🌿"],
    ["Nazm Nazm", "Bareilly Ki Barfi", "🌸"],
    ["Saibo", "Shor in the City", "❤️"],
    ["Pani Da Rang", "Vicky Donor", "💙"],
    ["Phir Le Aya Dil", "Barfi!", "🌙"],
    ["Bolna", "Kapoor & Sons", "❤️"],
    ["Agar Tum Saath Ho", "Tamasha", "💙"],
    ["Hawayein", "Jab Harry Met Sejal", "🌬️"],
    ["Tera Ban Jaunga", "Kabir Singh", "❤️"],
    ["Pehli Dafa", "Atif Aslam", "🎵"],
    ["Tera Hone Laga Hoon", "Ajab Prem", "❤️"],
    ["Tum Se Hi", "Jab We Met", "💜"],
    ["Pee Loon", "OUATIM", "🎵"],
    ["Ajab Si", "Om Shanti Om", "✨"],
    ["Kyon", "Barfi!", "🌙"],
    ["Dariya", "Baar Baar Dekho", "🌊"],
    ["Chota Sa Fasana", "Karwaan", "🛣️"],
    ["Shaam Tanha", "Karwaan", "🌆"],
    ["Manjha", "Kai Po Che!", "🪁"],
    ["Aahista", "Laila Majnu", "🌸"],
    ["O Rangrez", "Bhaag Milkha Bhaag", "🎨"],
    ["Arziyan", "Delhi-6", "🙏"],
    ["Maula Mere Maula", "Anwar", "💙"],
    ["Sajni", "Laapataa Ladies", "🌸"],
    ["O Maahi", "Dunki", "🌙"],
    ["Husn", "Anuv Jain", "🎧"],
    ["Baarishein", "Anuv Jain", "🌧️"],
    ["Alag Aasmaan", "Anuv Jain", "🌌"],
    ["Gul", "Anuv Jain", "🌸"],
    ["Choo Lo", "The Local Train", "🎸"],
    ["Aaoge Tum Kabhi", "The Local Train", "🎵"]
  ]
};


// ============================================================
// CONVERT PLAYLIST FORMAT
// ============================================================

const makeSongs = (playlist) => {

  return playlist.map(
    ([title, artist, emoji]) => ({
      title,
      artist,
      emoji
    })
  );
};


// ============================================================
// APP
// ============================================================

function App() {

  // ==========================================================
  // STATE
  // ==========================================================

  const [mood, setMood] = useState("Happy");

  const [confidence, setConfidence] =
    useState(87);

  const [songs, setSongs] =
    useState(makeSongs(PLAYLISTS.Happy));

  const [cameraOn, setCameraOn] =
    useState(false);

  const [detecting, setDetecting] =
    useState(false);

  const [cameraError, setCameraError] =
    useState("");

  const [detectionError, setDetectionError] =
    useState("");

  // ==========================================================
  // REFS
  // ==========================================================

  const videoRef =
    useRef(null);

  const streamRef =
    useRef(null);

  const musicSectionRef =
    useRef(null);


  // ==========================================================
  // EMOJI
  // ==========================================================

  const getEmoji = () => {

    switch (mood) {

      case "Happy":
        return "😊";

      case "Sad":
        return "😢";

      case "Angry":
        return "😠";

      case "Neutral":
        return "😐";

      case "Surprised":
        return "😲";

      case "Anxious":
        return "😟";

      case "Uncomfortable":
        return "😕";

      default:
        return "🙂";
    }
  };


  // ==========================================================
  // UPDATE PLAYLIST BASED ON MOOD
  // ==========================================================

  const updatePlaylist = (detectedMood) => {

    let playlistMood =
      detectedMood;

    // Backend mood normalization
    if (
      detectedMood === "Fear" ||
      detectedMood === "fear"
    ) {
      playlistMood = "Anxious";
    }

    if (
      detectedMood === "Disgust" ||
      detectedMood === "disgust"
    ) {
      playlistMood = "Uncomfortable";
    }

    if (
      detectedMood === "Surprise" ||
      detectedMood === "surprise"
    ) {
      playlistMood = "Surprised";
    }

    if (
      detectedMood === "happy"
    ) {
      playlistMood = "Happy";
    }

    if (
      detectedMood === "sad"
    ) {
      playlistMood = "Sad";
    }

    if (
      detectedMood === "angry"
    ) {
      playlistMood = "Angry";
    }

    if (
      detectedMood === "neutral"
    ) {
      playlistMood = "Neutral";
    }

    const selectedPlaylist =
      PLAYLISTS[playlistMood];

    if (selectedPlaylist) {

      const newSongs =
        makeSongs(selectedPlaylist);

      setSongs(newSongs);

      console.log(
        `🎵 ${playlistMood} playlist opened`
      );

      console.log(
        `🎵 Total songs: ${newSongs.length}`
      );

      // Automatically scroll to playlist
      setTimeout(() => {

        if (
          musicSectionRef.current
        ) {

          musicSectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      }, 700);
    }
  };


  // ==========================================================
  // CAMERA STREAM
  // ==========================================================

  useEffect(() => {

    if (
      cameraOn &&
      streamRef.current &&
      videoRef.current
    ) {

      const video =
        videoRef.current;

      video.srcObject =
        streamRef.current;

      video.onloadedmetadata =
        async () => {

          try {

            await video.play();

            console.log(
              "📹 Camera ready:",
              video.videoWidth,
              video.videoHeight
            );

          } catch (error) {

            console.error(
              "Video play error:",
              error
            );

          }

        };
    }

  }, [cameraOn]);


  // ==========================================================
  // START CAMERA
  // ==========================================================

  const startCamera = async () => {

    try {

      setCameraError("");
      setDetectionError("");

      if (
        streamRef.current
      ) {

        setCameraOn(true);

        return streamRef.current;
      }

      if (
        !navigator.mediaDevices ||
        !navigator.mediaDevices.getUserMedia
      ) {

        throw new Error(
          "Camera API browser me available nahi hai."
        );
      }

      const stream =
        await navigator.mediaDevices.getUserMedia({

          video: {

            width: {
              ideal: 640
            },

            height: {
              ideal: 480
            },

            facingMode: "user"

          },

          audio: false

        });

      streamRef.current =
        stream;

      setCameraOn(true);

      console.log(
        "✅ Camera permission granted"
      );

      return stream;

    } catch (error) {

      console.error(
        "Camera error:",
        error
      );

      setCameraError(
        "Camera access nahi mil paya. Browser me Camera permission Allow karo."
      );

      throw error;
    }
  };


  // ==========================================================
  // STOP CAMERA
  // ==========================================================

  const stopCamera = () => {

    if (
      streamRef.current
    ) {

      streamRef.current
        .getTracks()
        .forEach(
          (track) => track.stop()
        );

      streamRef.current =
        null;
    }

    if (
      videoRef.current
    ) {

      videoRef.current.srcObject =
        null;
    }

    setCameraOn(false);

    console.log(
      "⏹ Camera stopped"
    );
  };


  // ==========================================================
  // WAIT FOR VIDEO
  // ==========================================================

  const waitForVideo =
    async () => {

      for (
        let i = 0;
        i < 60;
        i++
      ) {

        const video =
          videoRef.current;

        if (
          video &&
          video.readyState >= 2 &&
          video.videoWidth > 0 &&
          video.videoHeight > 0
        ) {

          console.log(
            "✅ Video ready:",
            video.videoWidth,
            video.videoHeight
          );

          return video;
        }

        await new Promise(
          (resolve) =>
            setTimeout(
              resolve,
              200
            )
        );
      }

      throw new Error(
        "Camera video is not ready. Please make sure your face is visible."
      );
    };


  // ==========================================================
  // CAPTURE IMAGE
  // ==========================================================

  const captureImage = () => {

    const video =
      videoRef.current;

    if (!video) {

      throw new Error(
        "Camera video element not found."
      );
    }

    if (
      video.videoWidth <= 0 ||
      video.videoHeight <= 0
    ) {

      throw new Error(
        "Camera frame is not available."
      );
    }

    const canvas =
      document.createElement(
        "canvas"
      );

    canvas.width =
      video.videoWidth;

    canvas.height =
      video.videoHeight;

    const context =
      canvas.getContext(
        "2d"
      );

    if (!context) {

      throw new Error(
        "Canvas is not supported."
      );
    }

    // Mirror image
    context.translate(
      canvas.width,
      0
    );

    context.scale(
      -1,
      1
    );

    context.drawImage(
      video,
      0,
      0,
      canvas.width,
      canvas.height
    );

    console.log(
      "📸 Image captured"
    );

    return canvas;
  };


  // ==========================================================
  // DETECT MOOD
  // ==========================================================

  const detectMood =
    async () => {

      if (detecting)
        return;

      try {

        setDetecting(true);

        setCameraError("");

        setDetectionError("");

        console.log(
          "🎭 Starting mood detection..."
        );


        // ----------------------------------------------
        // START CAMERA
        // ----------------------------------------------

        if (
          !streamRef.current
        ) {

          await startCamera();

          await new Promise(
            (resolve) =>
              setTimeout(
                resolve,
                1200
              )
          );
        }


        // ----------------------------------------------
        // WAIT VIDEO
        // ----------------------------------------------

        await waitForVideo();


        // ----------------------------------------------
        // CAPTURE
        // ----------------------------------------------

        const canvas =
          captureImage();


        // ----------------------------------------------
        // IMAGE → BLOB
        // ----------------------------------------------

        const blob =
          await new Promise(
            (resolve, reject) => {

              canvas.toBlob(
                (result) => {

                  if (result) {

                    resolve(
                      result
                    );

                  } else {

                    reject(
                      new Error(
                        "Image conversion failed."
                      )
                    );
                  }

                },
                "image/jpeg",
                0.9
              );

            }
          );


        console.log(
          "🖼️ Image size:",
          blob.size
        );


        // ----------------------------------------------
        // FORM DATA
        // ----------------------------------------------

        const formData =
          new FormData();

        formData.append(
          "image",
          blob,
          "mood-capture.jpg"
        );


        // ----------------------------------------------
        // BACKEND
        // ----------------------------------------------

        console.log(
          "📤 Sending image to backend..."
        );

        const response =
          await fetch(
            "https://moodtune-ai-backend.onrender.com/api/detect-mood",
            {
              method: "POST",
              body: formData
            }
          );


        console.log(
          "📡 Backend status:",
          response.status
        );


        // ----------------------------------------------
        // RESPONSE
        // ----------------------------------------------

        let data;

        try {

          data =
            await response.json();

        } catch {

          throw new Error(
            "Backend ne valid JSON response nahi diya."
          );
        }


        console.log(
          "🤖 Backend response:",
          data
        );


        // ----------------------------------------------
        // ERROR
        // ----------------------------------------------

        if (
          !response.ok
        ) {

          throw new Error(
            data?.error ||
            data?.message ||
            `Backend error ${response.status}`
          );
        }


        if (
          data.success === false
        ) {

          throw new Error(
            data?.error ||
            data?.message ||
            "Mood detection failed."
          );
        }


        // ----------------------------------------------
        // MOOD
        // ----------------------------------------------

        if (
          data.mood
        ) {

          console.log(
            "🎭 Detected:",
            data.mood
          );

          setMood(
            data.mood
          );

          // IMPORTANT:
          // Automatically change playlist
          updatePlaylist(
            data.mood
          );
        }


        // ----------------------------------------------
        // CONFIDENCE
        // ----------------------------------------------

        if (
          data.confidence !==
            undefined &&
          data.confidence !==
            null
        ) {

          setConfidence(
            Number(
              data.confidence
            )
          );
        }


        console.log(
          "✅ MOOD DETECTION SUCCESSFUL"
        );

      } catch (error) {

        console.error(
          "❌ Mood detection error:",
          error
        );

        setDetectionError(
          error?.message ||
          "Mood detection failed."
        );

      } finally {

        setDetecting(false);
      }
    };


  // ==========================================================
  // PLAY SONG
  // ==========================================================

  const playSong =
    (song) => {

      const title =
        typeof song === "string"
          ? song
          : song?.title ||
            "Song";

      const artist =
        typeof song === "string"
          ? ""
          : song?.artist ||
            "";

      const query =
        encodeURIComponent(
          `${title} ${artist}`
        );

      window.open(
        `https://www.youtube.com/results?search_query=${query}`,
        "_blank"
      );
    };


  // ==========================================================
  // CLEANUP
  // ==========================================================

  useEffect(() => {

    return () => {

      if (
        streamRef.current
      ) {

        streamRef.current
          .getTracks()
          .forEach(
            (track) =>
              track.stop()
          );

      }

    };

  }, []);


  // ==========================================================
  // UI
  // ==========================================================

  return (

    <div className="app">


      {/* ======================================================
          NAVBAR
      ====================================================== */}

      <nav className="navbar">

        <div className="logo">
          🎵 <span>MoodTune AI</span>
        </div>

        <div className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#playlist">
            Playlist
          </a>

          <a href="#how">
            How it works
          </a>

          <a href="#about">
            About
          </a>

        </div>

      </nav>


      <main id="home">


        {/* ====================================================
            HERO
        ==================================================== */}

        <section className="hero">

          <div className="hero-text">

            <p className="tag">
              AI-POWERED MUSIC EXPERIENCE
            </p>

            <h1>
              Your Mood.
              <br />
              <span>
                Your Music.
              </span>
            </h1>

            <p className="subtitle">

              MoodTune AI detects your
              facial expression and
              recommends music that
              matches your mood.

            </p>


            <button
              className="primary-btn"
              onClick={
                detectMood
              }
              disabled={
                detecting
              }
            >

              {detecting
                ? "🔄 Detecting..."
                : "🎭 Detect My Mood"}

            </button>

          </div>


          {/* ==================================================
              CAMERA
          ================================================== */}

          <div className="camera-card">

            <div className="camera-icon">
              📷
            </div>

            <h2>
              AI Camera
            </h2>

            <p>
              Position your face inside
              the camera
            </p>


            <div className="camera-placeholder">

              {cameraOn ? (

                <video
                  ref={videoRef}
                  className="camera-video"
                  autoPlay
                  playsInline
                  muted
                />

              ) : (

                <div className="camera-message">

                  <span>
                    🙂
                  </span>

                  <small>
                    Camera is currently off
                  </small>

                </div>

              )}

            </div>


            {/* CAMERA ERROR */}

            {cameraError && (

              <div className="detection-error">

                <strong>
                  ⚠️ Camera Error
                </strong>

                <p>
                  {cameraError}
                </p>

              </div>

            )}


            {/* DETECTION ERROR */}

            {detectionError && (

              <div className="detection-error">

                <strong>
                  ⚠️ Mood Detection Error
                </strong>

                <p>
                  {detectionError}
                </p>

              </div>

            )}


            {/* CAMERA BUTTON */}

            {!cameraOn ? (

              <button
                className="camera-btn"
                onClick={
                  startCamera
                }
                disabled={
                  detecting
                }
              >
                📷 Start Camera
              </button>

            ) : (

              <button
                className="camera-btn"
                onClick={
                  stopCamera
                }
                disabled={
                  detecting
                }
              >
                ⏹ Stop Camera
              </button>

            )}


            {/* DETECT BUTTON */}

            <button
              className="detect-btn"
              onClick={
                detectMood
              }
              disabled={
                detecting
              }
            >

              {detecting
                ? "🔄 Detecting Mood..."
                : "🎭 Detect Mood"}

            </button>

          </div>

        </section>


        {/* ====================================================
            CURRENT MOOD
        ==================================================== */}

        <section className="mood-section">

          <p className="section-label">
            CURRENT MOOD
          </p>


          <div className="mood-card">

            <div className="mood-emoji">
              {getEmoji()}
            </div>


            <div className="mood-info">

              <h2>
                {mood}
              </h2>

              <p>
                Emotion detected by AI
              </p>

            </div>


            <div className="confidence">

              <strong>
                {confidence.toFixed(2)}%
              </strong>

              <span>
                Confidence
              </span>

            </div>

          </div>

        </section>


        {/* ====================================================
            PLAYLIST
        ==================================================== */}

        <section
          ref={musicSectionRef}
          id="playlist"
          className="music-section"
        >

          <div className="section-heading">

            <p className="section-label">
              PERSONALIZED FOR YOU
            </p>

            <h2>
              {mood} Playlist 🎧
            </h2>

            <p>
              {songs.length} songs selected
              for your current mood
            </p>

          </div>


          <div className="music-grid">

            {songs.map(
              (song, index) => (

                <div
                  className="song-card"
                  key={index}
                >

                  <div className="album">
                    {song.emoji}
                  </div>


                  <h3>
                    {song.title}
                  </h3>


                  <p>
                    {song.artist}
                  </p>


                  <p>
                    Recommended for your{" "}
                    <strong>
                      {mood.toLowerCase()}
                    </strong>{" "}
                    mood
                  </p>


                  <button
                    onClick={() =>
                      playSong(
                        song
                      )
                    }
                  >
                    ▶ Play
                  </button>

                </div>

              )
            )}

          </div>

        </section>


        {/* ====================================================
            HOW IT WORKS
        ==================================================== */}

        <section
          id="how"
          className="how-section"
        >

          <p className="section-label">
            HOW IT WORKS
          </p>

          <h2>
            Music that understands you.
          </h2>


          <div className="steps">

            <div>

              <span>
                01
              </span>

              <h3>
                Show your face
              </h3>

              <p>
                Allow MoodTune AI
                to access your camera.
              </p>

            </div>


            <div>

              <span>
                02
              </span>

              <h3>
                AI detects mood
              </h3>

              <p>
                DeepFace analyzes
                your facial expression.
              </p>

            </div>


            <div>

              <span>
                03
              </span>

              <h3>
                Get your playlist
              </h3>

              <p>
                A personalized
                40-song playlist
                opens automatically.
              </p>

            </div>

          </div>

        </section>

      </main>


      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer id="about">

        <div>
          🎵 MoodTune AI
        </div>

        <p>
          AI-powered mood-based
          music recommendation.
        </p>

      </footer>

    </div>

  );
}


export default App;