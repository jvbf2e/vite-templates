<template>
  <div class="not-container">
    <img
      :src="useAssetsFile('/iamge/error/500.svg')"
      class="not-img"
      alt="500"
    />
    <div class="not-detail">
      <h2>500</h2>
      <h4>抱歉，您的网络不见了~🤦‍♂️🤦‍♀️</h4>
      <button @click="WebData.handlePush">返回首页</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAssetsFile } from '@/hooks'
import { useGlobalStore } from '@/store'

const globalStore = useGlobalStore()
const router = useRouter()

const WebData = reactive({
  handlePush: () => {
    router.push({ name: globalStore.path })
  },
})
</script>

<style scoped lang="scss">
@import url('./index');
</style>
