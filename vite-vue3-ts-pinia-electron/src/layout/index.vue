<template>
  <div class="wraper-container-no-drag">
    <div class="layout-container">
      <div class="layout-right">
        <AppMain />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppMain from './AppMain.vue'
</script>

<style lang="scss" scoped>
.layout {
  &-container {
    display: flex;
  }

  &-right {
  }

  &-content {
    background-color: #fff;
  }
}
</style>
