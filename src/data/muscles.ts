export type MuscleId =
  | "chest"
  | "front-delts"
  | "side-delts"
  | "rear-delts"
  | "biceps"
  | "triceps"
  | "abs"
  | "obliques"
  | "lats"
  | "upper-back"
  | "lower-back"
  | "quads"
  | "hamstrings"
  | "glutes"
  | "calves"
  | "forearms";

export const MUSCLE_NAMES: Record<MuscleId, string> = {
  chest: "Chest",
  "front-delts": "Front Delts",
  "side-delts": "Side Delts",
  "rear-delts": "Rear Delts",
  biceps: "Biceps",
  triceps: "Triceps",
  abs: "Abs",
  obliques: "Obliques",
  lats: "Lats",
  "upper-back": "Upper Back",
  "lower-back": "Lower Back",
  quads: "Quads",
  hamstrings: "Hamstrings",
  glutes: "Glutes",
  calves: "Calves",
  forearms: "Forearms",
};

export type Exercise = {
  id: string;
  name: string;
  equipment: string;
  primary: MuscleId[];
  secondary: MuscleId[];
  videoId: string;
};

export const EXERCISES: Exercise[] = [
  // ==================== CHEST ====================
  {
    id: "barbell-bench-press",
    name: "Barbell Bench Press",
    equipment: "Barbell",
    primary: ["chest"],
    secondary: ["triceps", "front-delts"],
    videoId: "rT7DgCr-3pg",
  },
  {
    id: "incline-barbell-bench-press",
    name: "Incline Barbell Bench Press",
    equipment: "Barbell",
    primary: ["chest", "front-delts"],
    secondary: ["triceps"],
    videoId: "5kyLUGVq_pk",
  },
  {
    id: "incline-dumbbell-press",
    name: "Incline Dumbbell Press",
    equipment: "Dumbbell",
    primary: ["chest", "front-delts"],
    secondary: ["triceps"],
    videoId: "8iPEnn-ltC8",
  },
  {
    id: "cable-chest-fly",
    name: "Cable Chest Fly",
    equipment: "Cable",
    primary: ["chest"],
    secondary: ["front-delts"],
    videoId: "wDJozUD0bnQ",
  },
  {
    id: "chest-dip",
    name: "Chest Dip",
    equipment: "Bodyweight",
    primary: ["chest", "triceps"],
    secondary: ["front-delts"],
    videoId: "3BUU_jG39Yg",
  },
  {
    id: "push-up",
    name: "Push-Up",
    equipment: "Bodyweight",
    primary: ["chest"],
    secondary: ["triceps", "front-delts", "abs"],
    videoId: "IODxDxX7oi4",
  },

  // ==================== SHOULDERS ====================
  {
    id: "barbell-overhead-press",
    name: "Barbell Overhead Press",
    equipment: "Barbell",
    primary: ["front-delts"],
    secondary: ["triceps", "side-delts", "upper-back"],
    videoId: "YrgAL1xQ2LQ",
  },
  {
    id: "overhead-dumbbell-press",
    name: "Overhead Dumbbell Press",
    equipment: "Dumbbell",
    primary: ["front-delts"],
    secondary: ["triceps", "side-delts"],
    videoId: "M2rwvNhTOu0",
  },
  {
    id: "dumbbell-lateral-raise",
    name: "Dumbbell Lateral Raise",
    equipment: "Dumbbell",
    primary: ["side-delts"],
    secondary: [],
    videoId: "Y29xKcze8Ik",
  },
  {
    id: "cable-lateral-raise",
    name: "Cable Lateral Raise",
    equipment: "Cable",
    primary: ["side-delts"],
    secondary: [],
    videoId: "Z5FA9aq3L6A",
  },
  {
    id: "face-pull",
    name: "Standing Cable Face Pull",
    equipment: "Cable",
    primary: ["rear-delts", "upper-back"],
    secondary: ["side-delts"],
    videoId: "ntBwG1E3Pzs",
  },
  {
    id: "reverse-pec-deck",
    name: "Reverse Pec Deck Fly",
    equipment: "Machine",
    primary: ["rear-delts"],
    secondary: ["upper-back"],
    videoId: "v_ZoxM1a36E",
  },

  // ==================== BACK & LATS ====================
  {
    id: "lat-pulldown",
    name: "Lat Pulldown",
    equipment: "Cable",
    primary: ["lats"],
    secondary: ["biceps", "upper-back"],
    videoId: "CAwf7n6Luuc",
  },
  {
    id: "pull-up",
    name: "Pull-Up",
    equipment: "Bodyweight",
    primary: ["lats"],
    secondary: ["biceps", "upper-back", "forearms"],
    videoId: "eGo4IYlbE5g",
  },
  {
    id: "barbell-bent-over-row",
    name: "Barbell Bent-Over Row",
    equipment: "Barbell",
    primary: ["upper-back", "lats"],
    secondary: ["biceps", "lower-back", "rear-delts"],
    videoId: "DgyslsszCQ0",
  },
  {
    id: "single-arm-dumbbell-row",
    name: "Single-Arm Dumbbell Row",
    equipment: "Dumbbell",
    primary: ["lats", "upper-back"],
    secondary: ["biceps"],
    videoId: "pYcpY20QaE8",
  },
  {
    id: "seated-cable-row",
    name: "Seated Cable Row",
    equipment: "Cable",
    primary: ["upper-back", "lats"],
    secondary: ["biceps", "rear-delts"],
    videoId: "UCXxvVItLoM",
  },
  {
    id: "barbell-shrug",
    name: "Barbell Shrug",
    equipment: "Barbell",
    primary: ["upper-back"],
    secondary: ["forearms"],
    videoId: "M_MjF5Nm_h4",
  },
  {
    id: "back-extension",
    name: "Hyperextension / Back Extension",
    equipment: "Bench",
    primary: ["lower-back"],
    secondary: ["glutes", "hamstrings"],
    videoId: "ph3pddpKzzw",
  },
  {
    id: "conventional-deadlift",
    name: "Conventional Deadlift",
    equipment: "Barbell",
    primary: ["lower-back", "hamstrings", "glutes"],
    secondary: ["upper-back", "lats", "forearms", "quads"],
    videoId: "op9kVnSso6Q",
  },

  // ==================== ARMS ====================
  {
    id: "dumbbell-bicep-curl",
    name: "Dumbbell Bicep Curl",
    equipment: "Dumbbell",
    primary: ["biceps"],
    secondary: ["forearms"],
    videoId: "sxA__DoLsgo",
  },
  {
    id: "incline-dumbbell-curl",
    name: "Incline Dumbbell Curl",
    equipment: "Dumbbell",
    primary: ["biceps"],
    secondary: ["forearms"],
    videoId: "soxrZlIl35U",
  },
  {
    id: "ez-bar-preacher-curl",
    name: "EZ-Bar Preacher Curl",
    equipment: "Barbell",
    primary: ["biceps"],
    secondary: ["forearms"],
    videoId: "34Kx1e8eZ80",
  },
  {
    id: "hammer-curl",
    name: "Dumbbell Hammer Curl",
    equipment: "Dumbbell",
    primary: ["biceps", "forearms"],
    secondary: [],
    videoId: "BRVDS6HVR9Q",
  },
  {
    id: "rope-tricep-pushdown",
    name: "Rope Tricep Pushdown",
    equipment: "Cable",
    primary: ["triceps"],
    secondary: [],
    videoId: "vB5OHsJ3EME",
  },
  {
    id: "skullcrusher",
    name: "EZ-Bar Skullcrusher",
    equipment: "Barbell",
    primary: ["triceps"],
    secondary: [],
    videoId: "d_KZxkY_0cM",
  },
  {
    id: "overhead-cable-tricep-extension",
    name: "Overhead Cable Tricep Extension",
    equipment: "Cable",
    primary: ["triceps"],
    secondary: [],
    videoId: "1u18yJQLshQ",
  },
  {
    id: "dumbbell-wrist-curl",
    name: "Dumbbell Wrist Curl",
    equipment: "Dumbbell",
    primary: ["forearms"],
    secondary: [],
    videoId: "VGkF2NTtao0",
  },
  {
    id: "reverse-barbell-curl",
    name: "Reverse Barbell Curl",
    equipment: "Barbell",
    primary: ["forearms"],
    secondary: ["biceps"],
    videoId: "ypfd1kaI1AU",
  },

  // ==================== CORE ====================
  {
    id: "cable-crunch",
    name: "Kneeling Cable Crunch",
    equipment: "Cable",
    primary: ["abs"],
    secondary: [],
    videoId: "3qjoXDTuyOE",
  },
  {
    id: "hanging-leg-raise",
    name: "Hanging Leg Raise",
    equipment: "Bodyweight",
    primary: ["abs"],
    secondary: ["forearms", "obliques"],
    videoId: "vwl68EF9M2Q",
  },
  {
    id: "ab-wheel-rollout",
    name: "Ab Wheel Rollout",
    equipment: "Bodyweight",
    primary: ["abs"],
    secondary: ["lats", "lower-back"],
    videoId: "rqiTPdK1c_I",
  },
  {
    id: "russian-twist",
    name: "Russian Twist",
    equipment: "Bodyweight",
    primary: ["obliques"],
    secondary: ["abs"],
    videoId: "99T1EfpMwPA",
  },
  {
    id: "cable-woodchopper",
    name: "Cable Woodchopper",
    equipment: "Cable",
    primary: ["obliques"],
    secondary: ["abs"],
    videoId: "iWxTGXIViro",
  },

  // ==================== LEGS & GLUTES ====================
  {
    id: "barbell-squat",
    name: "Barbell Squat",
    equipment: "Barbell",
    primary: ["quads", "glutes"],
    secondary: ["lower-back", "hamstrings"],
    videoId: "ultWZbUMPL8",
  },
  {
    id: "leg-press",
    name: "Leg Press",
    equipment: "Machine",
    primary: ["quads"],
    secondary: ["glutes", "hamstrings"],
    videoId: "cDGOn-yfKJA",
  },
  {
    id: "bulgarian-split-squat",
    name: "Bulgarian Split Squat",
    equipment: "Dumbbell",
    primary: ["quads", "glutes"],
    secondary: ["hamstrings"],
    videoId: "2C-uNgKwPLE",
  },
  {
    id: "leg-extension",
    name: "Leg Extension",
    equipment: "Machine",
    primary: ["quads"],
    secondary: [],
    videoId: "ErnUJ1p-ovo",
  },
  {
    id: "romanian-deadlift",
    name: "Romanian Deadlift",
    equipment: "Barbell",
    primary: ["hamstrings", "glutes"],
    secondary: ["lower-back"],
    videoId: "2SHsk9AzdjA",
  },
  {
    id: "lying-leg-curl",
    name: "Lying Leg Curl",
    equipment: "Machine",
    primary: ["hamstrings"],
    secondary: ["calves"],
    videoId: "1Tq3QdYUuHs",
  },
  {
    id: "barbell-hip-thrust",
    name: "Barbell Hip Thrust",
    equipment: "Barbell",
    primary: ["glutes"],
    secondary: ["hamstrings"],
    videoId: "yTnWiBECvLk",
  },
  {
    id: "standing-calf-raise",
    name: "Standing Calf Raise",
    equipment: "Machine",
    primary: ["calves"],
    secondary: [],
    videoId: "k67UjgvJdEk",
  },
  {
    id: "seated-calf-raise",
    name: "Seated Calf Raise",
    equipment: "Machine",
    primary: ["calves"],
    secondary: [],
    videoId: "JbyjNymZOt0",
  },
];

