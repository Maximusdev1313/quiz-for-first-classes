import { store } from 'quasar/wrappers'
import { createPinia, defineStore } from 'pinia'
import axios from 'axios'

export const useApiStore = defineStore('store', {
  state: ()=>({
    classes: [],
    question: [],
    storageItems: []

  }),
  actions:{
    async GetClasses(){
      try {
        const res = await axios.get('http://quizforbeginner.pythonanywhere.com/class/')
        this.classes = res.data
        console.log(this.classes);
      } catch (error) {
        console.log(error.message);
        
      }
    },
    async GetQuestion(id, setStorage, getStorage ){
      try {
        const res = await axios.get(`http://quizforbeginner.pythonanywhere.com/class/${id}`)
        const api = res.data
        this.question = [...api.quizzes]
        setStorage(this.question)
        getStorage()
        console.log(this.question);
      } catch (error) {
        console.log(error.message);
      }
    },
    SetItemsTostorage(item){
        localStorage.setItem('question', JSON.stringify(item))
        
      
    },
    GetItemFromStorage(){
      let item = localStorage.getItem('question')
      this.storageItems =  JSON.parse(item)
        console.log(this.storageItems, 'item');
    }
  }


})

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia()

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia
})
