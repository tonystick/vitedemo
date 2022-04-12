<template>
  <div>
    <p>about page</p>
    <p>{{ url }}</p>
    <p>{{ isProd ? 'prod' : 'dev' }}</p>
    <div>
      <el-select v-model="value" class="m-2" placeholder="Select">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-icon :size="20">
        <edit />
      </el-icon>
      <svg-icon name="edit2" :size="30" />
      <FormFormat />

      <el-button type="primary" @click="doLogin">request</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue';
import FormFormat from '@/components/FormFormat.vue';
import { login } from '@/api/login';
import { b64Decode, b64Encode } from '@/utils/base64';

const baseUrl = import.meta.env.VITE_BASE_URL;
const value = ref('');
const url = ref(baseUrl);
const isProd = ref(import.meta.env.PROD);
console.log(process.env.NODE_ENV);
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
];

function doLogin() {
  login('ta', '123').then((data) => {
    console.log(data);
    const myString = '☸☹☺☻☼☾☿jdk你好的历史决定论 圣诞节';
    const enStr = b64Encode(myString);
    console.log(enStr);
    console.log(b64Decode(enStr));
  });
}
</script>
