<script setup>
import { ref, watch } from 'vue'

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

//https://stackoverflow.com/a/59127059 (1st example)
//This is using 4 decimal points because otherwise the BMI value changes
// Whenever you toggle metric.
watch(() => props.Metric, (newValue, oldValue) => {
  if(newValue) {
    height.value = (height.value / 39.37).toFixed(4) // Convert inches to meters.
    weight.value = (weight.value / 2.205).toFixed(4) // Convert pounds to kilograms.
  }
  else {
    height.value = (height.value * 39.37).toFixed(4) // Convert meters to inches.
    weight.value = (weight.value * 2.205).toFixed(4) // Convert kilograms to pounds.
  }
})

</script>

<template>
  <h2>Enter your height and weight</h2>

  <div id="inputs">
    <label v-if="Metric" for="height">Height in meters </label>
    <label v-else for="height">Height in inches </label>
    <input v-model="height" type="number" id="height">

    <br>

    <label v-if="Metric" for="weight">Weight in kilograms </label>
    <label v-else for="weight">Weight in pounds </label>
    <input v-model="weight" type="number" id="weight">
  </div>
</template>

<style scoped>

</style>
