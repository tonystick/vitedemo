<template>
  <el-menu
    :default-active="defaultIndex"
    @select="handleSelect"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1">process center1</el-menu-item>
    <el-sub-menu index="2">
      <template #title>process center2</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">process center3</el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";

const defaultIndex = ref("2")
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
