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
import ExerciseListItem from "./ExerciseListItem";
export default {
  name: "exercise-list",
  components: { ArrowLeftIcon, ExerciseListItem },
  data: function() {
    return {
      activeExerciseSlug: this.exercises[0].slug,
      isFinisherComplete: false
    };
  },
  methods: {
    completeSet: function(slug) {
      const exercise = this.getExerciseBySlug(slug);
      const exerciseIndex = this.exercises.indexOf(exercise);
      const newExercise = {
        ...this.exercises[exerciseIndex],
        completedSets: this.exercises[exerciseIndex].completedSets + 1
      };
      this.$set(this.exercises, exerciseIndex, newExercise);
      this.$forceUpdate();
    },
    completeExercise: function(slug) {
      this.getExerciseBySlug(slug).isComplete = true;
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