export const PHRASES= [
    "Can everyone see my screen?",
    "Let's circle back on that.",
    "We lost you for a second there.",
    "Can you repeat that? You cut out.",
    "Let's take a step back.",
    "Let's put a pin in that.",
    "Sorry, I was on another call.",
    "Let’s align on this later.",
    "Let’s not boil the ocean.",
    "I think you're on mute.",
    "Just to piggyback on that...",
    "We need to be mindful of time.",
    "I'll follow up with an email.",
    "Let's do a quick round-robin.",
    "Let's double-click on that.",
    "Can we table this discussion?",
    "We need to move the needle.",
    "Let's sync up offline.",
    "I’ll add that to the parking lot.",
    "Is this meeting being recorded?",
    "Let's unpack that a bit.",
    "Thanks for flagging that.",
    "We should take this async.",
    "Let’s not reinvent the wheel.",
    "This will be a game-changer."
  ];
  export const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
