<script setup>
import { ref } from "vue";
import { useApiStore } from "src/stores";
const store = useApiStore();
let quiz = ref("");


let idTitle = ref("");
let parentId = ref("");
let clicker = ref(false)
let setGetItems = () => {
  store.SetItemsTostorage("idForTitle", store.getSpecialId());

  idTitle.value = store.GetItemFromStorage("idForTitle");
  parentId.value = store.GetItemFromStorage("idForClass");

};

const addInfo = async(setFunction) => {
  setFunction();
  await fetch("http://quizforbeginner.pythonanywhere.com/quiz/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: idTitle.value,
      question_title: quiz.value,
      quizzes: parentId.value,
    }),
  });
  clicker.value = true
  

};
watch(() => store.clicker, () => {
  quiz.value = ''
  clicker.value = false
})

</script>

<template>
  <div class="">
    
    <q-input
      v-model="quiz"
      :label=" ` ${store.question.length + 1} - savol`"
      @keydown.enter="addInfo(setGetItems)"
      label-color="primary"
      color="white"
      bg-color="white"
    />
    <div class="row justify-end">
      <q-btn class="q-mt-sm" size="sm" color="primary" @click="addInfo(setGetItems)">
        <q-icon name="check" v-if="clicker ">

        </q-icon>
        <div>
          Tayyor

        </div>
      </q-btn>

    </div>
  </div>
</template>
