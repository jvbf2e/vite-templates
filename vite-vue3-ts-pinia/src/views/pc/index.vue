<template>
  <div class="wrapper">
    <span> PC view </span>
    <button type="button" @click="handleClick">loading</button>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/modules/global'
import { setTimeout } from '@/utils/raf'

const globalStore = useGlobalStore()

const handleClick = () => {
  globalStore.setLoading(true)
  setTimeout(() => globalStore.setLoading(false))
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}
</style>
