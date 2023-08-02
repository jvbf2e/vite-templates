<template>
  <div class="not-container">
    <img :src="ImageError403" class="not-img" alt="403" />
    <div class="not-detail">
      <h2>403</h2>
      <h4>抱歉，您无权访问该页面~🙅‍♂️🙅‍♀️</h4>
      <button type="primary" @click="WebData.handlePush">返回首页</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GlobalStore } from '@/store'

const globalStore = GlobalStore()
const router = useRouter()

const WebData = reactive({
  handlePush: () => {
    router.push({ name: globalStore.path })
  },
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
