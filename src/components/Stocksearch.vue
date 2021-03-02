<template>
  <!-- 数据列表
：data 绑定渲染的数据 
border 表格边框
  -->
  <div>
  <el-input v-model="input" placeholder="请输入内容" style="width:300px"></el-input>
  <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>

  <el-table :data="list" height="800" border style="width: 100%">
    <!-- type="index"获取索引值，labal显示标题，prop 数据字段名 -->
    <el-table-column prop="drugnumber" label="药品编号"></el-table-column>
  
    <el-table-column prop="drugname" label="药品名"></el-table-column>
    <el-table-column prop="number" label="数量"></el-table-column>
    <el-table-column prop="indications" label="主治功能"></el-table-column>
    <el-table-column prop="supplier" label="生产商"></el-table-column>
    <el-table-column prop="price" label="价格"></el-table-column>
   
    <el-table-column prop="days" label="有效天数"></el-table-column>
   
    <el-table-column label="操作">
      <template slot-scope="scope">
        <!-- <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button> -->
         <el-button size="mini" @click="handleDetail(scope.row.drugnumber)">详情</el-button>
        <!-- <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button> -->
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Stocksearch',
     data() {
    return {
      list: [
        {
          drugnumber: "123",
          drugname: "阿莫西林",
          number:"152",
          indications:"消炎",
          supplier:"华北制药",
          price:"20.00",
          days:"752",
         
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

    search(){
      axios.get('/')
						
			.then(function (response){
				console.log(response);
			})
			.catch(function (error){
				console.log(error)
			});

    },


    handleDetail(drugnumber){

        console.log(drugnumber)

         axios.get('/', {			
				params:{
					item:drugnumber,
				
					"contentType": "application/json;charset=utf-8"
				},
				
				
			})
			.then(function (response){
				console.log(response);
			})
			.catch(function (error){
				console.log(error)
			});


            this.$router.push({ path:'/Drugdetail'})
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