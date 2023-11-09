<script setup>
import { useBMIStore } from "../stores/BodyMassIndexStore.js";
const BMIStore = useBMIStore()
</script>

<template>
  <h3>BMI is {{ BMIStore.appBMI }}</h3>
</template>

<style scoped>
</style>