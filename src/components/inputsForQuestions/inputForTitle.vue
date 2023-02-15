<script setup>
import { ref } from 'vue';
let condition = ref('')
const addInfo = ()=>{
     fetch("http://quizforbeginner.pythonanywhere.com/quiz/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question_title: condition.value,
        teacher_name: teacherName.value,
        
      }),
      

    });
    store.clicker = true
    console.log(error.message);
  }

</script>


<template>
    <div class="">
          <q-input  
          v-model="condition"
          label="Savol"
          label-color="primary"
            color="white"
            bg-color="white"
          />
        </div>
</template>