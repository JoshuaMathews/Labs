<script setup>
// Import functionality from libraries and setup store usage
import { computed } from 'vue'
import { storeToRefs } from "pinia";
import { useBMIStore } from "../stores/BodyMassIndexStore.js";
const BMIStore = useBMIStore()

/* Old code for reference.
const props = defineProps({
  Metric: Boolean
})

const weight = ref(0)
const height = ref(0)

const emit = defineEmits([
  'weight-changed',
  'height-changed'
])

watch(weight, () => {
  emit('weight-changed', weight.value)
})

watch(height, () => {
  emit('height-changed', height.value)
})
*/

// Use a writable computed property with a getter and setter instead of just getter.
// This is so we can get the latest data (as in if metric status is swapped)
// and more importantly we can write to the store without a watcher (I assume one is used behind scenes)
// Found this here: https://stackoverflow.com/a/76380447
const weight = computed({
  get() {
    return BMIStore.appWeight
  },
  set(val) {
    BMIStore.appWeight = val
  }
})

// See same docs as "weight"
const height = computed({
  get() {
    return BMIStore.appHeight
  },
  set(val) {
    BMIStore.appHeight = val
  }
})

// grab metric's reactive state from store.
const { metric } = storeToRefs(BMIStore)

</script>

<template>
  <h2>Enter your height and weight</h2>

  <div id="inputs">
    <label v-if="metric" for="height">Height in meters </label>
    <label v-else for="height">Height in inches </label>
    <input v-model="height" type="number" id="height">

    <br>

    <label v-if="metric" for="weight">Weight in kilograms </label>
    <label v-else for="weight">Weight in pounds</label>
    <input v-model="weight" type="number" id="weight">
  </div>
</template>

<style scoped>
</style>
