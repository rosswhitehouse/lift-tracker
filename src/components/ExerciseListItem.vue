<template>
  <li class="white-box" @click="selectExercise(exercise.slug)">
    <h3>{{ exercise.name }}</h3>
    <span class="area">{{ exercise.area }}</span>
    <div class="flex">
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
    <ul class="sets" v-show="isActiveExercise && !exercise.isCompleted">
      <li
        v-for="(set, index) in exercise.sets"
        v-show="index <= currentSet"
        v-bind:key="index"
        v-bind:class="{ completed: index < currentSet}"
      >
        Set {{ index + 1 }}
        <span v-bind:class="{ circle: true, complete: index < currentSet }"></span>
      </li>
      <li v-show="exercise.hasDropSet && !exercise.isCompleted && currentSet >= exercise.sets">
        DROP SET
        <span
          v-bind:class="{ circle: true, complete: exercise.isCompleted }"
          class="circle"
        ></span>
      </li>
    </ul>
    <div class="action-wrap">
      <button v-if="isActiveExercise && !exercise.isCompleted" v-on:click="completeSet">
        <ArrowDownIcon />
      </button>
      <div v-else-if="exercise.isCompleted" class="complete-message">
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
  data: function() {
    return { currentSet: 0 };
  },
  methods: {
    completeSet: function(e) {
      this.currentSet = this.currentSet + 1;
      if (
        (!this.exercise.hasDropSet && this.currentSet === this.exercise.sets) ||
        this.currentSet > this.exercise.sets
      ) {
        this.completeExercise();
      }
    },
    completeExercise: function() {
      console.log("complete");
      this.exercise.isCompleted = true;
      this.$forceUpdate();
    }
  },
  props: {
    exercise: Object,
    isActiveExercise: Boolean,
    selectExercise: Function
  }
};
</script>

<style>
.area {
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
  margin: 1rem 0;
  width: 100%;
  height: 4rem;
  text-align: center;
}
</style>