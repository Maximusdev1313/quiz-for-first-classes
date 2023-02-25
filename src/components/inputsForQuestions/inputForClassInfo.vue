<script setup>
import {onMounted, ref} from 'vue'
import { useRoute } from 'vue-router';
import {useApiStore} from 'src/stores'
const route = useRoute()
const store = useApiStore()
let className = ref('')
let teacherName = ref('')
let prompt  = ref(true)
    
const getClassIdFromStorage = store.GetItemFromStorage('idForClass')

onMounted(()=>{
  if(getClassIdFromStorage !== null){
    prompt.value = false
    console.log('salom', getClassIdFromStorage);
  }
})

const addInfo = async () =>{
      store.SetItemsTostorage('idForClass', store.getSpecialId())
      let infoId = store.GetItemFromStorage('idForClass')
     await fetch("http://quizforbeginner.pythonanywhere.com/class/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: infoId,
        class_name: className.value,
        teacher_name: teacherName.value,
        
      }),

    });
  }

</script>
<template>
  <q-dialog v-model="prompt" >
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Yangi sinf qo'shish</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="className" autofocus label="Sinf nomi" />
          <q-input dense v-model="teacherName"  label="Ismingiz" @keyup.enter="prompt = false, addInfo()" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Yaratish" v-close-popup @click="addInfo"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- <div v-if="!store.clicker">
        <div>
          Malumot
        </div>
        <form style="width: 400px;">
      <q-input label="Sinf nomi" v-model="className"/>
      <q-input label="Ismingiz" v-model="teacherName"/>
      <q-btn class="q-mt-md" @click="addInfo">Bos</q-btn>
    </form>
      </div> -->

</template>
<style>

</style>