export function exercisesFor(muscle: MuscleId): Exercise[] {
  return EXERCISES.filter(
    (e) => e.primary.includes(muscle) || e.secondary.includes(muscle),
  );
}

/** Opposing / complementary pairing used by the predictive suggestion card. */
export const COMPLEMENT: Record<MuscleId, MuscleId> = {
  chest: "lats",
  lats: "chest",
  "front-delts": "rear-delts",
  "rear-delts": "front-delts",
  "side-delts": "lats",
  biceps: "triceps",
  triceps: "biceps",
  abs: "lower-back",
  obliques: "abs",
  "upper-back": "chest",
  "lower-back": "abs",
  quads: "hamstrings",
  hamstrings: "quads",
  glutes: "quads",
  calves: "hamstrings",
  forearms: "biceps",
};

export const COMPLEMENT_REASON: Partial<Record<MuscleId, string>> = {
  chest: "Balance heavy pushing volume with a horizontal or vertical pull.",
  lats: "Pair pulling work with a pressing pattern for shoulder balance.",
  quads: "Train the posterior chain to protect the knees and hips.",
  hamstrings: "Follow hinge work with knee-dominant pressing.",
  biceps: "Antagonist pairing keeps elbow strength symmetrical.",
  triceps: "Antagonist pairing keeps elbow strength symmetrical.",
  glutes: "Add knee-dominant work for complete lower body development.",
  "front-delts": "Rear delts are usually the lagging half of the shoulder.",
  "rear-delts": "Round out the shoulder with anterior pressing.",
  abs: "Anti-extension pairs well with spinal extension work.",
  "lower-back": "Balance extension with dedicated anti-extension core work.",
};
