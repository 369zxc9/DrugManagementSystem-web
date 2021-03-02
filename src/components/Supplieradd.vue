<template>
    <div class="add">
        <el-radio-group v-model="labelPosition" size="small">
  <!-- <el-radio-button label="left">左对齐</el-radio-button>
  <el-radio-button label="right">右对齐</el-radio-button>
  <el-radio-button label="top">顶部对齐</el-radio-button> -->
</el-radio-group>
<div style="margin: 20px;"></div>
<el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
  <!-- <el-form-item label="药品编号">
    <el-input v-model="formLabelAlign.drugnumber"></el-input>
  </el-form-item> -->
  <el-form-item label="供应商编号">
    <el-input v-model="formLabelAlign.suppliernumber"></el-input>
  </el-form-item>
  <el-form-item label="供应商名称">
    <el-input v-model="formLabelAlign.suppliername"></el-input>
  </el-form-item>
   <el-form-item label="地区">
    <el-input v-model="formLabelAlign.area"></el-input>
  </el-form-item>

  <!-- <el-form-item label="处方药"> -->
    <!-- <el-input v-model="formLabelAlign.prescription"></el-input> -->
     <!-- <el-radio v-model="radio" label="1">处方药</el-radio>
  <el-radio v-model="radio" label="2">非处方药</el-radio>
  </el-form-item> -->

  <el-form-item label="联系人">
    <el-input v-model="formLabelAlign.contacts"></el-input>
  </el-form-item>

  <el-form-item label="联系电话">
    <el-input v-model="formLabelAlign.phone"></el-input>
  </el-form-item>

   
</el-form>
<el-button type="primary" plain @click="supplierAdd">添加</el-button>
    </div>
</template>

<script>
import axios from 'axios'
  export default {
    name:'Supplieradd',
    data() {
      return {
        
        labelPosition: 'right',
        formLabelAlign: {
          suppliernumber: '',
          suppliername: '',
          area: '',
          contacts:'',
          phone:'',
         
        }
      };
    },
    methods:{
        supplierAdd(){
            axios({
  method: 'post',
  url: '/drug/addDrug',
  data: {
          suppliernumber:this.formLabelAlign.suppliernumber,
					suppliername:this.formLabelAlign.suppliername,
         area:this.formLabelAlign.area,
          contacts:this.formLabelAlign.contacts,
          phone:this.formLabelAlign.phone,
          // taboo:this.formLabelAlign.taboo,
          // component:this.formLabelAlign.component,
          // reactions:this.formLabelAlign.reactions,
          // days:this.formLabelAlign.days,
					// radio:this.radio,
          // productionDate:this.formLabelAlign.productionDate,
  },
  timeout: 1000,

  //其他相关配置
})
			.then(function (response){
				console.log(response);
                alert('添加成功')
			})
			.catch(function (error){
				console.log(error)
			});


            this.$router.push({ path:'/Buymanmenu'})
         
        }
    }
  }
</script>

<style scoped>
.add{
    height: 800px;
    width: 800px;
    border: black;
    margin-left: 500px;
    margin-top: 100px;
}
</style>