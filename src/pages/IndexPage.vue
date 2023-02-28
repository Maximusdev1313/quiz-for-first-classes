<script setup>
const createNewClass = () =>{
  localStorage.removeItem('idForClass')
  location.replace('/newclass')
}

</script>
<template >
  <div class="wrapper row justify-around items-center ">
    <div class="content ">
      <div class="title">
        O'qituvchi va o'quchilar  uchun eng yaxshi yordamchi
      </div>
      <p class="content-subtitle">
        Istalgan sinflar uchun oraliq va nazorat testlarini osongina tayyorlang va barchasini saqlab qo'ying. 
        
      </p>
      <q-btn color="primary" @click="createNewClass">Boshlash</q-btn>
    </div>
    <div class="img"></div>
  </div>
</template>
<style scoped>

.wrapper{
  width: 100%;
  height: 90vh;
}
.content{
  width: 40%;
}
.title{
  font-size: 26px;
  font-weight: bold;
}
.content-subtitle{
  font-size: 16px;
}
.img{
  width: 500px;
  height: 300px;
  background-image: url('../assets/main1.png');
  background-repeat: no-repeat;
  background-size: cover;
}

</style>