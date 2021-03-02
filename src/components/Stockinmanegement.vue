<template>
    <div>
        <h2>入库查询</h2>
        <!-- <el-button type="primary" plain @click="checkPurchase">入库查询</el-button>
        <el-button type="primary" plain @click="searchSupplier">供应商管理</el-button> -->
        <stockin ></stockin>
        <!-- <Supplier v-if="Supplier"></Supplier> -->
        <!-- <v-Usermanegement v-show="user_visible" :user_visible="user_visible"></v-Usermanegement> -->
    </div>
</template>

<script>
import Stockin from '@/components/Stockin.vue'
//import Supplier from '@/components/Supplier.vue'
//import Stockin from './Stockin.vue'

export default {

    components:{Stockin},


   name:'Stockinmanegement',
    data(){
        return{
            // Purchase:false,
            // Supplier:false

        }
    },
// methods: {
// 		checkPurchase() {
		
//             this.Purchase = !this.Purchase
            
//         },
//         searchSupplier(){
//             this.Supplier = !this.Supplier

//         }
// 	}

}
</script>