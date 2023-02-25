<script setup>
import { onMounted, ref, watch } from "vue";
import { useApiStore } from "src/stores";

const store = useApiStore();
let condition = ref("");
let hide = ref(false);
let parentId = ref("");
let conditionArray = ref([]);

let clickForOpen = ref(false);



function addObject() {
  let arr = store.addingObjectToArray(
    conditionArray.value,
    store.createObject(condition.value, hide.value)
    );
    console.log(conditionArray.value);

  (condition.value = ""), (hide.value = false);
  return arr;
}
const  addCondition = async () =>{
  parentId.value = store.GetItemFromStorage("idForTitle");

  for (let condition of conditionArray.value) {
    await fetch("http://quizforbeginner.pythonanywhere.com/condition/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        condition: parentId.value,
        worth: condition.entry,
        hidden: condition.check,
      }),
    });
    console.log(condition.entry,'===entry');
  }
  console.log("parent", parentId.value);
  console.log(conditionArray.value);
  clickForOpen.value = true;
}
watch(() => store.clicker, () => {
  conditionArray.value = []
  clickForOpen.value = false
})
// const post = async (url, params) => {
//     const response = await fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(params),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         }
//     })

//     const data = await response.json()

//     return data
// }

// // Then use it like so with async/await:
// (async (bir, ikki, uch) => {
//     const data = await post('https://jsonplaceholder.typicode.com/posts', {
//         bir: 'This will be the title',
//         ikki: 'Setting the body property',
//         uch: 1
//     })

//     console.log(data)
// })()

</script>

<template>
  <div>
    <div class="row q-mt-md">
      <div
        v-for="condition in conditionArray"
        :key="condition"
        class="q-ma-md text-h6"
      >
        <div v-if="!condition.check">
          {{ condition.entry }}
        </div>
        <div v-else>
          <q-icon name="question_mark" color="primary" size="sm" />
        </div>
      </div>
      <div v-if="!clickForOpen ">
        <div>
          <q-input
            v-model="condition"
            label-color="primary"
            placeholder="Tasdiqlash uchun enterni bosing"
            color="white"
            bg-color="white"
            @keypress.enter="addObject"
          />
        </div>
        <div class="row justify-around items-center">
          <q-checkbox v-model="hide" label="Berkitish" />
          <q-btn
            @click="addObject"
            color="primary"
            icon="add"
            size="sm"
            class="q-mx-md"
          ></q-btn>
          <q-btn @click="addCondition" color="primary" icon="check" size="sm"
            >Tayyor</q-btn
          >
        </div>
      </div>
      
    </div>
    <div class="row justify-end" v-if="clickForOpen">
        <q-btn @click="addCondition" color="primary" icon="check" size="sm"
            >Tayyor</q-btn
          >
      </div>
  </div>
</template>
