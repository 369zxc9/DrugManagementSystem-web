<template>
  <!-- 数据列表
：data 绑定渲染的数据 
border 表格边框
  -->
  <el-table :data="list" height="800" border style="width: 100%">
    <!-- type="index"获取索引值，labal显示标题，prop 数据字段名 -->
    <el-table-column prop="purchasenumber" label="采购分录"></el-table-column>
    <!-- <el-table-column type="drugnumber" label="药品编号"></el-table-column>  
    <el-table-column prop="drugname" label="药品名"></el-table-column>
    -->
    <!-- <el-table-column prop="supplier" label="供应商"></el-table-column>
    <el-table-column prop="innumber" label="数量"></el-table-column>
    <el-table-column prop="price" label="进价"></el-table-column>
    -->
    <el-table-column prop="inperson" label="经办人"></el-table-column>
    <el-table-column prop="purchasedate" label="采购日期"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleDetail(scope.row.purchasenumber)">详情</el-button>
         <!-- <el-button size="mini" @click="handleAdd(scope.row.id)">增加</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button> -->
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios'

export default {
    name:'Stockin',
     data() {
    return {
      list: [
        {
          purchasenumber:"123456",
          inperson:"张三",
          purchasedate:"2021-2-18",

        }
      ]
    };
  },

  created() {
    // 初始化获取列表数据
    this.fetchData();
  },

  methods: {
    fetchData() {
    axios
        .get("/")
        .then( (response)=>{
         
         this.list = response.data.data
         console.log(this.list);
         
        })
        .catch(function (error) {
          console.log(error);
        });
     
    
    },



    handleDetail(purchasenumber){

        console.log(purchasenumber)

         axios.get('/', {			
				params:{
					item:purchasenumber,
				
					"contentType": "application/json;charset=utf-8"
				},
				
				
			})
			.then(function (response){
				console.log(response);
			})
			.catch(function (error){
				console.log(error)
			});


            this.$router.push({ path:'/Purchasedetail'})
    },






    handleEdit(id){
        console.log('编辑',id)
    },
    handleAdd(id){
        console.log('增加',id)

    },
    handleDelete(id){
        console.log('删除',id)
    },

  }
}
</script>