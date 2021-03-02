<template>
<div>
     

    <!-- <el-button type="primary" @click="showPurchase">采购管理</el-button>
    <el-button type="primary" @click="showSupplier">供应商管理</el-button> -->
    <div class="header" >
         <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  
  <!-- <el-submenu index="1">
    <template slot="title">用户管理</template>
    <el-menu-item index="1-1"  @click="showUser_1">采购人员管理</el-menu-item>
    <el-menu-item index="1-2" @click="showUser_2">销售人员管理</el-menu-item>
   
  </el-submenu> -->
  <el-menu-item index="2" @click="showPurchase">采购管理</el-menu-item>
  <el-menu-item index="3" @click="showSupplier">供应商管理</el-menu-item>
  <el-menu-item index="4" @click="showDemand">需求管理</el-menu-item>

  <div class="demo-type">
    <div>
      <el-avatar icon="el-icon-user-solid"></el-avatar>
    </div>
    
</div>
<a href="">注销</a>

</el-menu>
   <Purchasecheck v-if="purchase_visible"></Purchasecheck>
   <Supplier v-if="supplier_visible"></Supplier>
   <Demandsum v-if="demand_visible"></Demandsum>
</div>

    </div>
</template>

<script>
import Purchasecheck from '@/components/Purchasecheck.vue'
import Supplier from '@/components/Supplier.vue'
import Demandsum from '@/components/Demandsum.vue'
export default {
  components: { Purchasecheck, Supplier,Demandsum },
    name:'Buymanmenu',
    data(){
        return{
           
            purchase_visible:false,
            supplier_visible:false,
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

        
        showPurchase(){
            this.purchase_visible= !this.purchase_visible
            this.supplier_visible =false
            this.demand_visible = false
            
        },
        showSupplier(){
            this.supplier_visible= !this.supplier_visible
            this.purchase_visible = false
            this.demand_visible = false
            
        },
        showDemand(){
            this.demand_visible= !this.demand_visible
            this.purchase_visible = false
            this.supplier_visible = false

        }

    }
}
</script>