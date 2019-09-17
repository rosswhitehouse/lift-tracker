<template>
  <li class="white-box" @click="goToWorkout">
    <h3>{{ workout.day }}</h3>
    <span class="icon">
      <ArrowRightIcon />
    </span>
    <p>{{ workout.description }}</p>
  </li>
</template>

<script>
import ArrowRightIcon from "./icons/ArrowRightIcon.vue";
export default {
  name: "Workout-list-item",
  components: {
    ArrowRightIcon
  },
  methods: {
    goToWorkout: function() {
      this.$router.push({ path: `/workout/${this.workout.day}` });
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
</style>