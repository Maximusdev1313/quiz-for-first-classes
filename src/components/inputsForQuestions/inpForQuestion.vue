<script setup>
import {ref} from 'vue'
import inputForTitle from './inputForTitle.vue'
import inpForCondition from './inpForCondition.vue'
import inpForVariants from './inpForVariants.vue'
let model = ref('')
let teal = ref(false)

</script>

<template>

    <div class="wrapper">
    <q-card class="my-card ">
      <q-card-section class="bg-accent  text-white">
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
  /* margin: 0 auto; */
}

</style>
