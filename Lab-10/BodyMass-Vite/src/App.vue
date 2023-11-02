<script setup>
import BodyMassIndexForm from './components/BodyMassIndexForm.vue'

import { ref } from 'vue'

const metric = ref(true)
const appWeight = ref(0)
const appHeight = ref(0)
const appBMI = ref(0)

// Mo need for a button, we can just update the BMI whenever the user inputs data
function updateBMI() {
  let newBMI = (appWeight.value / (appHeight.value * appHeight.value)) * (metric.value ? 1 : 703)

  appBMI.value = newBMI.toFixed(2)
}

function updateHeight(newHeight) {
  appHeight.value = newHeight
  updateBMI()
}

function updateWeight(newWeight) {
  appWeight.value = newWeight
  updateBMI()
}

</script>

<template>

  <h1>Body Mass Index Calculator</h1>

  <div>
    <input v-model="metric" type="checkbox">
    <label>Use metric units</label>
  </div>
  <BodyMassIndexForm
      v-bind:Metric="metric"
      v-on:weight-changed="updateWeight"
      v-on:height-changed="updateHeight"
  >
  ></BodyMassIndexForm>

  <h3>BMI is {{appBMI}}</h3>
</template>

<style scoped>

</style>
