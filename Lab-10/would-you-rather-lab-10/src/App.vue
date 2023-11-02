<script setup>
import WouldYouRather from "./components/WouldYouRather.vue";

import { ref } from 'vue'


const wyrQuestion = ref('Live in a house shaped like a triangle or a house like a circle?')
const wyrAnswer1 = ref("Triangle House")
const wyrAnswer2 = ref("Circle House")

const userSelection = ref('')

function updateUserSelection(userChoice) {
  userSelection.value = `Thank you for choosing ${userChoice}!`
  console.log(userSelection.value)
}

</script>

<template>
  <h1>Would You Rather?</h1>

  <would-you-rather
      v-bind:question="wyrQuestion"
      v-bind:answer1="wyrAnswer1"
      v-bind:answer2="wyrAnswer2"
      v-on:answer-selected="updateUserSelection">
  </would-you-rather>

  {{ userSelection }}
</template>

<style scoped>

</style>
