<script setup>
import { ref } from 'vue';
import inputForClassInfo from 'src/components/inputsForQuestions/inputForClassInfo.vue'
import inpForQuestion from 'src/components/inputsForQuestions/inpForQuestion.vue'

let questionTitle = ref('')


</script>

<template>
  <q-page >

    <div class="row justify-around q-mt-md">
      <Suspense>
        <inputForClassInfo/>
      </Suspense>
      <inp-for-question/>

      
    
    
    
    </div>
   
  </q-page>
</template>

<style scoped>


</style>