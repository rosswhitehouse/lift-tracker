import { defaultWorkouts, defaultExercises } from './defaults.js'

export const checkLocalStorage = () => {
  return window.localStorage.getItem('workouts')
}

export const initializeLocalStorage = () => {
  window.localStorage.setItem('workouts', JSON.stringify(defaultWorkouts));
  window.localStorage.setItem('exercises', JSON.stringify(defaultExercises));
}

export const getLocalStorage = () => {
  return {
    workouts: JSON.parse(window.localStorage.getItem('workouts')),
    exercises: JSON.parse(window.localStorage.getItem('exercises')),
  }
}