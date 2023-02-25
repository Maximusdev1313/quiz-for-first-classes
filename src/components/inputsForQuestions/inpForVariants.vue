<script setup>
import { ref } from "vue";
import { useApiStore } from "src/stores";
const store = useApiStore();

let variant = ref("");
let trueOrFalseAnswer = ref(false);
let variantsArray = ref([]);
let parentId = ref("");

let addObject = () => {
  let objects = store.createObject(variant.value, trueOrFalseAnswer.value);
  store.addingObjectToArray(variantsArray.value, objects);
  variant.value = "";
  trueOrFalseAnswer.value = false;
  console.log(variantsArray.value);
};
const addVariants = async () => {
  parentId.value = store.GetItemFromStorage("idForTitle");

  for (let variant of variantsArray.value) {
    await fetch("http://quizforbeginner.pythonanywhere.com/variant/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        variants: parentId.value,
        variant_answer: variant.entry,
        right: variant.check,
      }),
    });
  }

  let infoId = store.GetItemFromStorage("idForClass");
  store.GetQuestion(infoId);
  // localStorage.removeItem('idForInfo')
  localStorage.removeItem("idForTitle");
  // clickForOpen.value = true;
  store.clicker = true;
  variantsArray.value = [];
};
</script>

<template>
  <div class="row">
    <ol type="A" class="row" v-if="variantsArray.length">
      <li class="q-mx-lg" v-for="variant in variantsArray" :key="variant">
        {{ variant.entry }}
      </li>
    </ol>
    <div class="q-ml-md">
      <q-input
        v-model="variant"
        label-color="primary"
        color="white"
        bg-color="white"
        @keypress.enter="addObject"
      />
      <q-checkbox v-model="trueOrFalseAnswer" label="To'g'ri/Noto'g'ri" />
    </div>
  </div>
  <div class="row justify-end">
    <q-btn @click="addVariants" color="primary">Tayyor</q-btn>
  </div>
</template>
