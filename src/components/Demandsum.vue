<template>
<div>
   <el-button type="primary" plain @click="order(scope.row.id)" style="margin-left:-1000px">生成采购单</el-button>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="需求日期"
      width="300">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="drugname"
      label="药品名"
      width="300">
    </el-table-column>
    <el-table-column
      prop="demand"
      label="需求量"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <!-- <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button> -->
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>
  </div>
</template>

<script>
import axios from "axios";
  export default {
    data() {
      return {
        tableData: [{
          id:'1',
          date: '2016-05-03',
          drugname: '阿莫西林',
          demand: '120'
        }, {
          id:'2',
          date: '2016-05-02',
          drugname: '阿莫西林',
          demand: '120'
        }, {
          id:'3',
          date: '2016-05-02',
          drugname: '阿莫西林',
          demand: '120'
        }, {
          id:'4',
          date: '2016-05-02',
          drugname: '阿莫西林',
          demand: '120'
        }, {
          id:'5',
          date: '2016-05-02',
          drugname: '阿莫西林',
          demand: '120'
        }, {
          id:'6',
          date: '2016-05-02',
          drugname: '阿莫西林',
          demand: '120'
        },{
          id:'7',
          date: '2016-05-02',
          drugname: '阿莫西林',
          demand: '120'
        }
        ],
        multipleSelection: []
      }
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
         
         this.tableData = response.data.data
         console.log(this.tableData);
         
        })
        .catch(function (error) {
          console.log(error);
        });
     
    
    },


      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },

      handleSelectionChange(val) {
        // this.multipleSelection = val;
        for (let selectedItem of val) {
          this.merchantSelectedIds.push(selectedItem.id)
        }
      },

      order(){
        console.log();
        // let id = selectedItem.id;
         axios.get('/', {			
				// params:{
				// 	item:id,				
				// 	"contentType": "application/json;charset=utf-8"
				// },
				
				
			})
			.then(function (response){
				console.log(response);
			})
			.catch(function (error){
				console.log(error)
			});

            this.$router.push({ path:'/Drugdetail'})
    
      }
    }
  }
</script>