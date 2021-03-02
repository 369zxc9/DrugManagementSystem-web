<template>
<div>
   
    
<div class="top">
    <el-page-header @back="goBack" content="员工注册">
</el-page-header>
</div>

<h2>员工注册</h2>
    <h3>欢迎加入</h3>
    <br/><br/>

<div style="margin: 20px;"></div>


<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" >
  <el-form-item label="用户名称" style="padding-left:600px">
    <el-input v-model="formLabelAlign.name"  placeholder="请输入用户名称" style="width:400px;padding-right:500px"></el-input>
  </el-form-item>
  <el-form-item label="用户密码" style="padding-left:600px">
    <el-input v-model="formLabelAlign.pass"  placeholder="请输入密码" style="width:400px;padding-right:500px"></el-input>
  </el-form-item>
   <el-form-item label="再输密码" style="padding-left:600px">
    <el-input v-model="formLabelAlign.repass"  placeholder="请再次输入密码" style="width:400px;padding-right:500px"></el-input>
  </el-form-item>
  <!-- <el-form-item label="用户性别"> -->
    <!-- <el-input v-model="formLabelAlign.sex"> -->
         <!-- <el-radio v-model="radio" label="1">男</el-radio>
          <el-radio v-model="radio" label="2">女</el-radio> -->
    <!-- </el-input>
  </el-form-item> -->

  <el-form-item label="性别" prop="sex" style="padding-left:600px">
    <el-radio-group v-model="formLabelAlign.sex" style="width:400px;padding-right:500px" >
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="员工职位" style="padding-left:600px" >
    <el-input v-model="formLabelAlign.position" placeholder="请选择职位"  style="width:400px;padding-right:500px"></el-input>
  </el-form-item>
  <el-form-item label="邮箱" style="padding-left:600px">
    <el-input v-model="formLabelAlign.email"  placeholder="请输入邮箱" style="width:400px;padding-right:500px" ></el-input>
  </el-form-item>
</el-form>
 <!-- <input @keyup.enter="submit"> -->
 <br/><br/>
              <el-button type="primary" plain v-on:click="submit" >提交</el-button>

</div>

</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
       
        formLabelAlign: {
          name: '',
          pass:'',
          repass:'',
          position: '',
           sex:'',
           email:'',
        }
      };
    },
   
    methods:{
        goBack() {
        this.$router.go(-1);
      },
        submit() {
            if(this.pass==this.repass){
			axios.get('/user/register', {
			//	Header: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
				params:{
					name:this.formLabelAlign.name,
                    pass:this.formLabelAlign.pass,
                    repass:this.formLabelAlign.repass,
                    positon:this.formLabelAlign.position,
                    sex:this.formLabelAlign.sex,
                    email:this.formLabelAlign.email,

					"contentType": "application/json;charset=utf-8"
				},				
				
				
			})
			.then(function (response){
				console.log(response);
			})
			.catch(function (error){
				console.log(error)
			});


            this.$router.push({ path:'/LoginForm'})

            }else {
                      alert("两次密码输入不一致！")
                  }
			

		
		},

    }
  }
</script>


<style scoped>
.top{
    margin-top:0;
    padding: 0;
    height: 50px;
    background-color: skyblue;
};


*{margin:0; padding:0;}

</style>