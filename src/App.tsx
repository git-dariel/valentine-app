import { motion } from "framer-motion";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showTrap] = useState(false);

  const yesButtonSize = noCount * 20 + 100;

  // Sweet messages with cat theme
  const sweetMessages = [
    "Meow... are you sure? 🐱",
    "Purr-etty please! 😺",
    "Don't break my kitty heart! 💔",
    "I'll be the happiest kitty! ✨",
    "I promise to love you fur-ever! 😊",
    "You're my purr-fect Valentine! ☀️",
    "We're purr-fect together! 💑",
    "I'll love you more and forever! 💕",
    "You're my purr-ecious one! 🌟",
    "Still trying to resist my cuteness? 😽",
    "Meow meow... please say yes! 🎭",
    "My kitty eyes are begging! 🥺",
    "I'm pawsitively in love! 💫",
    "Don't make this kitty sad! 🐱",
    "I'll be your furr-ever Valentine! 🎯",
    "Getting tired of my cuteness? 😅",
    "You can't escape my love! 🐾",
    "Almost clicked yes, I saw that! 👀",
    "Paw-lease be my Valentine! 🦋",
  ];

  // Cute Cat Component
  const CuteCat = ({ mood }: { mood: "happy" | "sad" | "pleading" }) => {
    const catEmoji = {
      happy: "😺",
      sad: "😿",
      pleading: "🥺",
    };

    return (
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: mood === "pleading" ? [-5, 5, -5] : 0,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-4xl mb-4"
      >
        <span role="img" aria-label="cute cat">
          {catEmoji[mood]}
        </span>
      </motion.div>
    );
  };

  // Create floating hearts component with different sizes and colors
  const FloatingHearts = () => {
    const hearts = Array.from({ length: 8 });
    const colors = ["text-pink-500", "text-red-500", "text-rose-400", "text-red-400"];
    const sizes = ["text-xl", "text-2xl", "text-lg"];

    return (
      <div className="absolute inset-0 pointer-events-none">
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
              className={`${colors[index % colors.length]} ${sizes[index % sizes.length]}`}
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
            <FaHeart className="text-pink-400 text-sm" />
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-200 flex flex-col items-center justify-center p-4">
      {!yesPressed ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center relative w-full max-w-[600px] h-[400px]"
        >
          <FloatingHearts />
          <GrowingHearts />
          {showTrap && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute inset-0 bg-pink-100 bg-opacity-90 flex items-center justify-center z-10"
            >
              <motion.div className="flex flex-col items-center">
                <CuteCat mood="pleading" />
                <motion.p
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: 5 }}
                  className="text-2xl text-red-500 font-bold"
                >
                  No escape from my love! 💝
                </motion.p>
              </motion.div>
            </motion.div>
          )}
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <CuteCat mood={noCount > 5 ? "sad" : "happy"} />
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
                className={`text-red-500 text-5xl md:text-6xl mx-auto mb-4 ${
                  noCount > 10 ? "animate-bounce" : ""
                }`}
              />
            </motion.div>
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              animate={
                noCount > 7
                  ? {
                      scale: [1, 1.05, 1],
                      transition: { duration: 1, repeat: Infinity },
                    }
                  : {}
              }
            >
              Will you be my Valentine, Love?
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              This kitty has been waiting to ask you this...
            </p>
            {noCount > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-2"
              >
                <CuteCat mood="pleading" />
                <motion.p className="text-lg text-pink-500 font-medium">
                  {sweetMessages[Math.min(noCount - 1, sweetMessages.length - 1)]}
                </motion.p>
              </motion.div>
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
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all"
            >
              Yes 🥰
            </motion.button>

            <motion.button
              animate={{ x: position.x, y: position.y }}
              transition={{ type: "spring" }}
              onClick={handleNoClick}
              whileHover={{ scale: 0.9 }}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full absolute"
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
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center relative"
        >
          <FloatingHearts />
          <div className="flex flex-col items-center gap-4">
            <CuteCat mood="happy" />
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
              <FaHeart className="text-red-500 text-7xl md:text-8xl" />
            </motion.div>
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-800"
            >
              Meow! I'm so happy! ❤️
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="space-y-4"
            >
              <p className="text-xl md:text-2xl text-gray-600">
                Thank you so much love! Purr purr... 😘
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-lg text-pink-500"
              >
                You make my kitty heart complete! 💖
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;
