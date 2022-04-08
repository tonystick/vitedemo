<script setup lang="ts">
import ChangeLanguage from './components/ChangeLanguage.vue';
import BaseHeader from './components/layouts/BaseHeader.vue';
import BaseSide from './components/layouts/BaseSide.vue';

</script>

<template>
  <ChangeLanguage>
    <BaseHeader />
    <div style="display: flex;">
      <BaseSide />
      <div>
        <router-view />
      </div>
    </div>
  </ChangeLanguage>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: var(--el-text-color-primary);
}
</style>
