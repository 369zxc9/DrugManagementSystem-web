<template>
    <div>
    
    <el-table
      :data="list"
      height="800"
      border
      style="width: 100%"
     @cell-click="handle"  
    >
      <!-- <el-table-column prop="drugnumber" label="药品编号"></el-table-column> -->

      <el-table-column  prop="drugname" label="药品名字">
        
      </el-table-column>

      <el-table-column prop="demand" label="数量"></el-table-column>
      <!-- <el-table-column prop="prescription" label="处方药"></el-table-column> -->
      <el-table-column label="供应商选择">

          <el-select v-model="value" placeholder="请选择">
          <el-option
           v-for="item in options"
           :key="item.value"
           :label="item.supplier"
           :value="item.supplier">
    </el-option>
  </el-select>



       </el-table-column>   

      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" v-if="show_1" @click="already(scope.$index, scope.row)">采购</el-button>
        <el-button size="mini" v-if="show_2"  disabled>已采购</el-button>
         <!-- <el-button size="mini" @click="handleDetail(scope.row.drugnumber)">详情</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button> -->
      </template>
    </el-table-column>
    </el-table>



    </div>
</template>

<script>
import axios from "axios";
export default {
    name:'Purchasedetail',
    data(){
        return{
            list:[
                {
                    drugname:"阿莫西林",
                    demand:"120",

                }
            ],
            options:[],
            show_1:true,
            show_2:false

        }
    },
    created() {
    // 初始化获取列表数据
    this.fetchData();
  },
    methods:{
        already(){
            this.show_1 = false;
            this.show_2 = true
        },
        fetchData() {
      axios
        .get("/")

        .then(function (response) {
          console.log(response);
          this.options = response.options;
          this.list = response.list
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    }
}
</script>