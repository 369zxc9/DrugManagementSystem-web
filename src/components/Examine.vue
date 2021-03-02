<template>
    <el-table :data="list" height="800" border style="width: 100%">
    <!-- type="index"获取索引值，labal显示标题，prop 数据字段名 -->
    <el-table-column type="index" label="序号"></el-table-column>

    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="age" label="年龄"></el-table-column>
    <el-table-column prop="sex" label="性别"></el-table-column>
    <el-table-column prop="position" label="职位"></el-table-column>
    <el-table-column prop="email" label="邮箱"></el-table-column>
  
    <el-table-column label="操作">
      <template slot-scope="scope">
        <!-- <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button> -->
         <el-button size="mini" @click="handleAdd(scope.row.id)">通过</el-button>
        <!-- <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button> -->
      </template>fc f r
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios'

export default {
    name:'Examine',
     data() {
    return {
      list: [
        {
          index:'1',
          name:'yy',
          age:'19',
          sex:'男',
          position:'销售人员',
          email:'792533907@qq.com'
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
    // handleEdit(id){
    //     console.log('编辑',id)
    // },
    handleAdd(id){
        console.log('通过',id),
        axios
        .get("/")

        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

    },
    // handleDelete(id){
    //     console.log('删除',id)
    // },

  }
}
</script>