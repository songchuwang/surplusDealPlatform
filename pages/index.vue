<template>
  <div>
    <Content></Content>
  </div>
</template>

<script>
  import Content from './content'
  export default {
    layout: 'default',
    components: {
      Content
    }

  }

</script>

<style lang="scss" scoped>
  body {
    background: #f7f7f7;
  }

</style>
