<template>
    <div>
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
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
         <!-- <el-button size="mini" @click="handleAdd(scope.row.id)">增加</el-button> -->
        <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">禁用</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog title="编辑员工信息" :visible="editDrugForm" size="tiny" :modal-append-to-body='false' @close='closeDialog'>
  <el-form ref="editForm" :model="editForm" label-width="80px">
    <el-form-item label="员工编号">
      <el-input  v-model="editForm.index" max-length="10" disabled="disabled"></el-input>
    </el-form-item>
    <el-form-item label="用户名">
      <el-input v-model="editForm.name" disabled="disabled"></el-input>
    </el-form-item>
     <el-form-item label="年龄">
      <el-input v-model="editForm.age"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-input v-model="editForm.sex"></el-input>
    </el-form-item>
    <el-form-item label="职位">
      <el-input v-model="editForm.position" disabled="disabled"></el-input>
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input v-model="editForm.email"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleUpdate(scope.$index)">确定</el-button>
      <el-button @click=" handleCancel()">取消</el-button>
       
    </el-form-item>
  </el-form>
</el-dialog>
</div>



</template>

<script>
import axios from 'axios'

export default {
    name:'Saleuser',
     data() {
    return {
      editDrugForm:false,
      list: [
        {
          index:'1',
          name:'yy',
           age:'19',
          sex:'男',
          position:'采购人员',
          email:'792533907@qq.com'
        }

      ],
       editForm:{
        index: "",
        name: "",
        age:"",
        sex: "",
        position: "",
        email:"",
      }
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
    handleEdit(index,row) {
       this.editDrugForm = true;//dialog对话窗口打开
        this.editForm = Object.assign({}, row);//将数据传入dialog页面
        this.editForm.index=index;//传递当前index
        // console.log(drugnumber)
    },
     handleCancel() {
        this.editDrugForm = false;
       
      },
       closeDialog(){
      this.editDrugForm = false;
    },

       handleUpdate() {
      //dialog页面数据写入到tableData页面上
      //this.$set(tableName,talbeIndex,data)

      axios
        .get("/")

        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    
        this.$set(this.list,this.editForm.index,{index:this.editForm.index+1,name:this.editForm.name,age:this.editForm.age,sex:this.editForm.sex,position:this.editForm.position,email:this.editForm.email});
        this.editDrugForm = false;

      },
    handleAdd(id){
        console.log('增加',id)

    },
    handleDelete(id){
        console.log('删除',id),
        axios
        .get("/")

        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

  }
}
</script>