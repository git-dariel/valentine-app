import { motion } from "framer-motion";
import { useState } from "react";
import { FaHeart, FaEnvelope } from "react-icons/fa";

// Import all pictures
import pic1 from "./assets/our_pictures/1.jpg";
import pic2 from "./assets/our_pictures/2.jpg";
import pic3 from "./assets/our_pictures/3.jpg";
import pic4 from "./assets/our_pictures/4.jpg";
import pic5 from "./assets/our_pictures/5.jpg";
import pic6 from "./assets/our_pictures/6.jpg";
import pic7 from "./assets/our_pictures/7.jpg";
import pic8 from "./assets/our_pictures/8.jpg";
import pic9 from "./assets/our_pictures/9.jpg";
import pic10 from "./assets/our_pictures/10.jpg";
import pic11 from "./assets/our_pictures/11.jpg";
import pic12 from "./assets/our_pictures/12.jpg";
import pic13 from "./assets/our_pictures/13.jpg";
import pic14 from "./assets/our_pictures/14.jpg";
import pic15 from "./assets/our_pictures/15.jpg";
import pic16 from "./assets/our_pictures/16.jpg";

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showLetter, setShowLetter] = useState(false);

  const yesButtonSize = noCount * 20 + 100;

  const photos = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10,
    pic11,
    pic12,
    pic13,
    pic14,
    pic15,
    pic16,
  ];

  // Sweet messages with personalized names
  const sweetMessages = [
    "Sinagtalata... are you sure? 🥺",
    "My dearest Pauline, pretty please! 🌹",
    "Persyphone, don't break my heart! 💔",
    "Sinagtalata, I'll be the happiest! ✨",
    "Pauline, you mean everything to me! 💝",
    "My sweet Persyphone, I promise to make you smile! 😊",
    "Sinagtalata, you're my sunshine! ☀️",
    "Pauline, we're perfect together! 💑",
    "Persyphone, I'll love you forever! 💕",
    "My beautiful Sinagtalata, you're my dream come true! 🌟",
    "Still trying to resist, Pauline? 😏",
    "Persyphone, you're making this hard! 🎭",
    "Is that your final answer, Sinagtalata? 🤔",
    "Think again, my lovely Pauline! 💫",
    "Running out of places to click, Persyphone! 🏃‍♀️",
    "Nice try Sinagtalata, but I'm persistent! 🎯",
    "Getting tired yet, my dear Pauline? 😅",
    "Persyphone, you can't escape my love! 🕊️",
    "Almost clicked Yes there, Sinagtalata! 👀",
    "Please be my Valentine! 🦋",
  ];

  // Create floating hearts component with different sizes and colors
  const FloatingHearts = () => {
    const hearts = Array.from({ length: 8 });
    const colors = ["text-red-800", "text-red-900", "text-amber-900", "text-red-700"];
    const sizes = ["text-xl", "text-2xl", "text-lg"];

    return (
      <div className="absolute inset-0 pointer-events-none opacity-70">
        {hearts.map((_, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * 400 - 200,
              y: Math.random() * 400 - 200,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * 400 - 200,
              y: [-200, -150],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.5,
            }}
            className="absolute top-1/2 left-1/2"
          >
            <FaHeart
              className={`${colors[index % colors.length]} ${
                sizes[index % sizes.length]
              } opacity-80`}
            />
          </motion.div>
        ))}
      </div>
    );
  };

  // Growing hearts that appear when clicking No
  const GrowingHearts = () => {
    return (
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: noCount }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <FaHeart className="text-red-800 text-sm opacity-60" />
          </motion.div>
        ))}
      </div>
    );
  };

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);

    // Define a contained area for the button to move within
    const containerWidth = 500;
    const containerHeight = 400;
    const buttonWidth = 100;
    const buttonHeight = 40;
    const padding = 20;

    // Calculate boundaries within the container
    const maxX = containerWidth - buttonWidth - padding;
    const maxY = containerHeight - buttonHeight - padding;
    const minX = padding;
    const minY = padding;

    // Generate random position within the container boundaries
    const newX = Math.floor(Math.random() * (maxX - minX)) + minX - containerWidth / 2;
    const newY = Math.floor(Math.random() * (maxY - minY)) + minY - containerHeight / 2;

    setPosition({
      x: newX,
      y: newY,
    });
  };

  const handleYesClick = () => {
    setYesPressed(true);
    setTimeout(() => setShowLetter(true), 2000);
  };

  const EnvelopeAnimation = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="mt-8 group relative"
    >
      <motion.button onClick={() => setShowLetter(true)} className="relative">
        <FaEnvelope className="text-red-900 text-5xl transition-transform group-hover:scale-110" />
        <motion.span
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute -top-2 -right-2"
        >
          💝
        </motion.span>
        <p className="text-amber-900 mt-2 font-serif">Click to read my letter</p>
      </motion.button>
    </motion.div>
  );

  const LoveLetterContent = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      }}
      className="relative max-w-2xl mx-auto mt-8"
    >
      {/* Vintage Paper Background */}
      <div className="absolute inset-0 bg-amber-50/80 backdrop-blur-sm rounded-lg shadow-lg border-2 border-red-900/20 transform rotate-1" />
      <div className="absolute inset-0 bg-amber-50/80 backdrop-blur-sm rounded-lg shadow-lg border-2 border-red-900/20 transform -rotate-1" />

      {/* Letter Content */}
      <div className="relative p-8 bg-amber-50/90 backdrop-blur-sm rounded-lg shadow-lg border-2 border-red-900/20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-serif text-red-900 space-y-4"
        >
          <p className="text-xl italic">My dearest Sinagtalata,</p>
          <p className="leading-relaxed">
            Hi lovee, honeyy. Thank you because you accepted me as your valentine. Alam ko madalas
            tayong mag away, matigas ulo ko, pasaway, etc. Sorry for being like that, but i promise
            na pagbubutihin ko na alisin sa sarili ko yung mga ayaw mo. Ayoko makita ka ulit na
            umiiyak because of my attitude, gusto ko na lagi mong isipin na mahal na mahal kita
            lovee.
          </p>
          <p className="leading-relaxed">
            Always remember na nandito lang ako palagi para sayo, susuportahan kita palagi sa mga
            gusto mong gawin. Kaya nga diba I am trying to work hard para kahit papaano i can
            provide pagdating sa mga dates at gastusin natin. Also pati narin sa family ko para
            kahit papaano makapag bigay ako kay mama para sa gastusin sa pang araw-araw.
          </p>
          <p className="leading-relaxed">
            Huwag kana masyado mag isip love, ayoko rin na nakikita ka na stressed, lalo na sa acads
            mo. Tulad nga ng sinabi ko kanina na surrender all your worries to God, Cast all your
            burden on the Lord and He will sustain you (1 Peter 5:7). Huwag na tayo masyado mag
            overthink, alam ko naman na may magandang plano si Lord sa atin at lalo na sayo.
          </p>
          <p className="leading-relaxed">
            I Love You Always lovee lovee, mwaaah. I hope you enjoy this simple gift of mine.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-right"
          >
            <p>
              Forever yours,
              <br />
              el💝
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );

  const PhotoMontage = () => (
    <div className="max-w-5xl mx-auto mt-16 p-8">
      <h2 className="text-2xl md:text-3xl font-serif text-red-900 mb-8 text-center">
        Our Beautiful Memories Together 💝
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative group">
            <div className="absolute inset-0 bg-amber-50/80 backdrop-blur-sm rounded-lg shadow-lg border-2 border-red-900/20 transform rotate-1 group-hover:rotate-0 transition-transform" />
            <div className="absolute inset-0 bg-amber-50/80 backdrop-blur-sm rounded-lg shadow-lg border-2 border-red-900/20 transform -rotate-1 group-hover:rotate-0 transition-transform" />
            <div className="relative rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <img
                src={photo}
                alt={`Memory ${index + 1}`}
                className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-red-900/10 group-hover:bg-red-900/0 transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-red-100 flex flex-col items-center justify-center p-4">
      {!yesPressed ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center relative w-full max-w-[600px] h-[400px] bg-amber-50/30 backdrop-blur-sm rounded-lg shadow-lg border border-red-900/20 p-8"
        >
          <FloatingHearts />
          <GrowingHearts />
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FaHeart
                className={`text-red-900 text-6xl md:text-7xl mx-auto mb-4 ${
                  noCount > 10 ? "animate-bounce" : ""
                }`}
              />
            </motion.div>
            <motion.h1
              className="text-3xl md:text-4xl font-serif font-bold text-red-900 mb-4"
              animate={
                noCount > 7
                  ? {
                      scale: [1, 1.05, 1],
                      transition: { duration: 1, repeat: Infinity },
                    }
                  : {}
              }
            >
              Sinagtalata, will you be my Valentine?
            </motion.h1>
            <p className="text-lg md:text-xl text-amber-900 mb-8 font-serif">
              I've been waiting to ask you this...
            </p>
            {noCount > 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg text-red-800 font-medium mt-4 font-serif"
              >
                {sweetMessages[Math.min(noCount - 1, sweetMessages.length - 1)]}
              </motion.p>
            )}
          </motion.div>

          <div className="flex flex-row md:flex-row gap-4 items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: `${yesButtonSize}px`,
                height: `${yesButtonSize * 0.4}px`,
              }}
              onClick={handleYesClick}
              className={`bg-red-900 hover:bg-red-800 text-amber-50 font-bold py-2 px-4 rounded-full transition-all border-2 border-red-900/20 ${
                noCount > 7 ? "animate-pulse" : ""
              }`}
            >
              Yes 🥰
            </motion.button>

            <motion.button
              animate={{
                x: position.x,
                y: position.y,
                rotate: noCount > 7 ? [0, 5, -5, 0] : 0,
              }}
              transition={{ type: "spring" }}
              onClick={handleNoClick}
              whileHover={{ scale: 0.9 }}
              className={`bg-stone-700 hover:bg-stone-600 text-amber-50 font-bold py-2 px-4 rounded-full absolute border-2 border-stone-600/20 ${
                noCount > 5 ? "opacity-80" : ""
              }`}
              style={{
                position: noCount > 0 ? "absolute" : "relative",
                top: noCount > 0 ? "50%" : "auto",
                left: noCount > 0 ? "50%" : "auto",
                transform: noCount > 0 ? "translate(-50%, -50%)" : "none",
              }}
            >
              No 😢
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <motion.div className="text-center relative bg-amber-50/30 backdrop-blur-sm rounded-lg shadow-lg border border-red-900/20 p-8 w-full">
          <FloatingHearts />
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FaHeart className="text-red-900 text-7xl md:text-8xl" />
            </motion.div>
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl md:text-4xl font-serif font-bold text-red-900"
            >
              Yay! I'm so happy! ❤️
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="space-y-4"
            >
              <p className="text-xl md:text-2xl text-amber-900 font-serif">
                Thank you so much Sinagtalata! I love you so much! 😘
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-lg text-red-800 font-serif"
              >
                You make my heart complete! 💖
              </motion.p>
            </motion.div>

            {!showLetter ? (
              <EnvelopeAnimation />
            ) : (
              <>
                <LoveLetterContent />
                <PhotoMontage />
              </>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;
