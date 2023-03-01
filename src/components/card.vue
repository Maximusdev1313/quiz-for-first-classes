<script setup>
import{ref, onMounted} from 'vue'
import {useApiStore} from 'src/stores'
const store = useApiStore()
let id  = store.GetItemFromStorage('idForClass')


onMounted(()=>{
  if(id){
    store.GetQuestion(id)
  }
})


</script>

<template>
      <div class="text-h6 q-mt-md">
        Savollar:
      </div>
      <div v-if="!store.question.length" >
        Savollar mavjud emas!
      </div>
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
    width: 90%;
    display: flex;
    justify-content: space-around;

}
ol.list li{
  
    margin: 15px;

    border: 1px solid #000;
    padding: 10px 15px;

}
</style>