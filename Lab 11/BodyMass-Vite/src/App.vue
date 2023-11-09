<script setup>
import BodyMassIndexForm from './components/BodyMassIndexForm.vue'
import BodyMassIndexMetric from "./components/BodyMassIndexMetric.vue";
import BodyMassIndexOutput from "./components/BodyMassIndexOutput.vue";
</script>

<template>
  <h1>Body Mass Index Calculator</h1>

  <BodyMassIndexMetric></BodyMassIndexMetric>
  <BodyMassIndexForm></BodyMassIndexForm>
  <BodyMassIndexOutput></BodyMassIndexOutput>
</template>

<style scoped>

</style>
