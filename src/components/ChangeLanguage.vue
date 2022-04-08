<template>
  <el-config-provider :locale="curLocale" :z-index="3000" :size="'small'">
    <slot />
  </el-config-provider>
</template>

<script setup lang="ts">
import en from 'element-plus/lib/locale/lang/en';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const curLocale = ref(zhCn);
const { locale } = useI18n();
watch(locale, (val) => {
  if (val === 'zh') {
    curLocale.value = zhCn;
  } else if (val === 'en') {
    curLocale.value = en;
  }
});
</script>
