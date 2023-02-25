<script setup>
import {ref} from 'vue'
import inputForTitle from './inputForTitle.vue'
import inpForCondition from './inpForCondition.vue'
import inpForVariants from './inpForVariants.vue'
import card from 'src/components/card.vue'
import { useApiStore } from 'src/stores'
const store = useApiStore()
let model = ref('')
let teal = ref(false)

</script>

<template>

    <div class="wrapper">
    <q-card class="my-card ">
      <q-card-section class="bg-accent  text-white">
        <div class="q-my-sm">
          <div class="text-subtitle row justify-end">
            Savollar soni:
            {{ store.question.length }}

          </div>
        </div>
        <div >
            Testning sharti:
        </div>
        <input-for-title/>
        <div class="q-mt-md">
            Masala qismlari:
        </div>
        <inp-for-condition/>
      </q-card-section>

      <q-separator />

      <q-card-section class="bg-accent text-white">
        <div class="q-my-md">
          Variantlar
        </div>
        <inp-for-variants/>
      </q-card-section>
    </q-card>
    <card/>

  </div>

</template>
<style scoped>
.wrapper {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.my-card {
  width: 100%;
  margin-top: 5px;
  /* margin: 0 auto; */
}

</style>
