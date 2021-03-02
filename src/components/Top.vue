<template>
    <div class="line">
<el-menu :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b" >
  <el-menu-item index="1" @click="register">用户注册</el-menu-item>
  <el-submenu index="2">
    <template slot="title">选择登陆</template>
    <el-menu-item index="2-1">管理员登陆</el-menu-item>
    <el-menu-item index="2-2">采购人员登陆</el-menu-item>
    <el-menu-item index="2-3">销售人员登录</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title" >test</template>
      <el-menu-item index="2-4-1" @click="test">test</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>
</div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      register(){
			this.$router.push({ path:'/Register'})

    },
     test(){
        this.$router.push({ path:'/test'})

    }

    },
   
  }
</script>

<style scoped>
.line{
    margin:0;
    padding: 0;
}
</style>