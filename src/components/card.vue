<script setup>
import{ref, onMounted} from 'vue'
import {useApiStore} from 'src/stores'
const store = useApiStore()
let id  = store.GetItemFromStorage('idForClass')

// const GetQuestions = () => {
//     if(id !== null){
//         store.GetQuestion(id)
//     }
  
// }
onMounted(()=>{
  if(id){
    store.GetQuestion(id)
  }
})


</script>

<template>
        <q-card class="my-card q-mt-md" v-for="(q, index) in store.question" :key="index">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">
          {{ index + 1 }}. {{ q.question_title }}
        </div>
        <div class="row justify-between q-mt-md">
          <q-card
            class="condition row justify-center items-center"
            v-for="con in q.condition"
            :key="con"
          >
            <q-card-section class="text-green bg-white text-center">
              <div v-if="con.hidden ">
                <q-icon name="question_mark" color="red" size="sm" />
              </div>
              <div v-else class="text-h6">
                {{ con.worth }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </q-card-section>

      <q-separator />
      <q-card-actions align="center">
        <div >
            <div class="q-px-xl">
                <ol type="A" class="list">
                    <li v-for="variant in q.variants" :key="variant"> {{ variant.variant_answer }}</li>
                </ol>
            
          </div>
        </div>
      </q-card-actions>
    </q-card> 
</template>

<style scoped>
.my-card{
  width: 90%;
}
ol.list{
    margin: 0;
    padding: 4px;
}
ol.list li{
    display: inline;
    margin-right: 5px;
    border: 1px solid #000;
    padding: 3px;
}
</style>