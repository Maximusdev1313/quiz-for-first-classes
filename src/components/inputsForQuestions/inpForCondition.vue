<script setup>
import { ref } from "vue";
import { useApiStore } from "src/stores";

const store = useApiStore();
let condition = ref("");
let hide = ref(false);
let parentId = ref('')
let conditionArray = ref([]);

let clickForOpen = ref(false)

function addingItemToObject() {
  let itemObject = store.createObject(condition.value, hide.value);
  conditionArray.value.push(itemObject);
  console.log(conditionArray.value);
  condition.value = "";
  hide.value = false;
}
 parentId.value = store.GetItemFromStorage("idForTitle");

function addCondition() {
  for (let condition of conditionArray.value) {
    fetch("http://quizforbeginner.pythonanywhere.com/condition/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        condition: parentId.value,
        worth: condition.entry,
        hidden: condition.check,
      }),
    });
  }
  clickForOpen.value = true
}
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
      <div v-if="!clickForOpen">
        <div>
          <q-input
            v-model="condition"
            label-color="primary"
            placeholder="Tasdiqlash uchun enterni bosing"
            color="white"
            bg-color="white"
            @keypress.enter="addingItemToObject"
          />
        </div>
        <div class="row justify-around items-center">
          <q-checkbox v-model="hide" label="Berkitish" />
          <q-btn
            @click="addingItemToObject"
            color="primary"
            icon="add"
            size="sm"
            class="q-mx-md"
          ></q-btn>
          <q-btn
            @click="addCondition"
            color="primary"
            icon="check"
            size="sm">Tayyor</q-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>
