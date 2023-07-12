<template>
  <ConfigProvider>
    <router-view />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import ConfigProvider from '@/components/config-provider'
import { useGlobalStore } from '@/store/modules/global'

const globalStore = useGlobalStore()

const WebData = reactive({
  /**
   * @description 初始化数据
   */
  initFun: async () => {
    try {
      globalStore.setLoading(true)
    } catch (e: any) {
      console.warn(e)
    } finally {
      globalStore.setLoading(false)
    }
  },
})

onMounted(async () => {
  await WebData.initFun()
})
</script>

<style scoped></style>
