<template>
    <div id="app" style="display: flex;justify-content: center;" >
          <!--设立一个div-->
          <div>
              <h2>注册表单</h2>
              <br>
              <!--input的应用-->
              <div style="margin: 20px;"></div>

              <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">

              <el-form-item label="用户名称">用户名称</el-form-item>
              <input v-model="username" placeholder="用户名称"><br><br>
              <el-form-item label>密码</el-form-item>
              <input v-model="password" type="password" placeholder="输入密码"><br><br>
              <el-form-item label>重复输入密码</el-form-item>
              <input type="password" v-model="rePassword" placeholder="重复输入密码"><br><br>
              <el-form-item label>性别</el-form-item>
              <input type="radio" id="male" value="male" v-model="sex">
              <el-form-item label for="male">male</el-form-item>
              <input type="radio" id="female" value="female" v-model="sex">
              <el-form-item label for="female">female</el-form-item><br><br>
              <el-form-item label>爱好</el-form-item>
              <input type="checkbox" id="basketball" value="蓝球" v-model="hobby">
              <el-form-item label for="basketball">篮球</el-form-item>
              <input type="checkbox" id="football" value="足球" v-model="hobby">
              <el-form-item label for="football">足球</el-form-item>
              <input type="checkbox" id="other" value="其他" v-model="hobby">
              <el-form-item label for="other">其他</el-form-item><br><br>
              <el-form-item label>职业</el-form-item>
              <select v-model="work">
                  <option disabled value="">请选择</option>
                  <option>学生</option>
                  <option>工作</option>
                  <option>其他</option>
              </select><br><br>
              <el-form-item label>备注</el-form-item>
              </el-form>
              <textarea v-model="note" placeholder="备注"></textarea><br><br>
              <input @keyup.enter="submit">
              <button v-on:click="submit" >提交</button>
          </div>
      </div>
</template>

<script>
export default {
    data(){
        return{
            username: '',
              password: '',
              rePassword: '',
              sex: '',
              hobby: [],
              work: '',
              note: ''
        }
    },
     methods: {
              submit() {
                  if (this.password === this.rePassword) {
                      let con = confirm("用户名：" + this.username + ' 性别：' +
                          this.sex + ' 爱好：' + this.hobby.join('-') + ' 职业：' +
                          this.work + ' 备注：' + this.note);
                      if (con) alert("提交成功");
                      else alert("取消提交");
                  }else {
                      alert("两次密码输入不一致！")
                  }
              }
            }
        
}
</script>