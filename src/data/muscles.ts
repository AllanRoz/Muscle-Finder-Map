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
  {
    id: "barbell-bench-press",
    name: "Barbell Bench Press",
    equipment: "Barbell",
    primary: ["chest"],
    secondary: ["triceps", "front-delts"],
    videoId: "rT7DgCr-3pg",
  },
  {
    id: "lat-pulldown",
    name: "Lat Pulldown",
    equipment: "Cable",
    primary: ["lats"],
    secondary: ["biceps", "upper-back"],
    videoId: "CAwf7n6Luuc",
  },
  {
    id: "barbell-squat",
    name: "Barbell Squat",
    equipment: "Barbell",
    primary: ["quads", "glutes"],
    secondary: ["lower-back", "hamstrings"],
    videoId: "ultWZbUMPL8",
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
    id: "dumbbell-bicep-curl",
    name: "Dumbbell Bicep Curl",
    equipment: "Dumbbell",
    primary: ["biceps"],
    secondary: ["forearms"],
    videoId: "ykJmrZ5v0VN",
  },
  {
    id: "rope-tricep-pushdown",
    name: "Rope Tricep Pushdown",
    equipment: "Cable",
    primary: ["triceps"],
    secondary: [],
    videoId: "vB5OHsJ3EME",
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
