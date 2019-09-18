<template>
  <div>
    <h2>{{ workout.day }}</h2>
    <ul>
      <ExerciseListItem
        v-for="(exercise) in exercises"
        v-on:completeSet="completeSet"
        v-on:selectExercise="selectExercise"
        v-bind:exercise.sync="exercise"
        v-bind:isActiveExercise="exercise.slug === activeExerciseSlug"
        v-bind:key="exercise.slug"
      />
    </ul>
    <button class="back-button">
      <ArrowLeftIcon />BACK
    </button>
  </div>
</template>

<script>
import ArrowLeftIcon from "./icons/ArrowLeftIcon";
import CardioIcon from "./icons/CardioIcon";
import ExerciseListItem from "./ExerciseListItem";
import TickIcon from "./icons/TickIcon";
export default {
  name: "exercise-list",
  components: { ArrowLeftIcon, CardioIcon, ExerciseListItem, TickIcon },
  data: function() {
    return {
      activeExerciseSlug: this.exercises[0].slug,
      isFinisherComplete: false
    };
  },
  beforeUpdate: function() {
    console.log("before update");
  },
  methods: {
    completeSet: function(slug) {
      console.log("complete-set", slug);
      const exercise = this.getExerciseBySlug(slug);
      exercise.completedSets++;
      if (exercise.completedSets === exercise.totalSets) {
        this.completeExercise(slug);
      }
    },
    completeExercise: function(slug) {
      this.getExerciseBySlug(slug).isComplete = true;
      console.log("COMPLETE-exercise", slug);
    },
    getExerciseBySlug: function(slug) {
      return this.exercises.find(exercise => exercise.slug === slug);
    },
    selectExercise: function(selectedSlug) {
      this.activeExerciseSlug = selectedSlug;
    }
  },
  props: {
    workout: Object,
    exercises: Array
  },
  watch: {
    exercises: function() {
      console.log("watch fired");
    }
  }
};
</script>

<style scoped>
.icon {
  float: right;
}
.complete-message {
  background: white;
  font-size: 2rem;
  margin: 1rem 0;
  width: 100%;
  height: 4rem;
  text-align: center;
}
button.back-button {
  color: white;
}
</style>