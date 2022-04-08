<script setup lang="ts">
import { reactive, ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
const obj = reactive({ name: 'tan' });
function addCount() {
  count.value += 1;
  obj.name = count.value.toString();
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2 class="red-color">{{ obj.name }}</h2>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="addCount">count is: {{ count }}</button>
  <p>
    Edit so many girls:
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped lang="less">
a {
  color: #42b983;
}

.red-color {
  color: red;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
