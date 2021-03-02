<template>
    <div>
        <h2>出库查询</h2>
        <!-- <el-button type="primary" plain @click="checkSale">出库查询</el-button> -->
        
        <Stockout></Stockout>
        
        <!-- <v-Usermanegement v-show="user_visible" :user_visible="user_visible"></v-Usermanegement> -->
    </div>
</template>

<script>
import Stockout from '@/components/Stockout.vue'


export default {

    components:{Stockout},


    name:'Stockoutmanegement',
//     data(){
//         return{
//            sale:false,
            

//         }
//     },
// methods: {
// 		checkSale() {
		
//             this.sale = !this.sale
            
//         },
        
// 	}

}
</script>