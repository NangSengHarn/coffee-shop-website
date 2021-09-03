import { ref } from "vue"
import {db} from "../firebase/config"
let getMenu=()=>{
  let menu=ref([]);
  let error=ref();
  let addToCartItem=ref([]);
  let load=async()=>{
      try{
        let res=await db.collection("menu").onSnapshot(snap=>{
          menu.value=snap.docs.map(doc=>{
            return {id:doc.id,...doc.data()}
          })
          addToCartItem.value=menu.value.filter(item=>{
              return item.addToCart;
          })
        })
        if(res.status===404){
            throw new Error("Sorry! page url not found")
        }
      //   menu.value=res.docs.map((doc)=>{
      //     return {id:doc.id,...doc.data()}
      //   })
      // addToCartItem.value=menu.value.filter((item)=>{
      //     return item.addToCart;
      // })
      }catch(err){
        error.value=err.message;
      }
  }
  return{menu,error,addToCartItem,load};
}
export default getMenu;