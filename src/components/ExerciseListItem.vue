<template>
  <li
    v-bind:class="{ 'white-box': true, complete: exercise.isComplete }"
    v-on:click="exercise.totalSets > 1 ? $emit('selectExercise', exercise.slug) : $emit('completeSet', exercise.slug)"
  >
    <h3>{{ exercise.name }}, {{ exercise.completedSets }}</h3>
    <span class="type">{{ exercise.type }}</span>
    <div v-if="exercise.type !== 'cardio'" class="flex">
      <div>
        <span>{{ exercise.sets }} x {{ exercise.reps }}</span>
      </div>
      <div>
        <WeightIcon />
      </div>
      <div>
        <span>{{ exercise.weight }}kg</span>
      </div>
    </div>
    <div v-if="exercise.type === 'cardio'">{{ exercise.description }}</div>
    <ul v-else class="sets" v-show="isActiveExercise && !exercise.isComplete">
      <li
        v-for="(set, index) in exercise.sets"
        v-show="index <= exercise.completedSets"
        v-bind:key="index"
        v-bind:class="{ completed: index < exercise.completedSets}"
      >
        Set {{ index + 1 }}
        <span
          v-bind:class="{ circle: true, complete: index < exercise.completedSets }"
        ></span>
      </li>
      <li
        v-show="exercise.hasDropSet && !exercise.isComplete && exercise.completedSets >= exercise.sets"
      >
        DROP SET
        <span v-bind:class="{ circle: true, complete: exercise.isComplete }" class="circle"></span>
      </li>
    </ul>
    <div class="action-wrap">
      <button
        v-if="isActiveExercise && !exercise.isComplete"
        v-on:click="$emit('completeSet', exercise.slug)"
      >
        <ArrowDownIcon />
      </button>
      <div v-else-if="exercise.isComplete" class="complete-message">
        <TickIcon />
      </div>
    </div>
  </li>
</template>

<script>
import ArrowDownIcon from "./icons/ArrowDownIcon";
import TickIcon from "./icons/TickIcon";
import WeightIcon from "./icons/WeightIcon";
export default {
  name: "exercise-list-item",
  components: { ArrowDownIcon, TickIcon, WeightIcon },
  props: {
    exercise: Object,
    isActiveExercise: Boolean
  }
};
</script>

<style>
li.complete {
  background: white;
  color: #15d176;
}
li.complete svg {
  fill: #15d176;
}
.type {
  float: right;
  font-size: 1.2rem;
  text-transform: uppercase;
  background: white;
  color: #15d176;
  padding: 0.4rem 0.4rem 0.2rem;
}
.flex {
  display: flex;
  align-items: center;
}
.flex > div {
  margin-right: 0.5rem;
}
.circle {
  border-radius: 2rem;
  height: 1rem;
  width: 1rem;
  border: white 2px solid;
  float: right;
}
.circle.complete {
  background: white;
}
.sets li {
  margin: 1rem 0;
  font-size: 2.2rem;
}
.sets li.completed {
  font-size: 1.4rem;
}
.sets li.current .circle {
  background: transparent;
}
.sets li.complete {
  background: white;
}
.action-wrap {
  text-align: right;
}
.action-wrap button {
  border: none;
  display: inline;
  padding: 0;
  background: white;
  width: 6rem;
  height: 4rem;
}
.action-wrap .complete-message {
  background: white;
  font-size: 2rem;
  width: 100%;
  height: 4rem;
}
</style>