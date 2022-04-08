<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <AddPerson name="add person" />
  <el-button type="primary" @click="gotoAboutView">about</el-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import AddPerson from '../components/AddPerson.vue';
import HelloWorld from '../components/HelloWorld.vue';

const router = useRouter();
function gotoAboutView() {
  router.push('/about');
}
</script>
