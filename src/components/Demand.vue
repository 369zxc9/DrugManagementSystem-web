<template>
<div>
<el-button type="primary" plain @click="demandAdd" style="margin-left:-1000px">添加</el-button>
    <el-table :data="list" height="800" border style="width: 100%">
    <!-- type="index"获取索引值，labal显示标题，prop 数据字段名 -->
    <el-table-column prop="drugname" label="药品名"></el-table-column>

    <el-table-column prop="demand" label="需求量"></el-table-column>
    
    <el-table-column prop="state" label="状态"></el-table-column>
   
  </el-table>


   <el-dialog title="新增需求" :visible="demandForm" size="tiny" :modal-append-to-body='false' @close='closeDialog'>
  <el-form ref="editForm" :model="editForm" label-width="80px">
    <el-form-item label="药品编号">
      <el-input  max-length="10" ></el-input>
    </el-form-item>
    <el-form-item label="药品名字">
      <el-input></el-input>
    </el-form-item>
   
    <el-form-item label="数量">
      <el-input></el-input>
    </el-form-item>
    
    <el-form-item>
      <el-button type="primary" @click="handleUpdate()">确定</el-button>
      <el-button @click=" handleCancel()">取消</el-button>
       
    </el-form-item>
  </el-form>
</el-dialog>




  </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Demand',
     data() {
    return {
      demandForm:false,
      list: [
        {
          drugname:"阿莫西林",
          demand:"120",
          state:"未采购"
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

    demandAdd(){
      this.demandForm = true;
    },
    closeDialog(){
       this.demandForm = false;
    },
    handleCancel(){
      this.demandForm = false;
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
    
        // this.$set(this.list,this.editForm.index,{drugnumber:this.editForm.drugnumber,drugname:this.editForm.drugname,approvalNumber:this.editForm.approvalNumber,prescription:this.editForm.prescription});
        this.demandForm = false;

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