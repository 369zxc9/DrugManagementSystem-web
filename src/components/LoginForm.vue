<template>


<div class="note" :style ="note" >
	<!-- <Logo></Logo> -->
	<Top></Top>
	<!-- <br/><br/>
	<h2>药品管理系统</h2>
	<br/><br/> -->
<br/>
<br/>	<div class="lit">
		
	<img alt="Vue logo" src="../assets/logo.png" class="img">
	<el-form>
		<br/><br/>
		用户名:
		<el-input placeholder="请输入账号" v-model="LoginForm.username" style="width:300px" ></el-input>
		<br /><br/><br/>
		密  码:
		<el-input placeholder="请输入密码" v-model="input" show-password style="width:300px"></el-input>
		<!-- <el-input type="password" v-model="LoginForm.password"></el-input> -->
		<br /><br/><br/>
		<el-button type="primary" plain @click="doLogin">管理员登录</el-button>
		<el-button type="primary" plain @click="buymanLogin">采购员登录</el-button>
		<el-button type="primary" plain @click="salesmanLogin">销售人员登录</el-button>
		<el-button type="primary" plain @click="test">药房登陆</el-button>
		<br/><br/><br/><br/><br/>
		
	</el-form>
	</div>
</div>

</template>

<script>
// import Logo from '@/components/Logo.vue'
import Top from  '@/components/Top.vue'
	import axios from 'axios'
export default {
	components:{Top},
	name: 'LoginForm',
	data() {
		//使用data(){return{}}    将变量圈进组件中，不会被其他组件或者页面使用或者冲突
		return {
			LoginForm: {
				username: '',
				password: ''
			},
// 			note: {
//                 backgroundImage: "url(" + require("../assets/back.png") + ")",
//                 backgroundRepeat: "no-repeat",
// 				backgroundPosition: "center",	
// }
		};
	},
	mounted() {
  document.querySelector('body').setAttribute('style', 'background-color:#4dacb3')
},
beforeDestroy() {
  document.querySelector('body').removeAttribute('style')
},
	methods: {
		doLogin() {
		
		

		
			axios.get('/user/login', {
			//	Header: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
				params:{
					username:this.LoginForm.username,
					password:this.LoginForm.password,
					"contentType": "application/json;charset=utf-8"
				},
				
				
				// username:this.LoginForm.username,
				// password:this.LoginForm.password
			})
			.then(function (response){
				console.log(response);
			})
			.catch(function (error){
				console.log(error)
			});


            this.$router.push({ path:'/Menu'})
         
		
		},
		buymanLogin(){
			this.$router.push({ path:'/Buymanmenu'})

		},
		salesmanLogin(){
			this.$router.push({ path:'/Salesmanmenu'})

		},
		test(){
			this.$router.push({ path:'/Pharmacy'})
		}

	}
};
</script>

<!-- scope代表样式仅限于在当前组件中使用 -->

<style scoped>
/* .note{
    background-size: 100% 100%;
    height: 100%;
    position: fixed;
    width: 100%
} */

.lit{
	height: 600px;
	width: 500px;
	margin: auto;
	background-color: #fff;
	border-style: solid;
	border-color: antiquewhite;
	border-radius: 10px;
 

}

.img{
	height: 300px;
	width: 300px;
}

</style>
