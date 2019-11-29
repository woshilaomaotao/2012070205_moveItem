<template>
  <div id="app">
    <router-view/>
    <FootGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FootGuide from '@/components/FootGuide/FootGuide'

  export default {
    name: 'App',
    components: {
      FootGuide
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
