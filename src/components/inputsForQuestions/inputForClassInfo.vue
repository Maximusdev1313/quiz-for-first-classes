<script setup>
import {ref} from 'vue'
import {useApiStore} from 'src/stores'

const store = useApiStore()
let className = ref('')
let teacherName = ref('')
let clicker = ref(false)
const addInfo = ()=>{
     fetch("http://quizforbeginner.pythonanywhere.com/class/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        class_name: className.value,
        teacher_name: teacherName.value,
        
      }),
      

    });
    store.clicker = true
    store.SetItemsTostorage('class_name', className.value)
  }

</script>
<template>
    <div v-if="!store.clicker">
        <div>
          Malumot
        </div>
        <form style="width: 400px;">
      <q-input label="Sinf nomi" v-model="className"/>
      <q-input label="Ismingiz" v-model="teacherName"/>
      <q-btn class="q-mt-md" @click="addInfo">Bos</q-btn>
    </form>
      </div>

</template>
<style>

</style>