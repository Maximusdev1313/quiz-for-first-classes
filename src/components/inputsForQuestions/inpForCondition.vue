<script setup>
import { ref } from 'vue';

let model = ref('')
let val = ref(false)
</script>

<template>
    <div>
        <div class="row justify-between no-wrap q-mt-md">
            <div>
                <q-input  
                    v-model="model"
                    
                    label-color="primary"
                    color="white"
                    bg-color="white"
                />
                <q-checkbox v-model="val" label="Berkitish" />
                
            </div>
            <div>
                <q-input  
                    v-model="model"
                    
                    label-color="primary"
                    color="white"
                    bg-color="white"
                />
                <q-checkbox v-model="val" label="Berkitish" />
                
            </div>
            <div>
                <q-input  
                    v-model="model"
                    
                    label-color="primary"
                    color="white"
                    bg-color="white"
                />
                <q-checkbox v-model="val" label="Berkitish" />
                
            </div>
            <div>
                <q-input  
                    v-model="model"
                    
                    label-color="primary"
                    color="white"
                    bg-color="white"
                />
                <q-checkbox v-model="val" label="Berkitish" />
                
            </div>
            <div>
                <q-input  
                    v-model="model"
                    
                    label-color="primary"
                    color="white"
                    bg-color="white"
                />
                <q-checkbox v-model="val" label="Berkitish" />
                
            </div>
          
        </div>

    </div>
</template>