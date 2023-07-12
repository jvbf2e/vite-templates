<template>
  <div class="loading-wrapper">
    <div class="loading-seven">
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
    <div class="loading-test">{{ getLoadingMessage }}</div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/modules/global'

const { getLoadingMessage } = useGlobalStore()
</script>

<style lang="scss" scoped>
.loading-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--color-bg-1);
  z-index: 9999;
  user-select: none;
}

.loading-seven,
.loading-test {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 40px;
  transform: translate(-50%, -50%);

  span {
    display: inline-block;
    width: 8px;
    height: 100%;
    border-radius: 4px;
    background: rgb(var(--primary-4));
    animation: loadsaven 1.04s ease infinite;
    -webkit-animation: loadsaven 1.04s ease infinite;

    &:nth-child(2) {
      animation-delay: 0.13s;
      -webkit-animation-delay: 0.13s;
    }

    &:nth-child(3) {
      animation-delay: 0.26s;
      -webkit-animation-delay: 0.26s;
    }

    &:nth-child(4) {
      animation-delay: 0.39s;
      -webkit-animation-delay: 0.39s;
    }

    &:nth-child(5) {
      animation-delay: 0.52s;
      -webkit-animation-delay: 0.52s;
    }
  }
}

.loading-test {
  color: var(--color-primary-4);
  animation: loadtest 1.04s ease infinite;
  -webkit-animation: loadtest 1.04s ease infinite;
  transform: translate(-50%, 100%);
}

@keyframes loadsaven {
  0%,
  100% {
    height: 40px;
    background: rgb(var(--primary-4));
  }
  50% {
    height: 60px;
    margin-top: -20px;
    background: rgb(var(--orangered-2));
  }
}

@-webkit-keyframes loadsaven {
  0%,
  100% {
    height: 40px;
    background: rgb(var(--primary-4));
  }
  50% {
    height: 60px;
    margin-top: -20px;
    background: rgb(var(--orangered-2));
  }
}

@keyframes loadtest {
  0%,
  100% {
    color: var(--color-primary-4);
  }
  50% {
    color: var(--color-primary-2);
  }
}

@-webkit-keyframes loadtest {
  0%,
  100% {
    color: var(--color-primary-4);
  }
  50% {
    color: var(--color-primary-2);
  }
}
</style>
