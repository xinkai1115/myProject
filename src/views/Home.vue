<template>
  <div class="home">
    <h1>这是首页</h1>
    <GoodsMain></GoodsMain>
  </div>
</template>

<script>

import GoodsMain from '../components/goodsMain'

export default {
  name: 'home',
  components: {
      GoodsMain
  }
}
</script>
