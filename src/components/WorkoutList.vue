<template>
  <div>
    <h2>Select a workout</h2>
    <ul>
      <WorkoutListItem v-for="workout in workouts" :key="workout.day" v-bind:workout="workout" />
    </ul>
  </div>
</template>

<script>
import WorkoutListItem from "./WorkoutListItem";
export default {
  name: "workout-list",
  components: {
    WorkoutListItem
  },
  props: {
    workouts: Array
  }
};
</script>