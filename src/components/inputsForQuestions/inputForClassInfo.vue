<script setup>
import {ref} from 'vue'
import { useRoute } from 'vue-router';
import {useApiStore} from 'src/stores'
const route = useRoute()
const store = useApiStore()
let className = ref('')
let teacherName = ref('')

let date = new Date().getTime();
const random = Math.floor(Math.random() * 10000);
let special_id = random.toString() + date + random.toString();

let clicker = ref(false)
const addInfo = ()=>{
      store.SetItemsTostorage('idForInfo', special_id)
      let infoId = store.GetItemFromStorage('idForInfo')
     fetch("http://quizforbeginner.pythonanywhere.com/class/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: infoId,
        class_name: className.value,
        teacher_name: teacherName.value,
        
      }),

    });
    store.GetItemFromStorage('idForInfo')
    console.log(store.GetItemFromStorage('idForInfo'));
    // store.clicker = true
    console.log(store.special_id_for_info);
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