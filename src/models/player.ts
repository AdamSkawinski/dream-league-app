// src/models/player.ts

export type Player = {
    id: number;               // Unique identifier for the player
    name: string;             // Player's name (e.g., "Moisés Caicedo")
    position: string;         // Player position (e.g., "DM" for Defensive Midfielder)
    nationality: string;      // Country of the player (e.g., "Ecuador")
    height: number;           // Player height in cm (e.g., 178)
    preferredFoot: string;    // Preferred foot (e.g., "Right")
    overallRating: number;    // Overall player rating (e.g., 76)
  
    // Stats
    speed: number;            // Speed stat (e.g., 70)
    acceleration: number;     // Acceleration stat (e.g., 73)
    stamina: number;          // Stamina stat (e.g., 84)
    strength: number;         // Strength stat (e.g., 72)
    control: number;          // Ball control stat (e.g., 75)
    passing: number;          // Passing stat (e.g., 79)
    shooting: number;         // Shooting stat (e.g., 50)
    tackling: number;         // Tackling stat (e.g., 80)
  };
  