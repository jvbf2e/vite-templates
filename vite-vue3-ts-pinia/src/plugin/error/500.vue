<template>
  <div class="not-container">
    <img :src="ImageError500" class="not-img" alt="500" />
    <div class="not-detail">
      <h2>500</h2>
      <h4>抱歉，您的网络不见了~🤦‍♂️🤦‍♀️</h4>
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
