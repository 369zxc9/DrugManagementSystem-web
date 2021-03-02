<template>
<div class="header" >
  <!-- <el-row class="tac">
  <el-col :span="4"> -->
    <!-- <h5>默认颜色</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title" @click="showUser">用户管理</template>
          <el-menu-item index="1-1" @click="showUser_1" >采购人员管理</el-menu-item>
          <el-menu-item index="1-2"  @click="showUser_2">销售人员管理</el-menu-item>
        </el-menu-item-group>
       
      
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title" @click="showStick">库存管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title" @click="showPurchase">入库管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title" @click="showSale" >出库管理</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  </el-row> -->

  <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  
  <el-submenu index="1">
    <template slot="title">用户管理</template>
    <el-menu-item index="1-1"  @click="showUser_1">采购人员管理</el-menu-item>
    <el-menu-item index="1-2" @click="showUser_2">销售人员管理</el-menu-item>
    <el-menu-item index="1-3" @click="showUser_3">注册用户审核</el-menu-item>
   
  </el-submenu>
  <el-menu-item index="2" @click="showStick">库存管理</el-menu-item>
  <el-menu-item index="3" @click="showDrug">药品管理</el-menu-item>
  <el-menu-item index="4" @click="showPurchase">入库管理</el-menu-item>
  <el-menu-item index="5" @click="showSale">出库管理</el-menu-item>

  <!-- <i class="el-icon-s-custom"></i> -->
<div class="demo-type">
    <div>
      <el-avatar icon="el-icon-user-solid"></el-avatar>
    </div>
    
</div>
<a href="">注销</a>
</el-menu>
     

    <!-- <el-button type="primary" @click="showUser">用户管理</el-button>
    <el-button type="primary" @click="showStick">库存管理</el-button>
    <el-button type="primary" @click="showPurchase">入库管理</el-button>
    <el-button type="primary" @click="showSale">出库管理</el-button>
  -->

  


    </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            user_visible_1:false,
            user_visible_2:false,
            user_visible_3:false,
            stick_visible:false,
            purchase_visible:false,
            sale_visible:false,
             circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        // squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        // sizeList: ["large", "medium", "small"]
        }

    },
   
//   props:{
//        user_visible:{
//       type:Boolean,
//           default:false
//       }
//   },
    methods:{

        showUser_1(){  
            
           this.user_visible= !this.user_visible
            this.$emit('user_1',true)
            this.$emit('user_2',false)
            this.$emit('user_3',false)
            this.$emit('stick',false)
            this.$emit('purchase',false)
            this.$emit('sale',false)
            this.$emit('drug',false)
        },
         showUser_2(){  
            
           this.user_visible= !this.user_visible
            this.$emit('user_2',true)
            this.$emit('user_1',false)
            this.$emit('user_3',false)
            this.$emit('stick',false)
            this.$emit('purchase',false)
            this.$emit('sale',false)
            this.$emit('drug',false)
        },
         showUser_3(){  
            
           this.user_visible= !this.user_visible
            this.$emit('user_3',true)
            this.$emit('user_2',false)
            this.$emit('user_1',false)
            this.$emit('stick',false)
            this.$emit('purchase',false)
            this.$emit('sale',false)
            this.$emit('drug',false)
        },
        showStick(){
            this.stick_visible= !this.stick_visible
            this.$emit('stick',true)
            this.$emit('user_1',false)
            this.$emit('user_2',false)
            this.$emit('user_3',false)
            this.$emit('purchase',false)
            this.$emit('sale',false)
            this.$emit('drug',false)
        },
        showPurchase(){
            this.purchase_visible= !this.purchase_visible
            this.$emit('purchase',true)
            this.$emit('stick',false)
            this.$emit('user_1',false)
             this.$emit('user_2',false)
             this.$emit('user_3',false)
            this.$emit('sale',false)
            this.$emit('drug',false)
        },
        showSale(){
            this.sale_visible= !this.sale_visible
            this.$emit('sale',true)
            this.$emit('stick',false)
            this.$emit('purchase',false)
            this.$emit('user_1',false)
             this.$emit('user_2',false)
             this.$emit('user_3',false)
             this.$emit('drug',false)
        },
        showDrug(){
            this.sale_visible= !this.sale_visible
            this.$emit('sale',false)
            this.$emit('stick',false)
            this.$emit('purchase',false)
            this.$emit('user_1',false)
             this.$emit('user_2',false)
             this.$emit('user_3',false)
             this.$emit('drug',true)
        },
        
         handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }

    }
}
</script>

<style scoped>
/* .sub-title{
  margin-top: -55px;
  margin-right: 200px;
} */
.demo-type{
margin-top: 10px;
margin-left: 200px;
}
</style>