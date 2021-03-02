<template>
  <!-- 数据列表
：data 绑定渲染的数据 
border 表格边框
  -->
  <div>
    <el-button
      type="primary"
      plain
      @click="drugAdd"
      style="margin-left: -1000px"
      >添加</el-button
    >
    <el-table
      :data="list"
      height="800"
      border
      style="width: 100%"
      @cell-click="handle"
    >
      <el-table-column prop="approvalNumber" label="药品编号"></el-table-column>

      <el-table-column prop="drugNames" label="药品名字">
        <!-- <span style="center" @click="test(item.drugnumber)">{{ item.drugname }}</span> -->
      </el-table-column>

      <el-table-column prop="approvalNumber" label="字号"></el-table-column>
      <el-table-column prop="radio" label="处方药"></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" @click="handleDetail(scope.row.id)"
            >详情</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <div>
      <el-dialog
        title="编辑药品信息"
        :visible="editDrugForm"
        size="tiny"
        :modal-append-to-body="false"
        @close="closeDialog"
      >
        <el-form ref="editForm" :model="editForm" label-width="80px">
          <el-form-item label="药品编号">
            <el-input
              v-model="editForm.drugnumber"
              max-length="10"
              disabled="disabled"
            ></el-input>
          </el-form-item>
          <el-form-item label="药品名字">
            <el-input v-model="editForm.drugname"></el-input>
          </el-form-item>
          <el-form-item label="字号">
            <el-input v-model="editForm.approvalNumber"></el-input>
          </el-form-item>
          <el-form-item label="处方药">
            <el-input v-model="editForm.prescription"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="handleUpdate()">确定</el-button>
            <el-button @click="handleCancel()">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Drug",
  data() {
    return {
      editDrugForm: false,

      list:'',
      editForm: {
        drugnumber: "",
        drugname: "",
        approvalNumber: "",
        prescription: "",
      },
    };
  },

  created() {
    // 初始化获取列表数据
    this.fetchData();
  },

  methods: {
    fetchData() {
     
      // var listitem = []
      axios
        .get("/drug/findAll")
        .then( (response)=>{
          
          console.log("测试==========================================");
          console.log(response.data.message)

         this.list = response.data.data
         console.log(this.list);
         
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    closeDialog() {
      this.editDrugForm = false;
    },

    handleEdit(index, row) {
      this.editDrugForm = true; //dialog对话窗口打开
      this.editForm = Object.assign({}, row); //将数据传入dialog页面
      this.editForm.index = index; //传递当前index
      // console.log(drugnumber)
    },

    handleDelete(id) {
      console.log("删除", id);
      axios
        .get("/")

        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    drugAdd() {
      this.$router.push({ path: "/Drugadd" });
    },

    handleCancel() {
      this.editDrugForm = false;
    },

    handleUpdate() {

      // axios;
      axios({
        method: "post",
        url: "/drug/updateDrug",
        data: {
          drugnumber: this.formLabelAlign.drugnumber,
          drugNames: this.formLabelAlign.drugNames,
          approvalNumber: this.formLabelAlign.approvalNumber,
          manufacturer: this.formLabelAlign.manufacturer,
          curativeEffect: this.formLabelAlign.curativeEffect,
          taboo: this.formLabelAlign.taboo,
          component: this.formLabelAlign.component,
          reactions: this.formLabelAlign.reactions,
          days: this.formLabelAlign.days,
          radio: this.radio,
          productionDate: this.formLabelAlign.productionDate,
        },
        timeout: 1000,
        //其他相关配置
      });

      this.$set(this.list, this.editForm.index, {
        drugnumber: this.editForm.drugnumber,
        drugname: this.editForm.drugname,
        approvalNumber: this.editForm.approvalNumber,
        prescription: this.editForm.prescription,
      });
      this.editDrugForm = false;
    },

    handleDetail(id) {
      console.log(id);

      axios
        .get("/", {
          params: {
            item: id,

            contentType: "application/json;charset=utf-8",
          },
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      this.$router.push({ path: "/Drugdetail" });
    },
    // },

    handle(row, column, event, cell) {
      console.log(row);
      console.log(column);
      console.log(event);
      console.log(cell);
      axios
        .get("/", {
          //	Header: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
          params: {
            item: this.row.drugnumber,

            contentType: "application/json;charset=utf-8",
          },

          // username:this.LoginForm.username,
          // password:this.LoginForm.password
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      this.$router.push({ path: "/Drugdetail" });
    },
  },
};
</script>