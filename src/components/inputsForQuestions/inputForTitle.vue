<script setup>
import { ref } from "vue";
import { useApiStore } from "src/stores";
const store = useApiStore();
let quiz = ref("");

let date = new Date().getTime();
const random = Math.floor(Math.random() * 10000);
let special_id = random.toString() + date + random.toString();

let idTitle = ref("");
let parentId = ref("");
const addInfo = (setFunction) => {
  setFunction();
  fetch("http://quizforbeginner.pythonanywhere.com/quiz/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: idTitle.value,
      question_title: quiz.value,
      quizzes: parentId.value,
    }),
  });
  console.log("nimadur");
};
let setGetItems = () => {
  store.SetItemsTostorage("idForTitle", special_id);
  idTitle.value = store.GetItemFromStorage("idForTitle");
  parentId.value = store.GetItemFromStorage("idForInfo");

  console.log(idTitle);
  console.log(parentId);
};
</script>

<template>
  <div class="">
    <q-input
      v-model="quiz"
      label="Savol"
      @keydown.tab="addInfo(setGetItems)"
      label-color="primary"
      color="white"
      bg-color="white"
    />
  </div>
</template>
