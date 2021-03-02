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
  <el-form-item label="药品名称">
    <el-input v-model="formLabelAlign.drugNames"></el-input>
  </el-form-item>
  <el-form-item label="药品批准文号">
    <el-input v-model="formLabelAlign.approvalNumber"></el-input>
  </el-form-item>
   <el-form-item label="生产商">
    <el-input v-model="formLabelAlign.manufacturer"></el-input>
  </el-form-item>

  <el-form-item label="处方药">
    <!-- <el-input v-model="formLabelAlign.prescription"></el-input> -->
     <el-radio v-model="radio" label="1">处方药</el-radio>
  <el-radio v-model="radio" label="2">非处方药</el-radio>
  </el-form-item>

  <el-form-item label="成分">
    <el-input v-model="formLabelAlign.component"></el-input>
  </el-form-item>

  <el-form-item label="主治功能">
    <el-input v-model="formLabelAlign.curativeEffect"></el-input>
  </el-form-item>

   <el-form-item label="有效天数">
    <el-input v-model="formLabelAlign.days"></el-input>
  </el-form-item>

  <el-form-item label="禁忌">
    <el-input v-model="formLabelAlign.taboo"></el-input>
  </el-form-item>

   <el-form-item label="生产日期">
    <el-input v-model="formLabelAlign.productionDate"></el-input>
  </el-form-item>


  <el-form-item label="不良反应">
    <el-input v-model="formLabelAlign.reactions"></el-input>
  </el-form-item>
</el-form>
<el-button type="primary" plain @click="drugAdd">添加</el-button>
    </div>
</template>

<script>
import axios from 'axios'
  export default {
    name:'Drugadd',
    data() {
      return {
         radio: '1',
        labelPosition: 'right',
        formLabelAlign: {
          drugnumber: '',
          drugNames: '',
          approvalNumber: '',
          manufacturer:'',
          prescription:'',
          component:'',
          curativeEffect:'',
          days:'',
          taboo:'',
          productionDate:'',
          reactions:''
        }
      };
    },
    methods:{
        drugAdd(){
      //       axios.get('/drug/addDrug', {
			
			// 	params:{
			// 		drugnumber:this.formLabelAlign.drugnumber,
			// 		drugNames:this.formLabelAlign.drugNames,
      //     approvalNumber:this.formLabelAlign.approvalNumber,
      //     manufacturer:this.formLabelAlign.manufacturer,
      //     curativeEffect:this.formLabelAlign.curativeEffect,
      //     taboo:this.formLabelAlign.taboo,
      //     component:this.formLabelAlign.component,
      //     reactions:this.formLabelAlign.reactions,
      //     days:this.formLabelAlign.days,
			// 		radio:this.formLabelAlign.radio,
      //     productionDate:this.formLabelAlign.productionDate,
			// 		"contentType": "application/json;charset=utf-8"
			// 	},
				
				
			// })
			// .then(function (response){
			// 	console.log(response);
      //           alert('添加成功')
			// })
			// .catch(function (error){
			// 	console.log(error)
			// });


      //       this.$router.push({ path:'/Menu'})
        axios({
  method: 'post',
  url: '/drug/addDrug',
  data: {
          drugnumber:this.formLabelAlign.drugnumber,
					drugNames:this.formLabelAlign.drugNames,
          approvalNumber:this.formLabelAlign.approvalNumber,
          manufacturer:this.formLabelAlign.manufacturer,
          curativeEffect:this.formLabelAlign.curativeEffect,
          taboo:this.formLabelAlign.taboo,
          component:this.formLabelAlign.component,
          reactions:this.formLabelAlign.reactions,
          days:this.formLabelAlign.days,
					radio:this.radio,
          productionDate:this.formLabelAlign.productionDate,
  },
  timeout: 1000,

  //其他相关配置
});
this.$router.push({name: 'Menu',

    params: {
      check6: true
    }
})
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