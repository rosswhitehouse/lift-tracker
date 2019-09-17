<template>
  <div>
    <h2>{{ workout.day }}</h2>
    <ul>
      <ExerciseListItem
        v-for="(exercise) in workout.exercises"
        v-bind:key="exercise.slug"
        v-bind:exercise="exercise"
        v-bind:isActiveExercise="exercise.slug === activeExerciseSlug"
        v-bind:selectExercise="selectExercise"
      />
      <li class="white-box" v-on:click="completeFinisher">
        <h3>{{ workout.finisher.name }}</h3>
        <span class="icon">
          <CardioIcon />
        </span>
        <p>{{ workout.finisher.description }}</p>
        <div v-if="isFinisherComplete" class="complete-message">
          <TickIcon />
        </div>
      </li>
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
      activeExerciseSlug: this.workout.exercises[0].slug,
      isFinisherComplete: false
    };
  },
  methods: {
    completeFinisher: function() {
      this.isFinisherComplete = true;
    },
    selectExercise: function(selectedSlug) {
      this.activeExerciseSlug = selectedSlug;
    }
  },
  props: {
    workout: Object
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