<script setup>
import { ref, onMounted } from "vue";
import { useApiStore } from "src/stores";
import { useRoute } from "vue-router";
const route = useRoute();
const store = useApiStore();
onMounted(() => {
  store.GetQuestion(route.params.id, store.SetItemsTostorage,store.GetItemFromStorage);
  
  
  // const question = store.question
});
</script>
<template>
  <div class="wrapper">
    <q-card class="my-card q-mt-md" v-for="q in store.storageItems" :key="q">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">
          {{ q.question_number }}. {{ q.question_title }}
        </div>
        <div class="row justify-between q-mt-md">
          <q-card
            class="text-subtitle2 condition"
            v-for="con in q.condition"
            :key="con"
          >
            <q-card-section class="text-green bg-white text-center">
              <div v-if="con.hidden">
                <q-icon name="question_mark" color="red" size="md" />
              </div>
              <div v-else class="text-h5">
                {{ con.worth }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="center">
        <div v-for="variant in q.variants" :key="variant">
            <q-btn outline 
                class="q-ml-md"
                size="lg"
            >
                {{ variant.variant_name }}: {{ variant.variant_answer }}
            </q-btn>
        </div>
        
        
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
  width: 100px;
}
</style>
