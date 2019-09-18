export const defaultExercises = [
  {
    name: 'Deadlift',
    slug: 'deadlift',
    weight: 100,
    type: 'legs',
    link: 'https://www.bodybuilding.com/exercises/barbell-deadlift',
    reps: 5,
    sets: 3,
    hasDropSet: true,
    totalSets: 4,
    completedSets: 0,
    isComplete: false
  },
  {
    name: 'Leg Press',
    slug: 'leg-press',
    weight: 100,
    type: 'legs',
    link: 'https://www.bodybuilding.com/exercises/leg-press',
    reps: 10,
    sets: 3,
    hasDropSet: true,
    totalSets: 4,
    completedSets: 0,
    isComplete: false
  },
  {
    name: 'Glute Bridge',
    slug: 'glute-bridge',
    weight: 100,
    type: 'legs',
    link: 'https://www.bodybuilding.com/exercises/barbell-glute-bridge',
    reps: 10,
    sets: 3,
    hasDropSet: true,
    totalSets: 4,
    completedSets: 0,
    isComplete: false
  },
  {
    name: 'Pullups',
    slug: 'pullups',
    weight: 100,
    type: 'back',
    link: 'https://www.bodybuilding.com/exercises/pullups',
    reps: 10,
    sets: 3,
    hasDropSet: true,
    totalSets: 4,
    completedSets: 0,
    isComplete: false
  },
  {
    name: 'Barbell Row',
    slug: 'barbell-row',
    weight: 100,
    type: 'back',
    link: 'https://www.bodybuilding.com/exercises/bent-over-barbell-row',
    reps: 10,
    sets: 3,
    hasDropSet: false,
    totalSets: 3,
    completedSets: 0,
    isComplete: false
  },
  {
    name: 'Lat Pushdown',
    slug: 'lat-pushdown',
    weight: 100,
    type: 'back',
    link: 'https://www.bodybuilding.com/exercises/straight-arm-pulldown',
    reps: 10,
    sets: 3,
    hasDropSet: true,
    totalSets: 4,
    completedSets: 0,
    isComplete: false
  },
  {
    name: 'Arm Blast',
    slug: 'arm-blast',
    type: 'cardio',
    description: 'Cable curls and tricep pushdowns superset for 5 sets',
    isComplete: false,
    totalSets: 1,
    completedSets: 0,
  }
];
export const defaultWorkouts = [
  {
    day: "monday",
    description: "Legs and back",
    exercises: ['deadlift', 'leg-press', 'glute-bridge', 'pullups', 'barbell-row', 'lat-pushdown', 'arm-blast']
  },
  {
    day: "wednesday",
    description: "Legs and back",
    exercises: []
  },
  {
    day: "friday",
    description: "Legs and back",
    exercises: []
  },
  {
    day: "sunday",
    description: "Legs and back",
    exercises: []
  }
];