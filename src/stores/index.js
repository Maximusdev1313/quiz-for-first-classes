import { store } from 'quasar/wrappers'
import { createPinia, defineStore } from 'pinia'
import axios from 'axios'

export const useApiStore = defineStore('store', {
  state: ()=>({
    classes: [],
    question: [],
    questions: [],
    clicker: false,
    

  }),
  actions:{
    async GetClasses(){
      try {
        const res = await axios.get('http://quizforbeginner.pythonanywhere.com/class/')
        this.classes = res.data
      } catch (error) {
        console.log(error.message);
        
      }
    },
    async GetQuestion( id ) {
      
      try {
        let Fetch_Api = await axios.get(`http://quizforbeginner.pythonanywhere.com/class/${id}`)
        let  category = Fetch_Api.data
        this.question =  category.quizzes
      } catch (error) {
        console.log( 'error', error.message);

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
    
  },
  getters:{

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
