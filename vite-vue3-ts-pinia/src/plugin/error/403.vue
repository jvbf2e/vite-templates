<template>
  <div class="not-container">
    <img
      :src="useAssetsFile('/iamge/error/403.svg')"
      class="not-img"
      alt="403"
    />
    <div class="not-detail">
      <h2>403</h2>
      <h4>抱歉，您无权访问该页面~🙅‍♂️🙅‍♀️</h4>
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
