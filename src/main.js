import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

import WorkoutList from './components/WorkoutList.vue'
import ExerciseList from './components/ExerciseList.vue'

const workouts = [
  {
    day: "monday",
    description: "Legs and back",
    exercises: [
      {
        name: 'Deadlift',
        slug: 'deadlift',
        weight: 100,
        area: 'legs',
        link: 'https://www.bodybuilding.com/exercises/barbell-deadlift',
        reps: 5,
        sets: 3,
        hasDropSet: true,
        isCompleted: false
      },
      {
        name: 'Leg Press',
        slug: 'leg-press',
        weight: 100,
        area: 'legs',
        link: 'https://www.bodybuilding.com/exercises/leg-press',
        reps: 10,
        sets: 3,
        hasDropSet: true,
        isCompleted: false
      },
      {
        name: 'Glute Bridge',
        slug: 'glute-bridge',
        weight: 100,
        area: 'legs',
        link: 'https://www.bodybuilding.com/exercises/barbell-glute-bridge',
        reps: 10,
        sets: 3,
        hasDropSet: true,
        isCompleted: false
      },
      {
        name: 'Pullups',
        slug: 'pullups',
        weight: 100,
        area: 'back',
        link: 'https://www.bodybuilding.com/exercises/pullups',
        reps: 10,
        sets: 3,
        hasDropSet: true,
        isCompleted: false
      },
      {
        name: 'Barbell Row',
        slug: 'barbell-row',
        weight: 100,
        area: 'back',
        link: 'https://www.bodybuilding.com/exercises/bent-over-barbell-row',
        reps: 10,
        sets: 3,
        hasDropSet: false,
        isCompleted: false
      },
      {
        name: 'Lat Pushdown',
        slug: 'lat-pushdown',
        weight: 100,
        area: 'back',
        link: 'https://www.bodybuilding.com/exercises/straight-arm-pulldown',
        reps: 10,
        sets: 3,
        hasDropSet: true,
        isCompleted: false
      }
    ],
    finisher: {
      name: 'Arm Blast',
      slug: 'arm-blast',
      description: 'Cable curls and tricep pushdowns superset for 5 sets'
    }
  },
  {
    day: "wednesday",
    description: "Legs and back"
  },
  {
    day: "friday",
    description: "Legs and back"
  },
  {
    day: "sunday",
    description: "Legs and back"
  }
];

// Create a route for each workour
const workoutRoutes = workouts.map(workout => ({
  path: `/workout/${workout.day.toLowerCase()}`,
  component: ExerciseList,
  props: { workout }
}))

const routes = [
  { path: '/', component: WorkoutList, props: { workouts } },
  ...workoutRoutes
];

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
