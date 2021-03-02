<template>
<div>
  
    <Demo @user_1="checkUser_1($event)" @user_2="checkUser_2($event)" @user_3="checkUser_3($event)"  @stick="checkStick($event)" @purchase="checkPurchase($event)" @sale="checkSale($event)" @drug="checkDrug($event)"></Demo>
    <Buyuser v-if="check1"></Buyuser>
    <Saleuser  v-if="check2"></Saleuser>
    <Examine v-if="check7"></Examine>
    <Stocksearch v-if="check3"></Stocksearch>
    <Stockin v-if="check4"></Stockin>
    <Stockout v-if="check5"></Stockout>
    <Drug v-if="check6"></Drug>

    <div class="header">

    </div>


  
 </div>  
      
    
</template>

<script>
import Demo from  '@/components/Demo.vue'
import Buyuser from '@/components/Buyuser.vue'
import Saleuser from '@/components/Saleuser.vue'
import Examine from '@/components/Examine.vue'
import Stocksearch from '@/components/Stocksearch.vue'
import Drug from '@/components/Drug.vue'
import Stockin from '@/components/Stockin.vue'
import Stockout from '@/components/Stockout.vue'
//import Usermanegement from '../components/Usermanegement.vue'


export default {
   components: { Buyuser,Demo,Saleuser,Stocksearch,Stockin,Stockout,Drug,Examine},
    name:'Menu',

  
      watch: { "$route": 'fetchData' },

      data(){
         return{
            check1:false,
            check2:false,
            check3:false,
            check4:false,
            check5:false,
            check6:false,
            check7:false
         }
      },

   
   methods:{
      checkUser_1(data){
         this.check1 =data;
         
      },
      checkUser_2(data){
         this.check2 =data;
         
         
      },
      checkUser_3(data){
         this.check7 =data;
         
      },
      checkStick(data){
         this.check3 = data;
      },
      checkPurchase(data){
         this.check4 = data;
      },
      checkSale(data){
         this.check5 = data
      },
       checkDrug(data){
         this.check6 = data;
      },
    
   }
    
}
</script>

<style scoped>

</style>