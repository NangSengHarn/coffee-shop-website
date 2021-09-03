import { ref } from "vue"
import {db} from "../firebase/config"
let getItem=()=>{
  let menu=ref([]);
  let product=ref([]);
  let allItem=ref([]);
  let error=ref();
  let addToCartItem=ref([]);
  let load=async()=>{
      try{
        let res=await db.collection("sellItem").onSnapshot(snap=>{
          allItem.value=snap.docs.map(doc=>{
            return {id:doc.id,...doc.data()}
          })
          addToCartItem.value=allItem.value.filter(item=>{
              return item.addToCart;
          })
          menu.value=allItem.value.filter(item=>{
            return item.type==="menu";
          })
          product.value=allItem.value.filter(item=>{
            return item.type==="product";
          })
        })
        if(res.status===404){
            throw new Error("Sorry! page url not found")
        }
      }catch(err){
        error.value=err.message;
      }
  }
  return{menu,product,addToCartItem,load,error};
}
export default getItem;