<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { getCurrentInstance, ref } from 'vue';
import { useI18n } from 'vue-i18n';

defineProps<{ name: string }>();
const { appContext } = getCurrentInstance()!;
const { t, locale } = useI18n();
const count = ref(0);
const curDate = ref('');
const unser = ref('unused vars');

function addPerson(): void {
  count.value += 1;
  ElMessage({ message: curDate.value }, appContext);
}

function changeLanguage() {
  locale.value = 'en';
}
</script>

<template>
  <div>
    <p class="label">person: {{ count }}, {{ unser }}</p>
    <p>{{ t('hello') }}</p>
    <el-button type="primary" @click="addPerson()">add</el-button>
    <el-date-picker v-model="curDate" type="date" placeholder="Pick a day" />
    <br />
    <el-button type="primary" @click="changeLanguage()"> change languge </el-button>
  </div>
</template>

<style lang="scss" scoped>
.label {
  color: red;
}
</style>
