const textData = {
    start: {
        id: "start",
        text: "In a world ravaged by nuclear warfare, hope has become a distant memory. Amid the ruins, the ancient god Ygraorra has descended, offering salvation through the seductive harvest of dreams. His followers, the Dreamweavers, lull the desperate into slumber, where they can escape the bleak reality and dwell in their ideal worlds. But not everyone is swayed; a growing resistance fights to reclaim the shattered remnants of humanity’s former life. You find yourself ensnared by the Dreamweavers, on the brink of Ygraorra's 'grace'. As the whispers of an enchanting utopia flood your mind, you face a pivotal choice: Do you succumb to the alluring visions of a perfect existence, or do you rally against the forces that would bind you to a false paradise?",
        option1text: "Accept Ygraorra's Grace.",
        option2text: "Reject Your Fate, Fight Back!",
        option1path: "accepted",
        option2path: "rejected"
    },
    accepted: {
        id: "accepted",
        text: "You have embraced Ygraorra's grace. The world fades as a new reality, a dream-like utopia, surrounds you. Everything is perfect, yet unsettling. Is this truly paradise or an illusion?",
        option1text: "Embrace this New Life.",
        option2text: "Question the Reality.",
        option1path: "embraceNewLife",
        option2path: "questionReality"
    },
    embraceNewLife: {
        id: "embraceNewLife",
        text: "You have chosen to fully embrace this new utopia, despite the doubts. It becomes your reality now.",
        option1text: "End the Story.",
        option2text: "Reflect on Choices.",
        option1path: null, 
        option2path: null  
    },
    questionReality: {
        id: "questionReality",
        text: "The cracks in this perfect world begin to show. You start questioning everything. Is this all a dream?",
        option1text: "Confront Ygraorra.",
        option2text: "Escape the Dream.",
        option1path: null,
        option2path: null
    },
    rejected: {
        id: "rejected",
        text: "You resist Ygraorra's seduction. The world around you remains harsh and unforgiving, but the strength of your will grows. The resistance is waiting. Will you lead them to reclaim humanity?",
        option1text: "Lead the Resistance.",
        option2text: "Seek Solitude.",
        option1path: "leadResistance",
        option2path: "seekSolitude"
    },
};

export default textData;

/*
  - This `textData` object holds all the narrative choices and branching paths for the game's story.
  
  - Each id in the object represents a state in the storyline, like "start", "accepted", or "rejected". 
  - For each state, there is corresponding text string that provides the narrative description at that point.
  - `option1text` and `option2text` are the displayed text for the two available choices the player can make at each decision point.
  - `option1path` and `option2path` define the next state (or path) based on the player's choice, linking to another id within textData to continue the story.
  
  - If `option1path` or `option2path` is `null`, it means that there are no further choices for that branch (the end of that path).
*/
