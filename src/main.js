import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)
Vue.config.devtools = true

import WorkoutList from './components/WorkoutList.vue'
import ExerciseList from './components/ExerciseList.vue'
import * as api from './utils/api'

if (api.checkLocalStorage() === null) {
  api.initializeLocalStorage();
}
const data = api.getLocalStorage();

// Create a route for each workour
const workoutRoutes = data.workouts.map(workout => {
  const exercises = data.exercises.filter(exercise => workout.exercises.includes(exercise.slug));
  return {
    path: `/workout/${workout.day.toLowerCase()}`,
    component: ExerciseList,
    props: { workout, exercises }
  };
})

const routes = [
  { path: '/', component: WorkoutList, props: { ...data } },
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
