<template>
  <div>HelloWorld</div>
  <div>{{ name }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref<string>('this is form format');
</script>
