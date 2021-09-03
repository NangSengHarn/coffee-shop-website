import { ref } from "vue"
import {db} from "../firebase/config"
let getReviews=()=>{
  let reviews=ref([]);
  let error=ref();
  let load=async()=>{
      try{
        let res=await db.collection("reviews").onSnapshot(snap=>{
          reviews.value=snap.docs.map(doc=>{
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
  return{reviews,error,load};
}
export default getReviews;