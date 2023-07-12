<template>
  <div class="wrapper">
    <span> PC view </span>
    <button type="button" @click="handleClick">loading</button>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/modules/global'

const globalStore = useGlobalStore()

const handleClick = () => {
  globalStore.setLoading(true)
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}
</style>
