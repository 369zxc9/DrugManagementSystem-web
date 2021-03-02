<template>
<div>
     
    <div class="header" >
         <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  

  <el-menu-item index="2" @click="showStock">库存管理</el-menu-item>
  <el-menu-item index="3" @click="showDrug">药品管理</el-menu-item>
  <el-menu-item index="4" @click="showDemand">需求管理</el-menu-item>

<div class="demo-type">
    <div>
      <el-avatar icon="el-icon-user-solid"></el-avatar>
    </div>
    
</div>
<a href="">注销</a>

</el-menu>
   <Stocksearch v-if="stock_visible"></Stocksearch>
   <Drug v-if="drug_visible"></Drug>
   <Demand v-if="demand_visible"></Demand>
</div>

    </div>
</template>

<script>
import Stocksearch from '@/components/Stocksearch.vue'
import Drug from '@/components/Drug.vue'
import Demand from '@/components/Demand.vue'
export default {
  components: { Stocksearch, Drug,Demand },
    name:'Pharmacy',
    data(){
        return{
           
            stock_visible:false,
            drug_visible:false,
            demand_visible:false
        }

    },
   
//   props:{
//        user_visible:{
//       type:Boolean,
//           default:false
//       }
//   },
    methods:{

        
        showStock(){
            this.stock_visible= !this.stock_visible
            this.drug_visible =false
            this.demand_visible=false
            
        },
        showDrug(){
            this.drug_visible= !this.drug_visible
            this.stock_visible = false
            this.demand_visible=false
        },
        showDemand(){
            this.demand_visible= !this.demand_visible
            this.stock_visible = false
            this.drug_visible=false
        }

    }
}
</script>