<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-weight-bold">
          Quiz
        </q-toolbar-title>

        <div>
          <q-btn @click="createNewClass">Yangi sinf</q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
    <div class="text-h6 text-weight-bold  q-ml-md q-mt-md">Sinflar</div>
  
    <q-list>
      <q-item
        clickable
        :active="room.label"
        v-for="room in store.classes"
        :key="room"
        :href="'/class/' + room.id"
      >
        <!-- <q-item-section avatar>
          <q-icon :name="room.icon" />
        </q-item-section> -->

        <q-item-section>
          {{ room.class_name }}
        </q-item-section>
      </q-item>
    </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { defineComponent, ref } from 'vue'

import { useApiStore } from 'src/stores';

const store = useApiStore()
store.GetClasses()
const createNewClass = () =>{
  localStorage.removeItem('idForClass')
  location.replace('/newclass')
}

  

    const leftDrawerOpen = ref(false)

  
      
     const toggleLeftDrawer =()=> {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    
</script>
