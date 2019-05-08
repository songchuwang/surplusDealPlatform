<template>
  <div class="m-user">
    <template v-if="user">
      <nuxt-link to="/personal">
      欢迎您，<span class="username">{{ user }}</span>
      </nuxt-link>
      <nuxt-link to="/exit">[退出]</nuxt-link>
    </template>
    <template v-else>
      <nuxt-link
        to="/login"
        class="login"
      >立即登录</nuxt-link>
      <nuxt-link
        to="/register"
        class="register">
        注册</nuxt-link>
    </template>
  </div>
</template>

<script>
    export default {
        data(){
          return {
            user: ''
          }
        },
        async mounted(){
          const {status, data:{ user, _id }} = await this.$axios.get('/users/getUser');
          if(status === 200) {
            this.user = decodeURIComponent(user);
            
          }

        }
    }
</script>

<style scoped>
  .m-user{
    text-align: right;
  }
</style>
