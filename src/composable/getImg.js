import { ref } from "vue"
import {db} from "../firebase/config"
let getImg=()=>{
  let img=ref([]);
  let error=ref();
  let load=async()=>{
      try{
        let res=await db.collection("images").onSnapshot(snap=>{
          img.value=snap.docs.map(doc=>{
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
  return{img,error,load};
}
export default getImg;