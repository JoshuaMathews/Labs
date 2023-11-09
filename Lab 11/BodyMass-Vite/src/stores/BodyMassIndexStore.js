import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useBMIStore = defineStore('BMI', () => {

    const metric = ref(true)
    const appWeight = ref(0)
    const appHeight = ref(0)

    // Use the store's variables to get the BMI from the provided algorithm.
    const appBMI = computed(() => {

        if(appWeight.value <= 0 || appHeight <= 0)
            return 0

        let newBMI = (appWeight.value / (appHeight.value * appHeight.value)) * (metric.value ? 1 : 703)

        if(isNaN(newBMI) || !isFinite(newBMI))
            return 0;

        return newBMI.toFixed(2)
    })

    // Sets variable within store and more importantly swaps values between metric and imperial
    // this is only useful because of the get/set computed or as I like to think of them "C# Properties" which is what they are
    function updateMetric(newMetric) {
        metric.value = newMetric

        if(metric.value) {
            appHeight.value = (appHeight.value / 39.37).toFixed(4) // Convert inches to meters.
            appWeight.value = (appWeight.value / 2.205).toFixed(4) // Convert pounds to kilograms.
        }
        else {
            appHeight.value = (appHeight.value * 39.37).toFixed(4) // Convert meters to inches.
            appWeight.value = (appWeight.value * 2.205).toFixed(4) // Convert kilograms to pounds.
        }
    }

    return {
        // references
        metric,
        appWeight,
        appHeight,
        appBMI,

        // functions
        updateMetric,
    }
})