<template>
<div>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in img" :key="item">
      <!-- <h3>{{ item }}</h3> -->
      
      <img ref="imgHeight" :src="item.url" width="600px" height="100%" object-fit="cover">
    </el-carousel-item>
  </el-carousel>

   
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="药品名称">
            <span>{{ props.row.drugname }}</span>
          </el-form-item>
          <el-form-item label="成分">
            <span>{{ props.row.component }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.drugnumber }}</span>
          </el-form-item>
          <el-form-item label="主治功能">
            <span>{{ props.row.indications }}</span>
          </el-form-item>
          <el-form-item label="有效天数">
            <span>{{ props.row.days }}</span>
          </el-form-item>
          <el-form-item label="禁忌">
            <span>{{ props.row.taboo }}</span>
          </el-form-item>
          <el-form-item label="不良反应">
            <span>{{ props.row.reactions }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="药品 ID"
      prop="drugnumber">
    </el-table-column>
    <el-table-column
      label="药品名称"
      prop="drugname">
    </el-table-column>
    <el-table-column
      label="有效天数"
      prop="days">
    </el-table-column>
  </el-table>

  </div>

</template>


<script>
import axios from 'axios'
export default {
  name:'Drugdetail',
    data(){
        return{
            img:[
                {
                  //  url:"src/assets/amxl1.jpg"
                  url:require('../assets/amxl1.jpg')
                },
                {
                //    src: require('../assets/amxl2.jpg')
                //  url:"../assets/amxl2.jpg"
                  url:require('../assets/amxl2.jpg')
                },
                {
                    // url:"../assets/amxl3.jpg"
                     url:require('../assets/amxl3.jpg')
                },
            ],
            bannerHeight :1000,

            // 浏览器宽度

            screenWidth :0,

             tableData: [{
          drugnumber: '123',
          drugname: '阿莫西林',
          days: '752',
          reactions: '1.恶心、呕吐、腹泻及假膜性肠炎等胃肠道反应。2.皮疹、药物热和哮喘等过敏反应。　3.贫血、血小板减少、嗜酸性粒细胞增多等。4.血清氨基转移酶可轻度增高。5.由念珠菌或耐药菌引起的二重感染。6.偶见兴奋、焦虑、失眠、头晕以及行为异常等中枢神经系统症状。',
          taboo: '青霉素过敏及青霉素皮肤试验阳性患者禁用。',
          component: '(2S，5R，6R)-3，3-二甲基-6-[（R）-(—)-2-氨基-2-(4-羟基苯基)乙酰氨基]-7-氧代-4-硫杂-1-氮杂双环[3.2.0]庚烷-2-甲酸三水合物。',
          indications: '阿莫西林胶囊主要适用于敏感菌所致的各种感：1、溶血性链球菌、肺炎链球菌、葡萄球菌所致的中耳炎、咽炎、扁桃体炎等上呼吸道感染；2、大肠埃希菌、奇异变形杆菌所致的泌尿生殖系统感染；3、溶血型链球菌、葡萄球菌所致的皮肤软组织感染；4、溶血性链球菌、肺炎链球菌、葡萄球菌所致的急性支气管炎、肺炎等下呼吸道感染；5、可用于急性单纯性淋病。'
         },
      
        ]
    
        }

    },
    created() {
    // 初始化获取列表数据
    this.fetchData();
  },

    methods:{

         fetchData() {
       axios
        .get("/drug")
        .then( (response)=>{
         

         this.tableData = response.data.data
         console.log(this.tableData);
         
        })
        .catch(function (error) {
          console.log(error);
        });
         },

          setSize:function () {

            // 通过浏览器宽度(图片宽度)计算高度

            this.bannerHeight = 500 / 1920 * this.screenWidth;

          },

        },

         mounted() {

          // 首次加载时,需要调用一次

          this.screenWidth =  window.innerWidth;

          this.setSize();

          // 窗口大小发生改变时,调用一次

          window.onresize = () =>{

          this.screenWidth =  window.innerWidth;

          this.setSize();

        }

      }
    
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }




    .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
