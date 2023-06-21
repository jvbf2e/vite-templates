<template>
  <div class="app-main-container">
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.app-main-container {
  width: 100%;
  height: calc(100vh - #{$topHeaderHeight} - #{$navigationHeight});
  background: var(--color-bg-1);
}
</style>
