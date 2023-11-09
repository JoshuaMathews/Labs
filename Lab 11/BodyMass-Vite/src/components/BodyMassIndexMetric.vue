<script setup>
import { ref, watch} from 'vue'
import { useBMIStore } from "../stores/BodyMassIndexStore.js";
const BMIStore = useBMIStore()

const metric = ref(true)

// Watch for any changes and let the store know something has changed.
// I chose to do a watcher instead of a writable compute because I only need to read this, I don't need the writable part.
watch(metric, () => {
  BMIStore.updateMetric(metric.value)
})
</script>

<template>
  <div>
    <input v-model="metric" type="checkbox">
    <label>Use metric units</label>
  </div>
</template>

<style scoped>

</style>