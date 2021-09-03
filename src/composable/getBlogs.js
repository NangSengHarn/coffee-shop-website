import { ref } from "vue"
import {db} from "../firebase/config"
let getBlogs=()=>{
  let blogs=ref([]);
  let error=ref();
  let load=async()=>{
      try{
        let res=await db.collection("blogs").onSnapshot(snap=>{
          blogs.value=snap.docs.map(doc=>{
            return {id:doc.id,...doc.data()}
          })
        })
        if(res.status===404){
            throw new Error("Sorry! page url not found")
        }
      }catch(err){
        error.value=err.message;
      }
  }
  return{blogs,error,load};
}
export default getBlogs;