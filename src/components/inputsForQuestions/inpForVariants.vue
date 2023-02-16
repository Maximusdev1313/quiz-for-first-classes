<script setup>
import { ref } from 'vue';
import {useApiStore} from 'src/stores'
const store = useApiStore()

let variant  = ref('')
let trueOrFalseAnswer = ref(false)

</script>

<template>
  <div class="row justify-between items-center">
    <div>
        <q-input
      v-model="variant"
      label-color="primary"
      color="white"
      bg-color="white"
    />
    <q-checkbox v-model="trueOrFalseAnswer" label="To'g'ri/Noto'g'ri" />
    </div>
    
    
  </div>
</template>
