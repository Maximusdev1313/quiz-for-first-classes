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

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
    <div class="title  q-ml-md q-mt-md">Sinflar</div>
  <q-scroll-area
    style="height: calc(100% - 150px); border-right: 1px solid #ddd"
  >
    <q-list padding>
      <q-item
        clickable
        v-ripple
        :active="room.label"
        v-for="room in store.classes"
        :key="room"
        :to="'/class/' + room.id"
      >
        <!-- <q-item-section avatar>
          <q-icon :name="room.icon" />
        </q-item-section> -->

        <q-item-section>
          {{ room.class_name }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>
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

  

    const leftDrawerOpen = ref(false)

  
      
     const toggleLeftDrawer =()=> {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    
</script>
