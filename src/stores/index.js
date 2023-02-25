import { store } from 'quasar/wrappers'
import { createPinia, defineStore } from 'pinia'
import axios from 'axios'

export const useApiStore = defineStore('store', {
  state: ()=>({
    classes: [],
    question: [],
    clicker: false,
    

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
    async GetQuestion(id,  ){
      try {
        const res = await axios.get(`http://quizforbeginner.pythonanywhere.com/class/${id}`)
        const api = res.data
        this.question = [...api.quizzes]
        // localStorage.removeItem('questions')
        
        console.log(this.question);
      } catch (error) {
        console.log(error.message);
      }
    },
    SetItemsTostorage(itemName,item){
        localStorage.setItem(itemName, JSON.stringify(item))
        
      
    },
    
    GetItemFromStorage(item){
      let items = localStorage.getItem(item)
      let parsedItem = JSON.parse(items)
      return parsedItem
    },
    
    createObject(entry, check) {
      return {
        entry: entry,
        check: check,
      };
    },
   addingObjectToArray(array, object){
      array.push(object)
      
   },
    getSpecialId(){
      let date = new Date().getTime();
      const random = Math.floor(Math.random() * 10000);
      let special_id = random.toString() + date + random.toString();
      return special_id
    },
    
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
