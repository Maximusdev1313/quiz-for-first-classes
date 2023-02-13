<script setup>
import {ref} from 'vue'
const quizes = ref([
    {
        questionNumber: 1,
        questionTitle: 'birinchi savol',
        hidden: true,
        variants: [
            {variantName: 'a', variantAnswer: 16, right: false},
            {variantName: 'b', variantAnswer: 20, right: true},
            {variantName: 'c', variantAnswer: 40, right: false},

        ]
    },
    {
        questionNumber: 2,
        questionTitle: 'birinchi savol',
        hidden: false,
        variants: [
            {variantName: 'a', variantAnswer: 16, right: false},
            {variantName: 'b', variantAnswer: 20, right: true},
            {variantName: 'c', variantAnswer: 40, right: false},

        ]
    }
])

</script>
<template>
    <div>
        <div v-for="quize in quizes" :key="quize">
            <div  v-if="!quize.hidden">
                <div class="text-h6">
                {{ quize.questionNumber }}: {{ quize.questionTitle }}

            </div>
            <div class="text-subtitle" v-for="variant in quize.variants" :key="variant">
                {{ variant.variantName }}:
                {{ variant.variantAnswer }}--{{ variant.right }}
            </div>
            </div>
           
           
        </div>
    </div>
</template>
