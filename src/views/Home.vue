<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <LoginForm></LoginForm>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '../components/LoginForm.vue'

export default {
  name: 'Home',
  components: {LoginForm,},
  data(){
   return{

   }
  },
  methods:{
    a(){
      this.$router.push({ path:'/Menu'})
    }
  }
}
</script>

<style scoped>
  .home{

  }
</style>