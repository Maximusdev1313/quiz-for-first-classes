<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { useApiStore } from "src/stores";
import { useRoute } from "vue-router";
import axios from "axios";
const route = useRoute();
const store = useApiStore();
let questions = ref([])
let hiddens = ref([])
let answerClicker = ref(true);

   (async( ) =>{
      try {
        const res = await axios.get(`http://quizforbeginner.pythonanywhere.com/class/${route.params.id}`)
        const api = res.data
        questions.value = [...api.quizzes]
        // localStorage.removeItem('questions')
      } catch (error) {
        console.log(error.message);
      }
    })()
   const  change = (i) => {
      let a = questions.value[i].condition
      console.log(a, 'hidd');
      let b  =  a.forEach((i)=>{
        i.hidden = false
        console.log(i.hidden);
      })
      
    } 

</script>
<template>
  <div class="wrapper">
    <q-card class="my-card q-mt-md" v-for=" ( q, index) in  questions" :key="index">
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

        <ol type="A" class="list" >
          <li v-for="variant in q.variants" :key="variant"
          @click="change(index)"
          >
            
          <!-- <q-icon name="cancel" size="sm" color="red" >
            
          </q-icon> -->
            {{ variant.variant_answer }}
        </li>
        </ol>
      </q-card-actions>
      
      
    </q-card>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.my-card {
  width: 90%;
  /* margin: 0 auto; */
}
.condition {
  /* display: inline; */
  width: 15%;
}
ol.list{
    margin: 0;
    padding: 4px;
}
ol.list li{
  box-sizing: border-box;
    display: inline;
    margin: 15px;

    border: 1px solid #000;
    padding: 10px 15px;
    cursor: pointer;

}
</style>
