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

      <svg
        id="blobSvg"
        viewBox="0 0 800 500"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="100%"
      >
        <g transform="translate(386, -159)">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color: rgb(255, 95, 109)"></stop>
              <stop offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            class="blob"
            d="M288.5,305.5Q186,361,174,229.5Q162,98,276.5,174Q391,250,288.5,305.5Z"
            fill="url(#gradient)"
          ></path>
        </g>
        <g transform="translate(106, -98)">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color: rgb(255, 95, 109)"></stop>
              <stop offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            class="blob"
            d="M288.5,305.5Q186,361,174,229.5Q162,98,276.5,174Q391,250,288.5,305.5Z"
            fill="url(#gradient)"
          ></path>
        </g>
      </svg>
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
