<template>
  <div class="not-container">
    <img :src="ImageError404" class="not-img" alt="404" />
    <div class="not-detail">
      <h2>404</h2>
      <h4>抱歉，您访问的页面不存在~🤷‍♂️🤷‍♀️</h4>
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
